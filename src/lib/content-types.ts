import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeWorkFields {
    displayIndex: EntryFieldTypes.Integer;
    name: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Data Visualization" | "Front-End Development" | "Full-Stack Development" | "Graphic Design" | "Information Design" | "Mixed Methods Research" | "Product Critique" | "Product Design" | "Qualitative Research" | "Quantitative Research" | "UI Design" | "UX Design">>;
    thumbnail?: EntryFieldTypes.AssetLink;
    alt?: EntryFieldTypes.Symbol;
    purpose?: EntryFieldTypes.Symbol;
    timeline?: EntryFieldTypes.Symbol;
    year?: EntryFieldTypes.Integer;
    overview?: EntryFieldTypes.Text;
    heroBlock1?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    process?: EntryFieldTypes.RichText;
    heroBlock2?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    outcome?: EntryFieldTypes.RichText;
    figmaLink?: EntryFieldTypes.Symbol;
    githubLink?: EntryFieldTypes.Symbol;
}

export type TypeWorkSkeleton = EntrySkeletonType<TypeWorkFields, "work">;
export type TypeWork<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeWorkSkeleton, Modifiers, Locales>;