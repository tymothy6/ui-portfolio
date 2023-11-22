import * as React from "react"

import { Metadata, Viewport } from "next"

import { PageFooter } from "@/components/page-footer"
import { BlogHero } from "@/components/landing-hero"
import { BlogPostGrid } from "@/components/blog-grid"

import styles from "@/components/modules/landing.module.css"

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
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-900 dark:animate-gradient-xy">
            <div className={styles.grid}>
            <div className={styles.gradient}>
            <BlogHero />
            <div className="md:mx-24 mb-36">
            <BlogPostGrid />
            </div>
            </div>
            <PageFooter />
            </div>
        </div>
    )
}