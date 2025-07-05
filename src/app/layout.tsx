import type { Metadata } from "next";
import { Encode_Sans } from "next/font/google";
import "./globals.css";

const encodeSans = Encode_Sans({
  variable: "--font-encode-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Krebs +",
  description:
    "Escritório de paisagismo Krebs + - Criamos paisagens, criamos emoções.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${encodeSans.variable} ${encodeSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
