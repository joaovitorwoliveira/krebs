export interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export interface NavigationButtonProps {
  onClick: () => void;
  direction: "left" | "right";
}

export interface ProjectDetailProps {
  label?: string;
  value?: string;
}

export interface ProjectTextsProps {
  title: string;
  description: string;
  projectDetails: ProjectDetailProps[];
}

export interface ThumbnailButtonProps {
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export interface ProjectsPageProps {
  className?: string;
}

export interface ProjectPageProps {
  slug: string;
  className?: string;
}

export interface Project {
  slug: string;
  coverPhoto: string;
  images: string[];
  tags: string[];
  conclusionDate: string;
}
