// One-off migration: export work projects and blog posts from Contentful as
// MDX files under content/.
//
//   bun scripts/contentful-to-mdx.ts            keep images on Contentful URLs
//   bun scripts/contentful-to-mdx.ts --upload   copy images to Vercel Blob first
//
// Needs CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN, plus
// BLOB_READ_WRITE_TOKEN with --upload. Bun loads them from .env and .env.local.

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { createClient, type Asset, type Entry } from "contentful";
import {
  BLOCKS,
  INLINES,
  type Block,
  type Document,
  type Inline,
  type Text,
} from "@contentful/rich-text-types";
import { list, put } from "@vercel/blob";

type ContentImage = { src: string; width: number; height: number; alt: string };
type Node = Block | Inline | Text;

const CONTENT_DIR = path.join(process.cwd(), "content");
const BLOB_PREFIX = "content/";
const upload = process.argv.includes("--upload");

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Anything worth checking by hand once the export finishes
const report = {
  missingAlt: new Set<string>(),
  unpairedCaptions: [] as string[],
  skippedEmptyParagraphs: 0,
  unknownEmbeds: [] as string[],
};

// ---------------------------------------------------------------------------
// Images

// Contentful URL -> final URL, so each asset is uploaded once per run
const imageUrls = new Map<string, string>();
let existingBlobs: Map<string, string> | null = null;

