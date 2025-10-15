import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "icon";
}

export default function Button({
  text,
  onClick,
  className,
  variant = "primary",
}: ButtonProps) {
  if (variant === "icon") {
    return (
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-2 cursor-pointer",
          "transition-colors duration-200 text-base",
          "group relative text-dark",
          className
        )}
      >
        <span className="font-encode relative">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dark transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-6 py-1 flex items-center justify-center cursor-pointer",
        "transition-colors duration-200 text-base overflow-hidden",
        "group relative ",
        variant === "primary" && ["bg-black text-white "],
        variant === "secondary" && [
          "bg-transparent border-2 border-white text-white",
        ],
        variant === "tertiary" && ["bg-transparent text-white"],
        className
      )}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Texto principal */}
        <span
          className={cn(
            "block transition-transform duration-200 ease-in-out font-encode-semibold",
            "group-hover:-translate-y-full"
          )}
        >
          {text}
        </span>

        {/* Texto que entra de baixo */}
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-in-out font-encode-semibold",
            "translate-y-full group-hover:translate-y-0"
          )}
        >
          {text}
        </span>
      </div>
    </button>
  );
}
