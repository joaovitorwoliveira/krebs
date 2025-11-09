"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";
import ContactDrawer from "@/features/ContactDrawer";

import { cn } from "@/lib/utils";

import Button from "../Button";
import LanguageSelector from "../LanguageSelector";
import { NavLink } from "./MenuComponents";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isContactDrawerOpen, openContactDrawer, closeContactDrawer } =
    useContactDrawer();
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

  return (
    <>
      <header
        className={cn(
          "h-20 flex items-center relative z-40 bg-transparent lg:h-28",
          isHomePage ? "bg-gradient-to-b from-black/45 to-black/0" : undefined
        )}
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="flex items-center justify-center">
                  <Image
                    src={
                      isHomePage
                        ? "/images/logo_full_textura.png"
                        : "/images/logo_full_textura_verde.png"
                    }
                    alt={"KREBS+"}
                    width={140}
                    height={140}
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 text-sm absolute left-1/2 transform -translate-x-1/2">
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
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector variant="desktop" isHomePage={isHomePage} />
              <Button
                text={t.header.contact}
                onClick={openContactDrawer}
                className="text-sm md:text-base"
              />
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex flex-col gap-2 items-end absolute top-6 right-6 z-20">
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
