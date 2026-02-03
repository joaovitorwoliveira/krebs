"use client";

import { useEffect, useState } from "react";

import Button from "@/common/components/Button";
import { useLanguage } from "@/context/LanguageProvider";

import { cn } from "@/lib/utils";

import { TagFilterProps } from "../types";
import TagFilterModal from "./TagFilterModal";

export default function TagFilter({
  availableTags,
  selectedTags,
  onTagToggle,
  translations,
  onClearFilters,
}: TagFilterProps) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [pendingTags, setPendingTags] = useState<string[]>(selectedTags);
  const [isCleared, setIsCleared] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      setPendingTags(selectedTags);
      setIsCleared(false);
    }
  }, [isOpen, selectedTags]);

  const handlePendingToggle = (tag: string) => {
    setIsCleared(false);
    setPendingTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleApplyFilters = () => {
    if (isCleared) {
      onClearFilters?.();
      setIsOpen(false);
      return;
    }

    const toAdd = pendingTags.filter((tag) => !selectedTags.includes(tag));
    const toRemove = selectedTags.filter((tag) => !pendingTags.includes(tag));

    toAdd.forEach(onTagToggle);
    toRemove.forEach(onTagToggle);

    setIsOpen(false);
  };

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
          <Button
            variant="secondary"
            text={
              selectedTags.length > 0
                ? t.projects.filters.addFilter
                : t.projects.filters.filterByTags
            }
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 text-xs font-medium text-black bg-white border-black"
          />
        </div>
      </div>

      <TagFilterModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        availableTags={availableTags}
        pendingTags={pendingTags}
        onPendingToggle={handlePendingToggle}
        onApplyFilters={handleApplyFilters}
        onClearPending={() => {
          setPendingTags([]);
          setIsCleared(true);
        }}
        showClearButton={!!(onClearFilters && pendingTags.length > 0)}
        translations={translations}
        titleText={t.projects.filters.filterByTags}
        closeAriaLabel={t.projects.filters.close}
        clearFiltersText={t.projects.filters.clearFilters}
        applyFiltersText={t.projects.filters.applyFilters}
      />
    </>
  );
}
