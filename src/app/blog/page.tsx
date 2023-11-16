import * as React from "react"

import { Metadata, Viewport } from "next"

import { PageHeader } from "@/components/page-header"
import { SearchWrapper } from "@/components/search-wrapper"
import { PageFooter } from "@/components/page-footer"
import { BlogHero } from "@/components/landing-hero"
import { BlogPostGrid } from "@/components/blog-grid"


export const metadata: Metadata = {
    title: 'Design Blog',
}

export const viewport: Viewport = {
    themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#5b47d8' },
    { media: '(prefers-color-scheme: dark)', color: '#654ff0' },
    ],
}

export default function Blog () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader>
                <SearchWrapper />
            </PageHeader>
               <BlogHero />
            <div className="md:mx-24 lg:mx-36 mb-36">
            <BlogPostGrid />
            </div>
            <PageFooter />
        </div>
    )
}