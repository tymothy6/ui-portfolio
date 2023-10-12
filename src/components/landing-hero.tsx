"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

import { FigmaLogoIcon } from "@radix-ui/react-icons"

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
        <motion.div 
        id={id}
        initial={{ x: '-120%', opacity: 0 }}
        animate={{ x: '0', opacity: 1 }}
        transition={{
            type: 'tween',
            ease: 'easeIn',
            duration: 0.5,  
        }}
        className="flex flex-col pt-52 pb-56 my-4 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl font-semibold mb-4">👋🏼 I'm Tim, an experience designer with a background in quantitative research</h1>
            <h1 className="text-6xl font-semibold pb-4 mb-4"> 🤗 I care about making <span className="bg-gradient-to-r from-primary to-pink-500 via-blue-500 inline-block text-transparent bg-clip-text bg-300% animate-animated-gradient tracking-[0.0025em]">complex ideas accessible</span> to everyone</h1>
            <Button variant="gradient" size="lg" className="w-36" asChild>
                <Link href="/#work">
                    <span className="text-lg">Meet me</span>
                </Link>
            </Button>
        </motion.div>
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
        <div className="flex-col pt-52 pb-56 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-8xl font-semibold mb-4">404</h1>
            <p className="text-4xl font-medium tracking-wide text-gray-800 dark:text-gray-200 mb-8">😖 Hmm, we couldn't find what you're looking for</p>
            <Button variant="default" size="lg" asChild>
                <Link href="#" onClick={goBack}>
                <span className="text-lg">Go back</span>
                </Link>
            </Button>
        </div>

    )
}