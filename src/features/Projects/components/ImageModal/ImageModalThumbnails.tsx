import { motion } from "@/lib/motion";

import ThumbnailButton from "../ThumbnailButton";
import { ImageModalThumbnailsProps } from "./types";

export default function ImageModalThumbnails({
  images,
  selectedImageIndex,
  onSelectImage,
}: ImageModalThumbnailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="p-2"
    >
      <div className="flex gap-1 justify-center overflow-x-auto max-w-full scrollbar-hide">
        {images.map((_, index) => (
          <ThumbnailButton
            key={index}
            index={index}
            isSelected={index === selectedImageIndex}
            onClick={() => onSelectImage(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}
