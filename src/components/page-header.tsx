"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubContact, LinkedInContact } from "@/components/contact-button"
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
        href: "/#work",
        description: "Problems I've solved with design thinking.",
    },
    {
        title: "Scientific Design",
        href: "/#work",
        description: "Research I've published in my PhD.",
    },
]

const about : { title: string; href: string; description: string }[] = [
    {
        title: "About me",
        href: "/#about",
        description: "A brief introduction to who I am.",
    },
    {
        title: "Values",
        href: "/#values",
        description: "My design philosophy and what I care about.",
    },
]

const blog : { title: string; href: string, description:string }[] = [
    {
        title: "Design Blog",
        href: "/blog",
        description: " 🏗️ Coming soon!"
    },
    
]


export function PageHeader() {
    return (
        <div className="bg-background border-b-[1px] fixed top-0 w-full z-[49]">
            <div className="flex justify-between items-center px-8 py-4">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" />
                    <AvatarFallback>TN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
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
                            <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 lg:w-[400px] ">
                                    {blog.map((blog) => (
                                        <ListItem
                                            key={blog.title}
                                            title={blog.title}
                                            href={blog.href}
                                        >
                                            {blog.description}
                                        </ListItem> 
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/#contact" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <GitHubContact />
                        <LinkedInContact />
                    </NavigationMenuList>
                </NavigationMenu>
                <ModeToggle />
                </div>
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