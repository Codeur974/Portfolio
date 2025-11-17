import styles from "./homePageContent.module.scss";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { FaCode, FaRocket, FaHeadset, FaAward } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomePageContent() {
  const handleCalendlyClick = () => {
    window.open("https://calendly.com/digitalcodeur-digitaltekservice-re/30min", "_blank");
  };

  return (
    <>
      <div className={styles.homePageContent}>
        <h1 className={styles.homePageContent__title}>
          <span className={styles.homePageContent__outline}>Hello, je suis </span>
          Eric Sermande,{" "}
          <span className={styles.homePageContent__outline}>
            mais on m&apos;appelle
          </span>
          <span> Codeur974, </span>
          <span className={styles.homePageContent__outline}>
            sur les réseaux sociaux.
          </span>
        </h1>
        <h2 className={styles.homePageContent__description}>
          je suis développeur web front-end, passionné par le développement web,
          <br />
          et toujours à la recherche de nouveaux défis.
        </h2>

        <div className={styles.homePageContent__links}>
          <Link to="myproject">
            <FiArrowRight className={styles.icon} /> Voir mes projets
          </Link>
          <Link to="about">
            <FiArrowRight className={styles.icon} /> En savoir plus sur moi
          </Link>
          <button onClick={handleCalendlyClick} className={styles.calendlyLink}>
            <FiCalendar className={styles.icon} /> Réserver un appel
          </button>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <section className={styles.whySection}>
        <h2 className={styles.sectionTitle}>Pourquoi me choisir ?</h2>
        <p className={styles.sectionSubtitle}>
          Une approche centrée sur vos besoins et des résultats concrets
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaCode />
            </div>
            <h3 className={styles.featureTitle}>Code de qualité</h3>
            <p className={styles.featureText}>
              Technologies modernes et bonnes pratiques pour des sites performants et évolutifs
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaRocket />
            </div>
            <h3 className={styles.featureTitle}>Livraison rapide</h3>
            <p className={styles.featureText}>
              Respect des délais et communication transparente tout au long du projet
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaHeadset />
            </div>
            <h3 className={styles.featureTitle}>Support réactif</h3>
            <p className={styles.featureText}>
              Accompagnement personnalisé et assistance après la mise en ligne
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FaAward />
            </div>
            <h3 className={styles.featureTitle}>100% satisfaction</h3>
            <p className={styles.featureText}>
              Votre succès est ma priorité. Je ne suis satisfait que si vous l&apos;êtes
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Prêt à démarrer votre projet ?</h2>
        <p className={styles.ctaSubtitle}>
          Discutons de votre vision lors d&apos;un appel gratuit de 30 minutes
        </p>
        <div className={styles.ctaButtons}>
          <button onClick={handleCalendlyClick} className={styles.calendlyBtn}>
            <FiCalendar /> Prendre RDV (30 min)
          </button>
          <Link to="/services" className={styles.servicesBtn}>
            <FiArrowRight /> Voir mes services
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePageContent;
