"use client"

import * as React from "react"
import Link from "next/link"
import { Project } from "@/lib/projects"
import Tilt from "react-parallax-tilt"

import { GitHubBadge, FigmaBadge } from "@/components/contact-button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"

interface ProjectCardProps {
    data: Project
    isFirstChild?: boolean
    noTilt?: boolean
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ data, isFirstChild, noTilt }, ref) => {
    const [isClient, setIsClient] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    const cardContent = (
        <Card 
        ref={ref} 
        tabIndex={0} 
        className={`${isFirstChild ? 'mx-8' : 'ml-4 mr-8'} md:mx-0 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${noTilt ? '' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        >
        <Link tabIndex={-1} href={`/work/${data.slug}`}>
            {isClient && (
                <>
            <CardImageHeader>
                <img
                src={data.thumbnail ? data.thumbnail.src : undefined}
                alt={data.thumbnail ? data.thumbnail.alt : ''}
                className="rounded-t-lg object-cover" />
            </CardImageHeader>
            <CardContent className="flex flex-row justify-between items-start pt-4 h-full">
                <div className="flex flex-col">
                    <p className={`text-left text-lg font-semibold text-foreground pr-2 mb-0 ${isHovered ? 'underline decoration-primary decoration-4 underline-offset-2' : ''}`}>{data.name}</p>
                    <p className="text-left text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 pr-2 mb-2">{data.type}</p> 
                    <div className="flex flex-row flex-wrap gap-2">
                        <Badge variant="default"><span className="font-mono font-semibold">{data.year}</span></Badge>
                            {data.tools && data.tools.map( tool => (
                                <Badge key={tool} variant="secondary"><span className="font-mono font-semibold tracking-tight">{tool}</span></Badge>
                            ))}
                    </div>  
                </div>
            
                <div className="flex flex-row gap-0">
                    {data.figmaLink && <FigmaBadge />}
                    {data.githubLink && <GitHubBadge />}
                </div>
            
            </CardContent>
            </>
            )}  
        </Link>
        </Card>
    )

    return noTilt 
    ? cardContent
    : (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            {cardContent}
        </Tilt>
    )
}
)

ProjectCard.displayName = 'ProjectCard';
