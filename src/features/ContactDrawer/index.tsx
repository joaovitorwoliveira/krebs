"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/common/components/Button";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
} from "@/common/constants/social";
import { useLanguage } from "@/context/LanguageProvider";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
        console.error("Error sending email:", result.error);
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300",
          isOpen
            ? "opacity-100 z-[9998]"
            : "opacity-0 pointer-events-none z-[9998]"
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-96 bg-black text-white transition-transform duration-300 ease-in-out flex flex-col z-[9999]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <h2 className="text-sm font-semibold">{t.contactDrawer.title}</h2>

          <Button
            text={t.contactDrawer.close}
            onClick={onClose}
            variant="tertiary"
            className="py-1 px-3 text-sm"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="flex gap-2 justify-between pt-6">
            <div className="flex flex-col gap-6 items-start text-regular">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-1"
              >
                {t.contactDrawer.instagram}
              </Link>

              <Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-1"
              >
                {t.contactDrawer.linkedin}
              </Link>

              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-1"
              >
                {t.contactDrawer.whatsapp}
              </Link>
            </div>
            <div className={cn("h-44 w-40")}>
              <Image
                src={"/images/vertical_temporaria.jpg"}
                alt={"floresta"}
                width={200}
                height={200}
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-10 py-10">
            <h3 className="text-lg font-bold">
              {t.contactDrawer.projectTitle}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-regular">
              <input
                type="text"
                name="name"
                placeholder={t.contactDrawer.namePlaceholder}
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-white pb-2 focus:outline-none focus:border-white transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.contactDrawer.emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-white pb-2 focus:outline-none focus:border-white transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder={t.contactDrawer.messagePlaceholder}
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-white pb-2 focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
              <Button
                text={isLoading ? "Enviando..." : t.contactDrawer.send}
                variant="primary"
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full mt-4 bg-white text-dark",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
