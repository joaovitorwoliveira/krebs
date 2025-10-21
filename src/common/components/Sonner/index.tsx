"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--light)",
          "--normal-text": "var(--dark)",
          "--normal-border": "var(--green-1)",
          "--success-bg": "var(--green-1)",
          "--success-text": "var(--light)",
          "--success-border": "var(--green-2)",
          "--error-bg": "var(--brown-1)",
          "--error-text": "var(--light)",
          "--error-border": "var(--brown-2)",
          "--warning-bg": "var(--brown-2)",
          "--warning-text": "var(--dark)",
          "--warning-border": "var(--brown-1)",
          "--info-bg": "var(--gray-blue)",
          "--info-text": "var(--light)",
          "--info-border": "var(--blue-dark)",
          "--border-radius": "8px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
