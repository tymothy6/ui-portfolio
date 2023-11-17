"use client"

import * as React from "react"

import { ContentImage } from "@/lib/content-image"
import { Button } from "@/components/ui/button"
import { 
    Alert,
    AlertTitle,
    AlertDescription
 } from "@/components/ui/alert"
import { useToast } from "@/components/ui/use-toast"

import { Link2Icon } from "@radix-ui/react-icons"


 export function RichEmbedBlock ({ title, description, image, url, author, source }: { title: string, description: string, image: ContentImage | null, url?: string, author?: string, source?: string }) {
    const openGraphImage = image?.src;
    const openGraphImageAlt = image?.alt;

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
        <div className="flex flex-col px-8 max-w-[400px] mx-auto">
            <img
                src={openGraphImage}
                alt={openGraphImageAlt}
                className="w-full max-h-[200px] object-cover rounded-t-lg border-t-[1px] border-x-[1px]" />
            <Alert className="mb-8 flex flex-col gap-4 rounded-none rounded-b-lg border-t-[0px]">
                <div className="flex flex-col gap-1">
                <AlertTitle className="font-semibold font-sans">{title}</AlertTitle>
                <div className="flex flex-row items-center justify-between">
                    <AlertDescription className="text-sm font-sans text-gray-800 dark:text-gray-200">{author}</AlertDescription>
                </div>
                <AlertDescription className="text-base font-sans text-gray-800 dark:text-gray-200 mb-2">{description}</AlertDescription>
                <div className="flex flex-row justify-between items-center">
                {url && 
                <Button variant="default" className="font-sans w-max" onClick={handleClick}>
                    View {source}
                </Button>
                }
                {url &&
                <Button variant="ghost" size="icon" onClick={() => handleCopy()}>
                    <Link2Icon className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Copy link</span>
                </Button>
                }
                </div>
                </div>
            </Alert>
        </div>
    )
 }
