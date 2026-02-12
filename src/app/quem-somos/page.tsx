import { Metadata } from "next";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import WhoWeAre from "@/features/WhoWeAre";

const siteUrl = "https://krebsmais.com.br";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Quem Somos",
    description:
      "Conheça o Krebs +, escritório de arquitetura paisagística com vasta experiência em projetos residenciais, institucionais e de urbanismo. Nossa equipe transforma espaços em paisagens memoráveis.",
    keywords: [
      "krebs mais",
      "escritório paisagismo",
      "arquitetos paisagistas",
      "equipe paisagismo",
      "história krebs",
      "sobre krebs",
    ],
    openGraph: {
      title: "Quem Somos | Krebs + Paisagismo",
      description:
        "Conheça o Krebs +, escritório de arquitetura paisagística com vasta experiência em projetos residenciais, institucionais e de urbanismo.",
      url: `${siteUrl}/quem-somos`,
      images: [
        {
          url: `${siteUrl}/images/logo_full_textura.png`,
          width: 1200,
          height: 630,
          alt: "Equipe Krebs + Paisagismo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Quem Somos | Krebs + Paisagismo",
      description:
        "Conheça o Krebs +, escritório de arquitetura paisagística com vasta experiência em projetos.",
    },
    alternates: {
      canonical: `${siteUrl}/quem-somos`,
    },
  };
}

export default function OfficePage() {
  return (
    <BackgroundWrapper>
      <WhoWeAre />
    </BackgroundWrapper>
  );
}
