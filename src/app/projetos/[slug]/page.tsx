import { Metadata } from "next";

import { ProjectPage } from "@/features/Projects";
import { projects } from "@/features/Projects/projects";
import {
  generateBreadcrumbSchema,
  generateProjectSchema,
} from "@/utils/seo/schemas";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krebsmais.com.br";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatProjectTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace(/Svg/g, "SVG")
    .replace(/Atj/g, "ATJ")
    .replace(/Ltx/g, "LTX")
    .replace(/Adg/g, "ADG")
    .replace(/Ssg/g, "SSG")
    .replace(/Lmp/g, "LMP")
    .replace(/Fek/g, "FEK")
    .replace(/Flv/g, "FLV");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projeto Não Encontrado",
    };
  }

  const projectTitle = formatProjectTitle(slug);
  const projectType = project.tags[0] || "paisagismo";
  const location = project.tags.find((tag) =>
    [
      "garopaba",
      "portoalegre",
      "riodejaneiro",
      "pelotas",
      "uruguai",
      "gravatai",
      "novasantarita",
      "xangrila",
      "labarra",
    ].includes(tag.toLowerCase())
  );

  const description = `Projeto ${projectTitle} - ${projectType} ${location ? `em ${location}` : ""} realizado pelo escritório Krebs +. Arquitetura paisagística com ${project.tags.slice(0, 3).join(", ")}.`;

  return {
    title: `${projectTitle} | Projeto de Paisagismo`,
    description: description,
    keywords: [
      ...project.tags,
      "paisagismo",
      "arquitetura paisagística",
      "krebs mais",
      "projeto paisagismo",
    ],
    openGraph: {
      title: `${projectTitle} | Krebs + Paisagismo`,
      description: description,
      url: `${siteUrl}/projetos/${slug}`,
      type: "article",
      images: [
        {
          url: project.coverPhoto,
          width: 1200,
          height: 800,
          alt: `${projectTitle} - Projeto de Paisagismo Krebs +`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectTitle} | Krebs + Paisagismo`,
      description: description,
      images: [project.coverPhoto],
    },
    alternates: {
      canonical: `${siteUrl}/projetos/${slug}`,
    },
  };
}

export default async function Project({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  const projectTitle = formatProjectTitle(slug);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Projetos", url: `${siteUrl}/projetos` },
    { name: projectTitle, url: `${siteUrl}/projetos/${slug}` },
  ]);

  const projectSchema = generateProjectSchema(project, projectTitle, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
      <ProjectPage slug={slug} />
    </>
  );
}
