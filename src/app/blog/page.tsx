import * as React from "react"

import { Metadata, Viewport } from "next"
import Link from "next/link"

import { PageHeader } from "@/components/page-header"
import { PageFooter } from "@/components/page-footer"
import { BlogHero } from "@/components/landing-hero"
import { BlogPostGrid } from "@/components/blog-grid"


export const metadata: Metadata = {
    title: 'Design Blog',
}

export const viewport: Viewport = {
    themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6d28d9' },
    { media: '(prefers-color-scheme: dark)', color: '#7c3aed' },
    ],
}

export default function Blog () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
               <BlogHero />
            <div className="md:mx-24 lg:mx-36 mb-36">
            <BlogPostGrid />
            </div>
            <PageFooter />
        </div>
    )
}