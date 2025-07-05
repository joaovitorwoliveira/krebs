import Image from "next/image";
import { Instagram, Linkedin, Search, Menu, LucideIcon } from "lucide-react";

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
  return (
    <a
      href={href}
      className="text-dark hover:text-green-4 transition-colors duration-200 font-light relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-green-4 transition-all duration-300 ease-out group-hover:w-full"></span>
    </a>
  );
}

function SocialIcon({ href, icon: Icon, size = 16 }: SocialIconProps) {
  const baseClasses =
    "w-8 h-8 border-[0.5px] border-green-5 rounded-full flex items-center justify-center hover:bg-green-4 hover:border-green-4 hover:text-light transition-all duration-200";

  return (
    <a href={href} className={baseClasses}>
      <Icon size={size} />
    </a>
  );
}

export default function Header() {
  return (
    <header className="bg-light border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-escrito-sembg.png"
              alt="Krebs +"
              width={200}
              height={60}
              className="h-8 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm">
            {navigationLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} href={social.href} icon={social.icon} />
            ))}
          </div>

          <button className="md:hidden flex items-center justify-center">
            <Menu size={24} className="text-dark" />
          </button>
        </div>
      </div>
    </header>
  );
}
