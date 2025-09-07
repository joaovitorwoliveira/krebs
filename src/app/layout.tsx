import "./globals.css";

import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";

import { LanguageProvider } from "@/context/LanguageProvider";
import MotionProvider from "@/context/MotionProvider";

import BackToTopButton from "@/components/BackToTop";
import CopyrightTooltip from "@/components/CopyrightTooltip";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Krebs +",
  description:
    "Escritório de paisagismo Krebs + - Criamos paisagens, criamos emoções.",
  icons: {
    icon: "/images/k-plus-icon-gray.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${encodeSans.variable} ${encodeSans.className} antialiased bg-white text-dark select-none overflow-x-hidden`}
      >
        <div className="texture-overlay"></div>
        <LanguageProvider>
          <Header />
          <MotionProvider>{children}</MotionProvider>
          <Footer />
          <BackToTopButton />
          {/* <CopyrightTooltip /> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
