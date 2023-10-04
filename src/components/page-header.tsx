"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./mode-toggle"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"

const works : { title: string; href: string; description: string }[] = [
    {
        title: "Product Design",
        href: "work/product-design",
        description: "Some of the digital products I've designed.",
    },
    {
        title: "Scientific Design",
        href: "work/science",
        description: "Some of the research I've published in my PhD thesis.",
    },
]

const about : { title: string; href: string; description: string }[] = [
    {
        title: "About me",
        href: "#about",
        description: "A brief introduction to who I am.",
    },
    {
        title: "Values",
        href: "#values",
        description: "Some of the things I care about.",
    },
]

const contacts : { title: string; href: string }[] = [
    {
        title: "Email",
        href: "#contact",
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/timng88",
    },
    {
        title: "GitHub",
        href: "https://www.github.com/tymothy6",
    },
]


export function PageHeader() {
    return (
        <div className="bg-background fixed top-0 w-full">
            <div className="flex justify-between items-center px-8 py-4">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" />
                    <AvatarFallback>TN</AvatarFallback>
                </Avatar>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Work</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 lg:w-[400px] ">
                                    {works.map((work) => (
                                        <ListItem
                                            key={work.title}
                                            title={work.title}
                                            href={work.href}
                                        >
                                            {work.description}
                                        </ListItem> 
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 lg:w-[400px] ">
                                    {about.map((about) => (
                                        <ListItem
                                            key={about.title}
                                            title={about.title}
                                            href={about.href}
                                        >
                                            {about.description}
                                        </ListItem> 
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
    
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"