import styles from "./homePageContent.module.scss";
import { FiArrowRight } from "react-icons/fi";

import { Link } from "react-router-dom";
function HomePageContent() {
  return (
    <div className={styles.homePageContent}>
      <h1 className={styles.homePageContent__title}>
        <span className={styles.homePageContent__outline}>Hello, je suis </span>
        Eric Sermande,{" "}
        <span className={styles.homePageContent__outline}>
          mais on m&apos;appelle
        </span>
        <span> Codeur974, </span>
        <span className={styles.homePageContent__outline}>
          sur les réseaux sociaux.
        </span>
      </h1>
      <h2 className={styles.homePageContent__description}>
        je suis développeur web front-end, passionné par le développement web,
        <br />
        et toujours à la recherche de nouveaux défis.
      </h2>

      <div className={styles.homePageContent__links}>
        <Link to="myproject">
          <FiArrowRight className={styles.icon} /> Voir mes projets
        </Link>
        <Link to="about">
          <FiArrowRight className={styles.icon} /> En savoir plus sur moi
        </Link>
      </div>
    </div>
  );
}

export default HomePageContent;
