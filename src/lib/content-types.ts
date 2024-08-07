import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeWorkFields {
  displayIndex: EntryFieldTypes.Integer;
  name: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  type?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | "Data Visualization"
      | "Front-End Development"
      | "Full-Stack Development"
      | "Graphic Design"
      | "Information Design"
      | "Mixed Methods Research"
      | "Product Critique"
      | "Product Design"
      | "Qualitative Research"
      | "Quantitative Research"
      | "UI Design"
      | "UX Design"
    >
  >;
  thumbnail?: EntryFieldTypes.AssetLink;
  alt?: EntryFieldTypes.Symbol;
  purpose?: EntryFieldTypes.Symbol;
  timeline?: EntryFieldTypes.Symbol;
  year?: EntryFieldTypes.Integer;
  summary?: EntryFieldTypes.Text;
  overview?: EntryFieldTypes.Text;
  heroBlock1?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  process?: EntryFieldTypes.RichText;
  heroBlock2?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  outcome?: EntryFieldTypes.RichText;
  figmaLink?: EntryFieldTypes.Symbol;
  githubLink?: EntryFieldTypes.Symbol;
  tools?: EntryFieldTypes.Array<
    EntryFieldTypes.Symbol<
      | "Adobe Creative Suite"
      | "Angular"
      | "FigJam"
      | "Figma"
      | "JavaScript"
      | "Miro"
      | "Next.js"
      | "ProtoPie"
      | "Python"
      | "R"
      | "React Native"
      | "React"
      | "SwiftUI"
      | "TailwindCSS"
      | "TypeScript"
    >
  >;
}

export type TypeWorkSkeleton = EntrySkeletonType<TypeWorkFields, "work">;
export type TypeWork<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeWorkSkeleton, Modifiers, Locales>;

export interface TypeBlogPageFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  year?: EntryFieldTypes.Integer;
  date?: EntryFieldTypes.Date;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  thumbnail?: EntryFieldTypes.AssetLink;
  summary?: EntryFieldTypes.Text;
  heroBlock?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  body?: EntryFieldTypes.RichText;
  recommended?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypeBlogPageSkeleton = EntrySkeletonType<
  TypeBlogPageFields,
  "blogPage"
>;
export type TypeBlogPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPageSkeleton, Modifiers, Locales>;

export interface TypeAlertFields {
  title: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  reference?: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeAlertSkeleton = EntrySkeletonType<TypeAlertFields, "alert">;
export type TypeAlert<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeAlertSkeleton, Modifiers, Locales>;

export interface TypeCodeBlockFields {
  title?: EntryFieldTypes.Symbol;
  code?: EntryFieldTypes.Text;
  language: EntryFieldTypes.Symbol;
  lineNumber?: EntryFieldTypes.Symbol;
  reference: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeCodeBlockSkeleton = EntrySkeletonType<
  TypeCodeBlockFields,
  "codeBlock"
>;
export type TypeCodeBlock<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeCodeBlockSkeleton, Modifiers, Locales>;

export interface TypeOpenGraphEmbedFields {
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Symbol;
  url?: EntryFieldTypes.Symbol;
  author?: EntryFieldTypes.Symbol;
  datePosted?: EntryFieldTypes.Date;
  image?: EntryFieldTypes.AssetLink;
  source?: EntryFieldTypes.Symbol;
}

export type TypeOpenGraphEmbedSkeleton = EntrySkeletonType<
  TypeOpenGraphEmbedFields,
  "openGraphEmbed"
>;
export type TypeOpenGraphEmbed<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeOpenGraphEmbedSkeleton, Modifiers, Locales>;
