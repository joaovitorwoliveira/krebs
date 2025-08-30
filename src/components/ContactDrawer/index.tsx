"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import Button from "../ui/button";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log("Form submitted:", formData);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-96 bg-black text-white z-50 transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold">CONTATO</h2>

          <Button
            text="FECHAR"
            onClick={onClose}
            className="p-y px-1 text-xs"
          ></Button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <div className="flex gap-4 items-center justify-center">
                <a
                  href="https://www.instagram.com/krebsmais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:opacity-70 transition-opacity"
                >
                  INSTAGRAM
                </a>
                <span>|</span>
                <a
                  href="https://www.linkedin.com/company/krebsmais/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:opacity-70 transition-opacity"
                >
                  LINKEDIN
                </a>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div>
              <Button
                text="WHATSAPP"
                onClick={handleWhatsApp}
                className="w-full"
                variant="secondary"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-10">
            <h3 className="text-lg font-bold">ENVIE UMA MENSAGEM</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="NOME"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-white transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-white transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="MENSAGEM"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 pb-2 focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
            </form>
            <Button text="ENVIAR" variant="secondary" />
          </div>
        </div>
      </div>
    </>
  );
}
