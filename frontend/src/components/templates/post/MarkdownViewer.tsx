"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

interface IMarkdownViewer {
  content: string;
}
const MarkdownViewer = ({ content }: IMarkdownViewer) => {
  return (
    <ReactMarkdown
      className="mt-10 prose max-w-none prose-headings:text-slate-400 prose-p:text-slate-500 prose-li:text-slate-500 prose-a:text-custom-blue prose-strong:text-slate-300"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          );
        },
        img: ({ src, alt }) => (
          <Image
            className="object-contain w-full max-h-60"
            src={src || ""}
            alt={alt || ""}
            width={800}
            height={700}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
