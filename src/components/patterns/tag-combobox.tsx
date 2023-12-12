"use client"

import * as React from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Check, ChevronsUpDown, TagIcon } from "lucide-react"

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
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);

  const currentTag = searchParams.get("tag") || "";

  const tags = Array.from(new Set(data.flatMap(post => post.tags || [] )))
  .map(tag => ({ value: tag, label: tag }));

  // Find the label that matches the selectedTag
  const displayLabel = tags.find(tag => tag.value.toLowerCase() === currentTag.toLowerCase())?.label || 'Filter posts';

  const handleChange = (newTag: string) => {

    const newSearchParams = new URLSearchParams(searchParams);
    if (newTag === currentTag) {
      newSearchParams.delete("tag");
    } else {
      newSearchParams.set("tag", newTag);
    }

    // update the URL using useRouter
    const url = `${pathname}?${newSearchParams.toString()}`;
    router.push(url, { scroll: false });
    setOpen(false);
  }

  return (
    <div className="z-[2]">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <div className="flex flex-row gap-2 items-center">
          <TagIcon className="h-4 w-4 text-muted-foreground" />
          {displayLabel}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandEmpty>No tags found.</CommandEmpty>
          <CommandGroup className="overflow-y-scroll max-h-[150px] md:max-h-[200px]">
            {tags.map((tag) => (
              <CommandItem
                key={tag.value}
                value={tag.value}
                onSelect={() => handleChange(tag.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentTag.toLowerCase() === tag.value.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
                {tag.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
  )
}
