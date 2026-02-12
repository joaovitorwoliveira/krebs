import { Metadata } from "next";

import { ProjectsPage } from "@/features/Projects";

const siteUrl = "https://krebsmais.com.br";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projetos",
    description:
      "Conheça nosso portfólio de projetos de paisagismo: jardins residenciais, espaços institucionais, projetos de urbanismo em Porto Alegre, Garopaba, Rio de Janeiro e outras localidades.",
    keywords: [
      "projetos paisagismo",
      "portfólio paisagismo",
      "jardins garopaba",
      "paisagismo porto alegre",
      "projetos realizados",
      "obras paisagismo",
      "jardins residenciais",
    ],
    openGraph: {
      title: "Projetos | Krebs + Paisagismo",
      description:
        "Conheça nosso portfólio de projetos: jardins residenciais, espaços institucionais e projetos de urbanismo realizados em todo Brasil.",
      url: `${siteUrl}/projetos`,
      images: [
        {
          url: `${siteUrl}/images/logo_full_textura.png`,
          width: 1200,
          height: 630,
          alt: "Portfólio Krebs + Paisagismo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projetos | Krebs + Paisagismo",
      description:
        "Conheça nosso portfólio de projetos de paisagismo realizados em todo Brasil.",
    },
    alternates: {
      canonical: `${siteUrl}/projetos`,
    },
  };
}

export default function Projects() {
  return <ProjectsPage />;
}
