import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

export default function BackgroundWrapper({
  children,
}: BackgroundWrapperProps) {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 opacity-3 -z-10 bg-center bg-no-repeat bg-scroll
          bg-[length:220%_auto]
          md:bg-cover md:bg-fixed"
        style={{
          backgroundImage: "url('/images/curvas.svg')",
        }}
      />
      <div className="relative z-10 px-2 lg:px-10 mx-auto">{children}</div>
    </div>
  );
}
