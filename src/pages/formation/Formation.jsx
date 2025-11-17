import SEO from "../../components/SEO";
import { FaGraduationCap, FaReact, FaCode, FaCheckCircle } from "react-icons/fa";
import styles from "./formation.module.scss";

function Formation() {
  const formations = [
    {
      title: "Intégrateur Web",
      school: "OpenClassrooms",
      level: "Diplômant Niveau Bac+2",
      period: "2023-2024",
      icon: <FaGraduationCap />,
      type: "Titre RNCP",
      skills: [
        "Intégration responsive : HTML5, CSS3, Flexbox, Grid",
        "Accessibilité numérique (RGAA)",
        "Optimisation SEO technique",
        "Versionning : Git & GitHub (branche, merge, pull request)",
        "Prototypage & maquettes : Figma",
        "Préprocesseur CSS : Sass",
        "JavaScript avancé : DOM, API, programmation asynchrone",
        "Frameworks & librairies : React.js, Redux",
        "Tests unitaires : Jest",
        "Backend : Node.js, Express.js",
        "Base de données NoSQL : MongoDB",
        "Méthodologie de projet : Agile / Scrum, Notion",
        "Livrables professionnels : projets notés, soutenances devant jury"
      ]
    },
    {
      title: "React Mastery",
      school: "Formation avancée",
      level: "Spécialisation React",
      period: "2024",
      icon: <FaReact />,
      type: "Formation",
      skills: [
        "React Hooks (useState, useEffect, useContext, useReducer)",
        "React Router pour la navigation",
        "State management avec Redux",
        "Performance optimization",
        "Patterns avancés React"
      ]
    },
    {
      title: "Begin JavaScript",
      school: "Formation JavaScript",
      level: "Fondamentaux JavaScript",
      period: "2023",
      icon: <FaCode />,
      type: "Formation",
      skills: [
        "Variables et types de données",
        "Fonctions et programmation fonctionnelle",
        "Manipulation du DOM",
        "ES6+ features",
        "Programmation asynchrone"
      ]
    }
  ];

  return (
    <div className={styles.formationPage}>
      <SEO
        title="Formations"
        description="Formations en développement web suivies par Eric Sermande : React Mastery, JavaScript moderne, Redux, Tailwind CSS et autres technologies frontend. Parcours de formation continue et certifications."
        keywords="formations développement web, formation React, formation JavaScript, apprentissage programmation, certifications web, formations frontend, cours développement"
        canonical="/formation"
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBadge}>📚 Parcours de Formation</div>
          <h1 className={styles.heroTitle}>
            Mon <span className={styles.gradientText}>apprentissage</span> continu
          </h1>
          <p className={styles.heroSubtitle}>
            Un parcours structuré et des formations certifiantes pour maîtriser
            les <strong>technologies modernes du développement web</strong>
          </p>
        </div>
      </section>

      {/* Formations Section */}
      <section className={styles.formationsSection}>
        <div className={styles.container}>
          <div className={styles.formationsGrid}>
            {formations.map((formation, index) => (
              <div key={index} className={styles.formationCard}>
                <div className={styles.formationHeader}>
                  <div className={styles.formationIcon}>{formation.icon}</div>
                  <div className={styles.formationType}>{formation.type}</div>
                </div>
                <h3 className={styles.formationTitle}>{formation.title}</h3>
                <p className={styles.formationSchool}>{formation.school}</p>
                <div className={styles.formationMeta}>
                  <span className={styles.formationLevel}>{formation.level}</span>
                  <span className={styles.formationPeriod}>{formation.period}</span>
                </div>
                <div className={styles.skillsList}>
                  {formation.skills.map((skill, idx) => (
                    <div key={idx} className={styles.skillItem}>
                      <FaCheckCircle className={styles.checkIcon} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className={styles.learningSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Apprentissage continu</h2>
          <p className={styles.sectionSubtitle}>
            Le développement web évolue constamment. Je reste à jour avec les dernières
            technologies et meilleures pratiques à travers la veille technologique,
            la documentation officielle et les projets personnels.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Formation;
