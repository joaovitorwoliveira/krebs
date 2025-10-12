"use client";

import React, { useEffect, useState } from "react";

import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";

import { AnimatePresence, motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface BackToTopButtonProps {
  className?: string;
  showAfter?: number;
}

export default function BackToTopButton({
  className,
  showAfter = 300,
}: BackToTopButtonProps) {
  const { t } = useLanguage();
  const { isContactDrawerOpen } = useContactDrawer();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;
      setScrollY(currentScrollY);
      setIsVisible(currentScrollY > showAfter && !isContactDrawerOpen);
    };

    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, [showAfter, isContactDrawerOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={cn(
            "fixed bottom-16 right-6 z-50 cursor-pointer",
            "flex items-center justify-center",
            "w-12 h-12 rounded-full",
            "bg-dark/80 backdrop-blur-sm",
            "text-white hover:bg-dark",
            "transition-colors duration-300",
            "focus:outline-none focus:ring-2 focus:ring-white/20",
            "shadow-lg",
            "md:bottom-20 md:right-8",
            className
          )}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={t?.backToTop?.label || "Voltar ao topo"}
          title={t?.backToTop?.label || "Voltar ao topo"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
