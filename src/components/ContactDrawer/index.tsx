"use client";

import { useState } from "react";
import Link from "next/link";

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

    console.log("Form submitted:", formData);
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
          <h2 className="text-sm font-semibold">CONTATO</h2>

          <Button
            text="FECHAR"
            onClick={onClose}
            variant="tertiary"
            className="py-1 px-3 text-sm"
          ></Button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <div className="flex flex-col gap-4 items-center justify-center">
                <Link
                  href="https://www.instagram.com/krebsmais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-1"
                >
                  INSTAGRAM
                </Link>
                <div className="w-full h-[0.5px] bg-white"></div>
                <Link
                  href="https://www.linkedin.com/company/krebsmais/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-1"
                >
                  LINKEDIN
                </Link>
                <div className="w-full h-[0.5px] bg-white"></div>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-1"
                >
                  WHATSAPP
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-10 py-10">
            <h3 className="text-lg font-bold">NOS CONTE SOBRE O SEU PROJETO</h3>
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
