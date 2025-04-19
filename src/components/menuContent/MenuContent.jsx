import { Link } from "react-router-dom";
import styles from "./MenuContent.module.scss";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
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
} from "react-icons/fa";
function MenuContent() {
  return (
    <div className={styles.menu}>
      <div className={styles.skill} style={{ color: "#E34F26" }}>
        <FaHtml5 />
      </div>
      <div className={styles.skill} style={{ color: "#1572B6" }}>
        <FaCss3Alt />
      </div>
      <div className={styles.skill} style={{ color: "#F7DF1E" }}>
        <FaJs />
      </div>
      <div className={styles.skill} style={{ color: "#61DAFB" }}>
        <FaReact />
      </div>
      <div className={styles.skill} style={{ color: "#339933" }}>
        <FaNodeJs />
      </div>
      <div className={styles.skill} style={{ color: "#3776AB" }}>
        <FaPython />
      </div>
      <div className={styles.skill} style={{ color: "#007396" }}>
        <FaJava />
      </div>
      <div className={styles.skill} style={{ color: "#777BB4" }}>
        <FaPhp />
      </div>
      <div className={styles.skill} style={{ color: "#F05032" }}>
        <FaGitAlt />
      </div>
      <div className={styles.skill} style={{ color: "#4DB33D" }}>
        <FaDatabase />
      </div>
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
