import { useState } from "react";

import { UseSwipeHandlersProps } from "./types";

export function useSwipeHandlers({
  onNext,
  onPrevious,
  selectedImageIndex,
  imagesLength,
}: UseSwipeHandlersProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (
      isLeftSwipe &&
      selectedImageIndex !== null &&
      selectedImageIndex < imagesLength - 1
    ) {
      onNext();
    }
    if (isRightSwipe && selectedImageIndex !== null && selectedImageIndex > 0) {
      onPrevious();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
