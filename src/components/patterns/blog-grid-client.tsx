"use client";

import { Suspense, useMemo, useState } from "react";
import { Post } from "@/lib/blog-posts";
import {
  CardCarousel,
  FilteredCardCarousel,
} from "@/components/patterns/blog-card-carousel";
import { BlogSearch } from "./blog-search";

interface BlogPostGridClientProps {
  posts: Post[];
}

export function BlogPostGridClient({ posts }: BlogPostGridClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return posts;

    return posts.filter(
      (post) =>
        post.title?.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query)),
    );
  }, [posts, searchQuery]);

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <BlogSearch value={searchQuery} onChange={setSearchQuery} />
      <div className="mb-4 w-full">
        <Suspense fallback={<CardCarousel posts={filteredPosts} />}>
          <FilteredCardCarousel posts={filteredPosts} />
        </Suspense>
      </div>
    </div>
  );
}
