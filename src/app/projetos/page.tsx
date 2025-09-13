"use client";

import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import { useLanguage } from "@/context/LanguageProvider";
import {
  NoResults,
  ProjectFilters,
  useProjectFilters,
} from "@/features/Filter";
import ProjectRow from "@/features/Projects/components/ProjectRow";

export default function Projects() {
  const { t } = useLanguage();
  const {
    searchQuery,
    selectedTags,
    filteredProjects,
    projectRows,
    availableTags,
    handleSearchChange,
    handleTagToggle,
    handleClearFilters,
    searchInputRef,
  } = useProjectFilters();

  return (
    <BackgroundWrapper>
      <div className="min-h-screen">
        <div className="mx-4 md:mx-6 py-4">
          <ProjectFilters
            searchQuery={searchQuery}
            selectedTags={selectedTags}
            availableTags={availableTags}
            onSearchChange={handleSearchChange}
            onTagToggle={handleTagToggle}
            onClearFilters={handleClearFilters}
            searchInputRef={searchInputRef}
          />

          {filteredProjects.length === 0 ? (
            <NoResults message={t.projects.filters.noResults} />
          ) : (
            projectRows.map((row, rowIndex) => (
              <ProjectRow key={rowIndex} row={row} rowIndex={rowIndex} />
            ))
          )}
        </div>
      </div>
    </BackgroundWrapper>
  );
}
