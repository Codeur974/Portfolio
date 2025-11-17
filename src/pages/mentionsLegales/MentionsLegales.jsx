import SEO from "../../components/SEO";
import styles from "./mentionsLegales.module.scss";

function MentionsLegales() {
  return (
    <div className={styles.legalPage}>
      <SEO
        title="Mentions légales"
        description="Mentions légales du site Codeur974 - Eric Sermande, développeur web freelance"
        canonical="/mentions-legales"
      />

      <div className={styles.container}>
        <h1 className={styles.title}>Mentions légales</h1>

        <section className={styles.section}>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>www.codeur974.com</strong> est édité par :
          </p>
          <ul>
            <li><strong>Nom :</strong> Eric SERMANDE</li>
            <li><strong>Statut :</strong> Développeur Web Freelance (Auto-entrepreneur)</li>
            <li><strong>Siège social :</strong> La Réunion, France</li>
            <li><strong>Email :</strong> eric.sermande@gmail.com</li>
            <li><strong>SIRET :</strong> [À compléter avec ton numéro SIRET]</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>Hébergeur :</strong> Netlify, Inc.</li>
            <li><strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA</li>
            <li><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">www.netlify.com</a></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.)
            est la propriété exclusive d'Eric SERMANDE, sauf mention contraire.
          </p>
          <p>
            Toute reproduction, distribution, modification ou exploitation du contenu, même partielle,
            sans autorisation préalable écrite est strictement interdite et constituerait une contrefaçon
            sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Protection des données personnelles</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
            "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, de
            suppression et d'opposition aux données vous concernant.
          </p>
          <p>
            Pour exercer ces droits, contactez-nous à l'adresse : <strong>eric.sermande@gmail.com</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Cookies</h2>
          <p>
            Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur.
            Vous pouvez paramétrer votre navigateur pour refuser les cookies.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Responsabilité</h2>
          <p>
            L'éditeur s'efforce d'assurer l'exactitude des informations diffusées sur ce site,
            mais ne peut garantir l'absence d'erreurs ou d'omissions. L'utilisation des informations
            se fait sous la seule responsabilité de l'utilisateur.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens vers des sites externes. L'éditeur n'est pas responsable
            du contenu de ces sites tiers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. Tout litige sera soumis
            aux tribunaux compétents français.
          </p>
        </section>

        <p className={styles.lastUpdate}>
          <em>Dernière mise à jour : Novembre 2025</em>
        </p>
      </div>
    </div>
  );
}

export default MentionsLegales;
