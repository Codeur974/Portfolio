import styles from "./intro.module.scss";

function Intro() {
  return (
    <div className={styles.intro}>
      <img src="/images/logo.png" alt="logo Digital'tek Service" className={styles.logo} />
      <h1 className={styles.intro__title}>Bienvenue sur Digital'tek Service</h1>
    </div>
  );
}

export default Intro;
