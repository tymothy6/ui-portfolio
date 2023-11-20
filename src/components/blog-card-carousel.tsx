"use client"

import * as React from "react"

import { TagContext } from "@/lib/tag-context"
import styles from "@/components/modules/blog-card-carousel.module.css"

import { Post } from "@/lib/blog-posts"
import { BlogPostCard } from "@/components/post-card"

import { CaretRightIcon } from "@radix-ui/react-icons"

export function CardCarousel ({ posts, recommended } :  { posts: Post[], recommended?: boolean }) {
    const { selectedTag } = React.useContext(TagContext);
    const filteredPosts = selectedTag
        ? posts.filter(post => 
            post.tags?.some(tag => tag.toLowerCase() === selectedTag.toLowerCase()))
        : posts; // convert to lowercase to avoid case sensitivity

    const carouselRef = React.useRef<HTMLDivElement>(null);
    const overlayRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const carousel = carouselRef.current;
        const overlay = overlayRef.current;

        if (carousel && overlay) {
            const firstCard = carousel.children[0] as HTMLDivElement;
            if (firstCard) {
                const scrollPercentage = ( carousel.scrollLeft / firstCard.clientWidth ) / 0.005;
                const opacity = 1 - Math.min(scrollPercentage, 1);  
                overlay.style.opacity = opacity.toString();
            }
        }
    };

    return (
        <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className={`flex flex-row relative overflow-x-auto md:grid md:grid-cols-2 ${!recommended && 'xl:grid-cols-3'} gap-0 md:gap-4 ${styles.horizontalScroll}`}>
            
            { (recommended ? posts.slice(0, 2) : filteredPosts).map((post, index) => (
                <div className="flex-shrink-0 w-[85vw] md:w-full" key={post.slug}>
                    <BlogPostCard data={post} isFirstChild={index === 0} />
                </div>
            ))}
            
        </div>
    )
}