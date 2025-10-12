"use client";

import React, { createContext, useContext, useState } from "react";

interface ContactDrawerContextType {
  isContactDrawerOpen: boolean;
  openContactDrawer: () => void;
  closeContactDrawer: () => void;
}

const ContactDrawerContext = createContext<
  ContactDrawerContextType | undefined
>(undefined);

export function ContactDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  const openContactDrawer = () => {
    setIsContactDrawerOpen(true);
  };

  const closeContactDrawer = () => {
    setIsContactDrawerOpen(false);
  };

  return (
    <ContactDrawerContext.Provider
      value={{
        isContactDrawerOpen,
        openContactDrawer,
        closeContactDrawer,
      }}
    >
      {children}
    </ContactDrawerContext.Provider>
  );
}

export function useContactDrawer() {
  const context = useContext(ContactDrawerContext);
  if (context === undefined) {
    throw new Error(
      "useContactDrawer must be used within a ContactDrawerProvider"
    );
  }
  return context;
}
