import Link from "next/link"
import Image from "next/image"

import { HeroWrapper } from "@/components/hero-wrapper"
import { ProjectGrid } from "@/components/project-grid"
import { AboutPage, ExperiencePage, SkillsPage, ValuesPage } from "@/components/page-list"
import { ContactPage } from "@/components/contact-page"
import { PageFooter } from "@/components/page-footer"
import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Home() {
  return (
    <div 
    className="flex flex-col bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-900 dark:animate-gradient-xy">
      <HeroWrapper id="home" />
      <div className="w-full border-t-[1px]" />
      <ProjectGrid id="work" />
      <AboutPage id="about" />
      <div className="relative w-full h-[80vh] lg:h-[60vh] my-12">
        <Image
        src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
        alt="Aerial view of Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
        fill={true}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8eCakHgAHWQKS+xqDVgAAAABJRU5ErkJggg=="
        className="block object-cover"
        />
      <div className="absolute bottom-0 left-0 p-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="text-xs md:text-sm font-mono">
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
      <PageFooter />
    </div>
  )
}
