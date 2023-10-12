"use client"

import * as React from "react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
  import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export function PageFooter () {
    return (
        <div className="flex-col bg-background w-full pt-16 pb-24 justify-start">
                    <div className="flex justify-between items-center px-8 py-4">
                        <div className="flex items-center gap-2">
                        <NavigationMenu>
                            <NavigationMenuList>
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
                            </NavigationMenuList>
                        </NavigationMenu>
                    
                        </div>

                        
                        <div className="flex items-center gap-2">
                        <NavigationMenu>
                            <NavigationMenuList>
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
                                <div className="px-4">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Avatar>
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="A shiba inu wearing a Grogu costume" />
                                                <AvatarFallback>TN</AvatarFallback>
                                            </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p> A shiba inu wearing a Grogu costume </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </div>
                        
                            </NavigationMenuList>
                        </NavigationMenu>
                        </div>
                        
                    </div>
                    <div className="px-12 py-4"><Separator className="mt-4 mb-4" /></div>
                    <div className="flex justify-between items-center px-8 py-4">
                    <div className="flex items-center gap-2">
                            <Button variant="link">
                                <Link href="/password" legacyBehavior passHref>
                                <span className="text-xs">Password</span>
                                </Link>
                            </Button>
                            <Button variant="link">
                                <Link href="/licenses" legacyBehavior passHref>
                                <span className="text-xs">Licenses</span>
                                </Link>
                            </Button>
                            <Button variant="link">
                                <Link href="/privacy" legacyBehavior passHref>
                                <span className="text-xs">Privacy</span>
                                </Link>
                            </Button>
                            <Button variant="link">
                                <Link href="/not-found" legacyBehavior passHref>
                                <span className="text-xs">404</span>
                                </Link>
                            </Button>
                    </div>
                    <div className="flex items-center gap-2">
                            <div className="h-10 px-4 py-2 text-foreground">
                                <span className="text-xs underline-offset-4 font-medium">Made with 💌 and 🤖 in 🇨🇦</span>
                            </div>
                            <div className="h-10 px-4 py-2 text-foreground">
                                <span className="text-xs underline-offset-4 font-medium">© Tim Ng, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>  
    )
}      