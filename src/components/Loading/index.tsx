"use client";

import Image from "next/image";

interface LoadingProps {
  className?: string;
}

export default function Loading({ className = "" }: LoadingProps) {
  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center flex-col gap-4  ${className}`}
    >
      <div className="relative animate-spin-slow">
        <Image
          src="/images/plus-icon.png"
          alt="Loading"
          width={80}
          height={80}
          className="w-20 h-20"
          priority
        />
      </div>
      <p className="mt-4 text-dark font-light">Carregando...</p>
    </div>
  );
}
