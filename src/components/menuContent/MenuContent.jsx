import { Link } from "react-router-dom";
import styles from "./MenuContent.module.scss";

function MenuContent() {
  return (
    <div className={styles.menu}>
      {" "}
      <Link to="/">
        <p>Acceuil</p>
      </Link>
      <Link to="/about">
        <p>A propos de moi</p>
      </Link>
      <Link to="/myskills">
        <p>Mes compétences</p>
      </Link>
      <Link to="/myproject">
        <p></p>Mes Projets
      </Link>
      <Link to="/cv">
        <p>Mon CV</p>
      </Link>
    </div>
  );
}

export default MenuContent;
