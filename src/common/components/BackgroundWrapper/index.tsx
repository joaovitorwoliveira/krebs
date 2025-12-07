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
        className="fixed inset-0 opacity-2 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/curvas.svg')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10 px-2 lg:px-10 mx-auto">{children}</div>
    </div>
  );
}
