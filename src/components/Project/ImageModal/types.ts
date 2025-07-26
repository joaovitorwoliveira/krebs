export interface ImageModalProps {
  images: string[];
  projectTitle: string;
  selectedImageIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelectImage: (index: number) => void;
}

export interface ImageModalContentProps {
  images: string[];
  projectTitle: string;
  selectedImageIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onBackdropClick: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
}

export interface ImageModalHeaderProps {
  currentIndex: number;
  totalImages: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onClose: () => void;
}

export interface ImageModalThumbnailsProps {
  images: string[];
  selectedImageIndex: number;
  onSelectImage: (index: number) => void;
  projectTitle: string;
}
