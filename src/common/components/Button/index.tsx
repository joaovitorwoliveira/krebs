import { ArrowUpRight, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "icon";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  text,
  onClick,
  className,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) {
  if (variant === "icon") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "flex items-center gap-1 cursor-pointer",
          "transition-colors duration-200 text-base",
          "group relative text-dark",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <span className="font-inter-bold relative uppercase ">
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-dark transition-all duration-200 ease-out group-hover:w-full"></span>
        </span>
        <Plus
          strokeWidth={2.5}
          className="w-5 h-5 -translate-x-0.0 -translate-y-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-1.5"
        />
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full px-6 py-1 flex items-center justify-center cursor-pointer",
        "transition-colors duration-200 text-base overflow-hidden",
        "group relative ",
        variant === "primary" && ["bg-black text-white "],
        variant === "secondary" && [
          "bg-transparent border-2 border-white text-white",
        ],
        variant === "tertiary" && ["bg-transparent text-white"],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Texto principal */}
        <span
          className={cn(
            "block transition-transform duration-400 ease-in-out font-encode-semibold",
            "group-hover:-translate-y-full"
          )}
        >
          {text}
        </span>

        {/* Texto que entra de baixo */}
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-400 ease-in-out font-encode-semibold",
            "translate-y-full group-hover:translate-y-0"
          )}
        >
          {text}
        </span>
      </div>
    </button>
  );
}
