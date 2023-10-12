import * as React from "react"
import Link from "next/link"

import { PageHeader } from "@/components/page-header"
import { PasswordHero } from "@/components/landing-hero"
import { PageFooter } from "@/components/page-footer"

export default function Password () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <PasswordHero />
            <PageFooter />
        </div>
    )
}
