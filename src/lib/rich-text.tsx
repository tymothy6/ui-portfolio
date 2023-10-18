import { Document as RichTextDocument, BLOCKS, MARKS, INLINES, Block, Inline } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FigmaEmbed } from "@/components/figma-embed"

type RichTextProps = {
    document: RichTextDocument | null
}

const options = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1 className="text-3xl font-semibold">{children}</h1>,
        [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => <h2 className="text-2xl font-semibold">{children}</h2>,
        [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => <h3>{children}</h3>,
        [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => <h6 className="text-sm font-medium text-center">{children}</h6>,
        [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <p className="text-lg leading-relaxed">{children}</p>,
        [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="list-disc">{children}</ol>,
        [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="list-disc">{children}</ol>,
        [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => <div className="p-6 bg-accent rounded-sm"><blockquote className="border-l-2 border-primary px-6 italic">{children}</blockquote></div>,
        [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
            const { title, file } = node.data.target.fields
            return <img alt={title} src={file.url} className="rounded-lg" />
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
            const figmaUrl = node.data.target.fields.figmaUrl
            return <FigmaEmbed figmaUrl={figmaUrl} />
        },
        [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => <a href={node.data.uri} className="text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-primary/80">{children}</a>,
    },
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-semibold">{text}</span>,
    },
    
}

export default function RichText({ document }: RichTextProps) {
    if (!document) {
        return null
    }

    return <>{documentToReactComponents(document, options)}</>
}
