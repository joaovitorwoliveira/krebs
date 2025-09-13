"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as LucideIcons from "lucide-react";

import Button from "../../components/ui/button";
import { NavLinkProps, SocialIconProps } from "./types";

export function NavLink({ href, children, isHomePage = false }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Button
        text={children as string}
        variant="tertiary"
        className={`px-1 ${
          isHomePage ? "text-white" : "text-black"
        } ${isActive ? "opacity-90" : ""}`}
      />
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