async function loadExistingBlobs() {
  const blobs = new Map<string, string>();
  let cursor: string | undefined;
  do {
    const page = await list({ prefix: BLOB_PREFIX, cursor });
    page.blobs.forEach((blob) => blobs.set(blob.pathname, blob.url));
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return blobs;
}

async function resolveImageUrl(asset: Asset<undefined, string>) {
  const file = asset.fields.file!;
  const source = file.url.startsWith("//") ? `https:${file.url}` : file.url;
  if (!upload) return source;

  const cached = imageUrls.get(source);
  if (cached) return cached;

  existingBlobs ??= await loadExistingBlobs();
  // The asset ID keeps paths unique and stable, so re-runs skip uploaded files
  const name = file.fileName.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const pathname = `${BLOB_PREFIX}${asset.sys.id}-${name}`;

  let url = existingBlobs.get(pathname);
  if (!url) {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Download failed: ${source}`);
    const blob = await put(
      pathname,
      Buffer.from(await response.arrayBuffer()),
      {
        access: "public",
        addRandomSuffix: false,
        contentType: file.contentType,
      },
    );
    url = blob.url;
    console.log(`  uploaded ${pathname}`);
  }
  imageUrls.set(source, url);
  return url;
}

async function toImage(
  asset: unknown,
  altFallback = "",
): Promise<ContentImage | null> {
  if (!asset || typeof asset !== "object" || !("fields" in asset)) return null;
  const image = asset as Asset<undefined, string>;
  const file = image.fields.file;
  if (!file) return null;

  const alt = image.fields.description || altFallback;
  if (!alt) report.missingAlt.add(file.fileName);

  return {
    src: await resolveImageUrl(image),
    width: file.details.image?.width ?? 0,
    height: file.details.image?.height ?? 0,
    alt,
  };
}

// ---------------------------------------------------------------------------
// Rich text -> MDX

// Backslash-escape characters Markdown or MDX would otherwise interpret
function escapeText(text: string) {
  return text.replace(/[\\`*_{}[\]<>#&|~]/g, "\\$&");
}

// Contentful soft line breaks render as spaces on the current site
function flattenText(text: string) {
  return text.replace(/\s*\n\s*/g, " ");
}

function inlineCode(text: string) {
  const longestRun = Math.max(
    0,
    ...(text.match(/`+/g) ?? []).map((r) => r.length),
  );
  const fence = "`".repeat(longestRun + 1);
  const pad = text.startsWith("`") || text.endsWith("`") ? " " : "";
  return `${fence}${pad}${text}${pad}${fence}`;
}

function markText(node: Text) {
  const value = flattenText(node.value);
  const marks = new Set(node.marks.map((mark) => mark.type));
  if (!value.trim()) return value;

  // Markdown emphasis can't start or end with whitespace, so keep it outside
  const [, lead, core, trail] = value.match(/^(\s*)([\s\S]*?)(\s*)$/)!;
  let text = marks.has("code") ? inlineCode(core) : escapeText(core);
  if (marks.has("italic")) text = `*${text}*`;
  if (marks.has("bold")) text = `**${text}**`;
  if (marks.has("underline")) text = `<u>${text}</u>`;
  return `${lead}${text}${trail}`;
}

// Merge neighbouring text nodes with the same marks so "**a****b**" can't occur
function mergeText(nodes: Node[]) {
  const merged: Node[] = [];
  for (const node of nodes) {
    const previous = merged[merged.length - 1];
    if (
      node.nodeType === "text" &&
      previous?.nodeType === "text" &&
      markKey(previous) === markKey(node)
    ) {
      merged[merged.length - 1] = {
        ...previous,
        value: previous.value + node.value,
      };
    } else {
      merged.push(node);
    }
  }
  return merged;
}

const markKey = (node: Text) =>
  node.marks
    .map((mark) => mark.type)
    .sort()
    .join(",");

function inline(nodes: Node[]): string {
  return mergeText(nodes)
    .map((node) => {
      if (node.nodeType === "text") return markText(node);
      if (node.nodeType === INLINES.HYPERLINK) {
        const uri: string = node.data.uri;
        const target = /[\s()<>]/.test(uri)
          ? `<${uri.replace(/[<>]/g, encodeURIComponent)}>`
          : uri;
        return `[${inline(node.content as Node[])}](${target})`;
      }
      report.unknownEmbeds.push(`inline ${node.nodeType}`);
      return "";
    })
    .join("");
}

// A paragraph that starts like a list item or heading must not become one
function guardBlockStart(text: string) {
  return text
    .trim()
    .replace(/^(\d+)([.)])(\s)/, "$1\\$2$3")
    .replace(/^([-+=])(\s)/, "\\$1$2");
}

// JSX props are written as JSON expressions so quotes and newlines are safe.
// Strings and numbers stay inline; objects and arrays get one field per line.
function props(values: Record<string, unknown>) {
  return Object.entries(values)
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    )
    .map(([key, value]) =>
      typeof value === "object"
        ? `${key}={${JSON.stringify(value, null, 2)}}`
        : `${key}={${JSON.stringify(value)}}`,
    )
    .join(" ");
}

// Title and highlighted lines go in the fence's meta string, e.g.
// ```ts title="example.ts" highlight="2,3"
function fencedCode(code: string, lang: string, meta: Record<string, unknown>) {
  const longestRun = Math.max(
    2,
    ...(code.match(/`+/g) ?? []).map((r) => r.length),
  );
  const fence = "`".repeat(longestRun + 1);
  const metaText = Object.entries(meta)
    .filter(([, value]) => value)
    .map(([key, value]) => ` ${key}=${JSON.stringify(value)}`)
    .join("");
  return `${fence}${lang}${metaText}\n${code.replace(/\n$/, "")}\n${fence}`;
}

async function embeddedEntry(node: Block, where: string) {
  const target = node.data.target as Entry<any, undefined, string>;
  const type = target?.sys?.contentType?.sys?.id;
  const fields = target?.fields ?? {};

  switch (type) {
    case "codeBlock":
      return fencedCode(
        String(fields.code ?? ""),
        String(fields.language ?? ""),
        {
          title: fields.title,
          highlight: fields.lineNumber,
        },
      );
    case "embed":
      return fields.figmaUrl
        ? `<FigmaEmbed ${props({ figmaUrl: fields.figmaUrl })} />`
        : "";
    case "alert":
      return `<Callout ${props({ title: fields.title, description: fields.description })} />`;
    case "openGraphEmbed":
      return `<LinkPreview ${props({
        title: fields.title,
        description: fields.description,
        url: fields.url,
        author: fields.author,
        source: fields.source,
        image: await toImage(fields.image),
      })} />`;
    default:
      report.unknownEmbeds.push(`${where}: ${type ?? "unresolved entry"}`);
      return "";
  }
}

const indent = (text: string, prefix: string) =>
  text
    .split("\n")
    .map((line, i) => (i === 0 || !line ? line : prefix + line))
    .join("\n");

async function blocks(nodes: Node[], where: string): Promise<string[]> {
  const out: string[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    switch (node.nodeType) {
      case BLOCKS.PARAGRAPH: {
        const text = guardBlockStart(inline(node.content as Node[]));
        if (text) out.push(text);
        else report.skippedEmptyParagraphs++;
        break;
      }
      case BLOCKS.HEADING_1:
      case BLOCKS.HEADING_2:
      case BLOCKS.HEADING_3:
      case BLOCKS.HEADING_4:
      case BLOCKS.HEADING_5: {
        // Shift every level down one, so the page title is the only h1
        const level = Number(node.nodeType.slice(-1)) + 1;
        out.push(
          `${"#".repeat(level)} ${inline(node.content as Node[]).trim()}`,
        );
        break;
      }
      case BLOCKS.HEADING_6: {
        // Captions directly after an image are merged into its <Figure> below,
        // so any h6 reaching here has no image above it
        const caption = inline(node.content as Node[]).trim();
        report.unpairedCaptions.push(`${where}: ${caption}`);
        out.push(`<Caption>${caption}</Caption>`);
        break;
      }
      case BLOCKS.EMBEDDED_ASSET: {
        const target = node.data.target as Asset<undefined, string>;
        const image = await toImage(target, target?.fields?.title ?? "");
        if (!image) {
          report.unknownEmbeds.push(`${where}: unresolved asset`);
          break;
        }
        const next = nodes[i + 1];
        const caption =
          next?.nodeType === BLOCKS.HEADING_6
            ? inline(next.content as Node[]).trim()
            : "";
        if (caption) i++;
        out.push(
          caption
            ? `<Figure ${props(image)}>${caption}</Figure>`
            : `<Figure ${props(image)} />`,
        );
        break;
      }
      case BLOCKS.EMBEDDED_ENTRY: {
        const text = await embeddedEntry(node, where);
        if (text) out.push(text);
        break;
      }
      case BLOCKS.QUOTE: {
        const inner = (await blocks(node.content as Node[], where)).join(
          "\n\n",
        );
        out.push(
          inner
            .split("\n")
            .map((line) => (line ? `> ${line}` : ">"))
            .join("\n"),
        );
        break;
      }
      case BLOCKS.UL_LIST:
      case BLOCKS.OL_LIST: {
        const ordered = node.nodeType === BLOCKS.OL_LIST;
        const items = await Promise.all(
          (node.content as Node[]).map(async (item, index) => {
            const marker = ordered ? `${index + 1}.` : "-";
            const body = (
              await blocks((item as Block).content as Node[], where)
            ).join("\n\n");
            return `${marker} ${indent(body, " ".repeat(marker.length + 1))}`;
          }),
        );
        // Blank lines between items keep each item's text in a <p>, as before
        out.push(items.join("\n\n"));
        break;
      }
      case BLOCKS.HR:
        out.push("---");
        break;
      default:
        report.unknownEmbeds.push(`${where}: ${node.nodeType}`);
    }
  }

  return out;
}

async function richText(document: Document | undefined, where: string) {
  if (!document) return "";
  return (await blocks(document.content as Node[], where)).join("\n\n");
}

// ---------------------------------------------------------------------------
// Entries -> files

const compact = <T extends Record<string, unknown>>(data: T) =>
  Object.fromEntries(
    Object.entries(data).filter(
      ([, value]) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        !(Array.isArray(value) && value.length === 0),
    ),
  );

async function images(assets: unknown) {
  if (!Array.isArray(assets)) return [];
  const resolved = await Promise.all(assets.map((asset) => toImage(asset)));
  return resolved.filter((image): image is ContentImage => image !== null);
}

const gallery = (items: ContentImage[]) =>
  items.length ? `<Gallery ${props({ images: items })} />` : "";

async function section(
  title: string,
  document: Document | undefined,
  where: string,
) {
  const body = await richText(document, where);
  return body ? `<Section title="${title}">\n\n${body}\n\n</Section>` : "";
}

async function writeFile(
  dir: string,
  slug: string,
  data: object,
  body: string,
) {
  const file = path.join(CONTENT_DIR, dir, `${slug}.mdx`);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, matter.stringify(`\n${body.trim()}\n`, data));
  console.log(`wrote content/${dir}/${slug}.mdx`);
}

async function exportWork() {
  const entries = await client.getEntries({
    content_type: "work",
    include: 10,
    limit: 1000,
  });

  for (const entry of entries.items) {
    const f = entry.fields as Record<string, any>;
    const where = `work/${f.slug}`;

    // The page renders the intro from frontmatter; the body keeps today's
    // fixed layout as a default that each project can now change
    const body = [
      gallery(await images(f.heroBlock1)),
      await section("Design Process", f.process, where),
      gallery(await images(f.heroBlock2)),
      await section("Design Outcome", f.outcome, where),
    ]
      .filter(Boolean)
      .join("\n\n");

    await writeFile(
      "work",
      f.slug,
      compact({
        name: f.name,
        order: f.displayIndex,
        year: f.year,
        type: f.type,
        purpose: f.purpose,
        timeline: f.timeline,
        tools: f.tools,
        summary: f.summary,
        overview: f.overview,
        thumbnail: await toImage(f.thumbnail),
        alt: f.alt,
        figmaLink: f.figmaLink,
        githubLink: f.githubLink,
      }),
      body,
    );
  }
}

async function exportBlog() {
  const entries = await client.getEntries({
    content_type: "blogPage",
    include: 10,
    limit: 1000,
  });

  for (const entry of entries.items) {
    const f = entry.fields as Record<string, any>;
    await writeFile(
      "blog",
      f.slug,
      compact({
        title: f.title,
        date: f.date,
        year: f.year,
        tags: f.tags,
        summary: f.summary,
        thumbnail: await toImage(f.thumbnail),
        hero: await images(f.heroBlock),
      }),
      await richText(f.body, `blog/${f.slug}`),
    );
  }
}

async function main() {
  await exportWork();
  await exportBlog();
  printReport();
}

function printReport() {
  console.log("\nReport");
  console.log(`  images without alt text: ${report.missingAlt.size}`);
  report.missingAlt.forEach((name) => console.log(`    ${name}`));
  console.log(
    `  captions without an image above them: ${report.unpairedCaptions.length}`,
  );
  report.unpairedCaptions.forEach((caption) => console.log(`    ${caption}`));
  console.log(`  empty paragraphs skipped: ${report.skippedEmptyParagraphs}`);
  console.log(`  unsupported content: ${report.unknownEmbeds.length}`);
  report.unknownEmbeds.forEach((item) => console.log(`    ${item}`));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
