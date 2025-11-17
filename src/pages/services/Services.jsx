import { useState } from "react";
import { useContactForm } from "../../context/useContactForm";
import SEO from "../../components/SEO";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import ProcessStep from "../../components/processStep/ProcessStep";
import ReviewForm from "../../components/reviewForm/ReviewForm";
import servicesData from "../../data/services.json";
import processData from "../../data/process.json";
import testimonialsData from "../../data/testimonials.json";
import styles from "./services.module.scss";
import { FaStar, FaCalendarAlt, FaPen } from "react-icons/fa";

function Services() {
  const { openContactForm } = useContactForm();
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const handleContact = (serviceName) => {
    // Ouvrir le formulaire avec le service pré-sélectionné
    openContactForm();
    // TODO: Passer le service au formulaire pour pré-remplir
  };

  const handleCalendly = () => {
    // Remplacer par ton vrai lien Calendly
    window.open('https://calendly.com/ton-lien-calendly', '_blank');
  };

  return (
    <div className={styles.servicesPage}>
      <SEO
        title="Services"
        description="Développeur web freelance spécialisé Next.js et React. Création de sites vitrines, applications web sur mesure, e-commerce. Intervention partout en France en télétravail. Devis gratuit."
        keywords="services développement web, création site vitrine, application web sur mesure, site e-commerce, développeur Next.js, développeur React, freelance web France, site web professionnel"
        canonical="/services"
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBadge}>💼 Services Web Professionnels</div>
          <h1 className={styles.heroTitle}>
            Transformez vos <span className={styles.gradientText}>idées</span> en
            <span className={styles.gradientText}> solutions digitales</span>
          </h1>
          <p className={styles.heroSubtitle}>
            <strong>Sites vitrines, applications web, e-commerce...</strong> Du premier pixel au déploiement,
            je conçois des <span className={styles.highlightText}>solutions web professionnelles</span> adaptées à vos besoins.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onContact={handleContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Comment je travaille ?</h2>
          <p className={styles.sectionSubtitle}>
            Un process simple et transparent pour mener ton projet du début à la fin
          </p>

          <div className={styles.processSteps}>
            {processData.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                isLast={index === processData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ils m'ont fait confiance</h2>
          <p className={styles.sectionSubtitle}>
            Quelques retours de clients satisfaits
          </p>
          <div className={styles.addReviewBtnWrapper}>
            <button
              className={styles.addReviewBtn}
              onClick={() => setIsReviewFormOpen(true)}
            >
              <FaPen /> Laisser un avis
            </button>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role} - {testimonial.company}</span>
                  <span className={styles.service}>{testimonial.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Prêt à démarrer ton projet ?</h2>
          <p className={styles.ctaSubtitle}>
            Discutons de ton projet lors d'un appel gratuit de 30 minutes
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.calendlyBtn} onClick={handleCalendly}>
              <FaCalendarAlt /> Prendre RDV (30 min)
            </button>
            <button className={styles.contactBtn} onClick={() => openContactForm()}>
              Envoyer un message
            </button>
          </div>
        </div>
      </section>

      <ReviewForm
        isOpen={isReviewFormOpen}
        onClose={() => setIsReviewFormOpen(false)}
        serviceName=""
      />
    </div>
  );
}

export default Services;
