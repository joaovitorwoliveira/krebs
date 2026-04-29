"use client";

import Link from "next/link";

import { useLanguage } from "@/context/LanguageProvider";

interface BlogBreadcrumbProps {
  postTitle: string;
}

export default function BlogBreadcrumb({ postTitle }: BlogBreadcrumbProps) {
  const { t } = useLanguage();

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-xs font-medium uppercase tracking-wide text-dark/70"
    >
      <Link href="/" className="hover:text-dark transition-colors">
        {t.footer.navigationLinks.home}
      </Link>
      <span className="mx-2" aria-hidden>
        &gt;
      </span>
      <Link href="/blog" className="hover:text-dark transition-colors">
        {t.header.blog}
      </Link>
      <span className="mx-2" aria-hidden>
        &gt;
      </span>
      <span className="text-dark normal-case" aria-current="page">
        {postTitle}
      </span>
    </nav>
  );
}
