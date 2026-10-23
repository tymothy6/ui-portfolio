import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      const result = matchMedia(query);
      result.addEventListener("change", onStoreChange);
      return () => result.removeEventListener("change", onStoreChange);
    },
    [query],
  );

  return React.useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  );
}

// Extract readable text from MDX source for reading time. Like the old rich
// text version, this counts prose and captions but not code blocks or embeds.
export function mdxToPlainText(source: string | null): string {
  if (!source) {
    return "";
  }

  return source
    .replace(/^(`{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, " ") // fenced code
    .replace(/<\/?[A-Za-z][^>]*>/g, " ") // JSX tags, keeping their text
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links keep their text
    .replace(/\\(.)/g, "$1") // escapes
    .replace(/^\s*(?:[-+]|\d+\.)\s/gm, " ") // list markers
    .replace(/[#>*_`~]+/g, " ") // other Markdown punctuation
    .replace(/\s+/g, " ")
    .trim();
}
