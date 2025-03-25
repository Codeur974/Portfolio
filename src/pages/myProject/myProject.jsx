import Cards from "../../components/cards/cards";
import styles from "./myproject.module.scss";
import Skylls from "../../components/myskills/myskills";

function MyProject() {
  const title = "Voici quelques projets que j'ai réalisé";
  const subtitle = "ainsi que les compétences acquis pour les réaliser";

  return (
    <div className={styles.myproject}>
      <h2 className={styles.myproject__title}>
        {title.split("").map((letter, index) => (
          <span
            key={`title-${index}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            className={styles.letter}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
        <br /> {/* Ajoute une coupure de ligne */}
        {subtitle.split("").map((letter, index) => (
          <span
            key={`subtitle-${index}`}
            style={{ animationDelay: `${(title.length + index) * 0.1}s` }}
            className={styles.letter}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>
      <Skylls />
      <Cards />
    </div>
  );
}

export default MyProject;
