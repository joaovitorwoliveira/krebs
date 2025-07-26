import Image from "next/image";

import { ThumbnailButtonProps } from "./types";

export default function ThumbnailButton({
  image,
  index,
  isSelected,
  onClick,
  projectTitle,
}: ThumbnailButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 w-10 h-10 overflow-hidden rounded-sm transition-all duration-200 
                 border-2 ${
                   isSelected
                     ? "border-white opacity-100"
                     : "border-transparent opacity-60 hover:opacity-80"
                 }`}
    >
      <Image
        src={image}
        alt={`${projectTitle} - Miniatura ${index + 1}`}
        fill
        className="object-cover"
      />
    </button>
  );
}
