"use client";

import { useEffect, useState } from "react";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";
import { X } from "lucide-react";

import { AnimatePresence, motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { TagFilterProps } from "../types";

export default function TagFilter({
  availableTags,
  selectedTags,
  onTagToggle,
  translations,
  onClearFilters,
}: TagFilterProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Botão para abrir modal + tags selecionadas */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          {selectedTags.length > 0 && (
            <>
              {selectedTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => onTagToggle(tag)}
                  className={cn(
                    "px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 shadow-sm font-inter cursor-pointer",
                    "bg-green-5 text-light border-dark shadow-md"
                  )}
                >
                  {translations[tag] || tag}
                </button>
              ))}
            </>
          )}
          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 shadow-sm font-inter cursor-pointer",
              "bg-white text-dark border-dark/20 hover:border-dark/40 hover:bg-dark/5 hover:shadow-md"
            )}
          >
            {selectedTags.length > 0
              ? t.projects.filters.addFilter
              : t.projects.filters.filterByTags}
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[99998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={cn(
                "fixed bg-white rounded-2xl shadow-2xl z-[99999] flex flex-col",
                "max-w-2xl max-h-[60vh]",
                "top-1/2 -translate-y-1/2",
                "left-4 right-4",
                "lg:left-1/2 lg:-translate-x-1/2 lg:right-auto lg:mx-4"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-dark/10">
                <h3 className="text-lg font-semibold text-dark">
                  {t.projects.filters.filterByTags}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-dark/60 hover:text-dark transition-colors text-2xl leading-none uppercase cursor-pointer"
                  aria-label={t.projects.filters.close}
                >
                  ×
                </button>
              </div>

              {/* Tags Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag: string) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => onTagToggle(tag)}
                        className={cn(
                          "px-4 py-2 text-[11px] font-medium rounded-full border transition-all duration-200 shadow-sm font-inter cursor-pointer lg:text-xs",
                          isSelected
                            ? "bg-green-5 text-light border-dark shadow-md"
                            : "bg-white text-dark border-dark/20 hover:border-dark/40 hover:bg-dark/5 hover:shadow-md"
                        )}
                      >
                        {translations[tag] || tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-dark/10 flex gap-3">
                {onClearFilters && selectedTags.length > 0 && (
                  <button
                    onClick={onClearFilters}
                    className="flex items-center gap-2 text-xs px-4 py-2 text-dark/70 hover:text-dark transition-colors font-inter border border-dark/20 rounded-full hover:border-dark/40 hover:bg-dark/5 cursor-pointer lg:text-sm"
                  >
                    <X className="h-4 w-4" />
                    {t.projects.filters.clearFilters}
                  </button>
                )}
                <Button
                  onClick={() => setIsOpen(false)}
                  text={t.projects.filters.applyFilters}
                  className={cn(
                    "bg-dark text-light rounded-full text-xs px-4 py-2 font-medium hover:bg-dark/90 transition-colors uppercase lg:text-sm",
                    onClearFilters && selectedTags.length > 0
                      ? "flex-1"
                      : "w-full"
                  )}
                ></Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
