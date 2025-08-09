import "./globals.css";

import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";

import MotionProvider from "@/context/MotionProvider";

// import CopyrightTooltip from "@/components/CopyrightTooltip";
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
    <html lang="pt-br">
      <body
        className={`${encodeSans.variable} ${encodeSans.className} antialiased bg-white text-dark select-none overflow-y-scroll`}
      >
        <div className="texture-overlay"></div>
        <MotionProvider>
          <div className="pointer-events-auto">
            <Header />
            <div 
            // className="select-none [&_img]:pointer-events-none [&_img]:select-none [&_img]:drag-none"
            >
              {children}
            </div>
          </div>
        </MotionProvider>
        {/* <CopyrightTooltip /> */}
      </body>
    </html>
  );
}
