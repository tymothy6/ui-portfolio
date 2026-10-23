import { z } from "zod";
import { contentImageSchema, type ContentImage } from "./content-image";
import { readMdxFiles } from "./mdx-files";

const projectSchema = z.object({
  name: z.string(),
  // Position in project lists, lowest first
  order: z.number().int(),
  year: z.number().int().optional(),
  type: z.array(z.string()).default([]),
  purpose: z.string().default(""),
  timeline: z.string().default(""),
  tools: z.array(z.string()).default([]),
  summary: z.string().default(""),
  overview: z.string().default(""),
  thumbnail: contentImageSchema.optional(),
  alt: z.string().default(""),
  figmaLink: z.string().url().optional(),
  githubLink: z.string().url().optional(),
});

export interface Project {
  name: string;
  slug: string;
  type: string[];
  thumbnail: ContentImage | null;
  alt: string;
  purpose: string;
  timeline: string;
  year: number;
  summary: string;
  overview: string;
  // MDX source for everything below the intro, rendered with <MdxContent>
  body: string;
  figmaLink: string;
  githubLink: string;
  tools: string[];
}

// Fetch all projects in display order
export async function fetchAllProjects(): Promise<Project[]> {
  const files = await readMdxFiles("work", projectSchema);

  return files
    .sort((a, b) => a.data.order - b.data.order)
    .map(({ slug, data, body }) => ({
      name: data.name,
      slug,
      type: data.type,
      thumbnail: data.thumbnail ?? null,
      alt: data.alt,
      purpose: data.purpose,
      timeline: data.timeline,
      year: data.year ?? 0,
      summary: data.summary,
      overview: data.overview,
      body,
      figmaLink: data.figmaLink ?? "",
      githubLink: data.githubLink ?? "",
      tools: data.tools,
    }));
}

// Fetch a single project by its slug
interface FetchProjectOptions {
  slug: string;
}

export async function fetchProject({
  slug,
}: FetchProjectOptions): Promise<Project | null> {
  const projects = await fetchAllProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}
