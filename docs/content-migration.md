# Content migration: MDX vs Sanity

Status: undecided, leaning MDX
Last updated: 2026-10-22

## Why move off Contentful

Cost isn't the reason. The content model is too rigid. Every project has to fit the same fixed shape (overview, gallery, process, gallery, outcome), and anything richer than a paragraph has to be created as a separate entry and then linked into the text. The goal is to be able to write each piece of content the way it needs to be written, and to change its structure over time without fighting the CMS.

So the question is less "which tool is better" and more "which one gives the most room to shape content, at an acceptable cost".

## What we're migrating

From the live Contentful space as of this writing:

| | Count |
|---|---|
| Work projects | 7, each with two rich-text fields (`process`, `outcome`) and two image galleries |
| Blog posts | 7, each with one rich-text field (`body`) and a hero gallery |
| Embedded entries | 15 code blocks (3 unused), 3 Figma embeds, 3 link-preview cards, 2 alerts |
| Images | 55 (41 PNG, 7 WebP, 6 JPEG, 1 SVG), 50 MB in total; 36 have no alt text |

The rich text only uses standard features: headings, paragraphs, lists, quotes, links, and bold, italic and code. Image captions are `h6` headings placed directly after the image.

How the code uses Contentful:

- All reads go through `src/lib/blog-posts.ts` and `src/lib/projects.ts`, which return `Post` and `Project` objects. Pages and cards only depend on those shapes.
- Rich text is rendered by `src/lib/rich-text.tsx` (a client component) and turned into plain text for reading time by `extractTextFromRichText` in `src/lib/utils.ts`.
- Pages are generated at build time. Nothing in the code refreshes them when content is published.
- Five places hard-code `images.ctfassets.net` URLs (the avatar in `search.tsx` and `page-header.tsx`, `Grid.svg` in `landing.module.css`, the email icon in `email/template.tsx`). These need to move into `public/` whichever option we pick.

## How each option handles flexibility

### MDX

Content is code, so the only limit is what React can render.

- **The page layout becomes part of the content.** Today the work page template decides where galleries and sections go. With MDX, a project can have a gallery anywhere, a section called something other than "Design Process", or no outcome section at all, just by writing it that way.
- **Any component can go in a post.** Interactive prototypes, before/after sliders, custom diagrams or one-off layouts can be written into a single post without changing a schema or adding a content type.
- **Embeds are written inline.** Code blocks become ordinary fenced code. Figma embeds, alerts and link cards become components like `<FigmaEmbed url="…" />`, written in the text where they appear.
- **Structure can still be enforced where it helps.** Frontmatter (title, date, tags, thumbnail) can be checked against a schema at build time, so lists and cards stay reliable while the body stays free-form.

The trade-off is that nothing stops a post drifting from the house style. Consistency comes from discipline and shared components, not from the editor.

### Sanity

Structure is defined in code, but authors still work within it.

- **Schemas are code in the repo.** Adding a field or a new block type is a code change reviewed like any other, rather than clicking through a web UI. Adding fields doesn't require migrating existing content.
- **Flexible layouts come from a "page builder".** A body can be a list of section blocks (text, gallery, Figma embed, callout, etc.) that are added and reordered freely in the editor. This removes the fixed layout of today's work pages.
- **But each new kind of block is still a schema change plus a renderer.** If a post needs something that doesn't exist yet, you build it before you can write it. That's the "compromise": far more flexible than Contentful, and less flexible than MDX.

## Comparison

| | MDX | Sanity |
|---|---|---|
| Room to shape content | Anything React can render | Anything defined in the schema |
| Changing the structure | Edit the post | Change schema and renderer, then edit |
| Where you write | Code editor | Sanity Studio in a browser, including on a phone |
| Publishing | Commit, PR, Vercel preview, merge, deploy | Publish in Studio; pages refresh if a webhook is set up |
| Preview | Vercel preview per PR | Live preview in Studio (needs setup) |
| History and review | Git history and PR diffs | Studio's revision history per document |
| Outside services | None | Sanity API, access token, pricing tiers |
| Images | See below | Built-in CDN with cropping, focal points and resizing |
| Code to maintain | Frontmatter schema, MDX components | Schemas, Studio, webhook route, preview setup, Portable Text renderer |
| Leaving later | Text files, easy to move | Dataset export works, but GROQ queries and Portable Text tie you in |

