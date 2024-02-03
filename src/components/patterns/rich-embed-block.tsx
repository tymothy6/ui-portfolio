"use client"

import * as React from "react"

import Image from "next/image"
import { ContentImage } from "@/lib/content-image"
import { Button } from "@/components/ui/button"
import { 
    Alert,
    AlertTitle,
    AlertDescription
 } from "@/components/ui/alert"
import {
    Tooltip,
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

import { Link2Icon } from "@radix-ui/react-icons"


 export function RichEmbedBlock ({ title, description, image, url, author, source }: { title: string, description: string, image: ContentImage | null, url?: string, author?: string, source?: string }) {
    const openGraphImage = image?.src || '';
    const openGraphImageAlt = image?.alt || '';

    const handleClick = () => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    const { toast } = useToast()

    const handleCopy = async () => {
        if (url) {
        await navigator.clipboard.writeText(url)
        toast({
            title: "Done!",
            description: "Link copied to your clipboard.",
        })
        } else {
        console.error("No link provided.")
        toast({
            title: "Error",
            description: "Something went wrong. Ctrl/Cmd+C will have to do for now.",
        })
        }
    }

    return(
        <div className="flex flex-col max-w-[420px] mx-auto font-geistSans">
            <div className="relative w-full h-[200px] rounded-t-lg border-t-[1px] border-x-[1px] overflow-hidden">
                <Image
                src={openGraphImage}
                alt={openGraphImageAlt}
                fill={true}
                className="object-cover" 
                />
            </div>
            <Alert className="mb-8 flex flex-col gap-4 rounded-none rounded-b-lg border-t-[0px]">
                <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center justify-between">
                    <AlertDescription className="text-sm text-gray-800 dark:text-gray-200">{author}</AlertDescription>
                </div>
                <AlertTitle className="font-semibold text-[17px]">{title}</AlertTitle>
                <AlertDescription className="text-base text-gray-800 dark:text-gray-200 mb-2">{description}</AlertDescription>
                <div className="flex flex-row justify-between items-center">
                {url && 
                <Button variant="default" className="w-max" onClick={handleClick}>
                    View {source}
                </Button>
                }
                {url &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => handleCopy()}>
                                <Link2Icon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Copy link</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Copy link</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                }
                </div>
                </div>
            </Alert>
        </div>
    )
 }
