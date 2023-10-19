"use client"

import * as React from "react"
import { Document as RichTextDocument, BLOCKS, MARKS, INLINES, Block, Inline } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FigmaEmbed } from "@/components/figma-embed"
import FsLightbox from "fslightbox-react"

type RichTextProps = {
    document: RichTextDocument | null
}

export default function RichText({ document }: RichTextProps) {
    const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false)
    const [lightBoxSource, setLightBoxSource] = React.useState("")

    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1 className="text-2xl md:text-3xl font-semibold mb-4 mx-12 md:mx-0 lg:mx-0">{children}</h1>,
            [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => <h2 className="text-xl md:text-2xl font-semibold mx-12 md:mx-0 lg:mx-0">{children}</h2>,
            [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => <h3>{children}</h3>,
            [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => <h4>{children}</h4>,
            [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => <h5>{children}</h5>,
            [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => <h6 className="text-sm font-medium text-start mb-8 mx-6 lg:mx-0">{children}</h6>,
            [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <p className="text-base md:text-lg leading-relaxed mb-8 mx-12 md:mx-0 lg:mx-0">{children}</p>,
            [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="list-disc">{children}</ol>,
            [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="list-disc">{children}</ol>,
            [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => <div className="mx-16 lg:mx-0 p-8 md:p-12 bg-accent rounded-sm"><blockquote className="border-l-2 border-primary p-2 pl-2 md:pl-6 italic">{children}</blockquote></div>,
            [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
                const { title, file } = node.data.target.fields
                return (
                    <div onClick={() => {
                        setLightBoxSource(file.url);
                        setIsLightBoxOpen(true);
                    }} className="cursor-pointer">
                        <img alt={title} src={file.url} className="lg:rounded-lg" />
                    </div>
                )
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
                const figmaUrl = node.data.target.fields.figmaUrl
                return <FigmaEmbed figmaUrl={figmaUrl} />
            },
            [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => <a href={node.data.uri} className="text-foreground underline decoration-primary decoration-2 underline-offset-2 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">{children}</a>,
        },
        renderMark: {
            [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-semibold">{text}</span>,
        },
        
    }

    if (!document) {
        return null
    }

    return ( 
    <>
        {documentToReactComponents(document, options)}
        <FsLightbox
            toggler={isLightBoxOpen}
            sources={[lightBoxSource]}
        />
    </>
    )
}
