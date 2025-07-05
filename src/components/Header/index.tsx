import Image from "next/image";
import Link from "next/link";

import { NavLink, SocialIcon } from "./MenuComponents";

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
  return (
    <header className="bg-white h-14 flex items-center relative z-10">
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

          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                href={social.href}
                iconName={social.iconName}
              />
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
