"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { Post } from "@/lib/blog-posts"
import { Check, ArrowDownUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import { 
    Command,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

import { ChevronsUpDownIcon } from "lucide-react"

export function SortButton ({data}: {data: Post[]}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSortType = searchParams.get("sort") || "";

    const handleSort = (sortType: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        
        if (currentSortType === sortType) {
            newSearchParams.delete("sort");
        } else {
            newSearchParams.set("sort", sortType);
        }   

        const url = `${pathname}?${newSearchParams.toString()}`;
        router.push(url, { scroll: false });
    }

    return (
        <div className="z-[2]">
        <Popover>
        <PopoverTrigger className="w-[150px] mr-2" asChild>
            <Button variant="outline" className="w-[150px] pl-4 pr-2"> 
            <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-2 items-center">
                    <ArrowDownUpIcon className="h-4 w-4 text-muted-foreground" />
                    Sort posts
                </div>
                <ChevronsUpDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
            </div>
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[150px] p-0">
        <Command>
            <CommandGroup heading="Options">
                <CommandItem onSelect={() => handleSort("lastdate")}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentSortType === "lastdate" ? "opacity-100" : "opacity-0"
                  )}
                />
                    <span>Date (oldest)</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSort("az")}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentSortType === "az" ? "opacity-100" : "opacity-0"
                  )}
                />
                    <span>Title (A-Z)</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSort("za")}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentSortType === "za" ? "opacity-100" : "opacity-0"
                  )}
                />
                    <span>Title (Z-A)</span>
                </CommandItem>
            </CommandGroup>
        </Command>
        </PopoverContent>
        </Popover>
        </div>
    )
}