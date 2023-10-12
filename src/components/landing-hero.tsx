"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

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
        className="flex-col py-56 my-4 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl font-semibold mb-4">👋🏼 I'm Tim, an experience designer with a background in quantitative research</h1>
            <h1 className="text-gray-400 dark:text-gray-300 text-6xl font-semibold mb-8">🤗 I care about making complex ideas accessible to everyone</h1>
            <Button variant="gradient" size="lg"><span className="text-lg">Meet me</span></Button>
        </motion.div>
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
        <div className="flex-col py-56 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl font-semibold mb-4">Protected page</h1>
            <p className="text-2xl font-regular tracking-wide text-gray-800 dark:text-gray-200 mb-8">🔐 Enter your password to proceed </p>
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

export function NotFoundHero () {
    return (
        <div className="flex-col py-56 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-8xl font-semibold mb-4">404</h1>
            <p className="text-4xl font-regular tracking-wide text-gray-800 dark:text-gray-200 mb-8">😥 Hmm, we couldn't find what you're looking for</p>
            <Button variant="default" size="lg" asChild>
                <Link href="/">
                <span className="text-lg">Take me back</span>
                </Link>
            </Button>
        </div>

    )
}