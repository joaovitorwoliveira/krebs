"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, LucideIcon } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  size?: number;
}

const navigationLinks = [
  { href: "/projetos", label: "PROJETOS" },
  { href: "/escritorio", label: "ESCRITÓRIO" },
  { href: "/equipe", label: "EQUIPE" },
  { href: "/contato", label: "CONTATO" },
];

const socialLinks = [
  { href: "#", icon: Instagram },
  { href: "#", icon: Linkedin },
];

function NavLink({ href, children }: NavLinkProps) {
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

function SocialIcon({ href, icon: Icon, size = 16 }: SocialIconProps) {
  const baseClasses =
    "w-7 h-7 flex items-center justify-center text-dark hover:text-green-2 transition-all duration-200";

  return (
    <a href={href} className={baseClasses}>
      <Icon size={size} />
    </a>
  );
}

export default function Header() {
  return (
    <header className="bg-white h-14 flex items-center">
      <div className="container mx-auto px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-escrito-sembg.png"
                alt="Krebs +"
                width={200}
                height={40}
                className="h-7 w-auto"
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

          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} href={social.href} icon={social.icon} />
            ))}
          </div>

          <button className="md:hidden flex items-center justify-center">
            <Image
              src="/images/plus-icon.png"
              alt="Krebs +"
              width={50}
              height={40}
              className="h-5 w-auto"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
