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

export interface DocumentWithFullscreen extends Document {
  webkitFullscreenElement?: Element;
  webkitExitFullscreen?: () => Promise<void>;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => Promise<void>;
}
