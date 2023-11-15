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

import { CaretSortIcon } from "@radix-ui/react-icons"

export function SortButton () {
    return (
        <Popover>
        <PopoverTrigger className="w-[130px] mr-2" asChild>
            <Button variant="outline" className="w-[130px] pl-2 pr-0"> Sort posts
                <CaretSortIcon className="ml-2 h-5 w-5 text-muted-foreground" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[130px] p-0">
        <Command>
            <CommandGroup heading="Options">
                <CommandItem>
                    <span>A-Z</span>
                </CommandItem>
                <CommandItem>
                    <span>Date posted</span>
                </CommandItem>
            </CommandGroup>
        </Command>
        </PopoverContent>
        </Popover>
    )
}