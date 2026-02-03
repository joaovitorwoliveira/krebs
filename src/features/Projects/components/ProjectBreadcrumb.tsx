"use client";

import Link from "next/link";

import { useLanguage } from "@/context/LanguageProvider";

interface ProjectBreadcrumbProps {
  projectTitle: string;
}

export default function ProjectBreadcrumb({
  projectTitle,
}: ProjectBreadcrumbProps) {
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
      <Link href="/projetos" className="hover:text-dark transition-colors">
        {t.header.projects}
      </Link>
      <span className="mx-2" aria-hidden>
        &gt;
      </span>
      <span className="text-dark" aria-current="page">
        {projectTitle}
      </span>
    </nav>
  );
}
