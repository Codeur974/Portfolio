import styles from "./cV.module.scss";

function CV() {
  return (
    <div className={styles.cvSection}>
      <h2>Formations</h2>
      <ul>
        <li>
          <strong>React Mastery</strong> – Formation avancée en React (Hooks,
          routing, state management)
        </li>
        <li>
          <strong>Begin JavaScript</strong> – Bases solides en JavaScript
          moderne (variables, fonctions, DOM, )
        </li>
        <li>
          <strong>Intégrateur Web - OpenClassrooms</strong> – Intégration
          HTML/CSS responsive, accessibilité, SEO, Mongodb, Node.js, Express.js,
          React.js, Redux, Git, GitHub, Figma, Sass, Jest,
        </li>
      </ul>
    </div>
  );
}

export default CV;
