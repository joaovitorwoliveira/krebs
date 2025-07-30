export interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export interface NavigationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  position: "left" | "right";
}

export interface ProjectDetailProps {
  label?: string;
  value?: string;
}

export interface ProjectTextsProps {
  title: string;
  description: string;
  projectDetails: Array<{
    label?: string;
    value?: string;
  }>;
}

export interface ThumbnailButtonProps {
  image: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  projectTitle: string;
}
