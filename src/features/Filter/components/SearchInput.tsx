"use client";

import { Search } from "lucide-react";

import { motion } from "@/lib/motion";

import { SearchInputProps } from "../types";

export default function SearchInput({
  searchQuery,
  onSearchChange,
  searchInputRef,
  placeholder,
}: SearchInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-dark ml-2" />
      <input
        ref={searchInputRef}
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-full bg-transparent border-2 border-dark text-dark text-sm transition-colors duration-200 placeholder:text-dark/70 focus:outline-none focus:ring-2 focus:ring-dark/10"
      />
    </motion.div>
  );
}
