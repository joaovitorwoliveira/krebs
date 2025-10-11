import React from "react";

export function parseBoldText(text: string): React.ReactNode[] {
  if (!text) return [];

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2);
      return React.createElement("strong", { key: index }, boldText);
    }

    return part;
  });
}

interface BoldTextProps {
  children: string;
  className?: string;
}

export function BoldText({ children, className }: BoldTextProps) {
  return React.createElement("span", { className }, parseBoldText(children));
}
