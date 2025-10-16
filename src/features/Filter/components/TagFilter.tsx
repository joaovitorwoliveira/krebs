"use client";

import { motion } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { TagFilterProps } from "../types";

export default function TagFilter({
  availableTags,
  selectedTags,
  onTagToggle,
  translations,
}: TagFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="space-y-3"
    >
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tag: string) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 shadow-sm font-inter",
                isSelected
                  ? "bg-green-5 text-light border-dark shadow-md"
                  : "bg-light text-dark border-dark/20 hover:border-dark/40 hover:bg-dark/5 hover:shadow-md"
              )}
            >
              {translations[tag] || tag}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
