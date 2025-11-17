import { FiCalendar } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.scss";

function Header() {
  const location = useLocation();

  const isMenuPage = location.pathname === "/menu";

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/digitalcodeur-digitaltekservice-re/30min", "_blank");
  };

  return (
    <div
      className={`${styles.header} ${isMenuPage ? styles.centeredLogo : ""}`}
    >
      <div>
        <Link to={"/"}>
          <img src="/images/logo.png" alt="logo du site" className={styles.logo} />
        </Link>
      </div>

      {!isMenuPage && (
        <div className={styles.headerActions}>
          <button onClick={handleCalendlyClick} className={styles.calendlyButton}>
            <FiCalendar className={styles.calendarIcon} />
            <span>Prendre RDV</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
