import { Metadata } from "next"
import Image from "next/image"

import { NotFoundHero } from "@/components/patterns/landing-hero"
import { PageFooter } from "@/components/patterns/page-footer"

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
                width={350}
                height={350}
                className="absolute bottom-0 right-4 md:right-[12rem]"
                />
            </div>
        </div>
    )
}
