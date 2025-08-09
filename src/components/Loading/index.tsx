"use client";

import Image from "next/image";

interface LoadingProps {
  className?: string;
}

export default function Loading({ className = "" }: LoadingProps) {
  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center flex-col gap-2 ${className}`}
    >
      <div className="relative animate-spin-slow">
        <Image
          src="/images/plus-icon.png"
          alt="Loading"
          width={50}
          height={50}
          className="w-12 h-12"
          priority
        />
      </div>
      <p className="mt-4 text-dark font-light text-sm">Carregando...</p>
    </div>
  );
}
