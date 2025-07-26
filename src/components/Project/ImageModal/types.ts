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

export interface DocumentWithFullscreen extends Document {
  webkitFullscreenElement?: Element;
  webkitExitFullscreen?: () => Promise<void>;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => Promise<void>;
}

export interface ElementWithFullscreen extends Element {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export interface UseSwipeHandlersProps {
  onNext: () => void;
  onPrevious: () => void;
  selectedImageIndex: number | null;
  imagesLength: number;
}
