import { fetchAllProjects } from "@/lib/projects"
import { fetchAllPosts } from "@/lib/blog-posts"

import { SearchDialog } from "@/components/ui/search"

export async function SearchWrapper () {
    const projects = await fetchAllProjects()
    const posts = await fetchAllPosts()

    return (
        <>
            <SearchDialog projects={projects} posts={posts} />
        </>
    )
}