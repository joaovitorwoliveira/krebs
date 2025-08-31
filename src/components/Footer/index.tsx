"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ContactDrawer from "../ContactDrawer";
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
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  const openContactDrawer = () => {
    setIsContactDrawerOpen(true);
  };

  const closeContactDrawer = () => {
    setIsContactDrawerOpen(false);
  };

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
  ];

  const contactInfo: ContactItem[] = [
    { text: "(11) 99999-9999" },
    { text: "contato@krebsmais.com.br" },
  ];

  const renderLinkWithButton = (link: LinkItem, key: string) => (
    <Link
      key={key}
      href={link.href}
      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Button
        variant="tertiary"
        text={link.text}
        className="font-semibold text-2xl text-black py-0 px-1"
      />
    </Link>
  );

  const renderContactItem = (contact: ContactItem, key: string) => (
    <p key={key} className="text-black text-sm">
      {contact.text}
    </p>
  );

  return (
    <>
      <footer className="relative z-10 bg-white py-10 px-6 md:px-10 ">
        <div className="mx-auto">
          <div className="flex flex-col gap-10 justify-between md:flex-row">
            {/* Img + Nome */}
            <div className="flex flex-col gap-2">
              <Image
                src={"/images/vertical_temporaria.jpg"}
                alt={"floresta"}
                width={250}
                height={300}
              />
              <div className="flex flex-row gap-2 w-[250px] md:w-full">
                <div className="h-2 w-full bg-brown-1"></div>
                <div className="h-2 w-full bg-brown-2"></div>
                <div className="h-2 w-full bg-green-1"></div>
              </div>
              <p className="text-black text-2xl font-bold">KREBS +</p>
            </div>
            {/* Navegacao */}
            <div className="flex flex-col gap-4">
              <p className="text-black text-2xl font-bold">NAVEGAÇÃO</p>
              <nav className="space-y-2 flex flex-col">
                {navigationLinks.map((link, index) =>
                  renderLinkWithButton(link, `nav-${index}`)
                )}
              </nav>
            </div>
            {/* Social */}
            <div className="flex flex-col gap-3">
              <p className="text-black text-2xl font-bold">SOCIAL</p>
              <div className="text-black text-sm space-y-2 flex flex-col">
                {socialLinks.map((link, index) =>
                  renderLinkWithButton(link, `social-${index}`)
                )}
              </div>
            </div>
            {/* Endereco + Contato */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-black text-2xl font-bold">ENDEREÇO</p>
                <address className="text-black text-sm leading-relaxed not-italic">
                  Rua das Flores, 123
                  <br />
                  Bairro X
                  <br />
                  Pelotas - RS
                </address>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-black text-2xl font-bold">CONTATO</p>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) =>
                    renderContactItem(contact, `contact-${index}`)
                  )}
                </div>
                <Button
                  text="FALE CONOSCO"
                  onClick={openContactDrawer}
                  className="mt-2 text-sm"
                />
              </div>
            </div>
            {/* div vazia */}
            <div className="hidden md:block"></div>
          </div>

          {/* Copyright */}
          <div className="flex justify-between text-center pt-10">
            <p className="text-black text-xs font-bold uppercase flex flex-col text-start">
              <span> © {new Date().getFullYear()} Krebs +</span>
              <span>Todos os direitos reservados.</span>
            </p>

            <div className="flex flex-col md:flex-row md:items-center">
              <p className="text-xs text-start pl-1 md:pl-0">FEITO POR</p>
              <Link href="https://joaovitorwoliveira.com" target="_blank">
                <Button
                  text="JOAOVITORWOLIVEIRA"
                  className="text-xs py-1 px-1 bg-white text-dark"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ContactDrawer
        isOpen={isContactDrawerOpen}
        onClose={closeContactDrawer}
      />
    </>
  );
}
