import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuContent from "../menuContent/MenuContent";
import styles from "./floatingMenu.module.scss";

function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500); // Durée de l'animation de fermeture
  };

  return (
    <>
      {/* Bouton FAB avec texte circulaire */}
      <div className={styles.fabWrapper}>
        <button
          className={`${styles.fab} ${isOpen ? styles.fabOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Texte circulaire "MENU" */}
        <svg className={styles.circularText} viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text className={styles.circularTextPath}>
            <textPath href="#circlePath" startOffset="0%">
              • MENU • MENU • MENU • MENU •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Overlay avec MenuContent */}
      {isOpen && (
        <>
          <div
            className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ''}`}
            onClick={closeMenu}
          />
          <div className={`${styles.menuContainer} ${isClosing ? styles.menuClosing : ''}`}>
            <MenuContent onLinkClick={closeMenu} />
          </div>
        </>
      )}
    </>
  );
}

export default FloatingMenu;
