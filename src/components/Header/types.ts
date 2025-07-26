export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
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