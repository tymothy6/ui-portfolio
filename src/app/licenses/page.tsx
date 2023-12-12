import * as React from "react"

import { Metadata } from "next"

import { LicenseHero } from "@/components/patterns/landing-hero"

import styles from "@/components/modules/landing.module.css"

export const metadata: Metadata = {
    title: 'Licenses',
}

export default function Licenses () {
    return(
        <div>
                <div className={styles.gradient}>
                    <LicenseHero />
                </div>
        </div>
    )
}
