"use client"

import * as React from "react"
import Giscus from "@giscus/react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function GiscusWrapper () {
    const { resolvedTheme } = useTheme()
    const giscusTheme = resolvedTheme === "dark" ? "dark" : "light"

    return (
        <div className="flex flex-col gap-2 items-center">
            <Giscus
                id="comments"
                repo="tymothy6/giscus-blog"
                repoId="R_kgDOKu21gA"
                category="Announcements"
                categoryId="DIC_kwDOKu21gM4CbC7c"
                mapping="pathname"
                term="Welcome to my blog!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={giscusTheme}
                lang="en"
                loading="lazy"
            />
            <p className="text-gray-800 dark:text-gray-200 font- italic font-sans">Powered by <Link href="https://giscus.app" target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-2 decoration-primary hover:decoration-1">Giscus</Link></p>
        </div>
    )
}