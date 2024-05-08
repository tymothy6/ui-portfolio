"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useCommandState } from "cmdk"
import { useTheme } from "next-themes"

import Image from "next/image"
import shibaNotFound from "../../../public/shiba-404.png"

import { 
  HomeIcon, 
  ChatBubbleIcon, 
  QuestionMarkCircledIcon, 
  BackpackIcon, 
  EnvelopeClosedIcon, 
  FileIcon, 
  FrameIcon, 
  TokensIcon, 
  LockClosedIcon, 
  RocketIcon
 } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Badge } from "@/components/ui/badge"

import { Post } from "@/lib/blog-posts"
import { Project } from "@/lib/projects"

export function SearchDialog({ posts, projects }: { posts: Post[], projects: Project[] }) {
  const { resolvedTheme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const handleNavigation = (url: string) => {
    router.push(url)
    setOpen(false)
  }

  const SubItem = (props: any) => {
    const search = useCommandState((state) => state.search)
    if (!search) return null
    return <CommandItem {...props} />
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        if (!open) {
          setOpen(true)
        }
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open])

  return (
    <>
    <Button variant="outlinebg60" className="px-3 border border-primary-foreground/10" onClick={() => setOpen(true)}>
      <p className="text-[15px]">
        Search{" "}
        <kbd className="ml-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-[13px] font-medium text-muted-foreground opacity-100">
          <span className="text-[13px]">⌘</span>K
        </kbd>
      </p>
    </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput className="text-[1rem]" placeholder="Start typing to search..." showEsc={true} />
        <div className="relative">
        <CommandList>
          <CommandEmpty>
            <div className="flex flex-col items-center gap-2">
            No results found.
              <div className="w-[72px] h-[56px]">
              <Image
                src={shibaNotFound}
                width={72}
                height={72}
                alt="A shiba inu with papers in its mouth."
                className="absolute bottom-14"
                />
              </div>
            </div>
          </CommandEmpty>
          <CommandGroup heading="Links">
              <CommandItem
              onSelect={() => handleNavigation('/#home')}
              className="cursor-pointer">
                <HomeIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-row gap-2">
                  <span className="font-medium">Home</span>
                  <div className="hidden">
                    <Badge variant="secondary">#main</Badge>
                    <Badge variant="secondary">#start</Badge>
                  </div>
                </div>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/#work')}
              className="cursor-pointer">
                <BackpackIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-row gap-2">
                  <span className="font-medium">Work</span>
                  <span className="text-muted-foreground hidden">See my work</span>
                    <div className="hidden">
                      <Badge variant="secondary">#projects</Badge>
                      <Badge variant="secondary">#design</Badge>
                      <Badge variant="secondary">#development</Badge>
                      <Badge variant="secondary">#ux</Badge>
                    </div>
                </div>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/#about')}
              className="cursor-pointer">
                <QuestionMarkCircledIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-row gap-2">
                  <span className="font-medium">About</span>
                  <span className="text-muted-foreground hidden">Who I am and what I care about</span>
                    <div className="hidden">
                      <Badge variant="secondary">#education</Badge>
                      <Badge variant="secondary">#experience</Badge>
                      <Badge variant="secondary">#values</Badge>
                    </div>
                </div>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/#contact')}
              className="cursor-pointer">
                <EnvelopeClosedIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-row gap-2">
                  <span className="font-medium">Contact</span>
                  <span className="text-muted-foreground hidden">Get in touch with me</span>
                    <div className="hidden">
                      <Badge variant="secondary">#hello</Badge>
                      <Badge variant="secondary">#email</Badge>
                      <Badge variant="secondary">#linkedin</Badge>
                    </div>
                </div>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/blog')}
              className="cursor-pointer">
                <ChatBubbleIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-row gap-2">
                  <span className="font-medium">Blog</span>
                  <span className="text-muted-foreground hidden">My thoughts on design & development</span>
                    <div className="hidden">
                      <Badge variant="secondary">#thoughts</Badge>
                      <Badge variant="secondary">#writing</Badge>
                    </div>
                </div>
              </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
          {projects.map((project) => (
              <CommandItem
                key={project.slug}
                onSelect={() => handleNavigation(`/work/${project.slug}`)}
                className="cursor-pointer">
                  <FrameIcon className="mr-3 h-4 w-4" />
                  <div className="flex flex-row items-center gap-2">
                    <span className="font-medium w-[240px] truncate">{project.name}</span>
                    <Badge variant="default" className="text-white"><span className="tracking-tight">{project.type}</span></Badge>
                  </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Blog posts">
          {posts.map((post) => (
              <CommandItem
                 key={post.slug}
                 onSelect={() => handleNavigation(`/blog/${post.slug}`)}
                 className="cursor-pointer">
                  <FileIcon className="mr-3 h-4 w-4" />
                  <div className="flex flex-col gap-1">
                    <span className="font-medium whitespace-nowrap">{post.title}</span>
                    <span className="text-muted-foreground w-[420px] truncate">{post.summary}</span>
                  </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Resources">
              <CommandItem
               onSelect={() => handleNavigation('/licenses')}
               className="cursor-pointer">
                <LockClosedIcon className="mr-3 h-2 w-2" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Licenses</span>
                  <span className="text-muted-foreground">Open-source licenses</span>
                </div>

              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/style')}
              className="cursor-pointer">
                <TokensIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Style Guide</span>
                  <span className="text-muted-foreground">Design system for this website</span>
                </div>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/resume')}
              className="cursor-pointer">
                <RocketIcon className="mr-3 h-4 w-4" />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Resume</span>
                  <span className="text-muted-foreground">Download my resume</span>
                </div>
              </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
        <div id="footer" className="flex flex-row items-center py-4 pl-4 pr-2 justify-between w-full h-[56px] border-t-[1px] bg-background/50 backdrop-blur-lg">
            <div className="w-max h-max flex p-[3px] rounded-md bg-accent border tracking-wide font-medium text-[13px] text-accent-foreground cursor-default">
              <Image
                src={resolvedTheme === 'dark' ? 'https://images.ctfassets.net/mzyich089xy0/3it1Ee1attFtq5TDAfTWdb/39309148d9d40c4b368ce33b86455342/avatar-dark.png' : 
                'https://images.ctfassets.net/mzyich089xy0/1UHHXxWnN5LVkdkiylVcBc/9cfa320f91b36c46a7bc393626b216e9/avatar-light.png'}
                width={20}
                height={20}
                alt="Tim Ng Design Logo"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="text-slate-600 dark:text-slate-300 hover:bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground py-2 pl-3 pr-2 inline-flex items-center justify-center rounded-md text-sm font-medium cursor-default">
                  Select
                  <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">↑</kbd>
                  <kbd className="ml-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">↓</kbd>
              </div>
              <div className="text-slate-600 dark:text-slate-300 hover:bg-accent/60 hover:text-accent-foreground dark:hover:text-accent-foreground py-2 pl-3 pr-2 inline-flex items-center justify-center rounded-md text-sm font-medium cursor-default">
                  Open
                  <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground opacity-100">↵</kbd>
              </div>
            </div>
        </div>
       </div>
        
      </CommandDialog>
    </>
  )
}
