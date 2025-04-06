"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "@/components/modules/landing.module.css";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  InfoCircledIcon,
  CopyIcon,
  Link2Icon,
  ExternalLinkIcon,
  FigmaLogoIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { StyleNavigation } from "@/components/patterns/doc-sidebar";
import { FigmaEmbed } from "@/components/patterns/figma-embed";
import ColourVariablesTable from "@/app/style/variables-table";
import { BuyMeCoffee } from "./buy-me-coffee";
import { Typewriter } from "@/components/motion/typewriter";

interface HomeProps {
  id: string;
}

const formSchema = z.object({
  password: z.string().min(6).max(24),
});

const texts = [
  "ideas accessible",
  "writing accessible",
  "design accessible",
  "data accessible",
];

export const Hero: React.FC<HomeProps> = ({ id }) => {
  return (
    <div
      id={id}
      className="inset-0 flex flex-col gap-8 my-4 mx-12 md:mx-16 lg:mx-24 max-w-2xl md:max-w-4xl lg:max-w-5xl scroll-mt-48 z-[11]"
    >
      <h1 className="text-5xl md:text-6xl font-semibold cursor-default pointer-events-none">
        👋🏼 I&apos;m Tim, experience designer and quantitative researcher
      </h1>
      <h1 className="text-5xl md:text-6xl sm:min-h-[150px] font-semibold pb-4 cursor-default pointer-events-none">
        <div className="sm:block hidden">
          <Typewriter
            texts={texts}
            delay={1}
            baseText="🤗 I care about making "
          />
        </div>
        <span className="inline-block sm:hidden">🤗 I care about making </span>
        <span className="inline-block sm:hidden bg-gradient-to-r from-primary to-pink-500 via-blue-600 dark:to-pink-600 dark:via-blue-500 text-transparent bg-clip-text bg-300% animate-animated-gradient tracking-[0.0025em]">
          {" "}
          complex ideas accessible
        </span>
      </h1>
      <div>
        <Button variant="gradient" size="default" className="md:w-36" asChild>
          <Link href="/#about">
            <span className="text-base md:text-lg font-medium">Meet me</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export function PasswordHero() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Verify the password and navigate to the protected page
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center pt-36 lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 max-w-xl md:max-w-5xl min-h-[100vh]">
      <h1 className="text-4xl md:text-6xl font-semibold mb-4">
        Protected page
      </h1>
      <p className="text-xl md:text-2xl font-[450] leading-relaxed text-gray-800 dark:text-gray-200 mb-8">
        🔐 Enter your password to proceed{" "}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="md:text-base">Password</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="T0pS3cr3t&F0rY0ur3y3s0n1y" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            <span className="text-sm md:text-base font-medium">Submit</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

function goBack(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  window.history.back();
}

export function NotFoundHero() {
  return (
    <div className="flex flex-col justify-center pt-0 md:pt-24 pb-56 mx-8 md:mx-24 lg:mx-48 max-w-xl md:max-w-5xl min-h-[100vh] z-[10]">
      <h1 className="text-6xl md:text-8xl md:pl-8 font-semibold mb-4">404</h1>
      <p className="text-2xl md:text-3xl lg:text-4xl md:pl-8 font-[450] text-gray-800 dark:text-gray-200 mb-4">
        😖 Hmm, we couldn&apos;t find what you&apos;re looking for. He might
        have something to do with it..
      </p>
      <div className="md:pl-8">
        <Button variant="default" size="default" className="md:w-36" asChild>
          <Link href="#" onClick={goBack}>
            <span className="text-base font-medium">Go back</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function LicenseHero() {
  return (
    <div>
      <div className={styles.grid}>
        <div className="flex flex-col justify-center gap-8 min-h-[100vh] pt-36 lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 xl:mx-64 max-w-xl md:max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold md:pl-8 z-[3]">
            Licenses
          </h1>
          <p className="text-xl md:text-2xl md:pl-8 font-[450] leading-relaxed text-gray-800 dark:text-gray-200 z-[3]">
            All graphical assets on this website are licensed for personal use.
            If you would like to use a specific asset, please check the license
            below or reach out to me.
          </p>
          <div className="md:pl-8 z-[3]">
            <Button
              variant="gradient"
              size="default"
              className="relative md:w-36"
              asChild
            >
              <Link href="/#contact">
                <span className="text-base font-medium">Contact me</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px]" />
      <div className="flex flex-col max-w-5xl gap-8 px-8 py-32 mx-auto">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Images</h2>
            <Separator />
            <p className="text-lg font-regular text-gray-800 dark:text-gray-200 leading-relaxed">
              This website uses images sourced from Unsplash and generated with
              AI using the OpenAI DALL-E model. Some project images were made
              with BioRender and licensed for personal use only.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild>
                <Link href="https://unsplash.com/license">Unsplash</Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="https://openai.com/dall-e-3">OpenAI</Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="https://www.biorender.com">BioRender</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full min-h-[16rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1620359536552-e165a11d34c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3502&q=80"
              alt="Vancouver, Canada at dusk, looking north towards downtown and the North Shore mountains"
              fill={true}
              className="rounded-lg object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-5xl gap-8 px-8 pb-32 mx-auto">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Typeface</h2>
            <Separator />
            <p className="text-lg font-regular text-gray-800 dark:text-gray-200 leading-relaxed">
              This website uses the Geist typeface by Vercel and Source Serif 4
              by Frank Grießhammer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="default" asChild>
                <Link href="https://github.com/vercel/geist-font?tab=readme-ov-file">
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Geist
                </Link>
              </Button>

              <Button variant="default" asChild>
                <Link href="https://fonts.google.com/specimen/Source+Serif+4?query=source+serif+4">
                  Source Serif 4
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full min-h-[16rem] overflow-hidden">
            <Image
              src="https://github.com/vercel/geist-font/raw/main/.docs/img/geist-banner--light.png"
              alt="Geist typeface by Vercel"
              fill={true}
              className="rounded-lg object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-5xl gap-8 px-8 pb-32 mx-auto">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Icons</h2>
            <Separator />
            <p className="text-lg font-regular text-gray-800 dark:text-gray-200">
              This website uses open-source icons from Lucide and Radix UI.
              <br />
            </p>
            <p className="text-lg font-regular text-foreground mb-2">
              <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium md:font-semibold">
                npm i lucide-react
              </code>
            </p>
            <p className="text-lg font-regular text-foreground mb-2">
              <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-base font-medium md:font-semibold">
                npm i @radix-ui/react-icons
              </code>
            </p>
            <span>
              <Button variant="default" asChild>
                <Link href="https://github.com/radix-ui/icons">
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Radix Icons
                </Link>
              </Button>
            </span>
          </div>
          <div className="relative w-full min-h-[16rem] overflow-hidden">
            <Image
              src="https://github.com/radix-ui/icons/raw/master/icons.png"
              alt="Icons from Radix UI"
              fill={true}
              className="rounded-lg object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-5xl gap-8 px-8 pb-36 mx-auto">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Components</h2>
            <Separator />
            <p className="text-lg font-regular text-gray-800 dark:text-gray-200">
              This website uses open-source React components from shadcn/ui and
              Radix UI. Read about installation and usage in their GitHub
              repositories and the linked docs.
            </p>
            <div className="flex space-x-4">
              <Button variant="default" asChild>
                <Link href="https://github.com/shadcn-ui/ui">
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                  shadcn/ui
                </Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="https://github.com/radix-ui/primitives">
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                  Radix UI
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full min-h-[16rem] overflow-hidden">
            <Image
              src="https://github.com/shadcn-ui/ui/raw/main/apps/www/public/og.jpg"
              alt="shadcn/ui components built with Radix UI and TailwindCSS"
              fill={true}
              className="rounded-lg object-cover object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StyleHero() {
  const { toast } = useToast();
  const areaRef = React.useRef<HTMLDivElement>(null);
  const bgExampleRef = React.useRef<HTMLDivElement>(null);
  const buttonExampleRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const codeContainer = areaRef.current;
    if (codeContainer) {
      codeContainer.style.height = "auto";
      const percentHeight = codeContainer.scrollHeight / 2;
      codeContainer.style.height = `${percentHeight}px`;
    }
  }, []);

  const copyUrl = async (id: string) => {
    try {
      const urlToCopy = `${window.location.href.split("#")[0]}#${id}`;
      await navigator.clipboard.writeText(urlToCopy);
      toast({
        title: "Done!",
        description: "URL copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description:
          "Something went wrong. Ctrl/Cmd+C will have to do for now.",
      });
    }
  };

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
      console.error("Reference to code container is null");
      toast({
        title: "Error",
        description:
          "Something went wrong. Ctrl/Cmd+C will have to do for now.",
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
      });
    }
  };

  const bgExample = `--primary: 263.4 70% 50.4%;
--primary-foreground: 210 20% 98%;`;

  const themes = `@layer base {
        :root {
          --background: 0 0% 100%;
          --foreground: 224 71.4% 4.1%;
          --card: 0 0% 100%;
          --card-foreground: 224 71.4% 4.1%;
          --popover: 0 0% 100%;
          --popover-foreground: 224 71.4% 4.1%;
          --primary: 243 75% 59%;
          --primary-foreground: 226 100% 97%;
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
          --ring: 243 75% 59%;
          --radius: 0.5rem;
          --selection: 229 84% 5%;
          --selection-foreground: 240 100% 99%;
        }
       
        .dark {
          --background: 222 47% 11%;
          --foreground: 210 20% 98%;
          --card: 229 84% 5%;
          --card-foreground: 210 20% 98%;
          --popover: 229 84% 5%;
          --popover-foreground: 210 20% 98%;
          --primary: 245 58% 51%;
          --primary-foreground: 226 100% 97%;
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
          --ring: 245 58% 51%;
          --selection: 247 75% 59%;
          --selection-foreground: 240 100% 99%;
        }
    }
    `;

  return (
    <div>
      <div className={styles.grid}>
        <div className="flex flex-col justify-center gap-8 pt-36 min-h-[100vh] lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 xl:mx-64 max-w-xl md:max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold md:pl-8 z-[3]">
            Style Guide
          </h1>
          <p className="text-xl md:text-2xl md:pl-8 font-[450] leading-relaxed text-gray-800 dark:text-gray-200 z-[3] ">
            This website is a React app built on the Next.js framework with
            TailwindCSS. I&apos;ve made it easy for you to duplicate my styles.
            You can copy and paste the CSS variables into the{" "}
            <code className="relative rounded bg-muted px-[0.4rem] py-[0.3rem] font-mono text-xl font-semibold">
              globals.css
            </code>{" "}
            file of your codebase. You&apos;ll need to have shadcn/ui set up for
            semantic styling of components to work out-of-the-box. Not using a
            framework? I&apos;ve defined agnostic tokens you can use for your
            own components.
          </p>
          <div className="flex flex-row flex-wrap gap-4 md:pl-8 z-[3]">
            <Button variant="gradient" size="default" asChild>
              <Link href="https://nextjs.org/docs">
                <VercelLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                <span className="text-base font-medium">Install Next.js</span>
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
          <div id="darkmode" className="flex flex-col gap-8 scroll-mt-24">
            <div
              id="darkmode-header"
              className="group flex flex-row gap-2 w-max items-center scroll-mt-24 cursor-pointer"
              onClick={() => copyUrl("darkmode-header")}
            >
              <h3 className="text-2xl font-semibold">
                Dark mode{" "}
                <Link2Icon className="hidden group-hover:inline text-muted-foreground h-6 w-6" />
              </h3>
            </div>
            <p className="text-lg text-foreground font-regular leading-relaxed">
              This website uses{" "}
              <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                next-themes
              </code>{" "}
              to manage light & dark styles and match them to system
              preferences. The{" "}
              <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                useTheme
              </code>{" "}
              hook is used to set and access the current theme and a{" "}
              <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                ThemeProvider
              </code>{" "}
              is used to wrap the root layout.
            </p>
            <div className="mb-4">
              <Button variant="default" size="default" asChild>
                <Link href="https://github.com/pacocoursey/next-themes">
                  <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                  <span className="text-sm">next-themes</span>
                </Link>
              </Button>
            </div>
          </div>
          <div id="variables" className="flex flex-col gap-8 scroll-mt-24">
            <div
              id="variables-header"
              className="group flex flex-row gap-2 w-max items-center scroll-mt-24 cursor-pointer"
              onClick={() => copyUrl("variables-header")}
            >
              <h3 className="text-2xl font-semibold">
                CSS variables{" "}
                <Link2Icon className="hidden group-hover:inline text-muted-foreground h-6 w-6" />
              </h3>
            </div>
            <Alert className="max-w-2xl mx-auto">
              <InfoCircledIcon className="h-4 w-4" />
              <AlertTitle className="font-semibold">Syntax</AlertTitle>
              <AlertDescription className="text-base">
                CSS variables are defined without the{" "}
                <code className="relative rounded border bg-white dark:bg-slate-700 px-[0.2rem] py-[0.1rem] font-mono text-sm font-semibold">
                  hsl()
                </code>{" "}
                colour space function according to TailwindCSS{" "}
                <Link
                  href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
                  className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span>
                    guidelines
                    <ExternalLinkIcon className="inline ml-1 h-4 w-4 text-muted-foreground" />
                  </span>
                </Link>
                .
              </AlertDescription>
            </Alert>
            <div className="flex flex-col w-full gap-4">
              <Label htmlFor="themes">
                <span className="text-base text-muted-foreground">
                  Paste desired variables into your code
                </span>
              </Label>
              <div className="flex flex-col gap-0 w-full relative">
                <div
                  id="codeHeader"
                  className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm"
                >
                  <div className="font-semibold flex flex-row items-center px-4 py-2">
                    globals.css
                  </div>
                  <Button
                    variant="outlineinverse"
                    size="default"
                    onClick={() => handleCopy(areaRef)}
                    className="text-muted-foreground rounded-none rounded-tr-md border-none w-max px-4"
                  >
                    Copy
                    <CopyIcon className="h-[1rem] w-[1rem] ml-2" />
                  </Button>
                </div>
                <ScrollArea className="w-full h-[500px] whitespace-nowrap rounded-b-md mb-4">
                  <div
                    ref={areaRef}
                    className="relative w-full rounded-b-md text-sm"
                  >
                    <SyntaxHighlighter
                      language="css"
                      style={nightOwl}
                      customStyle={{ margin: "0px", padding: "2rem" }}
                    >
                      {themes}
                    </SyntaxHighlighter>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </div>
          </div>

          <div id="semantics" className="flex flex-col gap-8 scroll-mt-24">
            <div
              id="semantics-header"
              className="group flex flex-row gap-2 w-max items-center scroll-mt-24 cursor-pointer"
              onClick={() => copyUrl("semantics-header")}
            >
              <h3 className="text-2xl font-semibold">
                Semantics{" "}
                <Link2Icon className="hidden group-hover:inline hover:text-primary text-muted-foreground h-6 w-6" />
              </h3>
            </div>

            <p className="text-lg text-foreground font-regular">
              For the following CSS variables:
            </p>

            <div className="flex flex-col w-full gap-4">
              <Label htmlFor="default">
                <span className="text-base text-muted-foreground">
                  Primary button colours (dark)
                </span>
              </Label>
              <div className="flex flex-col gap-0 w-full">
                <div
                  id="codeHeader"
                  className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm"
                >
                  <div className="font-semibold flex flex-row items-center gap-2 px-4 py-2">
                    button-primary
                  </div>
                  <Button
                    variant="outlineinverse"
                    size="default"
                    onClick={() => handleCopy(bgExampleRef)}
                    className="text-muted-foreground rounded-none rounded-tr-md border-none"
                  >
                    <CopyIcon className="h-[1rem] w-[1rem]" />
                  </Button>
                </div>
                <ScrollArea className="w-full whitespace-nowrap rounded-b-md mb-4">
                  <div
                    ref={bgExampleRef}
                    className="relative w-full overflow-y-auto overflow-x-auto rounded-b-md text-sm"
                  >
                    <SyntaxHighlighter
                      language="css"
                      style={nightOwl}
                      customStyle={{ margin: "0px", padding: "2rem" }}
                      wrapLines={true}
                    >
                      {bgExample}
                    </SyntaxHighlighter>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
              <p className="text-lg text-foreground font-regular mt-4 leading-relaxed">
                The{" "}
                <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                  background
                </code>{" "}
                variable is used for the background colour of the button and the{" "}
                <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                  foreground
                </code>{" "}
                variable is used for the text colour.
              </p>
              <Alert className="my-4 max-w-2xl mx-auto">
                <InfoCircledIcon className="h-4" />
                <AlertTitle className="font-semibold">Naming</AlertTitle>
                <AlertDescription className="text-base">
                  The{" "}
                  <code className="relative rounded border bg-white dark:bg-slate-700 px-[0.4rem] py-[0.1rem] font-mono text-sm font-semibold">
                    background
                  </code>{" "}
                  suffix is omitted when the variable is used for the background
                  colour of the component.
                </AlertDescription>
              </Alert>
              <p className="text-lg text-foreground font-regular leading-relaxed mb-4">
                The background colour of the following{" "}
                <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                  Button
                </code>{" "}
                styled with Tailwind utility classes will be{" "}
                <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                  hsl(var(--primary))
                </code>{" "}
                and the foreground colour will be{" "}
                <code className="relative rounded border bg-muted px-[0.4rem] py-[0.1rem] font-mono text-base font-semibold">
                  hsl(var(--primary-foreground))
                </code>
                .
              </p>

              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="mb-2">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
                <TabsContent value="preview">
                  <div
                    className={`${styles.card} bg-card/50 flex grow items-center justify-center w-full h-full border border-accent rounded-md p-16`}
                  >
                    <Button className="bg-primary text-primary-foreground z-[2]">
                      Click me
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <div className="flex flex-col gap-0 w-full">
                    <div
                      id="codeHeader"
                      className="flex flex-row justify-between w-full bg-gray-100 dark:bg-slate-800 text-foreground font-mono rounded-t-md text-sm"
                    >
                      <div className="font-semibold flex flex-row items-center gap-2 px-4 py-2">
                        button-demo.jsx
                      </div>
                      <Button
                        variant="outlineinverse"
                        size="default"
                        onClick={() => handleCopy(buttonExampleRef)}
                        className="text-muted-foreground rounded-none rounded-tr-md border-none"
                      >
                        <CopyIcon className="h-[1rem] w-[1rem]" />
                      </Button>
                    </div>
                    <ScrollArea className="w-full whitespace-nowrap rounded-b-md mb-4">
                      <div
                        ref={buttonExampleRef}
                        className="relative w-full overflow-y-auto overflow-x-auto rounded-b-md text-sm"
                      >
                        <SyntaxHighlighter
                          language="jsx"
                          style={nightOwl}
                          customStyle={{ margin: "0px", padding: "2rem" }}
                        >
                          {`import { Button } from "@/components/ui/button"

export function ClickMeButton() {
    return <Button 
    className="bg-primary text-primary-foreground"
    >Click me</Button>
}`}
                        </SyntaxHighlighter>
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                  </div>
                </TabsContent>
              </Tabs>
              <p className="text-lg text-foreground font-regular mt-4">
                Check the shadcn/ui{" "}
                <Link
                  href="https://ui.shadcn.com/docs/theming"
                  className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span>
                    Theming
                    <ExternalLinkIcon className="inline ml-1 h-4 w-4 text-muted-foreground" />
                  </span>
                </Link>{" "}
                docs for full details on the semantic use of variables.
              </p>
              <Alert className="my-4 max-w-2xl mx-auto">
                <InfoCircledIcon className="h-4 w-4" />
                <AlertTitle className="font-semibold">
                  Custom variables
                </AlertTitle>
                <AlertDescription className="text-base">
                  The{" "}
                  <code className="relative rounded border bg-white dark:bg-slate-700 px-[0.4rem] py-[0.1rem] font-mono text-sm font-semibold">
                    selection
                  </code>{" "}
                  variable is used for the background colour of the selection
                  highlight. The{" "}
                  <code className="relative rounded border bg-white dark:bg-slate-700 px-[0.4rem] py-[0.1rem] font-mono text-sm font-semibold">
                    selection-foreground
                  </code>{" "}
                  variable is used for the text colour of the selection
                  highlight.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <div id="colourspace" className="flex flex-col gap-8 scroll-mt-24">
            <div
              id="colourspace-header"
              className="group flex flex-row gap-2 w-full md:w-max items-center mt-4 scroll-mt-24 cursor-pointer"
              onClick={() => copyUrl("colourspace-header")}
            >
              <h3 className="text-2xl font-semibold whitespace-wrap">
                Want HEX or RGB colours instead?{" "}
                <Link2Icon className="hidden group-hover:inline text-muted-foreground h-6 w-6" />
              </h3>
            </div>
            <p className="text-lg text-foreground font-regular">
              🤓 I thought you&apos;d never ask.
            </p>
            <Alert className="max-w-2xl mx-auto">
              <InfoCircledIcon className="h-4 w-4" />
              <AlertTitle className="font-semibold">Tips</AlertTitle>
              <AlertDescription className="text-base">
                Click a cell value to copy the colour to your clipboard. Toggle
                between light and dark themes in the header to see the relevant
                colours.
              </AlertDescription>
            </Alert>

            <ColourVariablesTable />
          </div>

          <div className="pt-16">
            <h2 className="text-3xl font-semibold mb-4">Components</h2>
            <Separator />
          </div>

          <div id="radix" className="flex flex-col gap-8 scroll-mt-20">
            <div
              id="radix-header"
              className="group flex flex-row gap-2 w-max items-center cursor-pointer scroll-mt-24"
              onClick={() => copyUrl("radix-header")}
            >
              <h3 className="text-2xl font-semibold">Radix Primitives</h3>
              <Link2Icon className="hidden group-hover:inline text-muted-foreground h-6 w-6" />
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
          </div>

          <div id="shadcnui" className="flex flex-col gap-8 scroll-mt-20">
            <div
              id="shadcnui-header"
              className="group flex flex-row gap-2 w-max items-center cursor-pointer scroll-mt-24"
              onClick={() => copyUrl("shadcnui-header")}
            >
              <h3 className="text-2xl font-semibold">shadcn/ui</h3>
              <Link2Icon className="hidden group-hover:inline text-muted-foreground h-6 w-6" />
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

          <div id="figma" className="flex flex-col gap-8 scroll-mt-20">
            <div
              id="figma-header"
              className="group flex flex-row gap-2 w-max items-center cursor-pointer scroll-mt-24"
              onClick={() => copyUrl("figma-header")}
            >
              <h3 className="text-2xl font-semibold">Figma UI kit</h3>
              <Link2Icon className="hidden group-hover:inline text-muted-foreground h-6 w-6" />
            </div>
            <p className="text-lg text-foreground font-regular">
              You can access a design kit with all the components used on this
              website with support for Figma variables, props, and theming (dark
              mode). Use it as a starting point for your own customization with
              CSS variables and/or Tailwind CSS. Credit to Pietro Schirano (@
              <a
                href="https://twitter.com/skirano"
                className="text-foreground font-medium underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>
                  skirano
                  <ExternalLinkIcon className="inline ml-1 h-4 w-4 text-muted-foreground" />
                </span>
              </a>
              ) for creating the original Figma kit for shadcn/ui.
            </p>
            <div className="flex flex-col w-full gap-4">
              <Label htmlFor="figma">
                <span className="text-base text-muted-foreground">
                  Preview file
                </span>
              </Label>
              <FigmaEmbed figmaUrl="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyL8Az42Z3NBnP23EfnSxpk%2F%2540shadcn%252Fui---Design-System-(Variables-%2526-Theming)%3Ftype%3Ddesign%26node-id%3D2%253A287%26mode%3Ddesign%26t%3DbS19L3DMltz9mhXM-1" />
            </div>
            <div className="mb-4">
              <Button variant="default" size="default" asChild>
                <Link href="https://www.figma.com/community/file/1314057472629730742/shadcn-ui-design-system-variables-theming">
                  <FigmaLogoIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
                  <span className="text-sm">Get a copy</span>
                </Link>
              </Button>
            </div>
          </div>
          <BuyMeCoffee />
        </div>
      </div>
    </div>
  );
}

export function ResumeHero() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-[100vh] gap-8 pt-36 lg:pt-48 pb-56 mx-8 md:mx-24 lg:mx-48 xl:mx-64 max-w-xl md:max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-semibold md:pl-8 z-[3]">
          Want to learn more about me?
        </h1>
        <p className="text-xl md:text-2xl md:pl-8 font-[450] leading-relaxed text-gray-800 dark:text-gray-200 z-[3]">
          I&apos;m flattered. Get a copy of my resume here and connect with
          me on LinkedIn.
        </p>
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
  );
}

export function BlogHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-center min-h-[50vh] md:grid md:grid-cols-2 md:space-x-8 pt-36 lg:pt-48 pb-8 mx-8 md:mx-24 lg:mx-36 xl:mx-48"
    >
      <h1 className="text-5xl md:text-6xl font-semibold mb-8 z-[3]">
        Design Blog
      </h1>
      <div className="flex flex-col justify-start w-full z-[3]">
        <p className="text-xl lg:text-2xl text-foreground font-[450] text-gray-800 dark:text-gray-200 leading-relaxed md:tracking-wide mb-8">
          Welcome to my blog! I&apos;ll be posting about my personal projects,
          design ideas, and professional development here. Thoughts? I look
          forward to our conversation.
        </p>
        <div className="z-[3]">
          <Button variant="gradient" size="default" asChild>
            <Link href="/#contact">
              <span className="text-base font-medium">Contact me</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
