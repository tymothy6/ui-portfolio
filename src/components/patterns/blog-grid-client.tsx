"use client";

import { Suspense, useState } from "react";
import {
  CardCarousel,
  FilteredCardCarousel,
} from "@/components/patterns/blog-card-carousel";
import { BlogSearch } from "./blog-search";

interface BlogPostGridClientProps {
  posts: any[];
}

export function BlogPostGridClient({ posts }: BlogPostGridClientProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <BlogSearch posts={posts} onFilteredPostsChange={setFilteredPosts} />
      <div className="mb-4 w-full">
        <Suspense fallback={<CardCarousel posts={filteredPosts} />}>
          <FilteredCardCarousel posts={filteredPosts} />
        </Suspense>
      </div>
    </div>
  );
}
