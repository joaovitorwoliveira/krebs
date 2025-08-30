"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as LucideIcons from "lucide-react";

import { NavLinkProps, SocialIconProps } from "./types";

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-white font-semibold text-base duration-200 relative group ${
        isActive ? "opacity-90" : ""
      } hover:opacity-90 transition-opacity`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
    </Link>
  );
}

export function SocialIcon({ href, iconName, size = 18 }: SocialIconProps) {
  const baseClasses =
    "flex items-center justify-center text-dark hover:text-green-2 transition-all duration-200";

  const IconComponent = (
    LucideIcons as unknown as Record<
      string,
      React.ComponentType<{
        size?: number;
        strokeWidth?: number;
      }>
    >
  )[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }

  return (
    <a href={href} target="_blank" className={baseClasses}>
      <IconComponent size={size} strokeWidth={1} />
    </a>
  );
}
