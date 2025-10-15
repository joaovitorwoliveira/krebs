"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageProvider";
import { Language, languageLabels } from "@/languages";
import { ChevronDown, Globe } from "lucide-react";

import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
  isHomePage?: boolean;
}

export default function LanguageSelector({
  variant = "desktop",
  isHomePage = false,
}: LanguageSelectorProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const baseClasses = cn(
    "relative",
    variant === "desktop" ? "hidden md:block" : "md:hidden"
  );

  const buttonClasses = cn(
    "flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm font-medium",
    variant === "desktop" && isHomePage && "text-white hover:text-gray-200",
    variant === "desktop" && !isHomePage && "text-black hover:text-gray-600",
    variant === "mobile" && "text-black hover:text-gray-600"
  );

  const dropdownClasses = cn(
    "absolute z-50 mt-2 bg-light border border-gray-200 rounded-md shadow-lg min-w-[120px]",
    variant === "desktop" ? "right-0" : "right-0"
  );

  return (
    <div className={baseClasses}>
      <button onClick={toggleDropdown} className={buttonClasses}>
        <Globe size={16} />
        <span className="uppercase text-label">{languageLabels[language]}</span>
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className={dropdownClasses}>
            {Object.entries(languageLabels).map(([code, label]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as Language)}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-light transition-colors first:rounded-t-md last:rounded-b-md text-regular",
                  language === code && "bg-light font-medium"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
