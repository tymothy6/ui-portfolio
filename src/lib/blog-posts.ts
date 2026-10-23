import { z } from "zod";
import { contentImageSchema, type ContentImage } from "./content-image";
import { readMdxFiles } from "./mdx-files";

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  year: z.number().int().optional(),
  tags: z.array(z.string()).default([]),
  summary: z.string().default(""),
  thumbnail: contentImageSchema.optional(),
  hero: z.array(contentImageSchema).default([]),
});

export interface Post {
  title: string;
  slug: string;
  year: number | null;
  date: Date | null;
  tags: string[];
  thumbnail: ContentImage | null;
  summary: string;
  heroBlock: ContentImage[];
  // MDX source, rendered with <MdxContent>
  body: string;
}

// Fetch all blog posts, newest first
export async function fetchAllPosts(): Promise<Post[]> {
  const files = await readMdxFiles("blog", postSchema);

  return files
    .map(({ slug, data, body }) => ({
      title: data.title,
      slug,
      year: data.year ?? null,
      date: data.date ?? null,
      tags: data.tags,
      thumbnail: data.thumbnail ?? null,
      summary: data.summary,
      heroBlock: data.hero,
      body,
    }))
    .sort((a, b) => {
      // Posts without dates go last
      if (!a.date) return 1;
      if (!b.date) return -1;

      return b.date.getTime() - a.date.getTime();
    });
}

// Fetch a single post by its slug to render a page
interface FetchPostOptions {
  slug: string;
}

export async function fetchPost({
  slug,
}: FetchPostOptions): Promise<Post | null> {
  const posts = await fetchAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}
