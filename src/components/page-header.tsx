"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubContact, LinkedInContact } from "@/components/contact-button"
import { ModeToggle } from "@/components/mode-toggle"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const works : { title: string; href: string; description: string }[] = [
    {
        title: "UX Design",
        href: "/#work",
        description: "Problems I've solved with design thinking.",
    },
    {
        title: "Science",
        href: "/#work",
        description: "Scientific research I've published in my PhD.",
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
        href: "/not-found",
        description: " 🏗️ Coming soon!"
    },
    
]


export function PageHeader() {
    return (
        <div className="bg-background border-b-[1px] fixed top-0 w-full z-[49]">
            <div className="flex justify-between items-center px-8 py-4">
                <Link href="/#home" className="rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="A shiba inu wearing a Grogu costume" />
                                    <AvatarFallback>TN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="p-2">
                                <p className="text-sm font-medium"> Doggo will guide you back to the top 🐾 </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
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