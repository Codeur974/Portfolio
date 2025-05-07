import styles from "./formation.module.scss";

function Formation() {
  return (
    <div className={styles.formationSection}>
      <h2>Formations</h2>
      <ul>
        <li>
          <h3>React Mastery</h3> – Formation avancée en React :
          <ul>
            <li>Hooks</li>
            <li>Routing</li>
            <li>State management</li>
          </ul>
        </li>
        <li>
          <h3>Begin JavaScript</h3> – Bases solides en JavaScript moderne :
          <ul>
            <li>Variables</li>
            <li>Fonctions</li>
            <li>DOM</li>
          </ul>
        </li>
        <li>
          <h3>
            Intégrateur Web – OpenClassrooms (Formation diplômante, Niveau
            Bac+2)
          </h3>

          <ul>
            <li>Intégration responsive : HTML5, CSS3, Flexbox, Grid</li>
            <li>Accessibilité numérique (RGAA)</li>
            <li>Optimisation SEO technique</li>
            <li>Versionning : Git & GitHub (branche, merge, pull request)</li>
            <li>Prototypage & maquettes : Figma</li>
            <li>Préprocesseur CSS : Sass</li>
            <li>JavaScript avancé : DOM, API, programmation asynchrone</li>
            <li>Frameworks & librairies : React.js, Redux</li>
            <li>Tests unitaires : Jest</li>
            <li>Backend : Node.js, Express.js</li>
            <li>Base de données NoSQL : MongoDB</li>
            <li>Méthodologie de projet : Agile / Scrum, Notion</li>
            <li>
              Livrables professionnels : projets notés, soutenances devant jury
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Formation;
