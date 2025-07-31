import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

// Extract plain text from Contentful rich text document for reading time calculation
export function extractTextFromRichText(document: RichTextDocument | null): string {
  if (!document || !document.content) {
    return "";
  }

  let text = "";

  const extractNodeText = (node: any): string => {
    if (node.nodeType === "text") {
      return node.value || "";
    }

    if (node.content && Array.isArray(node.content)) {
      return node.content.map(extractNodeText).join(" ");
    }

    return "";
  };

  document.content.forEach((node) => {
    text += extractNodeText(node) + " ";
  });

  return text.trim();
}
