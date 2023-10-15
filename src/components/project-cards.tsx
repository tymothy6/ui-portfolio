"use client"

import * as React from "react"
import Link from "next/link"

import { GitHubLogoIcon, FigmaLogoIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    ButtonCard,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"

interface HomeProps {
    id: string;
}

export const Projects: React.FC<HomeProps> = ({ id }) => {
    return (
        <div id={id} className="flex-col justify-center items-start my-16 mx-24 scroll-mt-32">
            <div className="flex items-center gap-2 mb-4">
                <p className="text-lg font-semibold text-foreground">Featured Work</p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-300">· 2022 - Present</p>
            </div>
            <div className="grid grid-cols-6 gap-4">
               
                <ButtonCard onClick={() => window.location.href = '/work/nota'}className="h-max col-span-3 col-start-1">
                    
                    <CardImageHeader>
                  
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Design System"
                        className="rounded-t-lg grow object-cover" />
                   
                    </CardImageHeader>
                   
                    <CardContent className="flex justify-between items-center pt-4 h-full">
                        <div className="flex-col">
                        <p className="text-left text-lg font-semibold text-foreground">Nota</p>
                        <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">Product Design</p> 
                        </div>
                        <Button variant="ghostnobg" size="icon" asChild>
                        <Link href="https://www.github.com/tymothy6/copilot">
                            <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">Link to Figma prototype</span>
                        </Link>            
                    </Button>  
                    </CardContent>   
                
                </ButtonCard>
               
                
                <ButtonCard onClick={() => window.location.href = '/work'}className="h-max col-span-3 col-start-4">
                   
                    <CardImageHeader>
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Project image"
                        className="rounded-t-lg grow object-cover" />
                   </CardImageHeader>
                   
                    <div className="flex justify-between items-center pr-6">
                        <CardContent className="pt-4 h-full">
                            <p className="text-left text-lg font-semibold text-foreground">Design System</p>
                            <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">Information Design</p>
                        </CardContent>
                        <Button variant="ghostnobg" size="icon" asChild>
                            <Link href="https://www.github.com/tymothy6/copilot">
                                <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to Figma prototype</span>
                            </Link>
                        </Button>
                    </div>
                    
                </ButtonCard>
                <ButtonCard onClick={() => window.location.href = '/work'}className="h-max col-span-3 col-start-1">
                
                    <CardImageHeader>
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Project image"
                        className="rounded-t-lg grow object-cover" />
                    </CardImageHeader>
                    <CardContent className="pt-4 h-full">
                        <p className="text-left text-lg font-semibold text-foreground">Design System</p>
                        <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">Graphic Design</p>
                    </CardContent>
                
                </ButtonCard>
                <ButtonCard onClick={() => window.location.href = '/work'}className="h-max col-span-3 col-start-4">
                    
                    <CardImageHeader>
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Project image"
                        className="rounded-t-lg grow object-cover" />
                    </CardImageHeader>
                    
                    <div className="flex justify-between items-center pr-6">
                    <CardContent className="pt-4 h-full">
                        <p className="text-left text-lg font-semibold text-foreground">Design System</p>
                        <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">Front-End Development</p>
                    </CardContent>
                        <div className="flex gap-1">
                        <Button variant="ghostnobg" size="icon" asChild>
                            <Link href="https://www.github.com/tymothy6/copilot">
                                <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to Copilot widget on Figma Community</span>
                            </Link>
                        </Button>
                        <Button variant="ghostnobg" size="icon" asChild>
                            <Link href="https://www.github.com/tymothy6/copilot">
                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to Copilot repository on GitHub</span>
                            </Link>
                        </Button>
                        </div>
                    </div>
                   
                </ButtonCard>
                <ButtonCard onClick={() => window.location.href = '/work'}className="h-max col-span-4 col-start-2">
                   
                    <CardImageHeader>
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Project image"
                        className="rounded-t-lg grow object-cover" />
                    </CardImageHeader>
                    
                    <div className="flex justify-between items-center pr-6">
                    <CardContent className="pt-4 h-full">
                        <p className="text-left text-lg font-semibold text-foreground">Design System</p>
                        <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">Full-Stack Development</p>
                    </CardContent>
                        <div className="flex gap-1">
                        <Button variant="ghostnobg" size="icon" asChild>
                            <Link href="https://www.github.com/tymothy6/copilot">
                                <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to Copilot widget on Figma Community</span>
                            </Link>
                        </Button>
                        <Button variant="ghostnobg" size="icon" asChild>
                            <Link href="https://www.github.com/tymothy6/copilot">
                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                                <span className="sr-only">Link to Copilot repository on GitHub</span>
                            </Link>
                        </Button>
                        </div>
                    </div>
                    
                </ButtonCard>
            </div>

        </div>
    )
}