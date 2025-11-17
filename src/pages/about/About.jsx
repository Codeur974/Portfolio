import {
  FaBullseye,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaTools,
  FaCode,
  FaLightbulb,
  FaCalendarAlt,
} from "react-icons/fa";
import SEO from "../../components/SEO";
import styles from "./about.module.scss";

function About() {
  const skills = [
    { name: "React & Next.js", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "HTML/CSS/SCSS", level: 95 },
    { name: "Redux & State Management", level: 80 },
    { name: "API Integration", level: 85 },
    { name: "Responsive Design", level: 90 },
  ];

  const values = [
    {
      icon: <FaCode />,
      title: "Code de qualité",
      description: "Code propre, maintenable et réutilisable suivant les meilleures pratiques"
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimisation continue pour des applications rapides et fluides"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Veille technologique et apprentissage continu des nouvelles tendances"
    },
    {
      icon: <FaBullseye />,
      title: "Orienté résultats",
      description: "Focus sur l'expérience utilisateur et les objectifs business"
    }
  ];

  const handleCalendly = () => {
    window.open("https://calendly.com/digitalcodeur-digitaltekservice-re/30min", "_blank");
  };

  return (
    <div className={styles.aboutPage}>
      <SEO
        title="À propos"
        description="Eric Sermande (Codeur974), développeur web frontend passionné spécialisé React, Next.js et Redux. Reconversion professionnelle réussie dans le développement web. Découvrez mon parcours et mes compétences."
        keywords="Eric Sermande, Codeur974, développeur frontend, à propos développeur web, parcours développeur, reconversion développement web, React developer, Next.js expert"
        canonical="/about"
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroBadge}>👋 Développeur Web Passionné</div>
          <h1 className={styles.heroTitle}>
            Bonjour, je suis <span className={styles.gradientText}>Eric Sermande</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Développeur frontend spécialisé <strong>React & Next.js</strong>, je transforme
            vos idées en <span className={styles.highlight}>interfaces modernes, performantes et intuitives</span>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2 className={styles.sectionTitle}>
                <FaTools className={styles.titleIcon} /> Mon parcours
              </h2>
              <p>
                Après une reconversion professionnelle réussie, j&apos;ai développé une expertise
                en développement frontend, en mettant l&apos;accent sur des technologies comme
                <strong> React, Next.js, Redux, et Tailwind CSS</strong>.
              </p>
              <p>
                Ce qui me passionne dans le développement web, c&apos;est la possibilité de
                transformer une idée en une interface interactive et dynamique. J&apos;adore voir
                un projet prendre vie et offrir une expérience utilisateur soignée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Compétences techniques</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillProgress}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Mes valeurs</h2>
          <p className={styles.sectionSubtitle}>
            Les principes qui guident mon travail au quotidien
          </p>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Restons en contact</h2>
          <p className={styles.sectionSubtitle}>
            Discutons de votre projet lors d&apos;un appel gratuit
          </p>

          <div className={styles.contactGrid}>
            <a href="mailto:eric.sermande@gmail.com" className={styles.contactCard}>
              <FaEnvelope className={styles.contactIcon} />
              <span>eric.sermande@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eric-sermande-59521a212/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <FaLinkedin className={styles.contactIcon} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Codeur974"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <FaGithub className={styles.contactIcon} />
              <span>GitHub</span>
            </a>
          </div>

          <button onClick={handleCalendly} className={styles.calendlyBtn}>
            <FaCalendarAlt /> Prendre RDV (30 min)
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
