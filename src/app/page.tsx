import { Metadata } from "next";

import HomePage from "@/features/Home";

const siteUrl = "https://krebsmais.com.br";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Krebs + | Arquitetura Paisagística ",
    description:
      "Krebs + é um escritório de arquitetura paisagística especializado em projetos residenciais, institucionais e de urbanismo. Criamos paisagens, criamos emoções.",
    keywords: [
      "paisagismo porto alegre",
      "arquitetura paisagística",
      "paisagismo rs",
      "projetos de jardim",
      "paisagismo residencial",
      "paisagismo institucional",
      "jardins garopaba",
      "urbanismo",
    ],
    openGraph: {
      title: "Krebs + | Arquitetura Paisagística",
      description:
        "Escritório de arquitetura paisagística especializado em projetos residenciais, institucionais e de urbanismo. Criamos paisagens, criamos emoções.",
      url: siteUrl,
      images: [
        {
          url: `${siteUrl}/images/logo_full_textura.png`,
          width: 1200,
          height: 630,
          alt: "Krebs + Arquitetura Paisagística",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Krebs + | Arquitetura Paisagística",
      description:
        "Escritório de arquitetura paisagística especializado em projetos residenciais, institucionais e de urbanismo.",
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default function Home() {
  return <HomePage />;
}
