import * as React from "react"

import { Metadata } from "next"

import { PageHeader } from "@/components/page-header"
import { ResumeHero } from "@/components/landing-hero"
import { PageFooter } from "@/components/page-footer"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "@radix-ui/react-icons"


export const metadata: Metadata = {
    title: 'Resume',
}

export default function Resume () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <ResumeHero />
            <div className="flex flex-col gap-8 md:px-8 pb-36 mx-8 md:mx-24 lg:mx-48 xl:mx-64">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-semibold">Resume</h2>
                            <Separator />
                            <div className="rounded-lg max-w-4xl relative overflow-hidden mt-4" style={{ paddingBottom: '120.41%' }}>
                                <iframe
                                src="https://drive.google.com/file/d/1IbtFgUMnnUT2elUv0pvttkrtwpI1vUMc/preview"
                                width="100%"
                                height="100%"
                                allow="autoplay"
                                className="absolute top-0 w-full h-full"
                                ></iframe>
                                <div>
                                <a href="https://drive.google.com/uc?export=download&id=1IbtFgUMnnUT2elUv0pvttkrtwpI1vUMc">
                                    <Button
                                    variant="outline"
                                    size="default"
                                    className="text-foreground dark:text-muted-foreground absolute top-4 left-4"
                                    >
                                        Download
                                    <DownloadIcon className="h-[0.9rem] w-[0.9rem] ml-2" />
                                    </Button>
                                </a>
                                </div>
                            </div>
                        </div>
            </div>
            
            <PageFooter />
        </div>
    )
}
