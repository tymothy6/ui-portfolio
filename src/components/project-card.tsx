"use client"

import * as React from "react"
import Link from "next/link"

import { GitHubLogoIcon, FigmaLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    ButtonCard,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"

export type ProjectData = {
    name: string;
    type: string;
    thumbnail: string;
    alt: string;
    figmaLink?: string;
    githubLink?: string;
}

export function ProjectCard ({ name, type, thumbnail, alt, figmaLink, githubLink }: ProjectData) {
    return(
        <ButtonCard onClick={() => window.location.href = '/work'}>
            <CardImageHeader>
                <img
                src={thumbnail}
                alt={alt}
                className="rounded-t-lg grow object-cover" />
            </CardImageHeader>
            <CardContent className="flex justify-between items-center pt-4 h-full">
                <div className="flex-col">
                    <p className="text-left text-lg font-semibold text-foreground">{name}</p>
                    <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">{type}</p> 
                </div>
            {figmaLink && (
                <Button variant="ghostnobg" size="icon" asChild>
                    <Link href={figmaLink}>
                       <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                       <span className="sr-only">Link to {name} Figma prototype</span>
                    </Link>            
                </Button> 
            )}
            {githubLink && (
                <Button variant="ghostnobg" size="icon" asChild>
                    <Link href={githubLink}>
                        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                        <span className="sr-only">Link to {name} Github repository</span>
                    </Link>
                </Button> 
            )}
            </CardContent>   
        </ButtonCard>
    )
}