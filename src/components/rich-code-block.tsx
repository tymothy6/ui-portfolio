"use client"

import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
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
                    <span className="font-semibold text-sm">{title}</span>
                    <div className="flex px-[6px] py-[2px] rounded-md bg-primary text-primary-foreground text-xs font-mono cursor-default">{lang}</div>
                </div>
                <Button variant="outlineinverse" size="default" onClick={() => handleCopy(areaRef)} className="text-muted-foreground rounded-none rounded-tr-md border-none font-mono w-max px-4">
                Copy
                <CopyIcon className="h-[1rem] w-[1rem] ml-2" />
                </Button>
                </div>
            <ScrollArea className="w-full whitespace-nowrap rounded-b-md">
                <div 
                    ref={areaRef}
                    className="relative w-full text-sm rounded-b-md">
                    <SyntaxHighlighter 
                    language={lang} 
                    style={nightOwl} 
                    customStyle={{ margin: '0px' }}
                    showLineNumbers={true}
                    wrapLines={true}
                    lineProps={lineNumber => ({ style: highlightLines.includes(lineNumber) ? { backgroundColor: '#334155', display: 'block' } : {}, 
                    })}>
                        {code}
                    </SyntaxHighlighter>
                </div>    
                <ScrollBar orientation="horizontal" />
            </ScrollArea>    
        </div>

    )
}