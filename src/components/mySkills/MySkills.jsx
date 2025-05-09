import {
  FaChartLine,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaProjectDiagram,
  FaReact,
  FaSass,
  FaSearch,
  FaTasks,
} from "react-icons/fa";
import doc from "../../doc.json";
import styles from "./myskills.module.scss";

import { SiJest, SiMongodb, SiRedux } from "react-icons/si";

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

function MySkills() {
  const skillsData = doc.find((section) => section.id === "skills")?.data || [];

  if (skillsData.length === 0) {
    return <p>Aucune compétence disponible.</p>;
  }

  return (
    <div className={styles.skillsContainer}>
      <div className={styles.categoryRing}>
        {skillsData.map((category, index) => {
          const angle = (360 / skillsData.length) * index;
          return (
            <div
              key={index}
              className={styles.category}
              style={{ "--angle": angle }}
            >
              <div className={styles.categoryCard}>
                <div className={`${styles.cardFace} ${styles.cardFront}`}>
                  <h2>{category.type}</h2>
                  {category.skills.map((skill, i) => {
                    const Icon = icons[skill.icon];
                    if (!Icon) {
                      console.error(`Icône manquante pour ${skill.name}`);
                      return null;
                    }
                    return (
                      <div key={i} className={styles.skill}>
                        <Icon
                          className={styles.icon}
                          style={{ color: skill.color }}
                        />
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MySkills;
