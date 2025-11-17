import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useContactForm } from "../../context/useContactForm";
import ContactForm from "../../components/contactForme/ContactForm";
import FloatingMenu from "../../components/floatingMenu/FloatingMenu";
import styles from "./layout.module.scss";

function Layaout() {
  const { isContactFormOpen } = useContactForm();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`${styles.layout} ${isHomePage ? styles["layout--home"] : ""}`}
    >
      <Header />
      <main className={styles.layout__main}>
        <Outlet />
      </main>
      {!isHomePage && <Footer className={styles.layout__footer} />}
      <FloatingMenu />
      {isContactFormOpen && <ContactForm />}
    </div>
  );
}

export default Layaout;
