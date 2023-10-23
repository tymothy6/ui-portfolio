"use client"

import { ScrollProvider } from "./scroll-context"

export function ScrollProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ScrollProvider>{children}</ScrollProvider>
  )
}