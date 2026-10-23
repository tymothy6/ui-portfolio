import fs from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import type { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type MdxFile<T> = {
  slug: string;
  data: T;
  body: string;
};

// Read every .mdx file in content/<dir>, validating frontmatter so a typo
// fails the build instead of rendering a broken page. The file name is the slug.
export const readMdxFiles = cache(async function readMdxFiles<T>(
  dir: string,
  schema: z.ZodType<T, z.ZodTypeDef, unknown>,
): Promise<MdxFile<T>[]> {
  const folder = path.join(CONTENT_DIR, dir);
  const names = (await fs.readdir(folder)).filter((name) =>
    name.endsWith(".mdx"),
  );

  return Promise.all(
    names.map(async (name) => {
      const file = path.join(folder, name);
      const { data, content } = matter(await fs.readFile(file, "utf8"));
      const parsed = schema.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in content/${dir}/${name}:\n${parsed.error.issues
            .map((issue) => `  ${issue.path.join(".")}: ${issue.message}`)
            .join("\n")}`,
        );
      }
      return {
        slug: name.replace(/\.mdx$/, ""),
        data: parsed.data,
        body: content,
      };
    }),
  );
});
