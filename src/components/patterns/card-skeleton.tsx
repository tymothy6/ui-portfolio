import { BlogCard, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function BlogCardSkeleton () {
    return (
        <BlogCard className="flex flex-col h-full mx-4 md:mx-0 overflow-hidden w-full">
            <CardHeader>
                <div className="flex flex-row justify-between items-center w-full">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                <Skeleton className="h-8 w-full" />
            </CardHeader>
            <CardContent className="flex flex-col items-start w-full">
                <div className="flex flex-col gap-4 w-full">
                    <Skeleton className="h-[200px] w-full rounded-lg" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </CardContent>
            <CardFooter className="mt-auto">
                <Skeleton className="h-8 w-full" />
            </CardFooter>
        </BlogCard>
    )
}

