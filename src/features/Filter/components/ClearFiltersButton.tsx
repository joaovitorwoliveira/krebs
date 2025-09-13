"use client";

import { X } from "lucide-react";

import { motion } from "@/lib/motion";

import { ClearFiltersButtonProps } from "../types";

export default function ClearFiltersButton({
  onClearFilters,
  clearText,
}: ClearFiltersButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={onClearFilters}
      className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
    >
      <X className="h-3 w-3" />
      {clearText}
    </motion.button>
  );
}
