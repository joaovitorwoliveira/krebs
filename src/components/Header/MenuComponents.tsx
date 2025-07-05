"use client";

import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialIconProps {
  href: string;
  iconName: string;
  size?: number;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-dark hover:text-green-4 transition-colors duration-200 font-light relative group ${
        isActive ? "text-green-4" : ""
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-[0.5px] bg-green-4 transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
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
