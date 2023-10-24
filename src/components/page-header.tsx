"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollContext } from "@/lib/scroll-context"

import { cn } from "@/lib/utils"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GitHubContact, LinkedInContact } from "@/components/contact-button"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    CustomNavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuListVert,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    customNavigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { ProgressBar } from "@/components/progress-bar"



const works : { title: string; href: string; description: string }[] = [
    {
        title: "UX Design",
        href: "/#work",
        description: "Some of the problems I've solved with design thinking",
    },
    {
        title: "Science",
        href: "/work/science",
        description: "Scientific research I've published in my PhD",
    },
]

const about : { title: string; href: string; description: string }[] = [
    {
        title: "About me",
        href: "/#about",
        description: "A brief introduction to who I am and what I do",
    },
    {
        title: "Values",
        href: "/#values",
        description: "My design philosophy and what I care about",
    },
]

const blog : { title: string; href: string, description:string }[] = [
    {
        title: "Design Blog",
        href: "/not-found",
        description: " 🏗️ Coming soon"
    },
    {
        title: "Licenses",
        href: "/licenses",
        description: "Open source resources used on this site"
    },
    {
        title: "Style Guide",
        href: "/style",
        description: "Design system for this site"
    },
    {
        title: "Resume",
        href: "https://drive.google.com/file/d/1IbtFgUMnnUT2elUv0pvttkrtwpI1vUMc/view?usp=drive_link",
        description: "Google Drive link to download my resume"
    }
    
]

export function PageHeader() {
    const context = React.useContext(ScrollContext)
    const { scrollProgress = 0 } = context ?? {}

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const menuRef = React.useRef<HTMLDivElement>(null)

    const handleClick = (event: Event) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
        }
    }

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    }

    const handleResize = () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            setIsMenuOpen(false);
        }
    }

    React.useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        document.addEventListener("mouseup", handleClick)
        document.addEventListener("touchend", handleClick)
        
        return () => {
            window.removeEventListener('resize', handleResize)
            document.removeEventListener("mouseup", handleClick)
            document.removeEventListener("touchend", handleClick)
        }
    }, [])

    return (
        <div ref={menuRef} className={`backdrop-blur-md ${isMenuOpen ? 'bg-background/95 dark:bg-background/95' : 'bg-background/50 dark:bg-background/80'} ${isMenuOpen ? '' : 'border-b-[1px]'} fixed top-0 w-full z-[49]`}>
            <div className="flex justify-between items-center pl-8 pr-4 md:px-8 py-4">
                <Link href="/#home" className="rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" 
                onClick={(e) => {
                    if (isMenuOpen) {
                        e.preventDefault();
                    }
                }}>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar>
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="A shiba inu wearing a Grogu costume" />
                                    <AvatarFallback>TN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="p-2 md:block hidden">
                                <p className="text-sm font-regular"> 🐾 Doggo will guide you back to the start 🐾 </p>
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
                            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
                <div className="ml-0 md:ml-1"><ModeToggle /></div>
                <div className="block md:hidden">
                    <Button 
                    variant="ghost"
                    onClick={(event) => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                    className="text-slate-800 dark:text-slate-300 hover:text-foreground hover:dark:text-foreground">
                        {isMenuOpen ? <span className="mr-2 text-base">Close</span> : <span className="mr-2 text-base">Menu</span>}
            
                        {isMenuOpen ? <Cross1Icon className="w-5 h-5" /> : <HamburgerMenuIcon className="w-5 h-5" />}
                        
                    </Button>
                </div>
            </div>
        </div>
        <ProgressBar
        progress={scrollProgress}
        className="block md:hidden"
        />

        <motion.div
                ref={menuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? "auto" : 0 }}
                style={{ display: isMenuOpen ? 'block' : 'none', pointerEvents: isMenuOpen ? 'auto' : 'none' }}
        >
        <div className="flex flex-col justify-start items-start bg-background/20 backdrop-blur-md border-b-[1px] w-full">
            
            <div className="px-12 pt-4 cursor-default">
                <span className="text-gray-600 dark:text-gray-400 text-base font-mono font-medium tracking-wide">Menu</span>
            </div>
            
                    <div className="flex flex-col gap-4 justify-start items-start px-8 pt-4 pb-8 w-full">
                    
                        <div>
                        <NavigationMenu>
                            <NavigationMenuListVert>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/#home" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Home
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/#work" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Work
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/#about" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            About
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/#contact" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Contact
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                            </NavigationMenuListVert>
                        </NavigationMenu>
                    
                        </div>
                        
                        <Separator />

                        <div className="px-4 cursor-default">
                            <span className="text-gray-600 dark:text-gray-400 text-base font-mono font-medium tracking-wide">
                                Resources</span>
                        </div>
                        
                        <div>
                        <NavigationMenu>
                            <NavigationMenuListVert>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/not-found" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Blog
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="https://drive.google.com/file/d/1IbtFgUMnnUT2elUv0pvttkrtwpI1vUMc/view?usp=drive_link" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Resume
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/licenses" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Licenses
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                <CustomNavigationMenuItem onClick={handleMenuItemClick}>
                                        <Link href="/style" legacyBehavior passHref>
                                            <NavigationMenuLink className={customNavigationMenuTriggerStyle()}>
                                            Style Guide
                                            </NavigationMenuLink>
                                        </Link>
                                </CustomNavigationMenuItem>
                                </NavigationMenuListVert>
                            </NavigationMenu>

                        </div>
                        
                </div>

                <div className="flex flex-row justify-between px-12 pb-8 w-full cursor-default">
                    <p className="text-gray-500 text-base font-regular tracking-wide">Tim Ng</p>
                    <p className="text-gray-500 text-base font-regular tracking-wide">Design Portfolio</p>
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