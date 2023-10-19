import * as React from "react"
import { fetchAllProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

interface HomeProps {
    id: string;
}

export async function ProjectGrid ({ id }: HomeProps) {
    const projects = await fetchAllProjects()

    return (
        <div id={id} className="flex-col justify-center items-start my-16 mx-16 lg:mx-24 scroll-mt-32">
            <div className="flex flex-row items-center gap-2 mb-8">
                <p className="text-base md:text-lg font-semibold text-foreground">Featured Work</p>
                <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-400">· 2022 - Present</p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-6 md:gap-x-4 gap-y-8">
                {projects.map((project) => {
                    return(
                        <div key={project.slug} className="h-max col-span-3">
                            <ProjectCard {...project} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}