"use client";

import Button from "@/common/components/Button";
import { X } from "lucide-react";

import { AnimatePresence, motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface TagFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableTags: string[];
  pendingTags: string[];
  onPendingToggle: (tag: string) => void;
  onApplyFilters: () => void;
  onClearPending: () => void;
  showClearButton: boolean;
  translations: Record<string, string>;
  titleText: string;
  closeAriaLabel: string;
  clearFiltersText: string;
  applyFiltersText: string;
}

export default function TagFilterModal({
  isOpen,
  onClose,
  availableTags,
  pendingTags,
  onPendingToggle,
  onApplyFilters,
  onClearPending,
  showClearButton,
  translations,
  titleText,
  closeAriaLabel,
  clearFiltersText,
  applyFiltersText,
}: TagFilterModalProps) {
  return (
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
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
              "fixed bg-white shadow-2xl z-[99999] flex flex-col",
              "max-w-2xl max-h-[60vh]",
              "top-1/2 -translate-y-1/2",
              "left-4 right-4",
              "lg:left-1/2 lg:-translate-x-1/2 lg:right-auto lg:mx-4"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-dark/10">
              <h3 className="text-lg font-semibold text-dark">{titleText}</h3>
              <button
                onClick={onClose}
                className="text-dark/60 hover:text-dark transition-colors text-2xl leading-none uppercase cursor-pointer"
                aria-label={closeAriaLabel}
              >
                ×
              </button>
            </div>

            {/* Tags Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag: string) => {
                  const isSelected = pendingTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => onPendingToggle(tag)}
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
              {showClearButton && (
                <button
                  onClick={onClearPending}
                  className="flex items-center gap-2 text-xs px-4 py-2 text-dark/70 hover:text-dark transition-colors font-inter border border-dark/20 rounded-full hover:border-dark/40 hover:bg-dark/5 cursor-pointer lg:text-sm"
                >
                  <X className="h-4 w-4" />
                  {clearFiltersText}
                </button>
              )}
              <Button
                onClick={onApplyFilters}
                text={applyFiltersText}
                className={cn(
                  "bg-dark text-light rounded-full text-xs px-4 py-2 font-medium hover:bg-dark/90 transition-colors uppercase lg:text-sm",
                  showClearButton ? "flex-1" : "w-full"
                )}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
