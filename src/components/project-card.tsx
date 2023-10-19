"use client"

import * as React from "react"
import Link from "next/link"
import { Project } from "@/lib/projects"

import { GitHubBadge, FigmaBadge } from "@/components/contact-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"

export function ProjectCard (data: Project) {
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <Link tabIndex={-1} href={`/work/${data.slug}`}>
        <Card tabIndex={0} className="focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
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
                    <p className="text-left text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">{data.type}</p> 
                    <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="default">{data.year}</Badge>
                        {data.tools && data.tools.map( tool => (
                            <Badge key={tool} variant="secondary">{tool}</Badge>
                        ))}
                    </div>
                        
                </div>
            
                <div className="flex space-x-0">
                    {data.figmaLink && <FigmaBadge />}
                    {data.githubLink && <GitHubBadge />}
                </div>
            
            </CardContent>
            </>
            )}  
        </Card>
       
        </Link>
        
    )
}