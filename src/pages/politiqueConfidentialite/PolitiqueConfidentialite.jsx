import SEO from "../../components/SEO";
import styles from "./politiqueConfidentialite.module.scss";

function PolitiqueConfidentialite() {
  return (
    <div className={styles.legalPage}>
      <SEO
        title="Politique de confidentialité"
        description="Politique de confidentialité et protection des données personnelles - Codeur974"
        canonical="/politique-confidentialite"
      />

      <div className={styles.container}>
        <h1 className={styles.title}>Politique de confidentialité</h1>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            La protection de vos données personnelles est une priorité pour <strong>Eric SERMANDE - Codeur974</strong>.
            Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Données collectées</h2>
          <p>Nous pouvons collecter les données suivantes :</p>
          <ul>
            <li><strong>Données d'identification :</strong> Nom, prénom, email</li>
            <li><strong>Données de navigation :</strong> Adresse IP, pages visitées, durée de visite</li>
            <li><strong>Données de contact :</strong> Informations fournies via les formulaires de contact</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Finalité du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact et devis</li>
            <li>Améliorer notre site et nos services</li>
            <li>Envoyer des informations sur nos services (avec votre consentement)</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Base légale</h2>
          <p>
            Le traitement de vos données est basé sur :
          </p>
          <ul>
            <li><strong>Votre consentement</strong> lors de l'utilisation des formulaires</li>
            <li><strong>L'exécution d'un contrat</strong> pour la fourniture de nos services</li>
            <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Conservation des données</h2>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour
            lesquelles elles ont été collectées, et conformément aux obligations légales (généralement 3 ans
            après le dernier contact).
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Partage des données</h2>
          <p>
            Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li><strong>Prestataires techniques :</strong> Netlify (hébergement), Calendly (prise de RDV)</li>
            <li><strong>Autorités légales :</strong> Sur demande judiciaire uniquement</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Vos droits (RGPD)</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
            <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
            <li><strong>Droit à l'effacement :</strong> Supprimer vos données</li>
            <li><strong>Droit d'opposition :</strong> Refuser le traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> Récupérer vos données</li>
            <li><strong>Droit de limitation :</strong> Limiter le traitement</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : <strong>eric.sermande@gmail.com</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Cookies</h2>
          <p>
            Notre site peut utiliser des cookies pour améliorer votre expérience. Vous pouvez les
            désactiver dans les paramètres de votre navigateur.
          </p>
          <p>Types de cookies utilisés :</p>
          <ul>
            <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
            <li><strong>Cookies analytiques :</strong> Pour mesurer l'audience (si applicable)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
            protéger vos données contre tout accès non autorisé, perte ou destruction.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Modifications</h2>
          <p>
            Cette politique peut être mise à jour. Les modifications seront publiées sur cette page
            avec la date de dernière mise à jour.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits,
            contactez-nous :
          </p>
          <ul>
            <li><strong>Email :</strong> eric.sermande@gmail.com</li>
            <li><strong>Responsable :</strong> Eric SERMANDE</li>
          </ul>
        </section>

        <p className={styles.lastUpdate}>
          <em>Dernière mise à jour : Novembre 2025</em>
        </p>
      </div>
    </div>
  );
}

export default PolitiqueConfidentialite;
