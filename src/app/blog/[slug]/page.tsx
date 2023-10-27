import Link from "next/link"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"
import { fetchPost, fetchAllPosts } from "@/lib/blog-posts"
import RichText from "@/lib/rich-text"

import { ArrowLeftIcon } from "@radix-ui/react-icons"

import { PageHeader } from "@/components/page-header"
import { Separator } from "@/components/ui/separator"
import { BlogPostCard } from "@/components/post-card"
import { PageFooter } from "@/components/page-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AvatarBlog, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


interface BlogPageParams {
    slug: string
}

interface BlogPageProps {
    params: BlogPageParams
}

export async function generateStaticParams(): Promise<BlogPageParams[]> {
    const items = await fetchAllPosts()

    return items.map((item) => ({ slug: item.slug}))
}

export async function generateMetadata({ params }: BlogPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const blogItem = await fetchPost({ slug: params.slug })
    
    if (!blogItem) {
        return notFound()
    }

    return {
        title: blogItem.title,
    }
}

async function BlogPostPage ( { params }: BlogPageProps ) {

    // fetch a single blog post by its slug
    const data = await fetchPost({ slug: params.slug })

    if (!data) {
        return notFound()
    }

    // fetch all posts other than the current one for the recommended posts display
    const blogPosts = await fetchAllPosts()
    const otherBlogPosts = blogPosts.filter((post) => post.slug !== data.slug)

    return(
        <div className="bg-gradient-to-br from-background to-slate-50 animate-gradient-xy dark:bg-gradient-to-br dark:from-background dark:to-slate-800 dark:via-slate-900 dark:animate-gradient-xy">
            <PageHeader />
            <div>
            <img
                src={data.thumbnail?.src}
                alt={data.thumbnail?.alt}
                className="w-full h-[24rem] lg:h-[32rem] object-cover object-top" 
            />
    
            <div className="flex flex-col gap-4 pt-8 lg:pt-16 mx-8 md:mx-24 lg:mx-48">
                <div className="flex flex-row justify-between items-center">
                <p className="text-sm md:text-base font-regular text-gray-800 dark:text-gray-300">{data.date ? 
                new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(data.date)) :  ''}</p>
                    <div className="hidden md:block">
                    <Button variant="link" asChild >
                            <Link href="/blog">
                                <ArrowLeftIcon className="h-5 w-5 mr-1" />Back to Blog</Link>
                    </Button> 
                    </div>
                 
                </div>
         
                <h1 className="text-5xl md:text-6xl font-semibold mb-4">{data.title}</h1>
                <div className="flex flex-col justify-start">
                    
                    <div className="flex flex-col justify-start gap-4">
                        
                        <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-800 dark:text-gray-300 font-regular">Posted by</p>
                            <div className="flex flex-row gap-2 justify-start self-start items-center rounded-lg p-2 hover:bg-accent">
                                <AvatarBlog>
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/108041576?s=400&u=ddca44b272241d11275ef2a1c6db7e4f38af5f01&v=4" alt="A shiba inu wearing a Grogu costume" />
                                        <AvatarFallback>TN</AvatarFallback>
                                </AvatarBlog>
                                <div className="flex flex-col gap-0">
                                    <p className="text-sm text-foreground font-medium">Tim Ng</p>
                                    <p className="text-sm text-gray-800 dark:text-gray-300 font-regular">@tymothy6</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="flex flex-col gap-4 mb-8">
                            <p className="text-sm text-gray-800 dark:text-gray-300 font-regular">Tags</p>
                            <div className="flex flex-row flex-wrap gap-2">
                            {data.tags && data.tags.map( tag => (
                                <Badge key={tag} variant="secondaryblog"><span className="font-mono tracking-tight">{tag}</span></Badge>
                            ))}
                            </div>
                        </div>
                        <Separator />
                       
                        
                    </div>
                </div>
            </div>

            { data.heroBlock && (
            <div className="flex flex-col"> 
                {data.heroBlock && data.heroBlock.map((image, index) =>
                   image && (
                        <img
                            key={`${data.slug}-${index}`}
                            src={image.src}
                            alt={`Hero image ${index + 1}`}
                            className="w-full object-cover" 
                        />
                    )
                )}
            </div>
            )}

            <div className="flex flex-col gap-4 pt-24 pb-36 mx-0 md:mx-48 lg:mx-64 xl:mx-72 font-serif">
                <RichText document={data.body} />
            </div>



            <div className="flex-col space-y-8 pb-24 md:pb-36 lg:pb-48 mx-8 md:mx-24 lg:mx-48">
                <h2 className="text-2xl text-foreground font-semibold mb-4">Recommended posts</h2>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-4 max-w-3xl">
                    {otherBlogPosts.slice(0, 2).map((project) => (
                        <div className="max-h-[600px]" key={project.slug}>
                            <BlogPostCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
            <PageFooter />
        </div>
    )
}

export default BlogPostPage