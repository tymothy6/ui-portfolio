"use client"

import * as React from "react"
import Link from "next/link"
import { Project } from "@/lib/projects"

import { GitHubLogoIcon, FigmaLogoIcon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    ButtonCard,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"

export function ProjectCard (data: Project) {
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <Link href={`/work/${data.slug}`} className="focus-visible:outline-none focus-visible:ring-none">
        <ButtonCard>
            {isClient && (
                <>
            <CardImageHeader>
                <img
                src={data.thumbnail ? data.thumbnail.src : undefined}
                alt={data.thumbnail ? data.thumbnail.alt : ''}
                className="rounded-t-lg object-cover" />
            </CardImageHeader>
            <CardContent className="flex justify-between items-start pt-4 h-full">
                <div className="flex flex-col">
                    <p className="text-left text-lg font-semibold text-foreground mb-1">{data.name}</p>
                    <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200 mb-2">{data.type}</p> 
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="default">{data.year}</Badge>
                        {data.tools && data.tools.map( tool => (
                            <Badge key={tool} variant="secondary">{tool}</Badge>
                        ))}
                    </div>
                        
                </div>
            
                <div className="flex space-x-0">
                    {data.figmaLink && (
                        <Button variant="outline" size="icon" asChild>
                            <Link href={data.figmaLink}>
                                <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to {data.name} Figma prototype</span>
                            </Link>            
                        </Button> 
                    )}
                    {data.githubLink && (
                        <Button variant="outline" size="icon" asChild>
                            <Link href={data.githubLink}>
                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to {data.name} Github repository</span>
                            </Link>
                        </Button> 
                    )}
                </div>
            
            </CardContent>
            </>
            )}  
        </ButtonCard>
        </Link>
    )
}