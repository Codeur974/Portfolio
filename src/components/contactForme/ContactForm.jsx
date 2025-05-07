import emailjs from "emailjs-com";
import { useContactForm } from "../../context/useContactForm";
import styles from "./contactform.module.scss";

function ContactForm() {
  const { closeContactForm } = useContactForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bc51nzi",
        "Formulaire_de_contact",
        e.target,
        "GW06hD3NPpCzRdA_o"
      )
      .then(() => {
        e.target.reset();
        alert("Message envoyé avec succès !");
        closeContactForm();
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi du message.");
        console.error("Erreur EmailJS :", error);
      });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={closeContactForm} className={styles.closeButton}>
          &times;
        </button>
        <h2>Contactez-moi</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>
            Nom :
            <input type="text" name="name" required />
          </label>
          <label>
            Email :
            <input type="email" name="email" required />
          </label>
          <label>
            Message :<textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit" className={styles.submitButton}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
