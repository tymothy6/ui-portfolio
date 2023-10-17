import * as React from "react"
import Link from "next/link"
import { Project } from "@/lib/projects"

import { GitHubLogoIcon, FigmaLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"

export async function ProjectCard (data: Project) {

    return(
        <Link href={`/work/${data.slug}`}>
        <Card>
            <CardImageHeader>
                <img
                src={data.thumbnail ? data.thumbnail.src : undefined}
                alt={data.thumbnail ? data.thumbnail.alt : ''}
                className="rounded-t-lg object-cover" />
            </CardImageHeader>
            <CardContent className="flex justify-between items-center pt-4 h-full">
                <div className="flex-col">
                    <p className="text-left text-lg font-semibold text-foreground">{data.name}</p>
                    <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">{data.type}</p> 
                </div>
            {data.figmaLink && (
                <Button variant="ghostnobg" size="icon" asChild>
                    <Link href={data.figmaLink}>
                       <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                       <span className="sr-only">Link to {data.name} Figma prototype</span>
                    </Link>            
                </Button> 
            )}
            {data.githubLink && (
                <Button variant="ghostnobg" size="icon" asChild>
                    <Link href={data.githubLink}>
                        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                        <span className="sr-only">Link to {data.name} Github repository</span>
                    </Link>
                </Button> 
            )}
            </CardContent>  
        </Card>
        </Link>
    )
}