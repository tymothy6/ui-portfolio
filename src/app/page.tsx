"use client"

import * as React from "react"
import Link from "next/link"

import { PageHeader } from "@/components/page-header"
import { Hero } from "@/components/landing-hero"
import { Projects } from "@/components/project-cards"
import { AboutPage, ExperiencePage, SkillsPage, ValuesPage } from "@/components/page-list"
import { ContactPage } from "@/components/contact-page"
import { PageFooter } from "@/components/page-footer"

import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
  return (
    <div 
    className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
      <PageHeader />
      <Hero id="home" />
      <Projects id="work" />
      <AboutPage id="about" />
      <div className="relative">
      <img
          src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
          alt="Aerial view of Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
          className="block object-cover w-full lg:h-[60vh]"
      />
      <div className="absolute bottom-0 left-0 p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="text-sm text-gray-800 dark:text-gray-200">
            📍 Where is this?
            </Button>
          </TooltipTrigger>
          <TooltipContent className="p-2 w-48">
            <div className="flex items-center space-x-1 mb-1">
            <p className="text-sm font-medium text-foreground"> 🏠 Tim was born and raised in Vancouver, Canada</p>
            </div>
            <Link href="https://unsplash.com/photos/GVr33-rHTDU" passHref>
              <div className="flex justify-start items-center space-x-1">
              <ExternalLinkIcon className="h-3 w-3" />
                <p className="text-xs text-gray-800 dark:text-gray-300 font-regular text-foreground">Download from Unsplash</p>
              </div>
            </Link>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </div>
      </div>
      
      <ExperiencePage />
      <SkillsPage />
      <ValuesPage id="values" />
      <ContactPage id="contact" />
      <PageFooter />
    </div>
  )
}
