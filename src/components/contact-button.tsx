"use client"

import * as React from "react"
import Link from "next/link"

import { GitHubLogoIcon, LinkedInLogoIcon, FigmaLogoIcon, TwitterLogoIcon, Link2Icon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function GitHubContact() {
  return (
    <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.github.com/tymothy6" target="_blank" rel="noopener noreferrer">
        <GitHubLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">My Github profile</span>
        </Link>
    </Button>
  )
}

export function GitHubBadge() {
  return (
  <div className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-800 dark:text-slate-300 bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground">
    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    <span className="sr-only">This project has a public GitHub repo</span>
  </div>
  )
}

export function FigmaBadge() {
  return (
  <div className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-800 dark:text-slate-300 bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground">
    <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    <span className="sr-only">This project has a public Figma file</span>
  </div>
  )
}

export function LinkedInContact() {
    return (
        <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.linkedin.com/in/timng88" target="_blank" rel="noopener noreferrer">
        <LinkedInLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">My LinkedIn profile</span>
        </Link>
    </Button>
  )
}

export function LinkedInShare({url}: {url:string}) {
  return (
    <Button variant="ghost" size="icon" asChild>
        <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}target="_blank" rel="noopener noreferrer">
        <LinkedInLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Share this post on LinkedIn</span>
        </Link>
    </Button>
  )
}

export function TwitterShare({url}: {url:string}) {
  return (
    <Button variant="ghost" size="icon" asChild>
        <Link href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">
        <TwitterLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Share this post on Twitter</span>
        </Link>
    </Button>
  )
}

export function LinkShare({url}: {url:string}) {
  const { toast } = useToast()

  const handleCopy = async () => {
    if (url) {
      await navigator.clipboard.writeText(url)
      toast({
        title: "Done!",
        description: "Link copied to your clipboard.",
      })
    } else {
      console.error("No link provided.")
      toast({
        title: "Error",
        description: "Something went wrong. Ctrl/Cmd+C will have to do for now.",
      })
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={() => handleCopy(url)}>
        <Link2Icon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Copy link to this post</span>
    </Button>
  )
}

export function EmailShare({url}: {url:string}) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={`mailto:?subject=Check out this post by Tim Ng&body=${url}`} target="_blank" rel="noopener noreferrer">
        <EnvelopeClosedIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Share this post via email</span>
      </Link>
    </Button>
  )
}



