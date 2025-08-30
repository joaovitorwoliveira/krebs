import Link from "next/link";

import Button from "../ui/button";

interface LinkItem {
  href: string;
  text: string;
  external?: boolean;
}

interface ContactItem {
  text: string;
}

export default function Footer() {
  const navigationLinks: LinkItem[] = [
    { href: "/", text: "Home" },
    { href: "/projetos", text: "Projetos" },
    { href: "/escritorio", text: "Escritório" },
    { href: "/equipe", text: "Equipe" },
  ];

  const socialLinks: LinkItem[] = [
    {
      href: "https://instagram.com/krebsmais",
      text: "Instagram",
      external: true,
    },
    {
      href: "https://linkedin.com/company/krebsmais",
      text: "LinkedIn",
      external: true,
    },
    { href: "#", text: "Whatsapp", external: true },
  ];

  const contactInfo: ContactItem[] = [
    { text: "(11) 99999-9999" },
    { text: "contato@krebsmais.com.br" },
  ];

  const renderLinkWithButton = (link: LinkItem, key: string) => (
    <Link
      key={key}
      href={link.href}
      className="block hover:opacity-70 transition-opacity"
      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Button
        variant="tertiary"
        text={link.text}
        className="font-normal text-sm text-black py-0 px-1"
      />
    </Link>
  );

  const renderContactItem = (contact: ContactItem, key: string) => (
    <p key={key} className="text-black text-sm">
      {contact.text}
    </p>
  );

  return (
    <footer className="relative z-10 bg-white py-10 px-10">
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Endereço */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">Endereço</h3>
            <address className="text-black text-sm leading-relaxed not-italic">
              Rua das Flores, 123
              <br />
              Bairro Jardim
              <br />
              São Paulo - SP
              <br />
              CEP: 01234-567
            </address>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase">Contato</h3>
            <div className="space-y-2">
              {contactInfo.map((contact, index) =>
                renderContactItem(contact, `contact-${index}`)
              )}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase text-right">
              NAVEGAÇÃO
            </h3>
            <nav className="text-black text-sm space-y-2 flex flex-col items-end">
              {navigationLinks.map((link, index) =>
                renderLinkWithButton(link, `nav-${index}`)
              )}
            </nav>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-black font-bold mb-4 uppercase text-right">
              Redes Sociais
            </h3>
            <div className="text-black text-sm space-y-2 flex flex-col items-end">
              {socialLinks.map((link, index) =>
                renderLinkWithButton(link, `social-${index}`)
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between text-center pt-10">
          <p className="text-black text-xs font-bold uppercase flex flex-col text-start">
            <span> © {new Date().getFullYear()} Krebs +</span>
            <span>Todos os direitos reservados.</span>
          </p>

          <div className="flex items-center">
            <p className="text-xs">FEITO POR</p>
            <Link href="https://joaovitorwoliveira.com" target="_blank">
              <Button
                text="JOAOVITORWOLIVEIRA"
                className="text-xs py-1 px-2 bg-white text-dark"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
