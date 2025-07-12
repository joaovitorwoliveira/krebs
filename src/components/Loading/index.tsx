"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LoadingProps {
  className?: string;
}

export default function Loading({ className = "" }: LoadingProps) {
  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center flex-col gap-4  ${className}`}
    >
      <motion.div
        className="relative"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          repeatDelay: 0.3,
        }}
      >
        <Image
          src="/images/plus-icon.png"
          alt="Loading"
          width={80}
          height={80}
          className="w-20 h-20"
          priority
        />
      </motion.div>
      <p className="mt-4 text-dark font-light">Carregando...</p>
    </div>
  );
}
