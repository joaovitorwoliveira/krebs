import { motion } from "framer-motion";

import ThumbnailButton from "../ThumbnailButton";

interface ImageModalThumbnailsProps {
  images: string[];
  selectedImageIndex: number;
  onSelectImage: (index: number) => void;
  projectTitle: string;
}

export default function ImageModalThumbnails({
  images,
  selectedImageIndex,
  onSelectImage,
  projectTitle,
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
        {images.map((image, index) => (
          <ThumbnailButton
            key={index}
            image={image}
            index={index}
            isSelected={index === selectedImageIndex}
            onClick={() => onSelectImage(index)}
            projectTitle={projectTitle}
          />
        ))}
      </div>
    </motion.div>
  );
}
