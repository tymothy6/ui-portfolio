
export function BuyMeCoffee () {
    return (
        <div className="flex items-center gap-2 mx-8 md:mx-0">
            <h4 className="text-foreground font-medium text-base">Liked my writing?</h4>
            <a 
            href="https://buymeacoffee.com/timng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground hover:underline font-medium text-base"
            >
                Buy me a coffee! ☕️
            </a>
        </div>
    )
}