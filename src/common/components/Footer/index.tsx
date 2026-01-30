"use client";

import Image from "next/image";
import Link from "next/link";

import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
} from "@/common/constants/social";
import { useContactDrawer } from "@/context/ContactDrawerProvider";
import { useLanguage } from "@/context/LanguageProvider";
import ContactDrawer from "@/features/ContactDrawer";

import Button from "../Button";

interface LinkItem {
  href: string;
  text: string;
  external?: boolean;
}

interface ContactItem {
  text: string;
}

export default function Footer() {
  const { isContactDrawerOpen, openContactDrawer, closeContactDrawer } =
    useContactDrawer();
  const { t } = useLanguage();

  const navigationLinks: LinkItem[] = [
    { href: "/", text: t.footer.navigationLinks.home },
    { href: "/quem-somos", text: t.footer.navigationLinks.whoWeAre },
    { href: "/projetos", text: t.footer.navigationLinks.projects },
    { href: "/servicos", text: t.footer.navigationLinks.services },
  ];

  const socialLinks: LinkItem[] = [
    {
      href: INSTAGRAM_URL,
      text: t.footer.socialLinks.instagram,
      external: true,
    },
    {
      href: LINKEDIN_URL,
      text: t.footer.socialLinks.linkedin,
      external: true,
    },
    {
      href: YOUTUBE_URL,
      text: "YouTube",
      external: true,
    },
  ];

  const contactInfo: ContactItem[] = [
    { text: t.footer.contactInfo[0] },
    { text: t.footer.contactInfo[1] },
  ];

  const renderLinkWithButton = (link: LinkItem, key: string) => (
    <Link
      key={key}
      href={link.href}
      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Button
        variant="icon"
        text={link.text}
        className="font-normal text-black py-0 px-0 rounded-none text-sm lg:text-base"
      />
    </Link>
  );

  const renderContactItem = (contact: ContactItem, key: string) => (
    <p key={key} className="text-black text-sm text-regular">
      {contact.text}
    </p>
  );

  return (
    <>
      <footer className="relative z-10 bg-light py-0 px-6 md:px-10 md:py-10">
        <div className="mx-auto pt-6">
          <div className="flex flex-col gap-10 justify-between md:flex-row">
            {/* Img + Nome */}
            <div className="hidden flex-col gap-2 md:flex">
              {/* <Image
                src={"/images/vertical_temporaria.jpg"}
                alt={"floresta"}
                width={250}
                height={300}
              /> */}
              <Image
                src={"/images/logo_full_textura_verde.png"}
                alt={"Krebs +"}
                width={100}
                height={100}
              />
              <div className="flex flex-row gap-2 w-[250px] md:w-full">
                <div className="h-1 w-full bg-brown-1"></div>
                <div className="h-1 w-full bg-brown-2"></div>
                <div className="h-1 w-full bg-green-1"></div>
              </div>
            </div>
            {/* <div className="hidden md:block"></div> */}
            {/* Navegacao */}
            <div className="flex flex-col gap-4">
              <h4 className="text-black text-xl lg:text-2xl font-bold">
                {t.footer.navigation}
              </h4>
              <nav className="space-y-2 flex flex-col">
                {navigationLinks.map((link, index) =>
                  renderLinkWithButton(link, `nav-${index}`)
                )}
              </nav>
            </div>
            {/* Social */}
            <div className="flex flex-col gap-3">
              <h4 className="text-black text-xl lg:text-2xl font-bold">
                {t.footer.social}
              </h4>
              <div className="text-black text-sm space-y-2 flex flex-col">
                {socialLinks.map((link, index) =>
                  renderLinkWithButton(link, `social-${index}`)
                )}
              </div>
            </div>
            {/* Endereco + Contato */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-black text-xl lg:text-2xl font-bold">
                  {t.footer.address}
                </h4>
                <address className="text-black text-sm leading-relaxed not-italic text-regular">
                  {t.footer.addressText.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t.footer.addressText.split("\n").length - 1 && (
                        <br />
                      )}
                    </span>
                  ))}
                </address>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-black text-xl lg:text-2xl  font-bold">
                  {t.footer.contact}
                </h4>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) =>
                    renderContactItem(contact, `contact-${index}`)
                  )}
                </div>
                <Button
                  text={t.footer.talkToUs}
                  onClick={openContactDrawer}
                  className="mt-2 text-sm text-black border-black"
                  variant="secondary"
                />
              </div>
            </div>
            {/* div vazia */}
            <div className="hidden md:block"></div>
          </div>

          {/* Copyright */}
          <div className="flex justify-between text-center pt-10 text-regular">
            <p className="text-black text-xs font-bold uppercase flex flex-col text-start">
              <span> © {new Date().getFullYear()} Krebs +</span>
              <span>{t.footer.copyright}</span>
            </p>

            <div className="flex flex-col md:flex-row md:items-center">
              <p className="text-xs text-start pl-1 md:pl-0">
                {t.footer.madeBy}
              </p>
              <Link href="https://joaovitorwoliveira.com" target="_blank">
                <Button
                  text="JOAOVITORWOLIVEIRA"
                  className="text-xs py-1 px-1 text-dark bg-light"
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
