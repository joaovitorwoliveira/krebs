export interface ProjectFiltersProps {
  searchQuery: string;
  selectedTags: string[];
  availableTags: string[];
  onSearchChange: (value: string) => void;
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}

export interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
}

export interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  translations: Record<string, string>;
}

export interface ClearFiltersButtonProps {
  onClearFilters: () => void;
  clearText: string;
}

export interface NoResultsProps {
  message: string;
}

export interface FilterHookReturn {
  searchQuery: string;
  selectedTags: string[];
  filteredProjects: any[];
  projectRows: any[][];
  availableTags: string[];
  hasActiveFilters: boolean;
  handleSearchChange: (value: string) => void;
  handleTagToggle: (tag: string) => void;
  handleClearFilters: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}
