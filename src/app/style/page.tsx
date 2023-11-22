import * as React from "react"

import { Metadata } from "next"

import { StyleHero } from "@/components/landing-hero"
import { PageFooter } from "@/components/page-footer"

import styles from "@/components/modules/landing.module.css"

export const metadata: Metadata = {
    title: 'Style Guide',
}

export default function StyleGuide () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-900 dark:animate-gradient-xy">
            <div className={styles.gradient}>
            <StyleHero />
            </div>
            <PageFooter />
        </div>
    )
}
