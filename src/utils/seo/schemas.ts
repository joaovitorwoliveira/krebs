import { Project } from "@/features/Projects/types";

const siteUrl = "https://krebsmais.com.br";

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProjectSchema(
  project: Project,
  projectTitle: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projectTitle,
    description: `Projeto de paisagismo ${projectTitle} - ${project.tags.join(", ")}`,
    image: project.images,
    dateCompleted: `${project.conclusionDate}-01-01`,
    keywords: project.tags.join(", "),
    creator: {
      "@type": "Organization",
      name: "Krebs +",
      url: siteUrl,
    },
    url: `${siteUrl}/projetos/${slug}`,
    genre: "Landscape Architecture",
    inLanguage: "pt-BR",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Krebs +",
    alternateName: "Krebs Mais",
    url: siteUrl,
    logo: `${siteUrl}/images/logo_full_textura.png`,
    description:
      "Escritório de arquitetura paisagística especializado em projetos residenciais, institucionais e de urbanismo.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "RS",
    },
  };
}
