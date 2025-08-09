import { ChevronLeft, ChevronRight } from "lucide-react";

import { NavigationButtonProps } from "./types";

export default function NavigationButton({
  onClick,
  direction,
}: NavigationButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  const sideClass =
    direction === "left" ? "left-3 md:left-6" : "right-3 md:right-6";
  const label = direction === "left" ? "Imagem anterior" : "Próxima imagem";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute ${sideClass} top-1/2 -translate-y-1/2
        z-20 flex items-center justify-center cursor-pointer!
        w-8 h-8 md:w-10 md:h-10 rounded-full
        bg-black/30 text-white border border-white/50 backdrop-blur-sm
        hover:bg-black/45 hover:border-white transition
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80`}
    >
      <Icon size={15} strokeWidth={2} />
    </button>
  );
}
