"use client"

import * as React from "react"
import Link from "next/link"

import styles from "@/components/modules/landing.module.css"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useTheme } from "next-themes"
import { useToast } from "@/components/ui/use-toast"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { LinkedInLogoIcon, GitHubLogoIcon, VercelLogoIcon, InfoCircledIcon, CopyIcon, ColorWheelIcon, Link2Icon, ExternalLinkIcon } from "@radix-ui/react-icons"

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
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Alert,
    AlertTitle,
    AlertDescription,
} from "@/components/ui/alert"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { StyleNavigation } from "@/components/doc-sidebar"
  

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
        className="inset-0 flex flex-col gap-8 my-4 mx-12 md:mx-16 lg:mx-24 max-w-2xl md:max-w-4xl lg:max-w-5xl scroll-mt-48 z-[11]">
            <h1 className="text-5xl md:text-6xl font-semibold cursor-default pointer-events-none">👋🏼 I&apos;m Tim, experience designer and quantitative researcher</h1>
            <h1 className="text-5xl md:text-6xl font-semibold pb-4 cursor-default pointer-events-none"> 🤗 I care about making <span className="bg-gradient-to-r from-primary to-pink-500 via-blue-600 dark:to-pink-600 dark:via-blue-500 inline-block text-transparent bg-clip-text bg-300% animate-animated-gradient tracking-[0.0025em]">complex ideas accessible</span> to everyone</h1>
            <div>
            <Button variant="gradient" size="default" className="md:w-36" asChild>
                <Link href="/#about">
                    <span className="text-base md:text-lg font-medium">Meet me</span>
                </Link>
            </Button>
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
        <div className="flex flex-col justify-center pt-36 lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 max-w-xl md:max-w-5xl min-h-[100vh]">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">Protected page</h1>
            <p className="text-xl md:text-2xl font-[450] leading-relaxed text-gray-800 dark:text-gray-200 mb-8">🔐 Enter your password to proceed </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel><span className="md:text-base">Password</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="T0pS3cr3t&F0rY0ur3y3s0n1y" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit"><span className="text-sm md:text-base font-medium">Submit</span></Button>
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
        <div className="flex flex-col justify-center pt-0 md:pt-24 pb-56 mx-8 md:mx-24 lg:mx-48 max-w-xl md:max-w-5xl min-h-[100vh] z-[10]">
            <h1 className="text-6xl md:text-8xl md:pl-8 font-semibold mb-4">404</h1>
            <p className="text-2xl md:text-3xl lg:text-4xl md:pl-8 font-[450] text-gray-800 dark:text-gray-200 mb-4">😖 Hmm, we couldn&apos;t find what you&apos;re looking for. He might have something to do with it..</p>
            <div className="md:pl-8">
                <Button variant="default" size="default" className="md:w-36" asChild>
                    <Link href="#" onClick={goBack}>
                    <span className="text-base font-medium">Go back</span>
                    </Link>
                </Button>
            </div>
        </div>

    )
}

