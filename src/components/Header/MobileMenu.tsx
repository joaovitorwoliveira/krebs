"use client";

import { useEffect } from "react";
import { NavLink } from "./MenuComponents";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: { href: string; label: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navigationLinks,
}: MobileMenuProps) {
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
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="mb-8">
            <h2 className="text-dark font-semibold text-lg">Menu</h2>
          </div>

          <nav className="space-y-6">
            {navigationLinks.map((link) => (
              <div key={link.href} onClick={onClose}>
                <NavLink href={link.href}>
                  <span className="text-base font-light">{link.label}</span>
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
