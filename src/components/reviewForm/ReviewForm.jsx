import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";
import styles from "./reviewForm.module.scss";

function ReviewForm({ isOpen, onClose, serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    rating: 5,
    text: "",
    service: serviceName || "",
    website: "" // Honeypot anti-spam
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/.netlify/functions/submit-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
          setFormData({
            name: "",
            company: "",
            role: "",
            email: "",
            rating: 5,
            text: "",
            service: serviceName || "",
            website: ""
          });
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className={styles.title}>Laisser un avis</h2>
        <p className={styles.subtitle}>
          Partagez votre expérience pour aider d&apos;autres clients
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nom complet *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="company">Entreprise</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="role">Poste</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <small>Votre email ne sera pas publié</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">Service utilisé</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Sélectionner un service</option>
              <option value="Site Vitrine">Site Vitrine</option>
              <option value="Application Web">Application Web</option>
              <option value="Site E-commerce">Site E-commerce</option>
              <option value="Maintenance & Support">Maintenance & Support</option>
              <option value="Développement Sur Mesure">Développement Sur Mesure</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Note *</label>
            <div className={styles.ratingSelector}>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`${styles.star} ${star <= formData.rating ? styles.active : ""}`}
                  onClick={() => handleRatingClick(star)}
                />
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="text">Votre avis *</label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Décrivez votre expérience..."
            />
          </div>

          {/* Honeypot anti-spam - NE PAS RETIRER */}
          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
            aria-hidden="true"
          />

          {submitStatus === "success" && (
            <div className={styles.successMessage}>
              Merci ! Votre avis a été soumis et sera publié après validation.
            </div>
          )}

          {submitStatus === "error" && (
            <div className={styles.errorMessage}>
              Une erreur est survenue. Veuillez réessayer.
            </div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer mon avis"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
