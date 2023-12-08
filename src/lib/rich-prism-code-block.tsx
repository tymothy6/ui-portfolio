"use client"

import * as React from "react"
import { useToast } from "@/components/ui/use-toast"
import { Highlight, themes } from "prism-react-renderer"

import { Button } from "@/components/ui/button"
import { CopyIcon } from "@radix-ui/react-icons"

export function RichCodeBlock ({ title, code, lang, lineNumber = "" }: { title: string, code: string, lang: string, lineNumber?: string}) {
    const areaRef = React.useRef<HTMLDivElement>(null)
    const { toast } = useToast()

    const highlightLines = lineNumber?.split(',')
        .map(Number) ?? [] // defaults to empty array if no line numbers are provided
    

    async function handleCopy(ref: React.RefObject<HTMLDivElement>) {
        if (ref.current) {
            const text = ref.current.innerText || ref.current.textContent!;
            await navigator.clipboard.writeText(text);
            toast({
                title: "Done!",
                description: "Code snippet copied to your clipboard.",
            });
        } else {
            console.error('Reference to code container is null');
            toast({
                title: "Error",
                description: "Something went wrong. Ctrl/Cmd+C will have to do for now.",
            });
        }
    }

    return (
        <div className="flex flex-col gap-0 max-w-4xl mx-auto">
            <div id="codeHeader" className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm">
                <div className="flex flex-row items-center gap-2 px-4 py-2">
                    <div className="flex p-1 rounded-lg bg-primary text-primary-foreground text-xs font-mono cursor-default">{lang}</div>
                        <span className="text-[15px]">{title}</span>
                    </div>
                    <Button variant="outlineinverse" size="default" onClick={() => handleCopy(areaRef)} className="text-muted-foreground rounded-none rounded-tr-md border-none font-sans w-max px-4">
                    Copy <CopyIcon className="h-[1rem] w-[1rem] ml-2" />
                    </Button>
                </div>
            <div 
                ref={areaRef}
                className="relative w-full overflow-y-auto overflow-x-auto bg-slate-800 dark:bg-slate-950 border border-accent rounded-b-md font-mono text-sm font-medium py-2 px-6">
                <Highlight 
                    theme={themes.palenight}
                    code={code}
                    language={lang}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                            </div>
                        ))}
                        </pre>
                    )}
                </Highlight>
            </div>        
        </div>

    )
}