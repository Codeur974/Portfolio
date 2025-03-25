import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiRedux, SiSwagger, SiSass } from "react-icons/si";
import { VscDebugAlt } from "react-icons/vsc"; // Debug icon
import styles from "./myskills.module.scss";

function Skills() {
  const skills = [
    { icon: <FaReact style={{ color: "#61dafb" }} />, name: "React", angle: 0 },
    {
      icon: <SiJavascript style={{ color: "#f7df1e" }} />,
      name: "JavaScript",
      angle: 36,
    },
    {
      icon: <FaHtml5 style={{ color: "#e34f26" }} />,
      name: "HTML5",
      angle: 72,
    },
    {
      icon: <FaCss3Alt style={{ color: "#1572b6" }} />,
      name: "CSS3",
      angle: 108,
    },
    {
      icon: <FaNodeJs style={{ color: "#68a063" }} />,
      name: "Node.js",
      angle: 144,
    },
    {
      icon: <FaGithub style={{ color: "#333" }} />,
      name: "GitHub",
      angle: 180,
    },
    {
      icon: <SiRedux style={{ color: "#764abc" }} />,
      name: "Redux",
      angle: 216,
    },
    {
      icon: <SiSwagger style={{ color: "#85ea2d" }} />,
      name: "Swagger",
      angle: 252,
    },
    { icon: <SiSass style={{ color: "#cc6699" }} />, name: "Sass", angle: 288 },
    {
      icon: <VscDebugAlt style={{ color: "#007acc" }} />,
      name: "Debug",
      angle: 324,
    },
  ];

  return (
    <div className={styles.skills}>
      <div className={styles.skills__icons}>
        {skills.map((skill, index) => (
          <div
            className={styles.skill}
            key={index}
            style={{ "--angle": skill.angle }}
          >
            <div className={styles.icon}>
              {skill.icon}
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
