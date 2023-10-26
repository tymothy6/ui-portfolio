import { TypeBlogPageSkeleton } from "./content-types"
import { Entry } from "contentful"
import { Document as RichTextDocument } from "@contentful/rich-text-types"
import { contentfulClient } from "./contentful"
import { ContentImage, parseContentfulContentImage } from "./content-image"

type BlogPost = Entry<TypeBlogPageSkeleton, undefined, string>

export interface Post {
    title: string;
    slug: string;
    year: number | null;
    date: Date | null;
    tags: string[];
    thumbnail: ContentImage | null;
    summary: string;
    heroBlock: (ContentImage | null)[];
    body: RichTextDocument | null;
    recommended: BlogPost[];
}

// Transform a Contentful entry into a Post object
export function parseContentfulPost(blogPost?: BlogPost): Post | null {
    if (!blogPost) {
        return null
    }

    return {
        title: blogPost.fields.title,
        slug: blogPost.fields.slug || "",
        year: blogPost.fields.year || null,
        date: typeof blogPost.fields.date === 'string' ? new Date(blogPost.fields.date) : null,
        tags: blogPost.fields.tags || [],
        thumbnail: parseContentfulContentImage(blogPost.fields.thumbnail),
        summary: blogPost.fields.summary || "",
        heroBlock: blogPost.fields.heroBlock?.map(parseContentfulContentImage) || [],
        body: blogPost.fields.body || null,
        recommended: blogPost.fields.recommended?.filter(item => !('sys' in item && item.sys.type === 'Link')) as BlogPost[] || [],
    }
}

// Fetch all blog posts
export async function fetchAllPosts(): Promise<Post[]> {
    const posts = await contentfulClient.getEntries<TypeBlogPageSkeleton>({
        content_type: "blogPage",
    })

    return posts.items.map((post) => parseContentfulPost(post) as Post)
}

// Fetch a single post by its slug to render a page
interface FetchPostOptions {
    slug: string
}

export async function fetchPost({ slug }: FetchPostOptions): Promise<Post | null> {
    const post = await contentfulClient.getEntries<TypeBlogPageSkeleton>({
        content_type: "blogPage",
        "fields.slug": slug,
    })

    return parseContentfulPost(post.items[0])
}