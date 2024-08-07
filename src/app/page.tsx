import Link from "next/link";
import Image from "next/image";

import { HeroWrapper } from "@/components/patterns/hero-wrapper";
import { ProjectGrid } from "@/components/patterns/project-grid";
import {
  AboutPage,
  ExperiencePage,
  SkillsPage,
  ValuesPage,
} from "@/components/patterns/page-list";
import { ContactPage } from "@/components/patterns/contact-page";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import styles from "@/components/modules/landing.module.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroWrapper id="home" />
      <div className="w-full border-t-[1px]" />
      <div className={styles.grid}>
        <div className={styles.gradient}>
          <ProjectGrid id="work" />
        </div>
        <AboutPage id="about" />
        <div className="relative w-full h-[80vh] lg:h-[60vh] my-12 z-[2]">
          <Image
            src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
            alt="Aerial view of Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains."
            fill={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8eCakHgAHWQKS+xqDVgAAAABJRU5ErkJggg=="
            className="block object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="text-xs md:text-sm font-geistSans px-2 py-1"
                >
                  📍 Where is this?
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60" align="start">
                <p className="text-sm font-regular text-foreground mb-2">
                  {" "}
                  Tim was born and raised in Vancouver 🇨🇦
                </p>
                <Link href="https://unsplash.com/photos/GVr33-rHTDU" passHref>
                  <div className="flex justify-start items-center space-x-1">
                    <p className="text-xs text-gray-500 dark:text-gray-300 font-regular text-foreground hover:underline decoration-primary decoration-2">
                      Download image from Unsplash
                    </p>
                    <ExternalLinkIcon className="h-3 w-3" />
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
    </div>
  );
}
