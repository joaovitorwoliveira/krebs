import { ThumbnailButtonProps } from "../types";

export default function ThumbnailButton({
  index,
  isSelected,
  onClick,
}: ThumbnailButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Foto ${index + 1}`}
      className={`relative flex flex-shrink-0 w-8 h-8 md:w-10 md:h-10 items-center justify-center rounded-sm text-xs md:text-sm font-medium transition-all duration-200 border ${
        isSelected
          ? "border-white bg-white/10 text-white"
          : "border-white/30 text-white/60 hover:border-white/50 hover:text-white/80"
      }`}
    >
      {index + 1}
    </button>
  );
}
