import * as React from "react"
import { fetchAllProjects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"

interface HomeProps {
    id: string;
}

export async function ProjectGrid ({ id }: HomeProps) {
    const projects = await fetchAllProjects()

    return (
        <div id={id} className="flex-col justify-center items-start my-16 mx-24 scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
                <p className="text-lg font-semibold text-foreground">Featured Work</p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-300">· 2022 - Present</p>
            </div>
            <div className="grid grid-cols-6 gap-4">
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