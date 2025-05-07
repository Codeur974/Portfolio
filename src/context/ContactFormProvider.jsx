import { useState } from "react";
import { ContactFormContext } from "./ContactFormContext";

// Fournisseur du contexte
export const ContactFormProvider = ({ children }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <ContactFormContext.Provider
      value={{ isContactFormOpen, openContactForm, closeContactForm }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
