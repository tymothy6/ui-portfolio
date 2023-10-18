import * as React from "react"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import { fetchProject, fetchAllProjects } from "@/lib/projects"
import RichText from "@/lib/rich-text"

import { PageHeader } from "@/components/page-header"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/project-card"
import { PageFooter } from "@/components/page-footer"

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
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <div>
            <div className="flex flex-col md:grid md:grid-cols-2 md:space-x-4 py-56 mx-24">
                <h1 className="text-6xl font-semibold mb-8">{data.name}</h1>
                <div className="flex flex-col justify-start">
                    <p className="text-lg text-foreground font-regular leading-relaxed tracking-wide mb-8">
                        {data.overview}
                    </p>
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-base text-foreground font-semibold">Purpose</p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-medium">{data.purpose}</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-base text-foreground font-semibold">Type</p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-medium">{data.type}</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-base text-foreground font-semibold">Timeline</p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-medium">{data.timeline}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6 flex-col"> 
                {data.heroBlock1 && data.heroBlock1.map((image, index) =>
                   image && (
                        <img
                            key={`${data.slug}-${index}`}
                            src={image.src}
                            alt={`Hero image ${index + 1}`}
                            className="w-full object-cover" 
                        />
                    )
                )}
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-8">Design Process</h2>
                <RichText document={data.process} />
            </div>

            <div className="my-6 flex-col"> 
                {data.heroBlock2 && data.heroBlock2.map((image, index) =>
                   image && (
                        <img
                            key={`${data.slug}-${index}`}
                            src={image.src}
                            alt={`Design process image ${index + 1}`}
                            className="w-full object-cover" 
                        />
                    )
                )}
            </div>

            {data.outcome && (
            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-8">Design Outcome</h2>
                <RichText document={data.outcome} />
            </div>
            )}

            <div className="flex-col space-y-8 py-56 mx-24">
                <h2 className="text-2xl font-semibold mb-4">Other work</h2>
                <div className="grid grid-cols-2 gap-4">
                    {otherProjects.slice(0, 2).map((project) => (
                        <div className="h-max" key={project.slug}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
            <PageFooter />
        </div>
    )
}

export default ProjectPage