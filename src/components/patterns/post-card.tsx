"use client"

import * as React from "react"
import Link from "next/link"
import { Post } from "@/lib/blog-posts"
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { AvatarBlog, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    BlogCard,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

export function BlogPostCard ({data, isFirstChild = false}: {data: Post, isFirstChild?: boolean}) {
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    return(
        <BlogCard className={`flex flex-col h-full ${isFirstChild ? 'mx-4' : 'mr-4'} md:mx-0 overflow-hidden`}>
            {isClient && (
            <>
            <CardHeader>
            <div className="flex flex-row justify-between items-center w-full">
                <p className="text-sm md:text-base font-regular text-gray-800 dark:text-gray-300">{data.date ? 
                new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(data.date)) :  ''}</p>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <AvatarBlog className="z-[1]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="The author's GitHub avatar" />
                                <AvatarFallback>TN</AvatarFallback>
                            </AvatarBlog>
                        </TooltipTrigger>
                        <TooltipContent className="p-2 z-[3]">
                            <p className="text-sm font-regular"> Tim Ng </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Link href={`/blog/${data.slug}`}>
                <h1 className="text-xl md:text-2xl font-medium text-foreground">{data.title}</h1>
            </Link>
            <Separator />
            </CardHeader>
            <CardContent className="flex flex-col items-start w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="relative rounded-lg border border-accent overflow-hidden">
                        <AspectRatio ratio={4 / 3}>
                            <Image
                            src={data.thumbnail ? data.thumbnail.src : ''}
                            alt={data.thumbnail ? data.thumbnail.alt : ''}
                            fill={true}
                            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top" 
                            />
                        </AspectRatio>
                    </div>
                    <p className="text-left text-base md:text-lg font-regular text-gray-900 dark:text-gray-100 pl-2">{data.summary}</p>
                    <div className="flex flex-row flex-wrap gap-2">
                            {data.tags && data.tags.map( tag => (
                                <Badge key={tag} variant="secondaryblog"><span className="font-mono tracking-tight cursor-default">{tag}</span></Badge>
                            ))}
                    </div>  
                </div>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button variant="secondaryblog" className="w-full text-base" asChild>
                    <Link href={`/blog/${data.slug}`}>Read more</Link>
                </Button> 
            </CardFooter>
            </>
            )}  
        </BlogCard>
   
    )
}
