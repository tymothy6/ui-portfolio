export function BlogBuyMeCoffee() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4 w-full">
      <h4 className="font-geistSans text-foreground font-medium text-base">
        Liked my writing?
      </h4>
      <a
        href="https://buymeacoffee.com/timng"
        target="_blank"
        rel="noopener noreferrer"
        className="font-geistSans text-muted-foreground hover:text-foreground hover:underline font-medium text-base"
      >
        Buy me a coffee! ☕️
      </a>
    </div>
  );
}

export function BuyMeCoffee() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full">
      <h4 className="font-geistSans text-foreground font-medium text-base">
        Was this helpful?
      </h4>
      <a
        href="https://buymeacoffee.com/timng"
        target="_blank"
        rel="noopener noreferrer"
        className="font-geistSans text-muted-foreground hover:text-foreground hover:underline font-medium text-base"
      >
        Buy me a coffee! ☕️
      </a>
    </div>
  );
}
