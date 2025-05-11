import {
  FaBullseye,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaTools,
  FaUser,
} from "react-icons/fa";
import styles from "./about.module.scss";

function About() {
  return (
    <div className={styles.about}>
      <h1>
        <FaUser className={styles.icon} /> Bonjour, je suis Eric
      </h1>
      <p>
        Développeur frontend passionné par la création d’interfaces modernes,
        performantes et intuitives.
      </p>

      <h2>
        <FaTools className={styles.icon} /> Mon parcours
      </h2>
      <p>
        {" "}
        Après ma reconversion professionnel , j’ai développé une expertise en
        développement frontend, en mettant l’accent sur des technologies comme
        React, Redux, Tailwind CSS et d’autres outils modernes.
      </p>
      <p>
        Mon objectif est de concevoir des applications fluides, ergonomiques et
        agréables à utiliser. Ce qui me passionne dans le développement
        frontend, c’est la possibilité de transformer une idée en une interface
        interactive et dynamique. J’adore voir un projet prendre vie et offrir
        une expérience utilisateur soignée.
      </p>

      <h2>
        <FaRocket className={styles.icon} /> Ce que je fais
      </h2>
      <ul>
        <li>
          Développement d’interfaces dynamiques avec React et des outils
          modernes
        </li>
        <li>
          Optimisation des performances et de l’accessibilité pour une meilleure
          expérience utilisateur
        </li>
        <li>Intégration d’APIs et gestion d’état avec Redux</li>
        <li>
          Collaboration avec designers et développeurs backend pour garantir des
          produits cohérents et performants
        </li>
        <li>
          Veille technologique et apprentissage continu pour toujours rester à
          jour sur les tendances du web
        </li>
      </ul>

      <h2>
        <FaBullseye className={styles.icon} /> Ma vision & mon approche
      </h2>
      <p>
        Je crois en un code propre, maintenable et réutilisable. Pour moi, un
        bon développeur frontend ne se contente pas d’écrire du code : il
        cherche à comprendre l’utilisateur final et à offrir une expérience
        fluide et intuitive.
      </p>
      <p>
        J’aime travailler en équipe et échanger avec d’autres développeurs et
        designers pour concevoir des produits de qualité. Habitué aux méthodes
        Agile et Scrum, je m’adapte facilement aux exigences des projets tout en
        restant attentif aux détails et aux performances.
      </p>

      <div className={styles.contact}>
        <p>
          <FaEnvelope className={styles.icon} />{" "}
          <a href="mailto:eric.sermande@gmail.com">Mon email</a>
        </p>
        <p>
          <FaLinkedin className={styles.icon} />{" "}
          <a
            href="https://www.linkedin.com/in/eric-sermande-59521a212/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B32Y1IZf1RGq4TG2BZkNCPQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon LinkedIn
          </a>
        </p>
        <p>
          <FaGithub className={styles.icon} />{" "}
          <a
            href="https://github.com/Codeur974"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
