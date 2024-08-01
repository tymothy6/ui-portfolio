"use client";

import * as React from "react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function StyleNavigation() {
  const [activeSection, setActiveSection] = React.useState("");
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  React.useEffect(() => {
    const checkSection = () => {
      const sections = [
        "darkmode",
        "variables",
        "semantics",
        "colourspace",
        "radix",
        "shadcnui",
        "figma",
      ];
      let activeSection = "";
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isScrollingDown = currentScrollTop > lastScrollTop;

          if (
            isScrollingDown &&
            rect.top < window.innerHeight &&
            rect.bottom >= 0
          ) {
            activeSection = id; // when scrolling down, update when the top of the section enters the bottom of the viewport
          } else if (!isScrollingDown && rect.top <= 0) {
            activeSection = id; // when scrolling up, update when the top of the section exits the top of the viewport
          }
        }
      }

      setLastScrollTop(currentScrollTop); // update the last scroll position
      return activeSection;
    };

    const handleScroll = () => {
      const active = checkSection();
      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const isActive = (id: string) => activeSection === id;

  return (
    <div className="sticky top-8 hidden lg:block h-full w-full pl-16 pr-12 pt-24 pb-16 min-w-[16rem] max-w-[24rem]">
      <p className="text-[15px] text-gray-800 dark:text-gray-300 font-mono pb-4">
        Style Guide
      </p>
      <Separator />
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Themes</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1 items-start">
              <Button
                variant="ghost"
                asChild
                className={`${isActive("darkmode") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#darkmode">Dark mode</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`${isActive("variables") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#variables">CSS variables</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`${isActive("semantics") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#semantics">Semantics</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`${isActive("colourspace") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#colourspace">Colour spaces</Link>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Components</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1 items-start">
              <Button
                variant="ghost"
                asChild
                className={`${isActive("radix") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#radix">Radix Primitives</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`${isActive("shadcnui") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#shadcnui">shadcn/ui</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className={`${isActive("figma") ? "bg-accent/80 text-accent-foreground dark:text-primary-foreground" : ""}`}
              >
                <Link href="/style#figma">Figma UI kit</Link>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
