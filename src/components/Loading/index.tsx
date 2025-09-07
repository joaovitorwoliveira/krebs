"use client";

import { motion } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageProvider";
import { Progress } from "@/components/ui/progress";

interface LoadingProps {
  progress: number;
}

export default function Loading({ progress }: LoadingProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      key="loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50"
    >
      <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wider">
            KREBS<span className="text-green-1 font-bold">+</span>
          </h1>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-80 max-w-[80vw]"
        >
          <Progress
            value={progress}
            className="h-1 bg-gray-800 [&>div]:bg-white [&>div]:transition-all [&>div]:duration-300"
          />

          {/* Progress percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="text-white/60 text-sm font-light text-center mt-4 tracking-wider"
          >
            {Math.round(progress)}{t.loading.percentage}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
