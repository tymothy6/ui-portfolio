"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { CopyIcon } from "@radix-ui/react-icons"


export function ActionCombobox() {
  const [open, setOpen] = React.useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setOpen(false)
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="pl-2 pr-2 justify-start">
            Actions
            <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-[12px] font-medium text-muted-foreground opacity-100">⌘</kbd>
            <kbd className="ml-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-[12px] font-medium text-muted-foreground opacity-100">K</kbd>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[120px] bg-background/60 backdrop-blur-lg" side="top" align="start">
          <Command>
            <CommandList>
              <CommandGroup>
                  <CommandItem
                  onSelect={() => handleCopy()}>
                    <CopyIcon className="w-4 h-4 mr-2" />
                    Copy link
                  </CommandItem>
                  <CommandItem
                  >
                    Open in new tab
                    <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 dark:border-slate-700 bg-muted px-1.5 font-mono text-[14px] font-medium text-muted-foreground opacity-100">↵</kbd>
                  </CommandItem>
                
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
