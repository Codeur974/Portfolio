import styles from "./contactform.module.scss";

function ContactForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Données du formulaire :", data);

    // Ajoutez ici l'envoi des données à un service ou une API
    onClose(); // Ferme la modale après soumission
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
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
