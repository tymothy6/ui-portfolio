import * as React from "react"
import { fetchAllPosts } from "@/lib/blog-posts"
import { BlogPostCard } from "@/components/post-card"

export async function BlogPostGrid () {
    const posts = await fetchAllPosts()

    return (
        <div className="flex flex-col justify-center items-start my-16 mx-0">
            <div className="flex flex-row items-center gap-2 mb-8">
                <p className="text-base md:text-lg font-semibold text-foreground">Posts</p>
                <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-400">· 2023 - </p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => {
                    return(
                        <div key={post.slug}>
                            <BlogPostCard {...post} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}