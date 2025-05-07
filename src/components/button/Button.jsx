import { useContactForm } from "../../context/useContactForm";
import styles from "./Button.module.scss"; // Import du fichier SCSS pour le style

function Button() {
  const { openContactForm } = useContactForm();

  return (
    <button onClick={openContactForm} className={styles.contactButton}>
      Contactez-moi
    </button>
  );
}

export default Button;
