"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { NavLink, SocialIcon } from "./MenuComponents";
import MobileMenu from "./MobileMenu";

const navigationLinks = [
  { href: "/projetos", label: "PROJETOS" },
  { href: "/escritorio", label: "ESCRITÓRIO" },
  { href: "/equipe", label: "EQUIPE" },
  { href: "/contato", label: "CONTATO" },
];

const socialLinks = [
  { href: "https://www.instagram.com/krebsmais/", iconName: "Instagram" },
  {
    href: "https://www.linkedin.com/company/krebsmais/posts/?feedView=all",
    iconName: "Linkedin",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="h-20 flex items-center relative z-50">
        <div className="w-full px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center">
                  <h1 className="text-4xl lg:text-[46px] font-bold text-white leading-none">
                    KREBS+
                  </h1>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm absolute left-1/2 transform -translate-x-1/2">
              {navigationLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  <span className="">{link.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button
                className={cn(
                  "bg-black rounded-full px-6 py-2 flex items-center justify-center cursor-pointer",
                  "hover:bg-green-2 transition-colors duration-300"
                )}
              >
                <span className="text-white font-semibold text-lg">
                  CONTATO
                </span>
              </button>
            </div>

            <button
              className="md:hidden flex items-center justify-center hover:opacity-70 transition-all duration-300 relative z-50"
              onClick={toggleMobileMenu}
            >
              <Image
                src="/images/plus-icon.png"
                alt={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                width={50}
                height={40}
                className={`h-6 w-auto transition-transform duration-400 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navigationLinks={navigationLinks}
      />
    </>
  );
}
