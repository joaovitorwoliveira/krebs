import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export default function Button({
  text,
  onClick,
  className,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-6 py-2 flex items-center justify-center cursor-pointer",
        "transition-colors duration-200 font-semibold text-base overflow-hidden",
        "group relative",
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
            "block transition-transform duration-200 ease-in-out",
            "group-hover:-translate-y-full"
          )}
        >
          {text}
        </span>

        {/* Texto que entra de baixo */}
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-in-out",
            "translate-y-full group-hover:translate-y-0"
          )}
        >
          {text}
        </span>
      </div>
    </button>
  );
}
