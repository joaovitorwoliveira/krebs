"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <header className="bg-white h-14 flex items-center relative z-50">
        <div className="container mx-auto px-4 py-3 md:px-6 ">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo-escrito-sembg.png"
                  alt="Krebs +"
                  width={200}
                  height={40}
                  className="h-7 w-auto hidden md:block"
                  priority
                />
                <Image
                  src="/images/k-plus-icon.png"
                  alt="Krebs +"
                  width={180}
                  height={30}
                  className="h-8 w-auto md:hidden"
                  priority
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm absolute left-1/2 transform -translate-x-1/2">
              {navigationLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  href={social.href}
                  iconName={social.iconName}
                />
              ))}
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
                className={`h-5 w-auto transition-transform duration-400 ease-in-out ${
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
