"use client";

import { Suspense, useState } from "react";
import { CardCarousel } from "@/components/patterns/blog-card-carousel";
import { BlogGridSkeleton } from "./grid-skeleton";
import { BlogSearch } from "./blog-search";

interface BlogPostGridClientProps {
  posts: any[];
}

export function BlogPostGridClient({ posts }: BlogPostGridClientProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <BlogSearch posts={posts} onFilteredPostsChange={setFilteredPosts} />
      <Suspense fallback={<BlogGridSkeleton />}>
        <div className="mb-4 w-full">
          <CardCarousel posts={filteredPosts} />
        </div>
      </Suspense>
    </div>
  );
} 