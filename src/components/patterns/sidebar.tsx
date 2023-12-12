
import Link from "next/link"

import {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuListVert,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"


export function Sidebar() {
    return (
    <div className="flex flex-col justify-start items-start bg-background border-b-[1px] w-full">
            
            <div className="px-12 py-8"><span className="text-gray-500 text-sm font-medium tracking-wide">Menu</span>
            </div>
                    <div className="flex flex-col gap-4 justify-start items-start px-8 py-4">
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
                        
                            <Separator className="mt-4 mb-4" />
                        
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
                </div>
    </div>
    )
}

                    