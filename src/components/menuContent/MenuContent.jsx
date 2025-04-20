import { Link } from "react-router-dom";
import styles from "./MenuContent.module.scss";
import doc from "../../doc.json"; // Import du fichier JSON
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

// Associe les noms des icônes aux composants React correspondants
const icons = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaPython: FaPython,
  FaJava: FaJava,
  FaPhp: FaPhp,
  FaGitAlt: FaGitAlt,
  FaDatabase: FaDatabase,
};

function MenuContent() {
  // Récupère uniquement la section "skills" du fichier JSON
  const skills = doc.find((section) => section.id === "skills")?.data || [];

  return (
    <div className={styles.menu}>
      {/* Affichage dynamique des compétences */}
      {skills.map((skill, index) => {
        const IconComponent = icons[skill.icon]; // Récupère le composant d'icône correspondant
        return (
          <div
            key={index}
            className={styles.skill}
            style={{ color: skill.color }}
          >
            <IconComponent />
          </div>
        );
      })}

      {/* Liens de navigation */}
      <Link to="/">
        <p>Acceuil</p>
      </Link>
      <Link to="/about">
        <p>A propos de moi</p>
      </Link>
      <Link to="/myproject">
        <p>Mes Projets</p>
      </Link>
      <Link to="/cv">
        <p>Mon CV</p>
      </Link>

      {/* Liens sociaux */}
      <div className={styles.socials}>
        <a
          href="mailto:eric.sermande@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Codeur974"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tonlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default MenuContent;
