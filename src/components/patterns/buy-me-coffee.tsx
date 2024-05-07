import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function BuyMeCoffee () {
    return (
        <div className="flex items-center gap-2 mx-8 md:mx-0">
            <h4 className="text-foreground font-medium text-sm">Liked my writing?</h4>
            <a 
            href="https://buymeacoffee.com/timng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground hover:underline font-regular text-sm"
            >
                Buy me a coffee! ☕️
                <ArrowTopRightIcon className="h-4 w-4" />
            </a>
        </div>
    )
}