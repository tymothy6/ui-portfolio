"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { 
    Accordion, 
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function StyleNavigation () {
    return (
        <div className="sticky top-8 hidden lg:block h-full w-full pl-16 pt-24 pb-16 min-w-[16rem]">
            <p className="text-sm text-gray-800 dark:text-gray-300 font-mono pb-4">Navigation</p>
            <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Themes</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-1 items-start">
                            <Button variant="ghost" asChild>
                                <Link href="/style#darkmode">Dark mode</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/style#variables">CSS variables</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/style#semantics">Semantics</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/style#colourspace">Colour spaces</Link>
                            </Button>
                            </div>
                        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Components</AccordionTrigger>
                        <AccordionContent>
                        <div className="flex flex-col gap-1 items-start">
                            <Button variant="ghost" asChild>
                                <Link href="/style#radix">Radix Primitives</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/style#shadcnui">shadcn/ui</Link>
                            </Button>
                            </div>
                        </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}