import { useState } from "react";
import emailjs from "emailjs-com";
import { useContactForm } from "../../context/useContactForm";
import styles from "./contactform.module.scss";

function ContactForm() {
  const { closeContactForm } = useContactForm();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ddg9nuh",
        "Formulaire_de_contact",
        e.target,
        "GW06hD3NPpCzRdA_o"
      )
      .then(() => {
        e.target.reset();
        showNotification("Message envoyé avec succès ! Je vous répondrai sous 24h.", "success");
        setTimeout(() => closeContactForm(), 2000);
      })
      .catch((error) => {
        showNotification("Erreur lors de l'envoi. Veuillez réessayer.", "error");
        console.error("Erreur EmailJS :", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={closeContactForm} className={styles.closeButton}>
          &times;
        </button>
        <h2>Demande de devis gratuit</h2>
        <p className={styles.subtitle}>Parlez-moi de votre projet</p>

        {notification && (
          <div className={`${styles.notification} ${styles[notification.type]}`}>
            {notification.message}
          </div>
        )}

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label>
            Nom / Entreprise :
            <input type="text" name="name" placeholder="Votre nom ou nom de l'entreprise" required />
          </label>

          <label>
            Email :
            <input type="email" name="email" placeholder="votre@email.com" required />
          </label>

          <label>
            Téléphone (optionnel) :
            <input type="tel" name="phone" placeholder="06 12 34 56 78" />
          </label>

          <label>
            Type de projet :
            <select name="project_type" required>
              <option value="">-- Sélectionnez --</option>
              <option value="Site vitrine">Site vitrine</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Application web">Application web sur mesure</option>
              <option value="Refonte">Refonte de site existant</option>
              <option value="Maintenance">Maintenance / Correction de bugs</option>
              <option value="SEO">Optimisation SEO</option>
              <option value="Autre">Autre</option>
            </select>
          </label>

          <label>
            Budget estimé :
            <select name="budget" required>
              <option value="">-- Sélectionnez --</option>
              <option value="Moins de 800€">Moins de 800€ (petit projet)</option>
              <option value="800€ - 1500€">800€ - 1500€ (site vitrine simple)</option>
              <option value="1500€ - 2500€">1500€ - 2500€ (site complet / petit e-commerce)</option>
              <option value="2500€ - 3500€">2500€ - 3500€ (application web / e-commerce)</option>
              <option value="Plus de 3500€">Plus de 3500€ (projet complexe)</option>
              <option value="À discuter">À discuter</option>
            </select>
          </label>

          <label>
            Délai souhaité :
            <select name="deadline" required>
              <option value="">-- Sélectionnez --</option>
              <option value="Urgent (moins d'1 mois)">Urgent (moins d'1 mois)</option>
              <option value="1 à 2 mois">1 à 2 mois</option>
              <option value="2 à 3 mois">2 à 3 mois</option>
              <option value="Plus de 3 mois">Plus de 3 mois</option>
              <option value="Flexible">Flexible</option>
            </select>
          </label>

          <label>
            Description du projet :
            <textarea
              name="message"
              rows="5"
              placeholder="Décrivez votre projet, vos besoins, vos attentes..."
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
