"use client"

import * as React from "react"
import { TagContext } from "@/lib/tag-context"
import { Check, ChevronsUpDown } from "lucide-react"

import { Post } from "@/lib/blog-posts"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function BlogCombobox({data}: {data: Post[]}) {
  const { selectedTag, setSelectedTag } = React.useContext(TagContext);
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const tags = Array.from(new Set(data.flatMap(post => post.tags || [] )))
  .map(tag => ({ value: tag, label: tag }));

  // Find the label that matches the selectedTag
  const displayLabel = tags.find(tag => tag.value.toLowerCase() === selectedTag.toLowerCase())?.label;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedTag ? displayLabel
            : "Filter posts"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandEmpty>No tags found.</CommandEmpty>
          <CommandGroup className="overflow-y-scroll max-h-[175px] md:max-h-[300px]">
            {tags.map((tag) => (
              <CommandItem
                key={tag.value}
                value={tag.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setSelectedTag(currentValue === value ? "" : currentValue);
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedTag.toLowerCase() === tag.value.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
                {tag.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
