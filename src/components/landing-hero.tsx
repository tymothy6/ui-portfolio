"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
// import { motion } from "framer-motion"

import { FigmaLogoIcon } from "@radix-ui/react-icons"
import { GitHubLogoIcon } from "@radix-ui/react-icons"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    ButtonCard,
    CardContent,
    CardImageHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface HomeProps {
    id: string;
}

const formSchema = z.object({
    password: z.string().min(6).max(24),
})

export const Hero: React.FC<HomeProps> = ({ id }) => {
    return (
        <div 
        id={id}
        className="flex flex-col pt-52 pb-56 my-4 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl font-semibold mb-4">👋🏼 I'm Tim, an experience designer with a background in quantitative research</h1>
            <h1 className="text-6xl font-semibold pb-4 mb-4"> 🤗 I care about making <span className="bg-gradient-to-r from-primary to-pink-500 via-blue-500 inline-block text-transparent bg-clip-text bg-300% animate-animated-gradient tracking-[0.0025em]">complex ideas accessible</span> to everyone</h1>
            <Button variant="gradient" size="lg" className="w-36" asChild>
                <Link href="/#work">
                    <span className="text-lg">Meet me</span>
                </Link>
            </Button>
        </div>
    )
}

export function WorkHero () {
    return (
        <div>
            <div className="flex flex-col md:grid md:grid-cols-2 pt-52 pb-56 mx-24">
                <h1 className="text-6xl font-semibold mb-8">Design System</h1>
                <div className="flex flex-col justify-start">
                    <p className="text-lg text-foreground font-regular leading-relaxed tracking-wide mb-8">
                    This design system is a collection of reusable components built with Radix UI and Tailwind CSS styles that can be used across projects. The goal is to create an accessible, consistent and cohesive experience for users.
                    </p>
                    <div className="flex flex-col justify-start space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-base text-foreground font-semibold">Purpose</p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-medium">Freelance Project</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-base text-foreground font-semibold">Type</p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-medium">Front-End Development</p>
                        </div>
                        <Separator />
                        <div className="flex justify-between items-center">
                            <p className="text-base text-foreground font-semibold">Timeline</p>
                            <p className="text-base text-gray-800 dark:text-gray-200 font-medium">3 months</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6"> 
                <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Design System cover image"
                    className="w-full object-cover" />
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-4">Design Process</h2>
            </div>

            <div className="my-6"> 
                <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Design System cover image"
                    className="w-full object-cover" />
            </div>

            <div className="flex-col space-y-4 py-56 mx-24">
                <h2 className="text-4xl font-semibold mb-4">Design Outcome</h2>
            </div>

            <div className="flex-col space-y-8 py-56 mx-24">
                <h2 className="text-2xl font-semibold mb-4">Other work</h2>
                <div className="grid grid-cols-2 gap-4">
                <ButtonCard onClick={() => window.location.href = '/work'}className="h-max">
                    
                    <CardImageHeader>
                  
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Design System"
                        className="rounded-t-lg grow object-cover" />
                   
                    </CardImageHeader>
                   
                    <CardContent className="flex justify-between items-center pt-4 h-full">
                        <div className="flex-col">
                        <p className="text-left text-lg font-semibold text-foreground">Design System</p>
                        <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">UI Design</p> 
                        </div>
                        <Button variant="ghostnobg" size="icon" asChild>
                        <Link href="https://www.github.com/tymothy6/copilot">
                            <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">Link to Figma prototype</span>
                        </Link>            
                    </Button>  
                    </CardContent>   
                
                </ButtonCard>
                <ButtonCard onClick={() => window.location.href = '/work'}className="h-max">
                    
                    <CardImageHeader>
                  
                    <img
                        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                        alt="Design System"
                        className="rounded-t-lg grow object-cover" />
                   
                    </CardImageHeader>
                   
                    <CardContent className="flex justify-between items-center pt-4 h-full">
                        <div className="flex-col">
                        <p className="text-left text-lg font-semibold text-foreground">Design System</p>
                        <p className="text-left text-base font-medium text-gray-800 dark:text-gray-200">UI Design</p> 
                        </div>
                        <Button variant="ghostnobg" size="icon" asChild>
                        <Link href="https://www.github.com/tymothy6/copilot">
                            <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                            <span className="sr-only">Link to Figma prototype</span>
                        </Link>            
                    </Button>  
                    </CardContent>   
                
                </ButtonCard>
                </div>
            </div>

        </div>
    )
}

