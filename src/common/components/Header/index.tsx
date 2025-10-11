"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/context/LanguageProvider";
import ContactDrawer from "@/features/ContactDrawer";

import { cn } from "@/lib/utils";

import Button from "../Button";
import LanguageSelector from "../LanguageSelector";
import { NavLink } from "./MenuComponents";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { t } = useLanguage();

  const navigationLinks = [
    { href: "/quem-somos", label: t.header.whoWeAre },
    { href: "/projetos", label: t.header.projects },
    { href: "/servicos", label: t.header.services },
  ];

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
        <div className="w-full px-6 lg:px-10">
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
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector variant="desktop" isHomePage={isHomePage} />
              <Button
                text={t.header.contact}
                onClick={openContactDrawer}
                className="text-sm md:text-base"
              />
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col gap-2 items-end absolute top-6 right-6 z-20">
              <Button
                text={t.header.menu}
                onClick={toggleMobileMenu}
                variant="secondary"
                className={cn(
                  "flex items-center justify-center relative z-50 text-sm py-1",
                  !isHomePage && "text-black border-black"
                )}
              />
              <Button
                text={t.header.contact}
                onClick={openContactDrawer}
                className="text-sm"
              />
            </div>
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
