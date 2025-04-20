import data from "../../doc.json";
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
import styles from "./myskills.module.scss";

function Skills() {
  const skills = data.find((item) => item.id === "skills")?.data || [];

  return (
    <div className={styles.skills}>
      <h2>Mes Compétences</h2>
      <div className={styles.skills__icons}>
        {skills.map((skill, index) => {
          const IconComponent = {
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
          }[skill.icon];
          return (
            <div
              className={styles.skill}
              key={index}
              style={{ "--angle": `${index * (360 / skills.length)}` }}
            >
              <div className={styles.icon}>
                {IconComponent && (
                  <IconComponent style={{ color: skill.color }} />
                )}
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
