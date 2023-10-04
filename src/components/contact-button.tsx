"use client"

import * as React from "react"
import Link from "next/link"

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function GitHubContact() {

  return (
    <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.github.com/tymothy6">
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Github profile</span>
        </Link>
    </Button>
  )
}

export function LinkedInContact() {
    return (
        <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.linkedin.com/in/timng88">
        <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">LinkedIn profile</span>
        </Link>
    </Button>
  )

}
