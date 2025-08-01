"use client";

import * as React from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  footerNavigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { IubendaLink } from "@/components/patterns/iubenda-link";

export function PageFooter() {
  const footerText =
    "· When in doubt, assume the best · Think in win-win scenarios · What's naive today might be common sense tomorrow · Ask more questions · Do good in broad daylight ";
  const marqueeText = `${footerText}${footerText}`;

  return (
    <footer className="border-t-[1px] z-[2]">
      <div className="bg-background pt-8 md:pt-16 pb-2 w-full h-full relative overflow-hidden">
        <Popover>
          <PopoverTrigger asChild className="focus-visible:none cursor-pointer">
            <h1
              id="marqueeText"
              style={{
                animation: `scrollMarquee 30s linear infinite`,
                transform: `translateX(var(--translation-value))`,
              }}
              className="text-4xl md:text-5xl font-semibold text-foreground/80 top-0 left-0 whitespace-nowrap inline-block focus-visible:none"
            >
              {marqueeText}
            </h1>
          </PopoverTrigger>
          <PopoverContent className="w-[24rem] md:w-full">
            <span className="text-sm font-regular text-foreground">
              Some rules to live by from <em>Humankind: A Hopeful History</em>,
              a 2020 novel by{" "}
              <a
                href="https://www.rutgerbregman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline decoration-2 decoration-primary"
              >
                Rutger Bregman
              </a>
              .
            </span>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col bg-background w-full pt-8 md:pt-12 pb-4 md:pb-12 justify-start">
        <div className="px-8 md:px-12 pb-8 block md:hidden">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4"
                    alt="A shiba inu wearing a Grogu costume"
                  />
                  <AvatarFallback>TN</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-regular">
                  {" "}
                  Please don&apos;t feed the shiba 😅{" "}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="px-8 md:px-12">
          <span className="text-gray-500 text-sm font-mono font-medium tracking-wide">
            Links
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:justify-between md:items-center px-4 md:px-8 py-4">
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/#home" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#work" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Work
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="https://www.linkedin.com/in/timng88"
                    target="_blank"
                    rel="noopener noreferrer"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      LinkedIn
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="https://www.github.com/tymothy6"
                    target="_blank"
                    rel="noopener noreferrer"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      GitHub
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <div className="px-4 hidden md:block md:order-last">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Avatar>
                          <AvatarImage
                            src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4"
                            alt="A shiba inu wearing a Grogu costume"
                          />
                          <AvatarFallback>TN</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-regular">
                          {" "}
                          Please don&apos;t feed the shiba 😅{" "}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="px-4 md:px-12 py-4">
          <Separator className="md:mt-4 md:mb-4" />
        </div>
        <div className="px-8 md:px-12 pt-4">
          <span className="text-gray-500 text-sm font-mono font-medium tracking-wide">
            Pages
          </span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-start px-4 md:px-8 py-4">
          <div className="flex flex-col w-full md:flex-row items-start md:items-center gap-2">
            <Button variant="link" className="h-max">
              <Link href="/password" legacyBehavior passHref>
                <span className="text-xs">Password</span>
              </Link>
            </Button>
            <Button variant="link" className="h-max">
              <Link href="/licenses" legacyBehavior passHref>
                <span className="text-xs">Licenses</span>
              </Link>
            </Button>
            <Button variant="link" className="h-max">
              <Link href="/style" legacyBehavior passHref>
                <span className="text-xs">Style Guide</span>
              </Link>
            </Button>
            <Button variant="link" className="h-max mb-2 md:mb-0">
              <Link href="/resume" legacyBehavior passHref>
                <span className="text-xs">Resume</span>
              </Link>
            </Button>
            <IubendaLink />
          </div>

          <div className="block md:hidden px-4 pt-2 w-full">
            <Button
              variant="secondaryblog"
              className="w-full hover:border-accent bg-gray-100 dark:bg-slate-800"
              asChild
            >
              <Link href="mailto:hello@tim-ng.me" passHref>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-400 my-8 text-left">
                  📧{" "}
                  <span className="text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-primary/80 hover:decoration-2">
                    hello@tim-ng.me
                  </span>
                </span>
              </Link>
            </Button>
          </div>
          <div className="flex flex-row w-full md:w-max justify-between md:justify-start md:gap-2">
            <div className="px-4 py-1">
              <span className="text-xs text-gray-800 dark:text-gray-200 font-medium whitespace-nowrap">
                Built with Next.js & Vercel
              </span>
            </div>

            <div className="px-4 py-1">
              <span className="text-xs text-gray-800 dark:text-gray-200 font-medium whitespace-nowrap">
                © Tim Ng, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
