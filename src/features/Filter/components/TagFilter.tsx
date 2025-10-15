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
                "px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-200",
                isSelected
                  ? "bg-black text-light border-black"
                  : "bg-light text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
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
