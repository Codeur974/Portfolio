import { Link } from "react-router-dom";
import styles from "./menuContent.module.scss";
import doc from "../../doc.json"; // Import du fichier JSON
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaFigma,
  FaProjectDiagram,
  FaTasks,
  FaSearch,
  FaChartLine,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSass,
} from "react-icons/fa";

import { SiRedux, SiJest, SiMongodb } from "react-icons/si";

const icons = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaFigma,
  FaProjectDiagram,
  FaTasks,
  FaSearch,
  FaChartLine,
  SiRedux,
  SiJest,
  SiMongodb,
  FaSass,
};

function MenuContent() {
  const skillsData = doc.find((section) => section.id === "skills")?.data || [];

  return (
    <div className={styles.menu}>
      {skillsData.map((category, index) =>
        category.skills.map((skill, i) => {
          const IconComponent = icons[skill.icon];
          return IconComponent ? (
            <div
              key={`${index}-${i}`}
              className={`${styles.skill} skill-${i + 1}`}
            >
              <IconComponent style={{ color: skill.color }} />
            </div>
          ) : null;
        })
      )}

      <Link to="/">
        <p>Accueil</p>
      </Link>
      <Link to="/about">
        <p>À propos de moi</p>
      </Link>
      <Link to="/myproject">
        <p>Mes Projets</p>
      </Link>
      <Link to="/formation">
        <p>Formations</p>
      </Link>

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