export function LicenseHero () {
    return (
        <div>
            <div className={styles.grid}>
            <div className="flex flex-col justify-center gap-8 min-h-[100vh] pt-36 lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 xl:mx-64 max-w-xl md:max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-semibold md:pl-8 z-[3]">Licenses</h1>
                <p className="text-xl md:text-2xl md:pl-8 font-[450] leading-relaxed text-gray-800 dark:text-gray-200 z-[3]">All graphical assets on this website are licensed for personal use. If you would like to use a specific asset, please check the license below or reach out to me 😊</p>
                <div className="md:pl-8 z-[3]">
                    <Button variant="gradient" size="default" className="relative md:w-36" asChild>
                        <Link href="/#contact">
                        <span className="text-base font-medium">Contact me</span>
                        </Link>
                    </Button>
                </div>
              
            </div>
            </div>
            <div className="w-full border-t-[1px]" />
            <div className="flex flex-col gap-8 md:px-8 pt-32 pb-36 mx-8 md:mx-24 lg:mx-48 xl:mx-64">
                    
                    <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
                        <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-semibold">Images</h2>
                        <Separator />
                        <p className="text-lg font-regular text-gray-800 dark:text-gray-200 leading-relaxed">This website uses images sourced from Unsplash and generated with AI using OpenAI DALL-E. Some project images were made with BioRender and licensed for personal use only.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="default" asChild>
                                <Link href="https://unsplash.com/license">Unsplash</Link>
                            </Button>
                            <Button variant="default" asChild>
                                <Link href="https://openai.com/dall-e-3">
                               OpenAI</Link>
                            </Button>
                            <Button variant="default" asChild>
                                <Link href="https://www.biorender.com">
                                BioRender</Link>
                            </Button>
                        </div>
                        </div>
                        
                        <img 
                        src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
                        alt="Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
                        className="rounded-lg object-cover object-top"
                        />
                        
                        
                    </div>
               
                
            </div>

            <div className="flex flex-col gap-8 md:px-8 pb-36 mx-12 md:mx-24 lg:mx-48 xl:mx-64">
         
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Fonts</h2>
                    <Separator />
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200 leading-relaxed">This website uses the Inter typeface by Rasmus Andersson and Source Serif 4 by Frank Grießhammer.</p>
                        <div className="flex flex-wrap gap-4">
                        <Button variant="default" asChild>
                            <Link href="https://rsms.me/inter/#free">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Inter</Link>
                        </Button>
                        
                        <Button variant="default" asChild>
                            <Link href="https://fonts.google.com/specimen/Source+Serif+4?query=source+serif+4">
                                Source Serif 4</Link>
                        </Button>
                        </div>
                    </div>
                    <img 
                    src="https://images.ctfassets.net/mzyich089xy0/5FaS7kdSLAjGgYaM6UsqQB/d3f169458fb94a49b105cb8797f02a12/licenses-inter.png"
                    alt="Inter typeface by Rasmus Andersson"
                    className="rounded-lg object-cover object-top"
                    />
                </div>
               
            </div>

            <div className="flex flex-col gap-8 md:px-8 pb-36 mx-12 md:mx-24 lg:mx-48 xl:mx-64">
            
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Icons</h2>
                    <Separator />
                        <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses open-source icons from Radix UI.<br />
                        </p>
                        <p className="text-lg font-regular text-foreground mb-2"><code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium md:font-semibold">
                        npm i @radix-ui/react-icons</code>
                        </p>
                        <span>
                            <Button variant="default" asChild>
                                <Link href="https://github.com/radix-ui/icons">
                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                    Radix Icons</Link>
                            </Button>
                        </span>
                    </div>
                    <img 
                    src="https://github.com/radix-ui/icons/raw/master/icons.png"
                    alt="Icons from Radix UI"
                    className="rounded-lg object-cover object-top"
                    />
                </div>
                
            </div>

            <div className="flex flex-col gap-8 md:px-8 pb-32 md:pb-48 mx-12 md:mx-24 lg:mx-48 xl:mx-64">
            
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Components</h2>
                    <Separator />
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses open-source React components from shadcn/ui and Radix UI. Read about installation and usage in their GitHub repositories and the linked docs.</p>
                        <div className="flex space-x-4">
                            <Button variant="default" asChild>
                                <Link href="https://github.com/shadcn-ui/ui">
                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                shadcn/ui</Link>
                            </Button>
                            <Button variant="default" asChild>
                                <Link href="https://github.com/radix-ui/primitives">
                                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Radix UI</Link>
                            </Button>
                        </div>
                    </div>
                    <img 
                    src="https://github.com/shadcn-ui/ui/raw/main/apps/www/public/og.jpg"
                    alt="Components from shadcn/ui"
                    className="rounded-lg object-cover object-top"
                    />
                </div>
               
            </div>
           

        </div>

    )
}

