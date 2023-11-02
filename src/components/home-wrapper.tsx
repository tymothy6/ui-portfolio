"use client" 

import React from "react"
import ReactFullpage from '@fullpage/react-fullpage';

import Link from "next/link"

import { HeroWrapper } from "@/components/hero-wrapper"
import { ProjectGrid } from "@/components/project-grid"
import { AboutPage, ExperiencePage, SkillsPage, ValuesPage } from "@/components/page-list"
import { ContactPage } from "@/components/contact-page"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const HomeWrapper = () => {
    <ReactFullpage
    navigation={true}
    credits={{
        enabled: false,
        label: "label",
        position: "right"
      }}
    render={({ state, fullpageApi }) => {
    return (
    <div 
    className="flex flex-col bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
      <HeroWrapper id="home" />
      <ProjectGrid id="work" />
      <AboutPage id="about" />
      <div className="relative my-12">
        <img
            src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
            alt="Aerial view of Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
            className="block object-cover relative w-full lg:h-[60vh]"
        />
        <div className="absolute bottom-0 left-0 p-6">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="text-xs md:text-sm">
                    📍 Where is this?
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-60">
                    <p className="text-sm font-regular text-foreground mb-2"> 🏠 Tim was born and raised in Vancouver, Canada</p>
                    <Link href="https://unsplash.com/photos/GVr33-rHTDU" passHref>
                    <div className="flex justify-start items-center space-x-1">
                    <ExternalLinkIcon className="h-3 w-3" />
                        <p className="text-xs text-gray-800 dark:text-gray-300 font-regular text-foreground">Download image from Unsplash</p>
                    </div>
                    </Link>
                </PopoverContent>
            </Popover>
        </div>
      </div>
      <ExperiencePage />
      <SkillsPage />
      <ValuesPage id="values" />
      <ContactPage id="contact" />
     
    </div>
  )
    }}
    />
}
