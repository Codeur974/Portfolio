import { useState } from "react";
import Cards from "../../components/cards/cards";

import styles from "./myproject.module.scss";
import MySkills from "../../components/mySkills/MySkills";

function MyProject() {
  const titleLines = [
    "Voici quelques projets que j'ai réalisés",
    "ainsi que les compétences acquises.",
  ];
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.myproject}>
      <h1 className={styles.myproject__title}>
        {titleLines.map((line, lineIndex) => (
          <span key={`line-${lineIndex}`} className={styles.line}>
            {line.split("").map((letter, letterIndex) => (
              <span
                key={`letter-${lineIndex}-${letterIndex}`}
                style={{
                  animationDelay: `${lineIndex * 0.5 + letterIndex * 0.1}s`,
                }}
                className={styles.letter}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
            <br />
          </span>
        ))}
      </h1>

      <h2 className={styles.myproject__skills}>Mes compétences</h2>
      <MySkills />

      <div className={styles.filter}>
        <label htmlFor="projectFilter">
          <h2 className={styles.myproject__skills}>Mes projets</h2>
        </label>
        <select
          id="projectFilter"
          value={filter}
          onChange={handleFilterChange}
          className={styles.filter__select}
        >
          <option value="all">Tous mes projets</option>
          <option value="Formation Openclassrooms">
            Projets OpenClassrooms
          </option>
          <option value="Projets clients">Projets clients</option>
        </select>
      </div>
      <div className={styles.myproject__cards}>
        <Cards filter={filter} />
      </div>
    </div>
  );
}

export default MyProject;
