"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubContact, LinkedInContact } from "@/components/contact-button"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuListVert,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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
        description: "Some of the problems I've solved with design thinking.",
    },
    {
        title: "Science",
        href: "/work/science",
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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const menuRef = React.useRef<HTMLDivElement>(null)

    const handleClick = (event: Event) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener("mouseup", handleClick);
        document.addEventListener("touchend", handleClick)
        return () => {
            document.removeEventListener("mouseup", handleClick);
            document.removeEventListener("touchend", handleClick)
        }
    }, [])

    return (
        <div ref={menuRef} className="bg-background/50 dark:bg-background/70 backdrop-blur-md border-b-[1px] fixed top-0 w-full z-[49]">
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
                            <TooltipContent className="p-2 md:block hidden">
                                <p className="text-sm font-regular"> Doggo will guide you back to the start 🐾 </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
                <div className="flex flex-row items-center gap-1">
                <div className="hidden md:block">
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
                        
                    </NavigationMenuList>
                </NavigationMenu>
                </div>
                <GitHubContact />
                <LinkedInContact />
                <ModeToggle />
                <div className="block md:hidden">
                    <Button 
                    variant="ghost"
                    onClick={(event) => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    className="text-slate-800 dark:text-slate-300 hover:text-foreground hover:dark:text-foreground">
                        <span className="mr-2">Menu</span>
                        <HamburgerMenuIcon className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>

        <motion.div
                ref={menuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
                style={{ display: isMenuOpen ? 'block' : 'none' }}
        >
        <div className="flex flex-col justify-start items-start bg-background/70 backdrop-blur-md border-t-[1px] w-full">
            
            <div className="px-12 pt-8">
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium tracking-wide">Menu</span>
            </div>
            
                    <div className="flex flex-col gap-4 justify-start items-start px-8 pt-4 pb-8 w-full">
                    <Separator />
                        <div>
                        <NavigationMenu>
                            <NavigationMenuListVert>
                            <NavigationMenuItem>
                                    <Link href="/#home" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                        </NavigationMenuLink>
                                    </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                    <Link href="/#work" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Work
                                        </NavigationMenuLink>
                                    </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                    <Link href="/#about" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About
                                        </NavigationMenuLink>
                                    </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                    <Link href="/#contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact
                                        </NavigationMenuLink>
                                    </Link>
                            </NavigationMenuItem>
                            </NavigationMenuListVert>
                        </NavigationMenu>
                    
                        </div>
                        
                            <Separator />
                        
                        <div>
                        <NavigationMenu>
                            <NavigationMenuListVert>
                            <NavigationMenuItem>
                                    <Link href="/not-found" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blog 🚧
                                        </NavigationMenuLink>
                                    </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                    <Link href="https://drive.google.com/file/d/1IbtFgUMnnUT2elUv0pvttkrtwpI1vUMc/view?usp=drive_link" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Resume
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="https://www.linkedin.com/in/timng88" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        LinkedIn
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="https://www.github.com/tymothy6" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        GitHub
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                </NavigationMenuListVert>
                            </NavigationMenu>

                        </div>
                        <Separator />
                </div>

                <div className="flex flex-row justify-between px-12 pb-8 w-full">
                    <p className="text-gray-500 text-sm font-medium tracking-wide">Tim Ng</p>
                    <p className="text-gray-500 text-sm font-medium tracking-wide">Design Portfolio</p>
                </div>
        </div>
    </motion.div>

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