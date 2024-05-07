import * as React from "react"

import Link from "next/link"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import { fetchProject, fetchAllProjects } from "@/lib/projects"
import RichText from "@/lib/rich-text"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { ProjectCardCarousel } from "@/components/patterns/project-card-carousel"
import { Button } from "@/components/ui/button"

import { FigmaLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

interface ProjectPageParams {
    slug: string
}

interface ProjectPageProps {
    params: ProjectPageParams
}

// Tell Next.js about the projects so they can be statically generated at build time
export async function generateStaticParams(): Promise<ProjectPageParams[]> {
    const items = await fetchAllProjects()

    return items.map((item) => ({ slug: item.slug}))
}

// Tell Next.js which metadata to display
export async function generateMetadata({ params }: ProjectPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const projectItem = await fetchProject({ slug: params.slug })
    
    if (!projectItem) {
        return notFound()
    }

    return {
        title: projectItem.name,
        openGraph: {
            title: projectItem.name,
            description: projectItem.overview,
            images: [
                {
                    url: projectItem.thumbnail!.src ?? "",
                    width: projectItem.thumbnail!.width ?? 800,
                    height: projectItem.thumbnail!.height ?? 600,
                    alt: projectItem.thumbnail!.alt ?? "",
                    type: "image/png",
                },
            ],
        },
    }
}

async function ProjectPage ( { params }: ProjectPageProps ) {
    // fetch a single project by slug
    const data = await fetchProject({ slug: params.slug })

    if (!data) {
        return notFound() // render a 404 if the project can't be found
    }

    // fetch all projects other than the current one for the card display
    const projects = await fetchAllProjects()
    const otherProjects = projects.filter((project) => project.slug !== data.slug)

    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-900 dark:animate-gradient-xy">
            <div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:space-x-16 pt-36 lg:pt-48 pb-24 md:pb-36 lg:pb-48 mx-8 md:mx-24 lg:mx-36 xl:mx-48">
                <h1 className="text-5xl md:text-6xl font-semibold mb-8">{data.name}</h1>
                <div className="flex flex-col justify-start">
                    <p className="text-lg md:text-xl text-foreground font-regular leading-relaxed tracking-wide md:leading-relaxed md:tracking-wide mb-12">
                        {data.overview}
                    </p>
                    <div className="max-w-lg flex flex-col justify-start gap-4 bg-gray-50 dark:bg-card/70 border border-accent p-4 md:p-8 rounded-lg">
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base text-foreground font-semibold">Purpose</p>
                            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-mono font-medium tracking-tight">{data.purpose}</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base text-foreground font-semibold">Type</p>
                            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-mono font-medium tracking-tight">{data.type}</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-sm md:text-base text-foreground font-semibold">Timeline</p>
                            <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-mono font-medium tracking-tight">{data.timeline}</p>
                        </div>
                        {(data.figmaLink || data.githubLink) ? (
                            <>
                            <Separator />
                                <div className="flex justify-between items-center">
                                    <p className="text-sm md:text-base text-foreground font-semibold">Public Links</p>
                                    {data.figmaLink && (
                                        <div className="flex flex-row items-center gap-2">
                                        <span className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium font-mono tracking-tight">Figma</span>
                                        <Button variant="outline" size="icon" asChild>
                                            <Link href={data.figmaLink}>
                                                <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                                <span className="sr-only">Link to {data.name} Figma prototype</span>
                                            </Link>            
                                        </Button> 
                                </div>
                                    )}
                                    {data.githubLink && (
                                        <div className="flex flex-row items-center gap-2">
                                        <span className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-medium font-mono tracking-tight">GitHub</span>
                                        <Button variant="outline" size="icon" asChild>
                                            <Link href={data.githubLink}>
                                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                                <span className="sr-only">Link to {data.name} Github repository</span>
                                            </Link>
                                        </Button> 
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="my-6 flex flex-col"> 
                {data.heroBlock1 && data.heroBlock1.map((image, index) =>
                   image && (
                        <div key={`${data.slug}-${index}`} className="relative w-full">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="object-cover" 
                            />
                        </div>
                    )
                )}
            </div>
            <div className="flex flex-col gap-4 py-24 md:py-36 mx-0 md:mx-48 lg:mx-60 xl:mx-72">
            <div className="mx-8"><h2 className="text-3xl md:text-4xl font-semibold mb-4">Design Process</h2>
                <Separator className="mb-8"/></div>
                <RichText document={data.process} />
            </div>
            <div className="my-6 flex flex-col"> 
                {data.heroBlock2 && data.heroBlock2.map((image, index) =>
                   image && (
                        <div key={`${data.slug}-${index}`} className="relative w-full">
                            <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="object-cover" 
                            />
                        </div>
                    )
                )}
            </div>
            {data.outcome && (
            <div className="flex flex-col gap-4 py-24 md:py-36 mx-0 md:mx-48 lg:mx-60 xl:mx-72">
                <div className="mx-8"><h2 className="text-3xl md:text-4xl font-semibold mb-4">Design Outcome</h2>
                <Separator className="mb-8"/></div>
                <RichText document={data.outcome} />
            </div>
            )}
            <div className="flex-col space-y-8 pb-24 md:pb-36 lg:pb-48 md:mx-24 lg:mx-48 xl:mx-60">
                <h2 className="text-2xl font-semibold mx-8 mb-4 font-mono">Other work</h2>
                <div className="mx-0">
                    <ProjectCardCarousel projects={otherProjects} recommended={true} noHover={true} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectPage