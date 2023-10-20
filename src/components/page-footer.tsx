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
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"

export function PageFooter () {
    const [isVisible, setIsVisible] = React.useState(false)

    const handleScroll = () => {
        const totalHeight = document.body.offsetHeight;
        const scrolledAmount = window.innerHeight + window.scrollY;
        const scrolledPercentage = (scrolledAmount / totalHeight) * 100;
        const thresholdPercentage = 95;
        const isBottomOfPage = scrolledPercentage >= thresholdPercentage;
        setIsVisible(isBottomOfPage);
    }

    React.useEffect(() => {
        // Add event listener when mounted
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
      <div className={`border-t-[1px] transition-transform transition-opacity duration-1000 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="bg-background pt-16 pb-2 w-full h-full relative overflow-hidden">
            <Popover>
                <PopoverTrigger>
                    <h1 className="text-4xl md:text-5xl font-semibold text-foreground/80 top-0 left-0 whitespace-nowrap inline-block animate-scrollMarquee focus-visible:none">When in doubt, assume the best · Think in win-win scenarios · What's naive today might be common sense tomorrow · Ask more questions · Do good in broad daylight</h1>
                </PopoverTrigger>
                <PopoverContent className="w-[24rem] md:w-full">
                    <span className="text-sm font-regular text-foreground">Some rules to live by from <em>Humankind</em>, a 2020 novel by <a href="https://www.rutgerbregman.com/" target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-2 decoration-primary">Rutger Bregman</a>.</span>
                </PopoverContent>
            </Popover>
        </div>
        <div className="flex flex-col bg-background w-full pt-12 pb-12 justify-start">
                        <div className="px-12 pb-8 block md:hidden">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Avatar>
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="A shiba inu wearing a Grogu costume" />
                                                <AvatarFallback>TN</AvatarFallback>
                                            </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="font-regular"> Please don't feed the shiba 😅 </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </div>
            
            <div className="px-12"><span className="text-gray-500 text-sm font-medium tracking-wide">Links</span>
            </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start md:justify-between md:items-center px-8 py-4">
                        <div>
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

                    
                        <div>
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
                                <div className="block md:hidden">
                                <NavigationMenuItem>
                                    <Link href="/not-found" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blog 🚧
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                </div>
                                <div className="px-4 hidden md:block md:order-last">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Avatar>
                                                <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="A shiba inu wearing a Grogu costume" />
                                                <AvatarFallback>TN</AvatarFallback>
                                            </Avatar>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="font-regular"> Please don't feed the shiba 😅 </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </div>
                        
                            </NavigationMenuList>
                        </NavigationMenu>
                        </div>
                        
                    </div>
                    <div className="px-12 py-4"><Separator className="md:mt-4 md:mb-4" /></div>
                    <div className="px-12 pt-4"><span className="text-gray-500 text-sm font-medium tracking-wide">Pages</span>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between items-start px-8 py-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                            <Button variant="link" className="h-max">
                                <Link href="/password" legacyBehavior passHref>
                                <span className="text-xs md:text-sm">Password</span>
                                </Link>
                            </Button>
                            <Button variant="link" className="h-max">
                                <Link href="/licenses" legacyBehavior passHref>
                                <span className="text-xs md:text-sm">Licenses</span>
                                </Link>
                            </Button>
                            <Button variant="link" className="h-max">
                                <Link href="/privacy" legacyBehavior passHref>
                                <span className="text-xs md:text-sm">Privacy</span>
                                </Link>
                            </Button>
                            <Button variant="link" className="h-max">
                                <Link href="/not-found" legacyBehavior passHref>
                                <span className="text-xs md:text-sm">404</span>
                                </Link>
                            </Button>
                    </div>
                    
                    <div className="flex flex-row w-full md:w-max justify-between md:justify-start md:gap-2">
                            <div className="h-10 px-4 py-1">
                                <span className="text-xs md:text-sm text-foreground underline-offset-4 font-medium">Made with 💌 and 🤖 in 🇨🇦</span>
                            </div>
                            <div className="h-10 px-4 py-1">
                                <span className="text-xs md:text-sm text-foreground underline-offset-4 font-medium">© Tim Ng, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>
    )
}      