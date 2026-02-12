import { Metadata } from "next";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import ServicesHome from "@/features/Services";

const siteUrl = "https://krebsmais.com.br";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Serviços",
    description:
      "Oferecemos serviços completos de arquitetura paisagística: projetos residenciais, institucionais, urbanismo, paisagismo de interiores e consultoria. Soluções personalizadas para cada cliente.",
    keywords: [
      "serviços paisagismo",
      "projeto paisagismo residencial",
      "paisagismo institucional",
      "urbanismo",
      "consultoria paisagismo",
      "paisagismo de interiores",
      "projeto jardim",
    ],
    openGraph: {
      title: "Serviços | Krebs + Paisagismo",
      description:
        "Serviços completos de arquitetura paisagística: projetos residenciais, institucionais, urbanismo e consultoria especializada.",
      url: `${siteUrl}/servicos`,
      images: [
        {
          url: `${siteUrl}/images/logo_full_textura.png`,
          width: 1200,
          height: 630,
          alt: "Serviços Krebs + Paisagismo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Serviços | Krebs + Paisagismo",
      description:
        "Serviços completos de arquitetura paisagística: projetos residenciais, institucionais e urbanismo.",
    },
    alternates: {
      canonical: `${siteUrl}/servicos`,
    },
  };
}

export default function ServicosPage() {
  return (
    <BackgroundWrapper>
      <ServicesHome />
    </BackgroundWrapper>
  );
}
