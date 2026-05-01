"use client";

import { useCallback } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { toast } from "sonner";

interface BlogPostShareProps {
  title: string;
}

export default function BlogPostShare({ title }: BlogPostShareProps) {
  const { t } = useLanguage();

  const getUrl = () =>
    typeof window !== "undefined" ? window.location.href : "";

  const openShare = useCallback((href: string) => {
    if (typeof window === "undefined") return;
    window.open(href, "_blank", "noopener,noreferrer");
  }, []);

  const handleX = () => {
    const url = encodeURIComponent(getUrl());
    const text = encodeURIComponent(title);
    openShare(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
  };

  const handleLinkedIn = () => {
    const url = encodeURIComponent(getUrl());
    openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  };

  const handleCopy = async () => {
    const url = getUrl();
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      toast.success(t.blog.linkCopied);
    } catch {
      toast.error(t.blog.linkCopied);
    }
  };

  return (
    <div className="mt-12 md:mt-16 pt-6 md:pt-8">
      <div className="flex items-center gap-6 md:gap-8 text-dark">
        <button
          type="button"
          onClick={handleX}
          aria-label={t.blog.shareOnX}
          title={t.blog.shareOnX}
          className="transition-opacity hover:opacity-60 focus:outline-none focus-visible:opacity-60 cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleLinkedIn}
          aria-label={t.blog.shareOnLinkedIn}
          title={t.blog.shareOnLinkedIn}
          className="transition-opacity hover:opacity-60 focus:outline-none focus-visible:opacity-60 cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M20.45 20.45h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.45H3.555V9h3.564v11.45zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.272V1.723C24 .771 23.2 0 22.222 0h.003z" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={t.blog.copyLink}
          title={t.blog.copyLink}
          className="transition-opacity hover:opacity-60 focus:outline-none focus-visible:opacity-60 cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </button>
      </div>
    </div>
  );
}
