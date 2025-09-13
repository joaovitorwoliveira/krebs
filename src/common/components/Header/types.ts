export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isHomePage?: boolean;
}

export interface SocialIconProps {
  href: string;
  iconName: string;
  size?: number;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: { href: string; label: string }[];
}
