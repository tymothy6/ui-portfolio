"use client"

import * as React from "react"
import Link from "next/link"

import { GitHubLogoIcon, LinkedInLogoIcon, FigmaLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function GitHubContact() {

  return (
    <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.github.com/tymothy6">
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">My Github profile</span>
        </Link>
    </Button>
  )
}

export function GitHubBadge() {
  return (
  <div className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-800 dark:text-slate-300 hover:bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground">
    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    <span className="sr-only">This project has a public GitHub repo</span>
  </div>
  )
}

export function FigmaBadge() {
  return (
  <div className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-800 dark:text-slate-300 hover:bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground">
    <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    <span className="sr-only">This project has a public Figma file</span>
  </div>
  )
}

export function LinkedInContact() {
    return (
        <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.linkedin.com/in/timng88">
        <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">My LinkedIn profile</span>
        </Link>
    </Button>
  )
}
