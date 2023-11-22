"use client"

import * as React from "react"
import { Document as RichTextDocument, BLOCKS, MARKS, INLINES, Block, Inline } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { parseContentfulContentImage } from "./content-image"
import { FigmaEmbed } from "@/components/figma-embed"
import { RichCodeBlock } from "@/components/rich-code-block"
import { RichEmbedBlock } from "@/components/rich-embed-block"
import FsLightbox from "fslightbox-react"
import { useToast } from "@/components/ui/use-toast"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { inter } from "@/app/fonts"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoCircledIcon } from "@radix-ui/react-icons"

type RichTextProps = {
    document: RichTextDocument | null
}

export default function RichText({ document }: RichTextProps) {
    const pathname = usePathname()
    const { toast } = useToast()

    React.useEffect(() => {
        const isBlogPage = pathname.startsWith('/blog') // don't show toast on blog pages
        const hasToastBeenShown = window.localStorage.getItem('toastShown'); // don't show if it's already been shown to the user

        if (!hasToastBeenShown && !isBlogPage && window.matchMedia('(max-width: 768px)').matches) {
            const handleScroll = () => {
                if (window.scrollY > 0) {
                    toast({
                    title: "📱 Heads up!",
                    description: "Figma embeds can be hard to navigate on mobile. Consider viewing my project pages on a desktop browser for the best experience.",
                    });

                    window.localStorage.setItem('toastShown', 'true');
                    window.removeEventListener('scroll', handleScroll);
                }
            }

            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);

        }
    }, [toast, pathname])

    const [isLightBoxOpen, setIsLightBoxOpen] = React.useState(false)
    const [lightBoxSource, setLightBoxSource] = React.useState("")

    const options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => <h1 className="text-2xl md:text-3xl font-semibold mb-4 mx-8">{children}</h1>,
            [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => <h2 className="text-xl md:text-2xl font-semibold mx-8">{children}</h2>,
            [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => <h3 className="text-xl md:text-2xl font-medium mx-8">{children}</h3>,
            [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => <h4>{children}</h4>,
            [BLOCKS.HEADING_5]: (node: Block | Inline, children: React.ReactNode) => <h5>{children}</h5>,
            [BLOCKS.HEADING_6]: (node: Block | Inline, children: React.ReactNode) => <h6 className="text-sm font-medium text-center mb-8 mx-6">{children}</h6>,
            [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => <p className="text-lg leading-relaxed mb-8 mx-8">{children}</p>,
            [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="md:list-outside md:list-decimal md:ml-12">{children}</ol>,
            [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => <ol className="md:list-outside md:list-disc md:ml-12">{children}</ol>,
            [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => 
            <div className="px-2 pt-8 pb-0 bg-gray-50 dark:bg-card/50 border-l-4 border-l-primary border border-accent rounded-md mx-8 max-w-3xl md:mx-auto">
                <blockquote className="font-serif italic">{children}</blockquote>
            </div>,
            [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
                const { title, file } = node.data.target.fields
                let src = file.url;
                if (src.startsWith('//')) {
                    src = 'https:' + src;
                }

                return (
                    <div onClick={() => {
                        setLightBoxSource(src);
                        setIsLightBoxOpen(true);
                    }} className="cursor-pointer md:max-w-4xl mx-auto">
                        <Image alt={title} src={src} width={file.details.image.width} height={file.details.image.height} className="md:rounded-lg" />
                    </div>
                )
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
                const contentType = node.data.target.sys.contentType.sys.id;
            
                switch (contentType) {
                    case 'embed':
                    if (node.data.target.fields.figmaUrl) {
                        const figmaUrl = node.data.target.fields.figmaUrl;
                        return <FigmaEmbed figmaUrl={figmaUrl} />;
                    }
                    break;
                    case 'codeBlock':
                        const title = node.data.target.fields.title;
                        const code = node.data.target.fields.code;
                        const lang = node.data.target.fields.language;
                        const lineNumber = node.data.target.fields.lineNumber;
                        return (
                        <div className="px-8 mb-8">
                            <RichCodeBlock title={title} code={code} lang={lang} lineNumber={lineNumber}/>
                        </div>
                        )

                    case 'alert':
                        const alertTitle = node.data.target.fields.title;
                        const alertDescription = node.data.target.fields.description;
                        return (
                            <div className={` ${inter.className} px-8 md:max-w-3xl mx-auto`}>
                            <Alert className="mb-8">
                                <InfoCircledIcon className="h-4 w-4" />
                                <AlertTitle className="font-semibold">{alertTitle}</AlertTitle>
                                <AlertDescription className="text-base">{alertDescription}</AlertDescription>
                            </Alert>
                            </div>
                        )

                    case 'openGraphEmbed':
                        const openGraphTitle = node.data.target.fields.title;
                        const openGraphDescription = node.data.target.fields.description;
                        const openGraphImage = parseContentfulContentImage(node.data.target.fields.image);
                        const openGraphUrl = node.data.target.fields.url;
                        const openGraphAuthor = node.data.target.fields.author;
                        const openGraphSource = node.data.target.fields.source;
                        return (
                            <div className="px-8 md:max-w-3xl mx-auto">
                                <RichEmbedBlock title={openGraphTitle} description={openGraphDescription} image={openGraphImage} url={openGraphUrl} author={openGraphAuthor} source={openGraphSource} />
                            </div>
                        )

                    default:
                        return <div> Unsupported content type</div>;
                }
                
            },
            [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => <a href={node.data.uri} className="text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">{children}</a>,
        },
        renderMark: {
            [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-semibold">{text}</span>,
            [MARKS.CODE]: (text: React.ReactNode) => <code className="bg-gray-100/50 dark:bg-card/90 py-1 px-2 text-base rounded-md text-teal-600 dark:text-teal-400">{text}</code>,
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
