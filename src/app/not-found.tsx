import { Metadata } from "next"
import Image from "next/image"

import { NotFoundHero } from "@/components/landing-hero"
import { PageFooter } from "@/components/page-footer"

import shibaNotFound from "public/shiba-404.png"

export const metadata: Metadata = {
    title: 'Not Found',
}

export default function NotFound () {
    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-900 dark:animate-gradient-xy">
            <div className="relative">
                <NotFoundHero />
                <Image
                src={shibaNotFound}
                alt="A shiba inu with papers in its mouth." 
                width={384}
                height={384}
                className="absolute bottom-0 md:right-[12rem]"
                />
            </div>
            <PageFooter />
        </div>
    )
}
