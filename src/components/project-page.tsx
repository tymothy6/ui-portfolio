import * as React from "react"
import Link from "next/link"

import { PageHeader } from "@/components/page-header"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/project-card"
import { ContactPage } from "@/components/contact-page"
import { PageFooter } from "@/components/page-footer"
import { ProjectData } from "@/components/project-card"


type ContentOption = string;

export type ProjectPageProps = ProjectData & {
   purpose: string;
   year: string;
   overview: string;
   process: string;
   outcome: string;
   
}

export default function ProjectPage () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <div>
            <div className="flex flex-col md:grid md:grid-cols-2 py-56 mx-24">
                <h1 className="text-6xl font-semibold mb-8">Design System</h1>
                <div className="flex flex-col justify-start">
                    <p className="text-lg text-foreground font-regular leading-relaxed tracking-wide mb-8">
                        This design system is a collection of reusable components built with Radix UI and Tailwind CSS styles that can be used across projects. The goal is to create a consistent and cohesive experience for users.
                    </p>
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-foreground font-semibold">Purpose</p>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Freelance Project</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-foreground font-semibold">Type</p>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">Front-End Development</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-foreground font-semibold">Timeline</p>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">3 months</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6"> 
                <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Design System cover image"
                    className="w-full object-cover" />
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-4">Design Process</h2>
            </div>

            <div className="my-6"> 
                <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Design System cover image"
                    className="w-full object-cover" />
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-4">Design Outcome</h2>
            </div>

            <div className="flex-col space-y-8 py-56 mx-24">
                <h2 className="text-2xl font-semibold mb-4">Other work</h2>
                <div className="grid grid-cols-2 gap-4">
               
                </div>
            </div>

        </div>
            <ContactPage id="contact" />
            <PageFooter />
        </div>
    )
}
