"use client"

import * as React from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useTheme } from "next-themes"

import { FigmaLogoIcon, GitHubLogoIcon, InfoCircledIcon, CopyIcon, SunIcon, MoonIcon, ColorWheelIcon, Link2Icon } from "@radix-ui/react-icons"

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
import { Textarea } from "@/components/ui/textarea"
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
        className="flex flex-col gap-8 pt-24 md:pt-36 lg:pt-48 pb-64 lg: pb-72 my-4 mx-12 md:mx-16 lg:mx-24 max-w-2xl md:max-w-4xl scroll-mt-48">
            <h1 className="text-5xl mt-6 md:mt-0 md:text-6xl font-semibold lg:pl-8">👋🏼 I'm Tim, experience designer with a background in quantitative research</h1>
            <h1 className="text-5xl md:text-6xl font-semibold lg:pl-8 pb-4"> 🤗 I care about making <span className="bg-gradient-to-r from-primary to-pink-600 via-blue-600 dark:to-pink-500 dark:via-blue-500 inline-block text-transparent bg-clip-text bg-300% animate-animated-gradient tracking-[0.0025em]">complex ideas accessible</span> to everyone</h1>
            <div className="lg:pl-8">
                <Button variant="gradient" size="default" className="md:w-36" asChild>
                    <Link href="/#work">
                        <span className="text-base md:text-lg font-semibold">Meet me</span>
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
        <div className="flex-col pt-36 lg:pt-48 pb-56 mx-12 md:mx-16 lg:mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-semibold mb-4">Protected page</h1>
            <p className="text-xl md:text-2xl font-medium tracking-wide leading-relaxed text-gray-800 dark:text-gray-200 mb-8">🔐 Enter your password to proceed </p>
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
                    <Button type="submit"><span className="text-sm md:text-base font-semibold">Submit</span></Button>
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
        <div className="flex-col pt-36 lg:pt-48 pb-56 mx-12 md:mx-16 lg:mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl md:text-8xl md:pl-8 font-semibold mb-4">404</h1>
            <p className="text-2xl md:text-4xl md:pl-8 font-medium text-gray-800 dark:text-gray-200 mb-8">😖 Hmm, we couldn't find what you're looking for</p>
            <div className="md:pl-8">
                <Button variant="default" size="default" className="md:w-36" asChild>
                    <Link href="#" onClick={goBack}>
                    <span className="text-base font-semibold">Go back</span>
                    </Link>
                </Button>
            </div>
        </div>

    )
}

export function LicenseHero () {
    return (
        <div>
            <div className="flex flex-col gap-8 pt-36 lg:pt-48 pb-56 mx-12 md:mx-16 lg:mx-24 max-w-xl md:max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-semibold md:pl-8">Licenses</h1>
                <p className="text-xl md:text-2xl md:pl-8 font-medium leading-relaxed text-gray-800 dark:text-gray-200 ">All graphical assets on this website are licensed for personal use. If you would like to use a specific asset, please check the license below or reach out to me 😊</p>
                <div className="md:pl-8">
                    <Button variant="gradient" size="default" className="relative md:w-36" asChild>
                        <Link href="/#contact">
                        <span className="text-base font-semibold">Contact me</span>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-8 md:px-8 pt-28 pb-36 mx-12 md:mx-16 lg:mx-24">
           
                    <div className="flex flex-col gap-12 mx-8 lg:grid lg:grid-cols-2 lg:gap-16">
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
                        className="rounded-lg object-cover object-top md:w-[32rem] max-h-[16rem]"
                        />
                        
                        
                    </div>
               
                
            </div>

            <div className="flex flex-col gap-8 md:px-8 pb-36 mx-12 md:mx-16 lg:mx-24">
         
                <div className="flex flex-col gap-12 mx-8 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Fonts</h2>
                    <Separator />
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200 leading-relaxed">This website uses the Inter typeface by Rasmus Andersson.</p>
                        <span>
                        <Button variant="default" asChild>
                            <Link href="https://rsms.me/inter/#free">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                                Inter</Link>
                        </Button>
                        </span>
                    </div>
                    <img 
                    src="https://images.ctfassets.net/mzyich089xy0/5FaS7kdSLAjGgYaM6UsqQB/d3f169458fb94a49b105cb8797f02a12/licenses-inter.png"
                    alt="Inter typeface by Rasmus Andersson"
                    className="rounded-lg object-cover object-top max-h-[16rem] md:w-[32rem]"
                    />
                </div>
               
            </div>

            <div className="flex flex-col gap-8 md:px-8 pb-36 mx-12 md:mx-16 lg:mx-24">
            
                <div className="flex flex-col gap-12 mx-8 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Icons</h2>
                    <Separator />
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">This website uses open-source icons from Radix UI. <br /><code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium md:font-semibold">
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
                    className="rounded-lg object-cover object-top md:w-[32rem] max-h-[16rem]"
                    />
                </div>
                
            </div>

            <div className="flex flex-col gap-8 md:px-8 pb-32 md:pb-48 mx-12 md:mx-16 lg:mx-24">
            
                <div className="flex flex-col gap-12 mx-8 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">Components</h2>
                    <Separator />
                    <p className="text-lg font-regular text-gray-800 dark:text-gray-200">This website uses open-source React components from shadcn/ui and Radix UI. Read about installation and usage in their GitHub repositories and linked docs.</p>
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
                    className="rounded-lg object-cover object-top md:w-[32rem] max-h-[16rem]"
                    />
                </div>
               
            </div>
           

        </div>

    )
}

