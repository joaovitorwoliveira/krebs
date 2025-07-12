interface NavigationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  position: "left" | "right";
}

export default function NavigationButton({
  onClick,
  children,
  position,
}: NavigationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute cursor-pointer ${
        position === "left" ? "left-8" : "right-8"
      }
       top-1/2 transform -translate-y-1/2 text-white text-4xl font-light hover:text-gray-300 transition-colors 
       z-20 w-8 h-8 flex items-center justify-center border rounded-full border-white pb-2 cursor-pointer`}
    >
      {children}
    </button>
  );
}
