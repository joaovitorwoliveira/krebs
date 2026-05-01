"use client";

import Image from "next/image";

import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  type Document,
} from "@contentful/rich-text-types";

interface RichTextRendererProps {
  content: Document;
  headingIds?: string[];
}

function buildOptions(headingIds: string[] = []): Options {
  let h2Index = 0;

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <strong className="font-inter-semibold">{text}</strong>
      ),
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
      [MARKS.CODE]: (text) => (
        <code className="font-mono text-sm bg-dark/5 px-1.5 py-0.5 rounded">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p className="font-inter-light md:text-base text-dark mb-6 leading-[1.7]">
          {children}
        </p>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <h1 className="font-encode-bold text-dark text-3xl md:text-4xl mt-12 md:mt-16 mb-4">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => {
        const id = headingIds[h2Index++];
        return (
          <h2
            id={id}
            className="font-encode-semibold text-dark text-2xl md:text-3xl mt-12 md:mt-16 mb-4 scroll-mt-28 lg:scroll-mt-16"
          >
            {children}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="font-encode-semibold text-dark text-xl md:text-2xl mt-10 md:mt-12 mb-3">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <h4 className="font-encode-semibold text-dark text-lg md:text-xl mt-6 mb-3">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <h5 className="font-encode-semibold text-dark text-base md:text-lg mt-6 mb-2">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <h6 className="font-encode-semibold text-dark text-base mt-6 mb-2">
          {children}
        </h6>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="list-disc pl-6 mb-4 space-y-1 font-inter text-dark">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="list-decimal pl-6 mb-4 space-y-1 font-inter text-dark">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => (
        <li className="leading-relaxed [&>p]:mb-0">{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node, children) => (
        <blockquote className="border-l-2 border-green-1 pl-6 italic font-inter-light text-dark/80 my-8 text-lg md:text-xl leading-relaxed">
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="border-dark/10 my-8" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const target = node.data.target;
        const file = target?.fields?.file;
        if (!file?.url) return null;

        const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
        const dims = file.details?.image;
        const alt = target?.fields?.description || target?.fields?.title || "";

        if (!dims?.width || !dims?.height) {
          return (
            <div className="my-10 md:my-14 relative w-full aspect-[16/9]">
              <Image
                src={url}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
          );
        }

        return (
          <figure className="my-10 md:my-14">
            <Image
              src={url}
              alt={alt}
              width={dims.width}
              height={dims.height}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
            {target?.fields?.description && (
              <figcaption className="text-xs italic text-dark/60 mt-2 text-center">
                {target.fields.description}
              </figcaption>
            )}
          </figure>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const uri = node.data.uri as string;
        const isExternal = /^https?:\/\//.test(uri);
        return (
          <a
            href={uri}
            className="underline hover:text-green-2 transition-colors"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
    },
  };
}

export default function RichTextRenderer({
  content,
  headingIds,
}: RichTextRendererProps) {
  return <>{documentToReactComponents(content, buildOptions(headingIds))}</>;
}
