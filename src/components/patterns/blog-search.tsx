"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface BlogSearchProps {
  posts: any[];
  onFilteredPostsChange?: (posts: any[]) => void;
}

export function BlogSearch({ posts, onFilteredPostsChange }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase();
    return posts.filter(post => 
      post.title?.toLowerCase().includes(query) ||
      post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
    );
  }, [posts, searchQuery]);

  // Notify parent component of filtered posts
  useMemo(() => {
    onFilteredPostsChange?.(filteredPosts);
  }, [filteredPosts, onFilteredPostsChange]);

  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search post title or tags..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 w-80 md:w-64 lg:w-80 text-md"
      />
    </div>
  );
} 