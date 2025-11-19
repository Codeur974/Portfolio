import { useState } from "react";
import styles from "./card.module.scss";
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
  FaSass,
} from "react-icons/fa";

import { SiRedux, SiJest, SiMongodb, SiNextdotjs, SiTypescript, SiExpress } from "react-icons/si";

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
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  FaSass,
};

function Card({ itemCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img
            src={itemCard.cover}
            alt={itemCard.title}
            loading="lazy"
            width="280"
            height="250"
          />
          <h3>{itemCard.title}</h3>
        </div>

        <div className={styles.cardBack}>
          <p>{itemCard.description}</p>
          <div className={styles.techIcons}>
            {itemCard.technologies &&
              itemCard.technologies.map((tech, index) => {
                const IconComponent = icons[tech.icon];
                return IconComponent ? (
                  <span
                    key={index}
                    className={styles.icon}
                    style={{ color: tech.color }}
                  >
                    <IconComponent />
                  </span>
                ) : null;
              })}
          </div>
          <div className={styles.links}>
            {itemCard.repository && (
              <a
                href={itemCard.repository}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir le Repository
              </a>
            )}
            {itemCard.link && (
              <a
                href={itemCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir le Projet
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
