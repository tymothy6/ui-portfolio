"use client"

import * as React from "react"

import { useSearchParams } from "next/navigation"
import styles from "@/components/modules/blog-card-carousel.module.css"

import { Post } from "@/lib/blog-posts"
import { BlogPostCard } from "@/components/post-card"

export function CardCarousel ({ posts, recommended } :  { posts: Post[], recommended?: boolean }) {
    const searchParams = useSearchParams();
    const currentTag = searchParams.get("tag") || "";
    const currentSortType = searchParams.get("sort") || "";

    const filteredPosts = currentTag
        ? posts.filter(post => 
            post.tags?.some(tag => tag.toLowerCase() === currentTag.toLowerCase()))
        : posts; 
    
    let sortedPosts = filteredPosts;
    switch (currentSortType) {
        case 'lastdate':
            sortedPosts = filteredPosts.sort((a, b) => {
                if (b.date !== null && a.date !== null) {
                  return a.date.getTime() - b.date.getTime();
                } else {
                  return 0; // If either date is null, treat them as equal
                }
              });
            break;
        case 'az':
            sortedPosts = filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'za':
            sortedPosts = filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            break;
    }

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
            
            { (recommended ? posts.slice(0, 2) : sortedPosts).map((post, index) => (
                <div className="flex-shrink-0 w-[85vw] md:w-full" key={post.slug}>
                    <BlogPostCard data={post} isFirstChild={index === 0} />
                </div>
            ))}
            
        </div>
    )
}