"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import ContactDrawer from "../ContactDrawer";
import Button from "../ui/button";
import { NavLink } from "./MenuComponents";
import MobileMenu from "./MobileMenu";

const navigationLinks = [
  { href: "/projetos", label: "PROJETOS" },
  { href: "/escritorio", label: "ESCRITÓRIO" },
  { href: "/equipe", label: "EQUIPE" },
  { href: "/contato", label: "CONTATO" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openContactDrawer = () => {
    setIsContactDrawerOpen(true);
  };

  const closeContactDrawer = () => {
    setIsContactDrawerOpen(false);
  };

  return (
    <>
      <header className="h-20 flex items-center relative z-40 bg-transparent">
        <div className="w-full px-4 md:px-6 lg:px-10">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center">
                  <h1
                    className={cn(
                      "text-4xl lg:text-[46px] font-bold leading-none",
                      isHomePage ? "text-white" : "text-black"
                    )}
                  >
                    KREBS+
                  </h1>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-6 text-sm absolute left-1/2 transform -translate-x-1/2">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isHomePage={isHomePage}
                >
                  <span
                    className={cn(isHomePage ? "text-white" : "text-black")}
                  >
                    {link.label}
                  </span>
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center ">
              <Button text="CONTATO" onClick={openContactDrawer} />
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
                className={cn(
                  "h-6 w-auto transition-transform duration-400 ease-in-out ",
                  isMobileMenuOpen ? "-rotate-45" : "rotate-0",
                  isHomePage
                    ? "filter brightness-0 invert"
                    : "filter brightness-0"
                )}
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

      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onClose={closeContactDrawer}
      />
    </>
  );
}
