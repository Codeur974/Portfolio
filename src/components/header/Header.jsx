import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo du site" className={styles.logo} />
        </Link>
      </div>

      <div>
        <Link to="menu">
          <span className={styles.animatedText}>Par ici le menu</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
