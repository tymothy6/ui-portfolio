"use client"

import * as React from "react"
import Link from "next/link"

import { ArrowTopRightIcon, GitHubLogoIcon, LinkedInLogoIcon, FigmaLogoIcon, TwitterLogoIcon, Link2Icon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { 
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export function GitHubContact() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.github.com/tymothy6" target="_blank" rel="noopener noreferrer">
            <GitHubLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">My Github profile</span>
            </Link>
        </Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <div className="flex items-center gap-1">
          GitHub 
        <ArrowTopRightIcon className="h-4 w-4" />
      </div>
    </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  )
}

export function GitHubBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-800 dark:text-slate-300 bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">This project has an associated GitHub repo</span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">Available GitHub repo</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function FigmaContact() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.figma.com/@tymothy6" target="_blank" rel="noopener noreferrer">
              <FigmaLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">My Figma Community profile</span>
              </Link>
          </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <div className="flex items-center gap-1">
            Figma Community 
          <ArrowTopRightIcon className="h-4 w-4" />
        </div>
      </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function FigmaBadge() {
  return (
    <TooltipProvider>
      <Tooltip>
      <TooltipTrigger>
        <div className="h-10 w-10 inline-flex items-center justify-center rounded-md text-sm font-medium text-slate-800 dark:text-slate-300 bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground">
          <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">This project has an associated Figma file</span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom" align="end">Available Figma file</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function LinkedInContact() {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/timng88" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">My LinkedIn profile</span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <div className="flex items-center gap-1">
              LinkedIn 
            <ArrowTopRightIcon className="h-4 w-4" />
            </div>
          </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export function LinkedInShare({url}: {url:string}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild>
              <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Share on LinkedIn</span>
              </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Share on LinkedIn</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function TwitterShare({url}: {url:string}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild>
            <Link href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer">
            <TwitterLogoIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Share on Twitter</span>
            </Link>
        </Button>
        </TooltipTrigger>
        <TooltipContent>Share on Twitter</TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => handleCopy()}>
            <Link2Icon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Copy link to this post</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copy link to this post</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function EmailShare({url}: {url:string}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`mailto:?subject=Check out this post by Tim Ng&body=${url}`} target="_blank" rel="noopener noreferrer">
              <EnvelopeClosedIcon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
              <span className="sr-only">Share via email</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Share via email</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}