## Images with MDX

This is the main reservation about MDX. Images don't have to be hosted elsewhere. At this site's size, keeping them in the repo is realistic.

### Option A: keep images in the repo, next to the content

Store each post's images in its own folder, for example `content/blog/my-post/hero.png` alongside `content/blog/my-post/index.mdx`.

- **Benefits:**
  - No outside service.
  - Images are versioned and reviewed with the text.
  - When images are imported in code, `next/image` gets their width, height and a blur placeholder automatically, with no manual values.
- **Costs:**
  - The repo grows by about 50 MB now.
  - Git keeps every version of every image, so replacing images often makes the repo grow permanently.
- **Ways to make it lighter:**
  - Converting PNG screenshots to WebP or AVIF before committing would likely shrink them considerably.
  - Git LFS can keep large files out of normal history. Check that Vercel builds handle LFS before relying on it.

This fits a portfolio that adds a handful of images per post and rarely replaces them.

### Option B: a dedicated image host

Upload images to Vercel Blob, Cloudinary, or an S3/R2 bucket, and reference them by URL in MDX.

- **Benefits:**
  - The repo stays small.
  - Some hosts transform images on request (resizing, formats).
- **Costs:**
  - It's an outside service again, though only for files, not content.
  - Width and height have to be stored with each image or read at build time.
  - Images aren't reviewed alongside text changes.

### Option C: leave existing images on Contentful

Only as a temporary step. It keeps the Contentful space alive, which defeats the purpose of the migration.

### Recommendation for images

Start with Option A and convert images to modern formats during the migration. Move to Option B later only if repo size or build time becomes a real problem. The migration script can be written so the image location is a single setting, which keeps that switch cheap.

## Migration effort

Both options need the same core step: a script that reads Contentful and converts its rich text into the new format, turning each image and its `h6` caption into one image block with alt text and a caption.

- **MDX additionally needs:**
  - MDX tooling and components that match today's styles
  - a frontmatter schema
  - image downloads and conversion
  - rewriting the data layer to read files
- **Sanity additionally needs:**
  - project setup and schemas
  - Studio, built into the site or hosted by Sanity
  - uploading images to Sanity
  - GROQ queries
  - a Portable Text renderer
  - a webhook to refresh pages on publish
  - a preview setup, if wanted

MDX is the smaller migration, and it removes infrastructure instead of swapping it.

## Recommendation

Go with MDX if:

- you'll be the only author
- you're comfortable writing in a code editor
- you want the most freedom to change how each post or project is laid out

That matches the reason for leaving Contentful most directly, and the image concern is manageable with Option A.

Go with Sanity if any of these matter more than full flexibility:

- writing or fixing content away from a laptop
- other people editing content
- publishing without a deploy
- a visual editor

## Open questions

- Should work pages keep their current fixed layout as a default component, or should each project's MDX control its own layout entirely?
- Should rich-text `h1` headings (35 of them) become `h2` during migration, so each page has a single `h1`?
- Will images be added or replaced often enough to make repo growth a concern?

## Next steps if we choose MDX

1. Move the hard-coded `ctfassets.net` images into `public/`.
2. Write the export script: Contentful to MDX, plus image download and conversion.
3. Add MDX tooling, components and a frontmatter schema.
4. Rewrite `blog-posts.ts` and `projects.ts` to read from `content/`, keeping the `Post` and `Project` shapes.
5. Compare the result against the live site on a Vercel preview, then remove the Contentful packages and environment variables.
