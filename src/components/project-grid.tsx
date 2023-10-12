"use client"

import * as React from "react"

import { ProjectCard } from "@/components/project-card"
import { ProjectData } from "@/components/project-card"

type ProjectGridProps = {
    id: string;
    projects: ProjectData[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ id, projects }) => {
    return (
        <div id={id} className="flex-col justify-center items-start my-16 mx-24 scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
                <p className="text-lg font-semibold text-foreground">Featured Work</p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-300">· 2022 - Present</p>
            </div>
            <div className="grid grid-cols-6 gap-4">
                {projects.map((project, index) => (
                <div key={index} className="h-max col-span-3">
                    <ProjectCard
                    name={project.name}
                    type={project.type}
                    thumbnail={project.thumbnail}
                    alt={project.alt}
                    figmaLink={project.figmaLink}
                    githubLink={project.githubLink} />
                </div>
                ))}
            </div>
        </div>
    )
}