export function PasswordHero () {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Verify the password and navigate to the protected page
        console.log(values)
    }

    return(
        <div className="flex-col pt-52 pb-56 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl font-semibold mb-4">Protected page</h1>
            <p className="text-2xl font-medium tracking-wide text-gray-800 dark:text-gray-200 mb-8">🔐 Enter your password to proceed </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="T0pS3cr3t&F0rY0ur3y3s0n1y" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

function goBack(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    window.history.back();
}

export function NotFoundHero () {
    return (
        <div className="flex-col pt-52 pb-56 mx-24 max-w-xl md:max-w-5xl relative">
            <img src="/shiba-404.png" alt="Shiba inu with papers in their mouth" className="absolute bottom-0 right-0 z-0 w-80 h-80" />
            <h1 className="text-8xl font-semibold mb-4 relative">404</h1>
            <p className="text-4xl font-medium tracking-wide text-gray-800 dark:text-gray-200 mb-8 relative">😖 Hmm, we couldn't find what you're looking for</p>
            <Button variant="default" size="lg" className="relative" asChild>
                <Link href="#" onClick={goBack}>
                <span className="text-lg">Go back</span>
                </Link>
            </Button>
        </div>

    )
}

export function LicenseHero () {
    return (
        <div>
            <div className="flex-col pt-52 pb-56 mx-24 max-w-xl md:max-w-2xl">
                <h1 className="text-6xl font-semibold mb-8">Licenses</h1>
                <p className="text-2xl font-regular tracking-wide text-gray-800 dark:text-gray-200 mb-8">All graphical assets on this website are licensed for personal use. If you would like to use a specific asset, please check the license below or reach out to me 😊</p>
            </div>
            <div className="grid grid-cols-2 space-x-12 justify-center py-28 mx-24">
                <div className="flex-col space-y-8">
                    <h2 className="text-3xl font-semibold">Images</h2>
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses images sourced from Unsplash and generated with AI using DALL-E. Some project images were made with BioRender and licensed for personal use only.</p>
                   
                    <div className="flex space-x-4">
                        <Button variant="secondary" asChild>
                            <Link href="https://unsplash.com/license">Unsplash</Link>
                        </Button>
                       
                        <Button variant="secondary" asChild>
                            <Link href="https://openai.com/dall-e-3">
                            DALL-E</Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <Link href="https://www.biorender.com">
                            BioRender</Link>
                        </Button>
                    </div>
                    
                </div>
            
                    <img 
                    src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
                    alt="Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
                    className="rounded-lg object-cover w-[48rem] h-[16rem]"
                    />
                
            </div>

            <div className="grid grid-cols-2 space-x-12 justify-center pb-28 mx-24">
                <div className="flex-col space-y-8">
                    <h2 className="text-3xl font-semibold">Fonts</h2>
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses the Inter typeface by Rasmus Andersson.</p>
                  
                        <Button variant="default" asChild>
                            <Link href="https://rsms.me/inter/#free">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Inter</Link>
                        </Button>
                   
                </div>
                <img 
                src="https://github.com/rsms/inter/raw/master/misc/readme/intro.png"
                alt="Inter typeface by Rasmus Andersson"
                className="rounded-lg object-cover w-[48rem] h-[16rem]"
                />
            </div>

            <div className="grid grid-cols-2 space-x-12 justify-center pb-28 mx-24">
                <div className="flex-col space-y-8">
                    <h2 className="text-3xl font-semibold">Icons</h2>
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses icons from Radix UI. <br /><code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
                    npm i @radix-ui/react-icons
                    </code>
                    </p>
                    
                  
                        <Button variant="default" asChild>
                            <Link href="https://github.com/radix-ui/icons">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Radix Icons</Link>
                        </Button>
                   
                </div>
                <img 
                src="https://github.com/radix-ui/icons/raw/master/icons.png"
                alt="Icons from Radix UI"
                className="rounded-lg object-cover w-[48rem] h-[16rem]"
                />
            </div>

            <div className="grid grid-cols-2 space-x-12 justify-center pb-56 mx-24">
                <div className="flex-col space-y-8">
                    <h2 className="text-3xl font-semibold">Components</h2>
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses open-source React components from shadcn/ui and Radix UI Primitives. <br /><br />
                    Find more about installation and usage guidelines in their GitHub repositories.</p>
                    <div className="flex space-x-4">
                        <Button variant="secondary" asChild>
                            <Link href="https://github.com/shadcn-ui/ui">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            shadcn/ui</Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <Link href="https://github.com/radix-ui/primitives">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Radix UI</Link>
                        </Button>
                    </div>
                </div>
                <img 
                src="https://github.com/shadcn-ui/ui/raw/main/apps/www/public/og.jpg"
                alt="Components from shadcn/ui"
                className="rounded-lg object-cover w-[48rem] h-[16rem]"
                />
            </div>

        </div>

    )
}