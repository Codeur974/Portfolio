import styles from "./footer.module.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <p>© {currentYear} Créer et développer par Sermande Eric</p>
    </div>
  );
}

export default Footer;
