import { fetchAllPosts } from "@/lib/blog-posts";
import { BlogPostGridClient } from "./blog-grid-client";

// Server component wrapper
export async function BlogPostGridWrapper() {
  const posts = await fetchAllPosts();
  return <BlogPostGridClient posts={posts} />;
}
