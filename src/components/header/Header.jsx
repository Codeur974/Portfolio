import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./header.module.scss";

function Header() {
  const location = useLocation();

  const isMenuPage = location.pathname === "/menu";

  return (
    <div
      className={`${styles.header} ${isMenuPage ? styles.centeredLogo : ""}`}
    >
      <div>
        <Link to={"/"}>
          <img src={logo} alt="logo du site" className={styles.logo} />
        </Link>
      </div>

      {!isMenuPage && (
        <div className={styles.menuToggle}>
          <Link to="menu">
            <span className={styles.animatedText}>Par ici le menu</span>
            <FaBars className={styles.hamburgerIcon} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
