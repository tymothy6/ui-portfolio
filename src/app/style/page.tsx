import * as React from "react"

import { Metadata } from "next"

import { StyleHero } from "@/components/patterns/landing-hero"

import styles from "@/components/modules/landing.module.css"

export const metadata: Metadata = {
    title: 'Style Guide',
}

export default function StyleGuide () {
    return(
        <div>
            <div className={styles.gradient}>
            <StyleHero />
            </div>
        </div>
    )
}