export function StyleHero () {
    const areaRef = React.useRef<HTMLTextAreaElement>(null)

    React.useEffect(() => {
        const textArea = areaRef.current
        if (textArea) {
            textArea.style.height = "auto"
            const percentHeight = textArea.scrollHeight / 2;
            textArea.style.height = `${percentHeight}px`
        }
    }, [])

    async function handleCopy() {
        if (areaRef.current !== null) {
          const text = areaRef.current.value;
          await navigator.clipboard.writeText(text);
        } else {
          console.error('Textarea ref is null');
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
            rgbDark: "3, 7, 18",
            hexDark: "#030712",
        },
        {
            name: "foreground",
            hslLight: "224 71.4% 4.1%",
            hslDark: "210 20% 98%",
            rgbLight: "11, 11, 11",
            hexLight: "#0B0B0B",
            rgbDark: "255, 255, 255",
            hexDark: "#FFFFFF",
        },
        {
            name: "card",
            hslLight: "0 0% 100%",
            hslDark: "224 71.4% 4.1%",
            rgbLight: "255, 255, 255",
            hexLight: "#FFFFFF",
            rgbDark: "11, 11, 11",
            hexDark: "#0B0B0B",
        },
        {
            name: "card-foreground",
            hslLight: "224 71.4% 4.1%",
            hslDark: "210 20% 98%",
            rgbLight: "11, 11, 11",
            hexLight: "#0B0B0B",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
        },
        {
            name: "popover",
            hslLight: "0 0% 100%",
            hslDark: "224 71.4% 4.1%",
            rgbLight: "255, 255, 255",
            hexLight: "#FFFFFF",
            rgbDark: "3, 7, 18",
            hexDark: "#030712",
        },
        {
            name: "popover-foreground",
            hslLight: "224 71.4% 4.1%",
            hslDark: "210 20% 98%",
            rgbLight: "11, 11, 11",
            hexLight: "#0B0B0B",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
        },
        {
            name: "primary",
            hslLight: "262.1 83.3% 57.8%",
            hslDark: "263.4 70% 50.4%",
            rgbLight: "124, 58, 237",
            hexLight: "#7C3AED",
            rgbDark: "109, 40, 217",
            hexDark: "#6D28D9",
        },
        {
            name: "primary-foreground",
            hslLight: "210 20% 98%",
            hslDark: "210 20% 98%",
            rgbLight: "249, 250, 251",
            hexLight: "#F9FAFB",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
        },
        {
            name: "secondary",
            hslLight: "220 14.3% 95.9%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "243, 244, 246",
            hexLight: "#F3F4F6",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
        },
        {
            name: "secondary-foreground",
            hslLight: "220.9 39.3% 11%",
            hslDark: "210 20% 98%",
            rgbLight: "17, 24, 39",
            hexLight: "#111827",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
        },
        {
            name: "muted",
            hslLight: "220 14.3% 95.9%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "243, 244, 246",
            hexLight: "#F3F4F6",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
        },
        {
            name: "muted-foreground",
            hslLight: "220 8.9% 46.1%",
            hslDark: "217.9 10.6% 64.9%",
            rgbLight: "107, 114, 128",
            hexLight: "#6B7280",
            rgbDark: "156, 163, 175",
            hexDark: "#9CA3AF",
        },
        {
            name: "accent",
            hslLight: "220 14.3% 95.9%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "243, 244, 246",
            hexLight: "#F3F4F6",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
        },
        {
            name: "accent-foreground",
            hslLight: "220.9 39.3% 11%",
            hslDark: "210 20% 98%",
            rgbLight: "17, 24, 39",
            hexLight: "#111827",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
        },
        {
            name: "destructive",
            hslLight: "0 84.2% 60.2%",
            hslDark: "0 62.8% 30.6%",
            rgbLight: "239, 68, 68",
            hexLight: "#EF4444",
            rgbDark: "127, 29, 29",
            hexDark: "#7F1D1D",
        },
        {
            name: "destructive-foreground",
            hslLight: "210 20% 98%",
            hslDark: "210 20% 98%",
            rgbLight: "249, 250, 251",
            hexLight: "#F9FAFB",
            rgbDark: "249, 250, 251",
            hexDark: "#F9FAFB",
        },
        {
            name: "border",
            hslLight: "220 13% 91%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "229, 231, 235",
            hexLight: "#E5E7EB",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
        },
        {
            name: "input",
            hslLight: "220 13% 91%",
            hslDark: "215 27.9% 16.9%",
            rgbLight: "229, 231, 235",
            hexLight: "#E5E7EB",
            rgbDark: "31, 41, 55",
            hexDark: "#1F2937",
        },
        {
            name: "ring",
            hslLight: "262.1 83.3% 57.8%",
            hslDark: "263.4 70% 50.4%",
            rgbLight: "124, 58, 237",
            hexLight: "#7C3AED",
            rgbDark: "109, 40, 217",
            hexDark: "#6D28D9",
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
            <div className="flex flex-col gap-8 pt-36 lg:pt-48 pb-56 mx-12 md:mx-16 lg:mx-24 max-w-xl md:max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-semibold md:pl-8">Style Guide</h1>
                <p className="text-xl md:text-2xl md:pl-8 font-medium leading-relaxed text-gray-800 dark:text-gray-200 ">I've made it easy for you to duplicate my styles. You can copy and paste the CSS variables into the <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-xl font-semibold">globals.css</code> file of your web app. Note that you'll need to have shadcn/ui and TailwindCSS set up for semantic styling to work out-of-the-box.</p>
                    <div className="md:pl-8">
                        <Button variant="gradient" size="default" asChild>
                            <Link href="https://ui.shadcn.com/docs/installation">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-base font-semibold">Install shadcn/ui</span>
                            </Link>
                        </Button>
                    </div>
            </div>
            <div className="flex flex-col gap-8 md:px-8 pt-28 pb-36 mx-8 md:mx-16 lg:mx-24">
                
            <h2 className="text-3xl font-semibold mx-4">Themes</h2>
            <Separator className="mx-4" />
            <h3 className="text-2xl font-semibold mx-4">
                    Dark mode</h3>
                
                <p className="text-lg text-foreground font-regular mx-4 leading-relaxed">
                This website uses <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium">next-themes</code> to manage light & dark styles and match them to system preferences. The <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium">useTheme</code> hook is used to set and access the current theme and a <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium">ThemeProvider</code> is used to wrap the root layout.
                </p>
                <div className="mx-4 mb-4">
                <Button variant="default" size="default" asChild>
                            <Link href="https://github.com/pacocoursey/next-themes">
                            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-sm">next-themes</span>
                            </Link>
                        </Button>
                </div>
            <h3 className="text-2xl font-semibold mx-4">
                    CSS variables</h3>
            <Alert>
            <InfoCircledIcon className="h-4 w-4" />
                <AlertTitle className="font-semibold">Syntax</AlertTitle>
                        <AlertDescription className="text-base">
                            CSS variables are defined without the <code className="relative rounded bg-muted px-[0.2rem] py-[0.1rem] font-mono text-base font-medium">hsl()</code> colour space function according to TailwindCSS <Link href="https://tailwindcss.com/docs/customizing-colors#using-css-variables" className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">guidelines</Link>. 
                        </AlertDescription>
                    </Alert>
                <div className="grid w-full gap-4">
                    <Label htmlFor="themes"><span className="text-base text-muted-foreground mx-4">Paste desired variables into your file</span></Label>
                    <div className="relative">
                    <Textarea
                    ref={areaRef}
                    defaultValue={themes}
                    wrap="off"
                    readOnly
                    id="themes"
                    className="resize-none overflow-y-scroll bg-gray-50 dark:bg-card/50 font-mono text-sm font-medium p-8"
                    />
                    <Button variant="outline" size="default" onClick={handleCopy} className="text-muted-foreground absolute top-4 right-4 lg:right-8">Copy
                    <CopyIcon className="h-[0.8rem] w-[0.8rem] ml-2" />
                    </Button>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold mx-4 my-4">
                      Semantics
                </h2>
            
                    <p className="text-lg text-foreground font-regular mx-4 mb-4">
                        For the following CSS variables:
                    </p>

                <div className="grid w-full gap-4">
                    <Label htmlFor="default"><span className="text-base text-muted-foreground mx-4">Primary button colours (dark)</span></Label>
                    <div className="relative">
                    <Textarea
                    defaultValue={bgExample}
                    wrap="off"
                    readOnly
                    id="default"
                    className="resize-none bg-gray-50 dark:bg-card/50 font-mono text-sm font-medium p-8"
                    />
                    <Button variant="outline" size="icon" onClick={handleCopy} className="text-muted-foreground absolute top-4 right-4">
                    <CopyIcon className="h-[0.8rem] w-[0.8rem]" />
                    </Button>
                    </div>
                    <p className="text-lg text-foreground font-regular mt-4 mx-4 leading-relaxed">
                      The <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">background</code> variable is used for the background colour of the button and the <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">foreground</code> variable is used for the text colour.
                    </p>
                    <Alert className="my-4">
                        <InfoCircledIcon className="h-4 w-4" />
                        <AlertTitle className="font-semibold">Naming</AlertTitle>
                        <AlertDescription className="text-base">
                            The <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm font-medium">background</code> suffix is omitted when the variable is used for the background color of the component.
                        </AlertDescription>
                    </Alert>
                    <p className="text-lg text-foreground font-regular mx-4 leading-relaxed">
                    The background color of the following <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">Button</code> will be <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">hsl(var(--primary))</code> and the foreground color will be <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-base font-medium">hsl(var(--primary-foreground))</code>.
                    </p>
                    <div className="relative">
                    <Textarea
                    defaultValue={`<Button className="bg-primary text-primary-foreground">Click me</Button>`}
                    wrap="off"
                    readOnly
                    id="divexample"
                    className="resize-none  bg-gray-50 dark:bg-card/50 font-mono text-sm font-medium p-8"
                    />
                    <Button variant="outline" size="icon" onClick={handleCopy} className="text-muted-foreground absolute top-4 right-4">
                    <CopyIcon className="h-[0.8rem] w-[0.8rem]" />
                    </Button>
                    </div>
                    <p className="text-lg text-foreground font-regular mx-4">
                        Check the <Link href="https://ui.shadcn.com/docs/theming" className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">Theming</Link> docs for full details on the semantic use of variables.
                    </p>
                </div>
                    
                </div>
                
                <h2 className="text-2xl font-semibold mt-4 mx-4">
                      Want HEX colours instead?
                </h2>
                <p className="text-lg text-foreground font-regular mx-4">
                🤓 I thought you'd never ask.
                </p>
                <Alert>
                {resolvedTheme === 'dark' ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
                    <AlertTitle className="font-semibold">Tip</AlertTitle>
                        <AlertDescription className="text-base">
                            Toggle between light and dark themes in the header to see the relevant colours.
                        </AlertDescription>
                    </Alert>
                <Table>
                    <TableCaption>Your wish is my command</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead><ColorWheelIcon className="h-4 w-4" /></TableHead>
                        <TableHead className="text-sm font-semibold">Variable name</TableHead>
                        <TableHead className="text-sm font-semibold">HEX</TableHead>
                        <TableHead className="text-sm font-semibold min-w-[150px]">RGB</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {colours.map((colour) => (
                        <TableRow key={colour.name}>
                            <TableCell><div className={`${getBgClass(colour.name)} h-[1.1rem] w-[1.1rem] rounded-sm border border-slate-300 dark:border-slate-700`}  /></TableCell>
                            <TableCell className="font-medium font-mono">{colour.name}</TableCell>
                            <TableCell className="font-mono">{resolvedTheme === 'dark' ? colour.hexDark : colour.hexLight}</TableCell>
                            <TableCell className="font-mono">{resolvedTheme === 'dark' ? colour.rgbDark : colour.rgbLight}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                

            </div>
            
            <div className="flex flex-col gap-8 md:px-8 pb-48 mx-8 md:mx-16 lg:mx-24">
            <h2 className="text-3xl font-semibold mx-4">Components</h2>
            <Separator className="mx-4" />
                <h3 className="text-2xl font-semibold mx-4">
                    Radix UI Primitives</h3>
                
                <p className="text-lg text-foreground font-regular mx-4">
                Detailed styles for customized Radix UI components coming soon!
                </p>
                <div className="mx-4 mb-4">
                <Button variant="default" size="default" asChild>
                            <Link href="https://www.radix-ui.com/primitives/docs/overview/introduction">
                            <Link2Icon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-sm">Radix Primitives Docs</span>
                            </Link>
                        </Button>
                </div>
                <h3 className="text-2xl font-semibold mx-4">
                    shadcn/ui</h3>
                
                <p className="text-lg text-foreground font-regular mx-4">
                Detailed styles for customized shadcn/ui components coming soon!
                </p>
                <div className="mx-4 mb-4">
                <Button variant="default" size="default" asChild>
                            <Link href="https://ui.shadcn.com/docs/components">
                            <Link2Icon className="h-[1.2rem] w-[1.2rem] mr-2" />
                            <span className="text-sm">shadcn/ui Docs</span>
                            </Link>
                        </Button>
                </div>
            </div>


        </div>
    )
}