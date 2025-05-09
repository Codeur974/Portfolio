import styles from "./intro.module.scss";
import Logo from "../../assets/logo.png";

function Intro() {
  return (
    <div className={styles.intro}>
      <img src={Logo} alt="logo" className={styles.logo} />
      <h1 className={styles.intro__title}>Bienvenue sur mon portfolio</h1>
    </div>
  );
}

export default Intro;
