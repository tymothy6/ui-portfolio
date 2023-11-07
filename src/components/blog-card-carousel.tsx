"use client"

import * as React from "react"

import { Post } from "@/lib/blog-posts"
import { BlogPostCard } from "@/components/post-card"

import { CaretRightIcon } from "@radix-ui/react-icons"

export function CardCarousel ({ posts, recommended } :  { posts: Post[], recommended?: boolean }) {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const overlayRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const carousel = carouselRef.current;
        const overlay = overlayRef.current;

        if (carousel && overlay) {
            const firstCard = carousel.children[0] as HTMLDivElement;
            if (firstCard) {
                const scrollPercentage = carousel.scrollLeft / firstCard.clientWidth;
                const opacity = 1 - Math.min(scrollPercentage, 1);  
                overlay.style.opacity = opacity.toString();
            }
        }
    };

    return (
        <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex flex-row relative overflow-x-auto md:grid md:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-4">
            <div 
            id="overlay" 
            ref={overlayRef} 
            className="block md:hidden h-full w-[85vw] rounded-r-lg ml-[-1rem] absolute pointer-events-none bg-gradient-to-r from-gray-50/0 via-gray-50/10 to-gray-50/60 dark:from-slate-950/0 dark:via-slate-950/10 dark:to-slate-950/60 z-[2] text-foreground dark:text-gray-50">
                <CaretRightIcon className="h-10 w-10 absolute right-2 top-1/2 transform -translate-y-1/2" /> 
            </div>
            { (recommended ? posts.slice(0, 3) : posts).map((post, index) => (
                <div className="flex-shrink-0 w-[85vw]" key={post.slug}>
                    <BlogPostCard data={post} isFirstChild={index === 0} />
                </div>
            ))}
            
        </div>
    )
}