import { useState } from "react";
import Cards from "../../components/cards/cards";
import ContactForm from "../../components/contactForme/ContactForm";
import MySkills from "../../components/mySkills/Myskills";

import styles from "./myproject.module.scss";

function MyProject() {
  const title = "Voici quelques projets que j'ai réalisé";
  const subtitle = "ainsi que les compétences acquis pour les réaliser";
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modale

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const openModal = () => setIsModalOpen(true); // Ouvre la modale
  const closeModal = () => setIsModalOpen(false); // Ferme la modale

  return (
    <div className={styles.myproject}>
      <h1 className={styles.myproject__title}>
        {title.split("").map((letter, index) => (
          <span
            key={`title-${index}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            className={styles.letter}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
        <br />
        {subtitle.split("").map((letter, index) => (
          <span
            key={`subtitle-${index}`}
            style={{ animationDelay: `${(title.length + index) * 0.1}s` }}
            className={styles.letter}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      <h2 className={styles.myproject__skills}>Mes compétences</h2>
      <MySkills />

      <div className={styles.filter}>
        <label htmlFor="projectFilter">
          <h2 className={styles.myproject__skills}>Mes projets</h2>
        </label>
        <select
          id="projectFilter"
          value={filter}
          onChange={handleFilterChange}
          className={styles.filter__select}
        >
          <option value="all">Tous mes projets</option>
          <option value="Formation Openclassrooms">
            Projets OpenClassrooms
          </option>
          <option value="Projets clients">Projets clients</option>
        </select>
      </div>
      <div className={styles.myproject__cards}>
        <Cards filter={filter} />
      </div>

      {/* Bouton pour ouvrir la modale */}
      <button onClick={openModal} className={styles.contactButton}>
        Contactez-moi
      </button>

      {/* Modale avec le formulaire */}
      {isModalOpen && <ContactForm onClose={closeModal} />}
    </div>
  );
}

export default MyProject;
