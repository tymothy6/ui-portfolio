import * as React from "react"

import { Metadata } from "next"
import Link from "next/link"

import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { Button } from "@/components/ui/button"
import { BlogPostGrid } from "@/components/blog-grid"

export const metadata: Metadata = {
    title: 'Design Blog',
}

export default function Blog () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <div className="flex flex-col md:grid md:grid-cols-2 md:space-x-8 pt-36 lg:pt-48 pb-24 md:pb-36 lg:pb-48 mx-12 md:mx-16 lg:mx-24">
                <h1 className="text-5xl md:text-6xl font-semibold mb-8">Design Blog</h1>
                <div className="flex flex-col justify-start w-full">
                    <p className="text-lg md:text-xl text-foreground font-regular leading-relaxed tracking-wide md:leading-relaxed md:tracking-wide mb-8">Welcome to my blog! I&apos;ll be posting about my projects, design ideas, and professional development here. Thoughts? I look forward to our conversation.</p>
                    <div className="sm:block md:hidden">
                        <Button variant="gradient" size="default" className="md:w-36" asChild>
                            <Link href="/#contact">
                            <span className="text-base font-medium">Contact me</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mx-12 mb-36">
            <BlogPostGrid />
            </div>
            <PageFooter />
        </div>
    )
}