"use client"

import * as React from "react"
import Giscus from "@giscus/react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function GiscusWrapper () {
    const { resolvedTheme } = useTheme()
    const giscusTheme = resolvedTheme === "dark" ? "dark" : "light"

    return (
       <div className="mx-8 md:mx-0">
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
        </div>
        
    )
}