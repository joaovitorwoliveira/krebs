"use client";

import { useLanguage } from "@/context/LanguageProvider";

import { ProjectFiltersProps } from "../types";
import ClearFiltersButton from "./ClearFiltersButton";
import SearchInput from "./SearchInput";
import TagFilter from "./TagFilter";

export default function ProjectFilters({
  searchQuery,
  selectedTags,
  availableTags,
  onSearchChange,
  onTagToggle,
  onClearFilters,
  searchInputRef,
}: ProjectFiltersProps) {
  const { t } = useLanguage();
  const hasActiveFilters = searchQuery.length > 0 || selectedTags.length > 0;

  return (
    <div className="mb-8 space-y-4">
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        searchInputRef={searchInputRef}
        placeholder={t.projects.filters.searchPlaceholder}
      />

      <TagFilter
        availableTags={availableTags}
        selectedTags={selectedTags}
        onTagToggle={onTagToggle}
        translations={t.projects.filters.tags}
      />

      {hasActiveFilters && (
        <ClearFiltersButton
          onClearFilters={onClearFilters}
          clearText={t.projects.filters.clearFilters}
        />
      )}
    </div>
  );
}
