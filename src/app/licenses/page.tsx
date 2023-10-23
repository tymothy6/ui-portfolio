import * as React from "react"

import { Metadata } from "next"

import { PageHeader } from "@/components/page-header"
import { LicenseHero } from "@/components/landing-hero"
import { PageFooter } from "@/components/page-footer"

export const metadata: Metadata = {
    title: 'Licenses',
}

export default function Licenses () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <LicenseHero />
            <PageFooter />
        </div>
    )
}
