import Link from "next/link";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";

export default function BlogPostNotFound() {
  return (
    <BackgroundWrapper>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-encode-bold text-dark text-3xl md:text-4xl">
          Post não encontrado
        </h1>
        <p className="mt-3 text-dark/70 font-inter-light max-w-md">
          A publicação que você procura pode ter sido movida ou removida.
        </p>
        <Link
          href="/blog"
          className="mt-6 text-sm font-inter uppercase tracking-wide underline hover:text-green-2 transition-colors"
        >
          ← Voltar para o blog
        </Link>
      </div>
    </BackgroundWrapper>
  );
}
