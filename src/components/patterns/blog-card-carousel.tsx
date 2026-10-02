"use client";

import * as React from "react";

import { useSearchParams } from "next/navigation";
import styles from "@/components/modules/blog-card-carousel.module.css";

import { Post } from "@/lib/blog-posts";
import { BlogPostCard } from "@/components/patterns/post-card";

function sortPosts(posts: Post[], sortType: string) {
  const byDate = (a: Post, b: Post) => {
    if (b.date !== null && a.date !== null) {
      return b.date.getTime() - a.date.getTime();
    }
    return 0; // If either date is null, treat them as equal
  };

  switch (sortType) {
    case "default":
      return [...posts].sort(byDate);
    case "lastdate":
      return [...posts].sort((a, b) => byDate(b, a));
    case "az":
      return [...posts].sort((a, b) => a.title.localeCompare(b.title));
    case "za":
      return [...posts].sort((a, b) => b.title.localeCompare(a.title));
    default:
      return posts;
  }
}

// Applies ?tag= and ?sort= from the URL. useSearchParams opts out of static
// rendering, so wrap this in Suspense with an unfiltered <CardCarousel> fallback
// to keep the posts in the server-rendered HTML.
export function FilteredCardCarousel({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || "";
  const currentSortType = searchParams.get("sort") || "";

  const filteredPosts = currentTag
    ? posts.filter((post) =>
        post.tags?.some(
          (tag) => tag.toLowerCase() === currentTag.toLowerCase(),
        ),
      )
    : posts;

  return <CardCarousel posts={sortPosts(filteredPosts, currentSortType)} />;
}

export function CardCarousel({
  posts,
  recommended,
}: {
  posts: Post[];
  recommended?: boolean;
}) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const overlay = overlayRef.current;

    if (carousel && overlay) {
      const firstCard = carousel.children[0] as HTMLDivElement;
      if (firstCard) {
        const scrollPercentage =
          carousel.scrollLeft / firstCard.clientWidth / 0.005;
        const opacity = 1 - Math.min(scrollPercentage, 1);
        overlay.style.opacity = opacity.toString();
      }
    }
  };

  return (
    <div
      ref={carouselRef}
      onScroll={handleScroll}
      className={`flex flex-row relative overflow-x-auto md:grid md:grid-cols-2 z-[2] ${!recommended && "xl:grid-cols-3"} gap-0 md:gap-4 ${styles.horizontalScroll}`}
    >
      {(recommended ? posts.slice(0, 2) : posts).map((post, index) => (
        <div className="flex-shrink-0 w-[85vw] md:w-full" key={post.slug}>
          <BlogPostCard data={post} isFirstChild={index === 0} />
        </div>
      ))}
    </div>
  );
}
