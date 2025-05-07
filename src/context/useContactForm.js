import { useContext } from "react";
import { ContactFormContext } from "./ContactFormContext";

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};
