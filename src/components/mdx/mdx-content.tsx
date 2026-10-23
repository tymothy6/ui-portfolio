import * as React from "react";
import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { evaluate } from "@mdx-js/mdx";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import { inter } from "@/app/fonts";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { FigmaEmbed } from "@/components/patterns/figma-embed";
import { RichCodeBlock } from "@/components/patterns/rich-code-block";
import { RichEmbedBlock } from "@/components/patterns/rich-embed-block";
import { Figure } from "@/components/mdx/figure";
import type { ContentImage } from "@/lib/content-image";
import { remarkCodeMeta } from "@/lib/remark-code-meta";

// A titled block of the default work page layout. The first section sits
// close under the hero gallery and the last leaves room before "Other work".
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 pt-12 md:pt-16 pb-12 md:pb-16 first-of-type:pt-6 md:first-of-type:pt-8 last-of-type:pb-24 md:last-of-type:pb-36 mx-0 md:mx-48 lg:mx-60 xl:mx-72">
      <div className="mx-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <Separator className="mb-8" />
      </div>
      {children}
    </section>
  );
}

// Full-width images stacked edge to edge
function Gallery({ images }: { images: ContentImage[] }) {
  return (
    <div className="my-6 flex flex-col">
      {images.map((image) => (
        <div key={image.src} className="relative w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

// A caption that isn't attached to an image, such as a quote attribution
function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium text-center mb-8 mx-6">{children}</p>
  );
}

function Callout({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className={`${inter.className} px-8 md:max-w-3xl mx-auto`}>
      <Alert className="mb-8">
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle className="font-semibold">{title}</AlertTitle>
        <AlertDescription className="text-base">{description}</AlertDescription>
      </Alert>
    </div>
  );
}

function LinkPreview(props: React.ComponentProps<typeof RichEmbedBlock>) {
  return (
    <div className="px-8 md:max-w-3xl mx-auto">
      <RichEmbedBlock {...props} />
    </div>
  );
}

type CodeElementProps = {
  className?: string;
  children?: string;
  "data-title"?: string;
  "data-highlight"?: string;
};

// Fenced code blocks; title and highlighted lines come from the fence's meta
function CodeBlock({ children }: { children?: React.ReactNode }) {
  const code = React.Children.only(
    children,
  ) as React.ReactElement<CodeElementProps>;
  const lang = code.props.className?.replace(/^language-/, "") ?? "";

  return (
    <div className="px-8 mb-8">
      <RichCodeBlock
        title={code.props["data-title"] ?? ""}
        code={String(code.props.children ?? "").replace(/\n$/, "")}
        lang={lang}
        lineNumber={code.props["data-highlight"]}
      />
    </div>
  );
}

// Typed with React's own props; @types/mdx predates React 19's ref types
const components = {
  // Content headings start at h2; the page title is the only h1
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 mx-8" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-xl md:text-2xl font-semibold mx-8" {...props} />
  ),
  h4: (props: React.ComponentProps<"h4">) => (
    <h4 className="text-xl md:text-2xl font-medium mx-8" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-lg leading-relaxed mb-8 mx-8" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="md:list-outside md:list-decimal md:ml-12" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="md:list-outside md:list-disc md:ml-12" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <div className="px-2 pt-8 pb-0 bg-gray-50 dark:bg-card/50 border-l-4 border-l-primary border border-accent rounded-md mx-8 max-w-3xl md:mx-auto">
      <blockquote className="font-serif italic" {...props} />
    </div>
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:decoration-primary/80 rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="bg-gray-100 dark:bg-card/90 py-1 px-2 text-base font-semibold dark:font-regular rounded-md text-indigo-600 dark:text-teal-400"
      {...props}
    />
  ),
  pre: CodeBlock,
  Section,
  Gallery,
  Figure,
  Caption,
  Callout,
  LinkPreview,
  FigmaEmbed,
};

// Render MDX source from content/ on the server. Content is our own and
// trusted, so JSX expressions in it are allowed.
export async function MdxContent({ source }: { source: string }) {
  const { default: Content } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkCodeMeta],
  });
  // Re-typed so the components map is checked against the site's React types
  const Rendered = Content as React.ComponentType<{
    components: typeof components;
  }>;

  return <Rendered components={components} />;
}
