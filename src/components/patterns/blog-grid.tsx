import { Suspense, useState, useMemo } from "react";

import { fetchAllPosts } from "@/lib/blog-posts";
import { CardCarousel } from "@/components/patterns/blog-card-carousel";
import { BlogGridSkeleton } from "./grid-skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Server component wrapper
export async function BlogPostGridWrapper() {
  const posts = await fetchAllPosts();
  return <BlogPostGrid posts={posts} />;
}

"use client";

interface BlogPostGridProps {
  posts: any[];
}

export function BlogPostGrid({ posts }: BlogPostGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase();
    return posts.filter(post => 
      post.title?.toLowerCase().includes(query) ||
      post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
    );
  }, [posts, searchQuery]);

  return (
    <div className="flex flex-col justify-center items-center my-16">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search posts or tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 w-80 md:w-64 lg:w-80"
        />
      </div>
      <Suspense fallback={<BlogGridSkeleton />}>
        <div className="mb-4 w-full">
          <CardCarousel posts={filteredPosts} />
        </div>
      </Suspense>
    </div>
  );
}
