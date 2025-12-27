"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { Language } from "@/languages";

import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
  isHomePage?: boolean;
}

const languages: Language[] = ["pt", "en", "es"];

export default function LanguageSelector({
  variant = "desktop",
  isHomePage = false,
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  const baseClasses = cn(
    "flex items-center gap-1",
    variant === "desktop" ? "hidden md:flex" : "md:hidden"
  );

  const textColorClasses = cn(
    variant === "desktop" && isHomePage && "text-white",
    variant === "desktop" && !isHomePage && "text-black",
    variant === "mobile" && "text-black"
  );

  return (
    <div className={cn(baseClasses, "px-2")}>
      {languages.map((lang, index) => (
        <div key={lang} className="flex items-center gap-1">
          <button
            onClick={() => handleLanguageChange(lang)}
            className={cn(
              "uppercase text-sm font-medium transition-colors hover:opacity-70 cursor-pointer",
              textColorClasses,
              language === lang && "font-semibold"
            )}
          >
            {lang}
          </button>
          {index < languages.length - 1 && (
            <span className={cn("text-base", textColorClasses)}>/</span>
          )}
        </div>
      ))}
    </div>
  );
}
