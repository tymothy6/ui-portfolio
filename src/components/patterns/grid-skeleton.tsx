import { BlogCardSkeleton } from "@/components/patterns/card-skeleton"

export function BlogGridSkeleton () {
    return(
        <div className="flex flex-row md:grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-4 overflow-x-hidden">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
        </div>
    )
}