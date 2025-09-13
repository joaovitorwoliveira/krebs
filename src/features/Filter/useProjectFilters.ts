"use client";

import { useCallback, useMemo, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageProvider";

import { projects } from "@/app/projetos/projects";

import { FilterHookReturn } from "./types";

export function useProjectFilters(): FilterHookReturn {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null as any);

  const availableTags = useMemo(() => {
    const allTags = projects.flatMap((project) => project.tags);
    return Array.from(new Set(allTags)).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const projectTranslation =
        t.projects.items[project.slug as keyof typeof t.projects.items];

      const matchesSearch =
        searchQuery === "" ||
        (projectTranslation?.title || project.title)
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        (projectTranslation?.place || project.place)
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [projects, searchQuery, selectedTags, t.projects.items]);

  const projectRows = useMemo(() => {
    const rows = [];
    const itemsPerRow = 3;

    for (let i = 0; i < filteredProjects.length; i += itemsPerRow) {
      rows.push(filteredProjects.slice(i, i + itemsPerRow));
    }
    return rows;
  }, [filteredProjects]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleTagToggle = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedTags([]);

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const hasActiveFilters = searchQuery.length > 0 || selectedTags.length > 0;

  return {
    searchQuery,
    selectedTags,
    filteredProjects,
    projectRows,
    availableTags,
    hasActiveFilters,
    handleSearchChange,
    handleTagToggle,
    handleClearFilters,
    searchInputRef,
  };
}
