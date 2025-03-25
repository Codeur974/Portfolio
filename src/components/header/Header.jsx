import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
