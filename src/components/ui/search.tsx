"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useCommandState } from "cmdk"

import { HomeIcon, TextAlignLeftIcon, ChatBubbleIcon, QuestionMarkCircledIcon, BackpackIcon, EnvelopeClosedIcon, FileIcon, FrameIcon, TokensIcon, LockClosedIcon, RocketIcon } from "@radix-ui/react-icons"

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
import { ActionCombobox } from "@/components/action-combobox"

import { Post } from "@/lib/blog-posts"
import { Project } from "@/lib/projects"

export function SearchDialog({ posts, projects }: { posts: Post[], projects: Project[] }) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const handleNavigation = (url: string) => {
    router.push(url)
    setOpen(false)
  }

  const SubItem = ({ children }: { children: React.ReactNode }) => {
    const search = useCommandState(state => state.search);
    if (!search) return null;
    return <CommandItem>{children}</CommandItem>;
  };

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
    <Button variant="outlinebg60" className="px-3" onClick={() => setOpen(true)}>
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
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
              <CommandItem
              onSelect={() => handleNavigation('/#home')}>
                <HomeIcon className="mr-3 h-4 w-4" />
                <span>Home</span>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/#work')}>
                <BackpackIcon className="mr-3 h-4 w-4" />
                <span>Work</span>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/#about')}>
                <QuestionMarkCircledIcon className="mr-3 h-4 w-4" />
                <span>About</span>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/#contact')}>
                <EnvelopeClosedIcon className="mr-3 h-4 w-4" />
                <span>Contact</span>
              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/blog')}>
                <ChatBubbleIcon className="mr-3 h-4 w-4" />
                <p>Blog</p>
              </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Projects">
          {projects.map((project) => (
              <CommandItem
                key={project.slug}
                onSelect={() => handleNavigation(`/work/${project.slug}`)}>
                  <FrameIcon className="mr-3 h-4 w-4" />
                  <span>{project.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Blog posts">
          {posts.map((post) => (
              <CommandItem
                 key={post.slug}
                 onSelect={() => handleNavigation(`/work/${post.slug}`)}>
                  <FileIcon className="mr-3 h-4 w-4" />
                  <span>{post.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Resources">
              <CommandItem
               onSelect={() => handleNavigation('/licenses')}
               >
                <LockClosedIcon className="mr-3 h-2 w-2" />

                <span>Licenses</span>

              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/style')}
              >
                <TokensIcon className="mr-3 h-4 w-4" />

                <span>Style Guide</span>


              </CommandItem>
              <CommandItem
              onSelect={() => handleNavigation('/resume')}>
                <RocketIcon className="mr-3 h-4 w-4" />

                <span>Resume</span>


              </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
        
        <div id="footer" className="flex flex-row items-center py-4 pl-4 pr-2 justify-between w-full h-[56px] border-t-[1px] bg-background/50 backdrop-blur-lg">
            <div className="w-max h-max flex py-1 px-2 rounded-md bg-primary border tracking-wide text-[12px] text-primary-foreground/90 cursor-default">Tim&apos;s Portfolio</div>
            <div className="flex flex-row items-center gap-2">
            <Button variant="ghost" className="pl-3 pr-2 cursor-default">
                Open page
                <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-[14px] font-medium text-muted-foreground opacity-100">↵</kbd>
            </Button>
            <ActionCombobox />
            </div>
        </div>
       </div>
        
      </CommandDialog>
    </>
  )
}
