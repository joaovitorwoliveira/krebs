import "./globals.css";

import type { Metadata } from "next";
import { Encode_Sans, Inter } from "next/font/google";

import BackToTopButton from "@/common/components/BackToTopButton";
import CopyrightTooltip from "@/common/components/CopyrightTooltip";
import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";
import SmoothScroll from "@/common/components/SmoothScroll";
import { Toaster } from "@/common/components/Sonner";
import { ContactDrawerProvider } from "@/context/ContactDrawerProvider";
import { LanguageProvider } from "@/context/LanguageProvider";
import MotionProvider from "@/context/MotionProvider";
import { generateOrganizationSchema } from "@/utils/seo/schemas";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://krebsmais.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Krebs + | Arquitetura Paisagística",
    template: "%s | Krebs + Paisagismo",
  },
  description:
    "Escritório de paisagismo Krebs + - Criamos paisagens, criamos emoções. Projetos de arquitetura paisagística em Porto Alegre, Rio Grande do Sul e todo Brasil.",
  keywords: [
    "paisagismo",
    "arquitetura paisagística",
    "jardins",
    "paisagismo porto alegre",
    "projeto paisagismo",
    "krebs mais",
    "paisagismo residencial",
    "paisagismo institucional",
  ],
  authors: [{ name: "Krebs +" }],
  creator: "Krebs +",
  publisher: "Krebs +",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/k-plus-icon-gray.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Krebs +",
    title: "Krebs + | Arquitetura Paisagística",
    description:
      "Escritório de paisagismo Krebs + - Criamos paisagens, criamos emoções. Projetos de arquitetura paisagística em Porto Alegre e todo Brasil.",
    images: [
      {
        url: "/images/logo_full_textura.png",
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
      "Escritório de paisagismo Krebs + - Criamos paisagens, criamos emoções.",
    images: ["/images/logo_full_textura.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="pt-br">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${encodeSans.variable} ${inter.variable} ${encodeSans.className} antialiased bg-white text-dark select-none overflow-x-hidden`}
      >
        <SmoothScroll>
          <div className="texture-overlay"></div>
          <LanguageProvider>
            <ContactDrawerProvider>
              <Header />
              <MotionProvider>{children}</MotionProvider>
              <Footer />
              <BackToTopButton />
              <Toaster
                position="top-center"
                richColors
                closeButton
                expand
                visibleToasts={5}
              />
            </ContactDrawerProvider>
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
