import * as React from "react"
import { client } from "@/lib/contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from "@contentful/rich-text-types"
import { ProjectData } from "@/components/project-card"

import { PageHeader } from "@/components/page-header"
import { Separator } from "@/components/ui/separator"
import { ProjectCard } from "@/components/project-card"
import { PageFooter } from "@/components/page-footer"

type Media = string

type ProjectPageData = ProjectData & {
   slug: string;
   purpose: string;
   timeline: string;
   year: number;
   overview: string;
   process: Document;
   outcome: Document;
   heroBlock1: Media[];
   heroBlock2: Media[];
}

export async function fetch({ params }: { params: { slug: string } }) {
    const { items } = await client.getEntries({
        content_type: 'work',
        'fields.slug': params.slug,
    })
    console.log(items[0].fields)
    return { ...items[0].fields, slug: params.slug }
   
}

export async function getStaticParams() {
    const { items } = await client.getEntries({ content_type: 'work' })
    return items.map(item => ({ params: { slug: item.fields.slug } }))
}

export default function ProjectPage ( props: ProjectPageData ) {
    console.log(props)
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <div>
            <div className="flex flex-col md:grid md:grid-cols-2 py-56 mx-24">
                <h1 className="text-6xl font-semibold mb-8">{props.name}</h1>
                <div className="flex flex-col justify-start">
                    <p className="text-lg text-foreground font-regular leading-relaxed tracking-wide mb-8">
                        {props.overview}
                    </p>
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-foreground font-semibold">Purpose</p>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{props.purpose}</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-foreground font-semibold">Type</p>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{props.type}</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-foreground font-semibold">Timeline</p>
                            <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{props.timeline}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6"> 
                <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Design System block 1 cover image"
                    className="w-full object-cover" />
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-4">Design Process</h2>
                {documentToReactComponents(props.process)}
            </div>

            <div className="my-6"> 
                <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Design System block 2 cover image"
                    className="w-full object-cover" />
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-4">Design Outcome</h2>
                {documentToReactComponents(props.outcome)}
            </div>

            <div className="flex-col space-y-8 py-56 mx-24">
                <h2 className="text-2xl font-semibold mb-4">Other work</h2>
                <div className="grid grid-cols-2 gap-4">
                < ProjectCard {...props} />
                </div>
            </div>

        </div>
            <PageFooter />
        </div>
    )
}
