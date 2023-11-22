import { fetchAllPosts } from "@/lib/blog-posts"
import { CardCarousel } from "@/components/blog-card-carousel"
import { SortButton } from "@/components/sort-popover"
import { BlogCombobox } from "@/components/tag-combobox"


export async function BlogPostGrid () {
    const posts = await fetchAllPosts()

    return (
        <div className="flex flex-col justify-center items-start my-16">
            <div className="flex flex-row justify-between items-center w-full mb-8">
                <div className="flex flex-row items-center justify-center gap-2 mx-8 md:mx-4">
                    <p className="text-base md:text-lg font-semibold text-foreground font-mono">Posts</p>
                    <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-400 font-mono hidden md:block">· 2023 - </p>
                </div>
                <div className="flex-row gap-4 z-[5] mr-8 md:mr-0">
                    <div className="hidden md:block"><SortButton data={posts} /></div>
                    <BlogCombobox data={posts} />
                </div>
            </div>
            <div className="mb-4 w-full">
                    <CardCarousel posts={posts} />
            </div>
        </div>
    )
}