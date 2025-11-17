import { Link } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendarAlt } from "react-icons/fa";
import styles from "./footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/digitalcodeur-digitaltekservice-re/30min", "_blank");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Navigation rapide */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Navigation</h3>
          <nav className={styles.footerNav}>
            <Link to="/">Accueil</Link>
            <Link to="/services">Services</Link>
            <Link to="/myproject">Projets</Link>
            <Link to="/about">À propos</Link>
            <Link to="/formation">Formations</Link>
          </nav>
        </div>

        {/* CTA */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Prêt à démarrer ?</h3>
          <button onClick={handleCalendlyClick} className={styles.ctaButton}>
            <FaCalendarAlt /> Réserver un appel gratuit
          </button>
        </div>

        {/* Réseaux sociaux */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Me contacter</h3>
          <div className={styles.socials}>
            <a
              href="mailto:eric.sermande@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-sermande-59521a212/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Codeur974"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright et mentions légales */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Eric Sermande - Codeur974. Tous droits réservés.
        </p>
        <div className={styles.legalLinks}>
          <Link to="/mentions-legales">Mentions légales</Link>
          <span className={styles.separator}>•</span>
          <Link to="/politique-confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