export function StyleHero () {
    const { toast } = useToast()
    const areaRef = React.useRef<HTMLDivElement>(null)
    const bgExampleRef = React.useRef<HTMLDivElement>(null)
    const buttonExampleRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const codeContainer = areaRef.current
        if (codeContainer) {
            codeContainer.style.height = "auto"
            const percentHeight = codeContainer.scrollHeight / 2;
            codeContainer.style.height = `${percentHeight}px`
        }
    }, [])

    const copyUrl = async (id: string) => {
        try {
            const urlToCopy = `${window.location.href.split('#')[0]}#${id}`;
            await navigator.clipboard.writeText(urlToCopy);
            toast({
                title:"Done!",
                description: "URL copied to your clipboard.",
            });
        } catch (err) {
            toast({
                title:"Error",
                description: "Something went wrong. Ctrl/Cmd+C will have to do for now.",
            });
        }  
    }
    

    async function handleCopy(ref: React.RefObject<HTMLDivElement>) {
        if (ref.current) {
            // Use innerText or textContent to get the content of the div
            const text = ref.current.innerText || ref.current.textContent!;
            await navigator.clipboard.writeText(text);
            toast({
                title: "Done!",
                description: "Code snippet copied to your clipboard.",
            });
        } else {
            console.error('Reference to code container is null');
            toast({
                title: "Error",
                description: "Something went wrong. Ctrl/Cmd+C will have to do for now.",
            });
        }
    }
    
    const copyColours = async (text: string) => {
        try {
          await navigator.clipboard.writeText(text);
         
          toast({
            title: "Done!",
            description: "Colour copied to clipboard 🌈",
            
          });
        } catch (error) {
       
          toast({
            title: "Error",
            description: "Failed to copy colour. Please try again later.",
           
          })
        }
      }

    const { resolvedTheme } = useTheme() // use this hook to get the current theme

    const bgExample = `--primary: 263.4 70% 50.4%;
--primary-foreground: 210 20% 98%;`

    const themes = `@layer base {
        :root {
          --background: 0 0% 100%;
          --foreground: 224 71.4% 4.1%;
          --card: 0 0% 100%;
          --card-foreground: 224 71.4% 4.1%;
          --popover: 0 0% 100%;
          --popover-foreground: 224 71.4% 4.1%;
          --primary: 262.1 83.3% 57.8%;
          --primary-foreground: 210 20% 98%;
          --secondary: 220 14.3% 95.9%;
          --secondary-foreground: 220.9 39.3% 11%;
          --muted: 220 14.3% 95.9%;
          --muted-foreground: 220 8.9% 46.1%;
          --accent: 220 14.3% 95.9%;
          --accent-foreground: 220.9 39.3% 11%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 20% 98%;
          --border: 220 13% 91%;
          --input: 220 13% 91%;
          --ring: 262.1 83.3% 57.8%;
          --radius: 0.5rem;
        }
       
        .dark {
          --background: 222 47% 11%;
          --foreground: 210 20% 98%;
          --card: 229 84% 5%;
          --card-foreground: 210 20% 98%;
          --popover: 229 84% 5%;
          --popover-foreground: 210 20% 98%;
          --primary: 263.4 70% 50.4%;
          --primary-foreground: 210 20% 98%;
          --secondary: 215 27.9% 16.9%;
          --secondary-foreground: 210 20% 98%;
          --muted: 215 27.9% 16.9%;
          --muted-foreground: 217.9 10.6% 64.9%;
          --accent: 215 27.9% 16.9%;
          --accent-foreground: 210 20% 98%;
          --destructive: 0 62.8% 30.6%;
          --destructive-foreground: 210 20% 98%;
          --border: 215 27.9% 16.9%;
          --input: 215 27.9% 16.9%;
          --ring: 263.4 70% 50.4%;
        }
    }
    `

    const colours = [
        {
            name: "background",
            hslLight: "0 0% 100%",
            hslDark: "224 71.4% 4.1%",
            rgbLight: "255, 255, 255",
            hexLight: "#FFFFFF",
            oklchLight: "100% 0 0",
            rgbDark: "3, 7, 18",
            hexDark: "#030712",
            oklchDark: "12.96% 0.027 261.69",
        },
        {
            name: "foreground",
            hslLight: "224 71.4% 4.1%",
            hslDark: "210 20% 98%",
            rgbLight: "11, 11, 11",
            hexLight: "#0B0B0B",
            oklchLight: "14.96% 0 0",
            rgbDark: "255, 255, 255",
            hexDark: "#FFFFFF",
            oklchDark: "100% 0 0",
        },
        {
            name: "card",
            hslLight: "0 0% 100%",
            hslDark: "224 71.4% 4.1%",
            rgbLight: "255, 255, 255",
            hexLight: "#FFFFFF",
            oklchLight: "100% 0 0",
            rgbDark: "11, 11, 11",
            hexDark: "#0B0B0B",
            oklchDark: "14.96% 0 0",
        },
        {
            name: "card-foreground",
            hslLight: "224 71.4% 4.1%",
            hslDark: "210 20% 98%",
            rgbLight: "11, 11, 11",
            hexLight: "#0B0B0B",
            oklchLight: "14.96% 0 0",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
            oklchDark: "98.46% 0.002 247.84",
        },
        {
            name: "popover",
            hslLight: "0 0% 100%",
            hslDark: "224 71.4% 4.1%",
            rgbLight: "255, 255, 255",
            hexLight: "#FFFFFF",
            oklchLight: "100% 0 0",
            rgbDark: "3, 7, 18",
            hexDark: "#030712",
            oklchDark: "12.96% 0.027 261.69",
        },
        {
            name: "popover-foreground",
            hslLight: "224 71.4% 4.1%",
            hslDark: "210 20% 98%",
            rgbLight: "11, 11, 11",
            hexLight: "#0B0B0B",
            oklchLight: "14.96% 0 0",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
            oklchDark: "98.46% 0.002 247.84",
        },
        {
            name: "primary",
            hslLight: "262.1 83.3% 57.8%",
            hslDark: "263.4 70% 50.4%",
            rgbLight: "124, 58, 237",
            hexLight: "#7C3AED",
            oklchLight: "54.13% 0.247 293.01",
            rgbDark: "109, 40, 217",
            hexDark: "#6D28D9",
            oklchDark: "49.07% 0.241 292.58",
        },
        {
            name: "primary-foreground",
            hslLight: "210 20% 98%",
            hslDark: "210 20% 98%",
            rgbLight: "249, 250, 251",
            hexLight: "#F9FAFB",
            oklchLight: "98.46% 0.002 247.84",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
            oklchDark: "98.46% 0.002 247.84",
        },
        {
            name: "secondary",
            hslLight: "220 14.3% 95.9%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "243, 244, 246",
            hexLight: "#F3F4F6",
            oklchLight: "96.7% 0.003 264.54",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
            oklchDark: "27.81% 0.03 256.85",
        },
        {
            name: "secondary-foreground",
            hslLight: "220.9 39.3% 11%",
            hslDark: "210 20% 98%",
            rgbLight: "17, 24, 39",
            hexLight: "#111827",
            oklchLight: "21.01% 0.032 264.66",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
            oklchDark: "98.46% 0.002 247.84",
        },
        {
            name: "muted",
            hslLight: "220 14.3% 95.9%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "243, 244, 246",
            hexLight: "#F3F4F6",
            oklchLight: "96.7% 0.003 264.54",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
            oklchDark: "27.81% 0.03 256.85",
        },
        {
            name: "muted-foreground",
            hslLight: "220 8.9% 46.1%",
            hslDark: "217.9 10.6% 64.9%",
            rgbLight: "107, 114, 128",
            hexLight: "#6B7280",
            oklchLight: "55.1% 0.023 264.36",
            rgbDark: "156, 163, 175",
            hexDark: "#9CA3AF",
            oklchDark: "71.37% 0.019 261.32",
        },
        {
            name: "accent",
            hslLight: "220 14.3% 95.9%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "243, 244, 246",
            hexLight: "#F3F4F6",
            oklchLight: "96.7% 0.003 264.54",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
            oklchDark: "27.81% 0.03 256.85",
        },
        {
            name: "accent-foreground",
            hslLight: "220.9 39.3% 11%",
            hslDark: "210 20% 98%",
            rgbLight: "17, 24, 39",
            hexLight: "#111827",
            oklchLight: "21.01% 0.032 264.66",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
            oklchDark: "98.46% 0.002 247.84",
        },
        {
            name: "destructive",
            hslLight: "0 84.2% 60.2%",
            hslDark: "0 62.8% 30.6%",
            rgbLight: "239, 68, 68",
            hexLight: "#EF4444",
            oklchLight: "63.68% 0.208 25.33",
            rgbDark: "127, 29, 29",
            hexDark: "#7F1D1D",
            oklchDark: "39.58% 0.133 25.72",
        },
        {
            name: "destructive-foreground",
            hslLight: "210 20% 98%",
            hslDark: "210 20% 98%",
            rgbLight: "249, 250, 251",
            hexLight: "#F9FAFB",
            oklchLight: "98.46% 0.002 247.84",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
            oklchDark: "98.46% 0.002 247.84",
        },
        {
            name: "border",
            hslLight: "220 13% 91%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "229, 231, 235",
            hexLight: "#E5E7EB",
            oklchLight: "92.76% 0.006 264.53",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
            oklchDark: "27.81% 0.03 256.85",
        },
        {
            name: "input",
            hslLight: "220 13% 91%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "229, 231, 235",
            hexLight: "#E5E7EB",
            oklchLight: "92.76% 0.006 264.53",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
            oklchDark: "27.81% 0.03 256.85",
        },
        {
            name: "ring",
            hslLight: "262.1 83.3% 57.8%",
            hslDark: "263.4 70% 50.4%",
            rgbLight: "124, 58, 237",
            hexLight: "#7C3AED",
            oklchLight: "54.13% 0.247 293.01",
            rgbDark: "109, 40, 217",
            hexDark: "#6D28D9",
            oklchDark: "49.07% 0.241 292.58",
        }
        
    ]

    // mapping colour names to TailwindCSS classes
    function getBgClass(colorName: string) {
        switch (colorName) {
          case 'background':
            return 'bg-background';
          case 'foreground':
            return 'bg-foreground';
            case 'card':
            return 'bg-card';
            case 'card-foreground':
            return 'bg-card-foreground';
            case 'popover':
            return 'bg-popover';
            case 'popover-foreground':
            return 'bg-popover-foreground';
            case 'primary':
            return 'bg-primary';
            case 'primary-foreground':
            return 'bg-primary-foreground';
            case 'secondary':
            return 'bg-secondary';
            case 'secondary-foreground':
            return 'bg-secondary-foreground';
            case 'muted':
            return 'bg-muted';
            case 'muted-foreground':
            return 'bg-muted-foreground';
            case 'accent':
            return 'bg-accent';
            case 'accent-foreground':
            return 'bg-accent-foreground';
            case 'destructive':
            return 'bg-destructive';
            case 'destructive-foreground':
            return 'bg-destructive-foreground';
            case 'border':
            return 'bg-border';
            case 'input':
            return 'bg-input';
            case 'ring':
            return 'bg-ring';
          default:
            return '';
        }
      }


    return (
        <div>
            <div className={styles.grid}>
            <div className="flex flex-col justify-center gap-8 pt-36 min-h-[100vh] lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 xl:mx-64 max-w-xl md:max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-semibold md:pl-8 z-[3]">Style Guide</h1>
                <p className="text-xl md:text-2xl md:pl-8 font-[450] leading-relaxed text-gray-800 dark:text-gray-200 z-[3] ">This website is a React app built on the Next.js framework with TailwindCSS. I&apos;ve made it easy for you to duplicate my styles. You can copy and paste the CSS variables into the <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-xl font-semibold">globals.css</code> file of your codebase. You&apos;ll need to have shadcn/ui set up for semantic styling of components to work out-of-the-box. Not using a framework? I&apos;ve defined agnostic tokens you can use for your own components.</p>
                    <div className="flex flex-row flex-wrap gap-4 md:pl-8 z-[3]">
                        <Button variant="gradient" size="default" asChild>
                            <Link href="https://nextjs.org/docs">
                            <VercelLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-base font-medium">Install Next.js</span>
                            </Link>
                        </Button>
                        <Button variant="gradient" size="default" asChild>
                            <Link href="https://ui.shadcn.com/docs/installation">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-base font-medium">Install shadcn/ui</span>
                            </Link>
                        </Button>
                        
                    </div>
               
            </div>
            </div>
            
            <div className="flex flex-row w-full h-full gap-0 border-t-[1px]">
                <StyleNavigation />

            <div className="flex flex-col w-full gap-8 pt-24 pb-36 px-8 md:px-24 lg:pl-24 lg:pr-48 xl:pl-40 xl:pr-64">
               
            <div>
            <h2 className="text-3xl font-semibold mb-4">Themes</h2>
            <Separator />
            </div>
            <div 
            id="darkmode" 
            className="flex flex-row gap-2 w-max items-center scroll-mt-24 cursor-pointer"
            onClick={() => copyUrl('darkmode')}>
            <h3 className="text-2xl font-semibold">
                    Dark mode <Link2Icon className="inline text-muted-foreground h-6 w-6" /></h3>
            </div>
                    
                
                <p className="text-lg text-foreground font-regular leading-relaxed">
                This website uses <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium">next-themes</code> to manage light & dark styles and match them to system preferences. The <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium">useTheme</code> hook is used to set and access the current theme and a <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium">ThemeProvider</code> is used to wrap the root layout.
                </p>
                <div className="mb-4">
                <Button variant="default" size="default" asChild>
                            <Link href="https://github.com/pacocoursey/next-themes">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-sm">next-themes</span>
                            </Link>
                        </Button>
                </div>
            <div 
            id="variables" 
            className="flex flex-row gap-2 w-max items-center scroll-mt-24 cursor-pointer"
            onClick={() => copyUrl('variables')}>
                <h3 className="text-2xl font-semibold">
                    CSS variables <Link2Icon className="inline text-muted-foreground h-6 w-6" /></h3>
            </div>
            <Alert className="max-w-2xl mx-auto">
            <InfoCircledIcon className="h-4 w-4" />
                <AlertTitle className="font-semibold">Syntax</AlertTitle>
                        <AlertDescription className="text-base">
                            CSS variables are defined without the <code className="relative rounded bg-white dark:bg-slate-700 px-[0.2rem] py-[0.1rem] font-mono text-base font-medium">hsl()</code> colour space function according to TailwindCSS <Link href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"><span>guidelines<ExternalLinkIcon className="inline ml-1 h-4 w-4 text-muted-foreground"/></span></Link>. 
                        </AlertDescription>
            </Alert>
                <div className="flex flex-col w-full gap-4">
                    <Label htmlFor="themes"><span className="text-base text-muted-foreground">Paste desired variables into your code</span></Label>

                    <div className="flex flex-col gap-0 w-full relative">
                    <div id="codeHeader" className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm">
                        
                            <div className="flex flex-row items-center gap-2 px-4 py-2">
                            <div className="flex p-1 rounded-lg bg-primary text-primary-foreground text-xs font-mono cursor-default">css</div>
                            styles
                            </div>
                            <Button variant="outlineinverse" size="default" onClick={() => handleCopy(areaRef)} className="text-muted-foreground rounded-none rounded-tr-md border-none font-sans w-max px-4">
                            Copy
                            <CopyIcon className="h-[1rem] w-[1rem] ml-2" />
                            </Button>
                        </div>
                        <div 
                        ref={areaRef}
                        className="relative w-full overflow-y-auto overflow-x-auto bg-slate-800 dark:bg-slate-950 border border-accent rounded-b-md font-mono text-sm font-medium py-4 px-6">
                            
                            <SyntaxHighlighter language="css" style={a11yDark} customStyle={{ backgroundColor: '#02061700' }}>
                                {themes}
                            </SyntaxHighlighter>
                            
                        </div>
                     </div>

                </div>

                <div>
                <div 
                id="semantics" 
                className="flex flex-row gap-2 w-max items-center my-4 scroll-mt-24 cursor-pointer"
                onClick={() => copyUrl('semantics')}>
                <h3 className="text-2xl font-semibold mb-4">
                      Semantics <Link2Icon className="inline text-muted-foreground h-6 w-6" />
                </h3>
                </div>
            
                    <p className="text-lg text-foreground font-regular mb-4">
                        For the following CSS variables:
                    </p>

                <div className="flex flex-col w-full gap-4">
                    <Label htmlFor="default"><span className="text-base text-muted-foreground">Primary button colours (dark)</span></Label>
                    <div className="flex flex-col gap-0 w-full">
                    <div id="codeHeader" className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm">
                            <div className="flex flex-row items-center gap-2 px-4 py-2">
                            <div className="flex p-1 rounded-lg bg-primary text-primary-foreground text-xs font-mono cursor-default">css</div>
                            button-primary
                            </div>
                            <Button variant="outlineinverse" size="icon" onClick={() => handleCopy(bgExampleRef)} className="text-muted-foreground rounded-none rounded-tr-md border-none">
                                <CopyIcon className="h-[1rem] w-[1rem]" />
                            </Button>
                        </div>
                        
                        <div
                            ref={bgExampleRef}
                            className="w-full overflow-y-auto overflow-x-auto bg-slate-800 dark:bg-slate-950 border border-accent rounded-b-md font-mono text-sm font-medium py-4 px-6">
                                <SyntaxHighlighter language="css" style={a11yDark} customStyle={{ backgroundColor: '#02061700' }} wrapLines={true}>
                                    {bgExample}
                                </SyntaxHighlighter>
                        </div>
                    </div>
                    <p className="text-lg text-foreground font-regular mt-4 leading-relaxed">
                      The <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">background</code> variable is used for the background colour of the button and the <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">foreground</code> variable is used for the text colour.
                    </p>
                    <Alert className="my-4 max-w-2xl mx-auto">
                        <InfoCircledIcon className="h-4" />
                        <AlertTitle className="font-semibold">Naming</AlertTitle>
                        <AlertDescription className="text-base">
                            The <code className="relative rounded bg-white dark:bg-slate-700 px-[0.4rem] py-[0.2rem] font-mono text-sm font-medium">background</code> suffix is omitted when the variable is used for the background colour of the component.
                        </AlertDescription>
                    </Alert>
                    <p className="text-lg text-foreground font-regular leading-relaxed mb-4">
                    The background colour of the following <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">Button</code> styled with Tailwind utility classes will be <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">hsl(var(--primary))</code> and the foreground colour will be <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">hsl(var(--primary-foreground))</code>.
                    </p>

                    <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="mb-2">
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview">
                            <div className={`${styles.card} bg-card/50 flex grow items-center justify-center w-full h-full border border-accent rounded-md p-16`}>
                                <Button className="bg-primary text-primary-foreground z-[2]">Click me</Button>
                            </div>
                    </TabsContent>
                    <TabsContent value="code">

                    <div className="flex flex-col gap-0 w-full">
                        <div id="codeHeader" className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm">
                            <div className="flex flex-row items-center gap-2 px-4 py-2">
                            <div className="flex p-1 rounded-lg bg-primary text-primary-foreground text-xs font-mono cursor-default">jsx</div>
                            button-demo
                            </div>
                            <Button variant="outlineinverse" size="icon" onClick={() => handleCopy(buttonExampleRef)} className="text-muted-foreground rounded-none rounded-tr-md border-none">
                                <CopyIcon className="h-[1rem] w-[1rem]" />
                            </Button>
                        </div>
                        <div 
                            ref={buttonExampleRef}
                            className="w-full overflow-y-auto overflow-x-auto bg-slate-800 dark:bg-slate-950 border border-accent rounded-b-md font-mono text-sm font-medium py-4 px-6">
                                <SyntaxHighlighter language="jsx" style={a11yDark} customStyle={{ backgroundColor: '#02061700' }} showLineNumbers={true}>
                                    {`import { Button } from "@/components/ui/button"

export function ClickMeButton() {
    return <Button 
    className="bg-primary text-primary-foreground"
    >Click me</Button>
}`}
                                </SyntaxHighlighter>
                                
                        </div>

                        
                           
                    </div>

                    </TabsContent>
                    </Tabs>

                    <p className="text-lg text-foreground font-regular mt-4">
                        Check the <Link href="https://ui.shadcn.com/docs/theming" className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"><span>Theming<ExternalLinkIcon className="inline ml-1 h-5 w-5 text-muted-foreground"/></span></Link> docs for full details on the semantic use of variables.
                    </p>
                </div>
                </div>
                
            
                
                <div 
                id="colourspace" 
                className="flex flex-row gap-2 w-full md:w-max items-center mt-4 scroll-mt-24 cursor-pointer"
                onClick={() => copyUrl('colourspace')}>
                <h3 className="text-2xl font-semibold whitespace-wrap">
                      Want HEX or RGB colours instead? <Link2Icon className="inline text-muted-foreground h-6 w-6" />
                </h3>
                </div>
                <p className="text-lg text-foreground font-regular">
                🤓 I thought you&apos;d never ask.
                </p>
                <Alert className="max-w-2xl mx-auto">
                <InfoCircledIcon className="h-4 w-4" />
                    <AlertTitle className="font-semibold">Tips</AlertTitle>
                        <AlertDescription className="text-base">
                        Click a table cell to copy the value to your clipboard. Toggle between light and dark themes in the header to see the relevant colours.
                        </AlertDescription>
                    </Alert>
                <Table>
                    <TableCaption>Your wish is my command</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead><ColorWheelIcon className="h-4 w-4" /></TableHead>
                        <TableHead className="text-sm font-semibold w-[200px]">Variable name</TableHead>
                        <TableHead className="text-sm font-semibold">HEX</TableHead>
                        <TableHead className="text-sm font-semibold min-w-[150px]">RGB</TableHead>
                        <TableHead className="text-sm font-semibold min-w-[150px]">LCH</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {colours.map((colour) => (
                        <TableRow key={colour.name}>
                            <TableCell><div className={`${getBgClass(colour.name)} h-[1.1rem] w-[1.1rem] rounded-sm border border-slate-300 dark:border-slate-700`}  /></TableCell>
                            <TableCell className="font-medium font-mono">{colour.name}</TableCell>
                            <TableCell className="font-mono cursor-pointer"
                            onClick={() => copyColours(resolvedTheme === 'dark' ? colour.hexDark : colour.hexLight)}>{resolvedTheme === 'dark' ? colour.hexDark : colour.hexLight}</TableCell>
                            <TableCell className="font-mono cursor-pointer"
                            onClick={() => copyColours(resolvedTheme === 'dark' ? colour.rgbDark : colour.rgbLight)}>{resolvedTheme === 'dark' ? colour.rgbDark : colour.rgbLight}</TableCell>
                            <TableCell className="font-mono cursor-pointer"
                            onClick={() => copyColours(resolvedTheme === 'dark' ? colour.oklchDark : colour.oklchLight)}>{resolvedTheme === 'dark' ? colour.oklchDark : colour.oklchLight}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
                
            <div className="pt-16">
            <h2 className="text-3xl font-semibold mb-4">Components</h2>
            <Separator />
            </div>
            <div 
            id="radix" 
            className="flex flex-row gap-2 w-max items-center cursor-pointer scroll-mt-24"
            onClick={() => copyUrl('radix')}>
                <h3 className="text-2xl font-semibold">
                    Radix Primitives</h3>
                    <Link2Icon className="text-muted-foreground h-6 w-6" />
            </div>
                
                <p className="text-lg text-foreground font-regular">
                Detailed styles for customized Radix UI components coming soon!
                </p>
                <div className="mb-4">
                <Button variant="default" size="default" asChild>
                            <Link href="https://www.radix-ui.com/primitives/docs/overview/introduction">
                            <Link2Icon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-sm">Radix Primitives Docs</span>
                            </Link>
                        </Button>
                </div>
                <div 
                id="shadcnui" 
                className="flex flex-row gap-2 w-max items-center cursor-pointer scroll-mt-24"
                onClick={() => copyUrl('shadcnui')}>
                <h3 className="text-2xl font-semibold">
                    shadcn/ui</h3>
                    <Link2Icon className="text-muted-foreground h-6 w-6" />
                </div>
                
                <p className="text-lg text-foreground font-regular">
                Detailed styles for customized shadcn/ui components coming soon!
                </p>
                <div className="mb-4">
                <Button variant="default" size="default" asChild>
                            <Link href="https://ui.shadcn.com/docs/components">
                            <Link2Icon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-sm">shadcn/ui Docs</span>
                            </Link>
                        </Button>
                </div>
         
            
            </div>

            </div>
        </div>
    )
}

export function ResumeHero () {
    return (
                <div>
                    <div className="flex flex-col justify-center min-h-[100vh] gap-8 pt-36 lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 xl:mx-64 max-w-xl md:max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-semibold md:pl-8 z-[3]">Want to learn more about me?</h1>
                        <p className="text-xl md:text-2xl md:pl-8 font-[450] leading-relaxed text-gray-800 dark:text-gray-200 z-[3]">🥹 I&apos;m flattered. Get a copy of my resume here and connect with me on LinkedIn.</p>
                        <div className="md:pl-8 z-[3]">
                        <Button variant="gradient" size="default" asChild>
                            <Link href="https://linkedin.com/in/timng88">
                            <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-base font-medium">Connect</span>
                            </Link>
                        </Button>
                        </div>
                    </div>
                </div>
    )
}

export function BlogHero () {
    return (
        <div className="flex flex-col justify-center min-h-[50vh] md:grid md:grid-cols-2 md:space-x-8 pt-36 lg:pt-48 pb-8 mx-8 md:mx-24 lg:mx-36 xl:mx-48">
                <h1 className="text-5xl md:text-6xl font-semibold mb-8 z-[3]">Design Blog</h1>
                <div className="flex flex-col justify-start w-full z-[3]">
                    <p className="text-xl lg:text-2xl text-foreground font-[450] text-gray-800 dark:text-gray-200 leading-relaxed md:tracking-wide mb-8">Welcome to my blog! I&apos;ll be posting about my personal projects, design ideas, and professional development here. Thoughts? I look forward to our conversation.</p>
                    <div className="z-[3]">
                        <Button variant="gradient" size="default" asChild>
                            <Link href="/#contact">
                            <span className="text-base font-medium">Contact me</span>
                            </Link>
                        </Button>
                    </div>
                </div>
                
               
        </div>
    )
}