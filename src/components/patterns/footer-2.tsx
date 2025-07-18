"use client";

import * as React from "react";
import Link from "next/link";

import styles from "@/components/modules/page-footer.module.css";

import {
  AvatarFooter,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { IubendaLink } from "@/components/patterns/iubenda-link";
import {
  GitHubContact,
  LinkedInContact,
  FigmaContact,
} from "@/components/patterns/contact-button";
import { Separator } from "../ui/separator";

export function PageFooter2() {
  const footerText =
    "· When in doubt, assume the best · Think in win-win scenarios · What's naive today might be common sense tomorrow · Ask more questions · Do good in broad daylight ";
  const disabledMarqueeText =
    " When in doubt, assume the best · Think in win-win scenarios · What's naive today might be common sense tomorrow · Ask more questions · Do good in broad daylight";
  const marqueeText = `${footerText}${footerText}`;
  const [isMarqueeEnabled, setIsMarqueeEnabled] = React.useState(true);

  const toggleMarquee = () => {
    setIsMarqueeEnabled(!isMarqueeEnabled);
  };

  return (
    <footer className="border-t-[1px] z-[2]">
      <div className="bg-background pt-8 md:pt-16 pb-2 w-full h-full relative overflow-hidden">
        <Popover>
          <PopoverTrigger asChild className="focus-visible:none cursor-pointer">
            <h1
              id="marqueeText"
              style={{
                animation: isMarqueeEnabled
                  ? `scrollMarquee 30s linear infinite`
                  : "none",
                transform: isMarqueeEnabled
                  ? `translateX(var(--translation-value))`
                  : "none",
              }}
              className="text-4xl md:text-5xl font-semibold text-foreground/80 top-0 left-0 whitespace-pre inline-block focus-visible:none"
            >
              {isMarqueeEnabled ? marqueeText : disabledMarqueeText}
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
      <div className="flex flex-col md:flex-row md:justify-between bg-background w-full pt-8 md:pt-12 pb-4 md:pb-8 justify-start md:items-start">
        <div className="flex flex-col gap-2 px-8 md:px-16">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <AvatarFooter
                  className={`${styles.avatarHover} relative md:mb-2`}
                >
                  <AvatarImage
                    src="https://s3-alpha.figma.com/profile/e62bc83f-3c9c-456c-af8b-07543bb6c447"
                    alt="Portrait of the author."
                  />
                  <AvatarFallback>TN</AvatarFallback>
                </AvatarFooter>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-regular">
                  {" "}
                  Why don&apos;t you say hi instead? 😉{" "}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div>
            <span className="text-sm font-monaSans font-medium tracking-wide">
              Design Portfolio
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-800 dark:text-gray-400 text-sm font-[450]">
                Tim Ng
              </span>
              <Separator orientation="vertical" className="h-3" />
              <span className="text-gray-800 dark:text-gray-400 font-[450] text-sm">
                Vancouver, BC 🇨🇦
              </span>
            </div>
            <div className="flex flex-row gap-2 md:gap-0">
              <LinkedInContact />
              <GitHubContact />
              <FigmaContact />
            </div>
            <div className="pt-2 w-full">
              <Button
                variant="secondaryblog"
                className="p-2 group w-full hover:border-primary hover:bg-gray-100/60 dark:hover:bg-slate-800/60 bg-gray-100 dark:bg-slate-800"
                asChild
              >
                <a href="mailto:hello@tim-ng.me">
                  <span className="text-sm font-regular text-gray-800 dark:text-gray-300 my-8 text-left">
                    📧{" "}
                    <span className="group-hover:text-foreground group-hover:underline-offset-4 group-hover:decoration-2">
                      hello@tim-ng.me
                    </span>
                  </span>
                </a>
              </Button>
            </div>

            <div className="items-center space-x-2 my-4 w-max hidden md:flex">
              <Switch
                id="marquee"
                onCheckedChange={toggleMarquee}
                checked={isMarqueeEnabled}
                aria-label={isMarqueeEnabled
                  ? "Disable footer animation"
                  : "Enable footer animation"}
              />
              <Label
                htmlFor="marquee"
                className="text-gray-800 dark:text-gray-400"
              >
                {isMarqueeEnabled
                  ? "Disable footer animation"
                  : "Enable footer animation"}
              </Label>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-16 w-full items-start md:justify-end md:items-center px-4 md:px-24 py-4">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-sm font-monaSans font-medium tracking-wide ml-4">
                Site
              </span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex-col items-start gap-[10px] md:gap-2">
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
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-sm font-monaSans font-medium tracking-wide ml-4">
                Resources
              </span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="flex-col items-start gap-[10px] md:gap-2">
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
                  <Link href="/licenses" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Licenses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/style" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Style Guide
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resume" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={footerNavigationMenuTriggerStyle()}
                    >
                      Resume
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between items-start px-4 md:px-10 pb-8 md:pb-12">
        <div className="mx-4 flex items-center space-x-2 my-2 w-max md:hidden">
          <Switch
            id="marquee"
            onCheckedChange={toggleMarquee}
            checked={isMarqueeEnabled}
            aria-label={isMarqueeEnabled
              ? "Disable footer animation"
              : "Enable footer animation"}
          />
          <Label htmlFor="marquee" className="text-gray-800 dark:text-gray-400">
            {isMarqueeEnabled
              ? "Disable footer animation"
              : "Enable footer animation"}
          </Label>
        </div>
        <div className="flex flex-col w-full md:flex-row items-start md:items-center gap-2 pb-2 md:pb-0">
          <IubendaLink />
        </div>

        <div className="flex flex-row w-full md:w-max justify-between md:justify-start md:gap-2">
          <div className="px-4">
            <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 font-medium whitespace-normal md:whitespace-nowrap">
              Built with Next.js. The code is available on{" "}
              <a
                href="https://github.com/tymothy6/ui-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                GitHub
              </a>
              .
            </span>
          </div>
          <div className="px-4">
            <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 font-medium whitespace-nowrap">
              © 2023-2025, Tim Ng
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
