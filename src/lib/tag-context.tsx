"use client";

import * as React from "react";

export const TagContext = React.createContext({
  selectedTag: "",
  setSelectedTag: (tag: string) => {},
});

export function TagProvider({ children }: { children: React.ReactNode }) {
  const [selectedTag, setSelectedTag] = React.useState("");
  return (
    <TagContext.Provider value={{ selectedTag, setSelectedTag }}>
      {children}
    </TagContext.Provider>
  );
}
