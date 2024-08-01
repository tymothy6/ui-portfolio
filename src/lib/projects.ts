import { TypeWorkSkeleton } from "./content-types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { contentfulClient } from "./contentful";
import { ContentImage, parseContentfulContentImage } from "./content-image";

type ProjectWork = Entry<TypeWorkSkeleton, undefined, string>;

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
  heroBlock1: (ContentImage | null)[];
  process: RichTextDocument | null;
  heroBlock2: (ContentImage | null)[];
  outcome: RichTextDocument | null;
  figmaLink: string;
  githubLink: string;
  tools: string[];
}

// Transform a Contentful entry into a Project object
export function parseContentfulProject(
  projectWork?: ProjectWork,
): Project | null {
  if (!projectWork) {
    return null;
  }

  return {
    name: projectWork.fields.name,
    slug: projectWork.fields.slug || "",
    type: projectWork.fields.type || [],
    thumbnail: parseContentfulContentImage(projectWork.fields.thumbnail),
    alt: projectWork.fields.alt || "",
    purpose: projectWork.fields.purpose || "",
    timeline: projectWork.fields.timeline || "",
    year: projectWork.fields.year || 0,
    summary: projectWork.fields.summary || "",
    overview: projectWork.fields.overview || "",
    heroBlock1:
      projectWork.fields.heroBlock1?.map(parseContentfulContentImage) || [],
    process: projectWork.fields.process || null,
    heroBlock2:
      projectWork.fields.heroBlock2?.map(parseContentfulContentImage) || [],
    outcome: projectWork.fields.outcome || null,
    figmaLink: projectWork.fields.figmaLink || "",
    githubLink: projectWork.fields.githubLink || "",
    tools: projectWork.fields.tools || [],
  };
}

// Fetch all projects
export async function fetchAllProjects(): Promise<Project[]> {
  const projects = await contentfulClient.getEntries<TypeWorkSkeleton>({
    content_type: "work",
    order: ["fields.displayIndex"], // sort by displayIndex
  });

  return projects.items.map(
    (project) => parseContentfulProject(project) as Project,
  );
}

// Fetch a single project by its slug
interface FetchProjectOptions {
  slug: string;
}

export async function fetchProject({
  slug,
}: FetchProjectOptions): Promise<Project | null> {
  const project = await contentfulClient.getEntries<TypeWorkSkeleton>({
    content_type: "work",
    "fields.slug": slug,
  });

  return parseContentfulProject(project.items[0]);
}
