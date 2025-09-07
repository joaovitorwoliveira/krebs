"use client";

import { useEffect } from "react";

import { useLanguage } from "@/context/LanguageProvider";

import Button from "../ui/button";
import LanguageSelector from "../LanguageSelector";
import { NavLink } from "./MenuComponents";
import { MobileMenuProps } from "./types";

export default function MobileMenu({
  isOpen,
  onClose,
  navigationLinks,
}: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-400 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-52 bg-white shadow-lg z-40 transform transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-6">
          <div className="mb-4">
            <Button
              text={t.header.close}
              onClick={onClose}
              className="text-sm mb-6 flex justify-end ml-auto py-1 px-3"
            />
            <h2 className="text-dark font-semibold text-lg">{t.header.menu}</h2>
          </div>

          <nav className="space-y-1 mb-6">
            {navigationLinks.map((link) => (
              <div key={link.href} onClick={onClose}>
                <NavLink href={link.href}>
                  <span className="text-dark text-sm opacity-70">
                    {link.label}
                  </span>
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Language Selector for Mobile */}
          <div className="border-t pt-4">
            <LanguageSelector variant="mobile" />
          </div>
        </div>
      </div>
    </>
  );
}
