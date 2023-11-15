import Link from "next/link"
import { Metadata, ResolvingMetadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { fetchPost, fetchAllPosts } from "@/lib/blog-posts"
import RichText from "@/lib/rich-text"

import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { TagIcon, LibraryIcon, ShareIcon } from "lucide-react"

import { PageHeader } from "@/components/page-header"
import { SearchWrapper } from "@/components/search-wrapper"
import { Separator } from "@/components/ui/separator"
import { CardCarousel } from "@/components/blog-card-carousel"
import { PageFooter } from "@/components/page-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AvatarBlog, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { LinkedInShare, TwitterShare } from "@/components/contact-button"

export const viewport: Viewport = {
    themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6d28d9' },
    { media: '(prefers-color-scheme: dark)', color: '#7c3aed' },
    ],
}

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
        openGraph: {
            title: blogItem.title,
            description: blogItem.summary,
            images: [
                {
                    url: blogItem.thumbnail!.src ?? "",
                    width: blogItem.thumbnail!.width ?? 800,
                    height: blogItem.thumbnail!.height ?? 600,
                    alt: blogItem.thumbnail!.alt ?? "",
                    type: "image/png",
                },
            ],
        },
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
            <PageHeader>
                <SearchWrapper />
            </PageHeader>
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
                        <div className="flex flex-row gap-2 items-center">
                        <LibraryIcon className="h-4 w-4 text-gray-800 dark:text-gray-300" />
                        <p className="text-sm font-mono text-gray-800 dark:text-gray-300 font-regular">Posted by</p>
                        </div>
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
                       
                        <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col gap-6 mb-4">
                            <div className="flex flex-row gap-2 items-center">
                            <TagIcon className="h-4 w-4 text-gray-800 dark:text-gray-300" />
                            <p className="text-sm font-mono text-gray-800 dark:text-gray-300 font-regular">Tags</p>
                            </div>
                            <div className="flex flex-row flex-wrap gap-2">
                            {data.tags && data.tags.map( tag => (
                                <Badge key={tag} variant="secondaryblog"><span className="font-mono tracking-tight">{tag}</span></Badge>
                            ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mb-4">
                            <div className="ml-2 flex flex-row gap-2 items-center">
                            <ShareIcon className="h-4 w-4 text-gray-800 dark:text-gray-300" />
                            <p className="text-sm font-mono text-gray-800 dark:text-gray-300 font-regular">Share</p>
                           
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                            <LinkedInShare url={`https://tim-ng.me/blog/${data.slug}`} />
                            <TwitterShare url={`https://tim-ng.me/blog/${data.slug}`} />
                            </div>
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
                
                <div className="flex flex-row gap-4">
                            <div className="flex flex-row gap-2 items-center">
                            <p className="ml-2 text-base font-mono text-gray-800 dark:text-gray-300 font-regular">Share this post</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                            <LinkedInShare url={`https://tim-ng.me/blog/${data.slug}`} />
                            <TwitterShare url={`https://tim-ng.me/blog/${data.slug}`} />
                            </div>
                        </div>
                        <Separator />
            </div>

            <div className="flex-col space-y-8 pb-24 md:pb-36 lg:pb-48 md:mx-24 lg:mx-48">
                <h2 className="text-2xl text-foreground font-semibold mx-8 font-mono mb-4">Recommended posts</h2>
                <CardCarousel posts={otherBlogPosts} recommended={true} />
            </div>

        </div>
            <PageFooter />
        </div>
    )
}

export default BlogPostPage