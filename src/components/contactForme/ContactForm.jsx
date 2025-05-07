import styles from "./contactform.module.scss";
import { useContactForm } from "../../context/useContactForm"; // Import du contexte

function ContactForm() {
  const { closeContactForm } = useContactForm(); // Utilisation du contexte pour fermer la modale

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Données du formulaire :", data);

    // Ajoutez ici l'envoi des données à un service ou une API
    closeContactForm(); // Ferme la modale après soumission
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
