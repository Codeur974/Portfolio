import { useState } from "react";
import styles from "./card.module.scss";

function Card({ itemCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.cardInner}>
        {/* Face avant */}
        <div className={styles.cardFront}>
          <img src={`${itemCard.cover}`} alt={itemCard.title} />
          <h3>{itemCard.title}</h3>
        </div>
        {/* Face arrière */}
        <div className={styles.cardBack}>
          <p>{itemCard.description}</p>
          <div className={styles.links}>
            {itemCard.repository && (
              <a
                href={itemCard.repository}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir le Repository
              </a>
            )}
            {itemCard.link && (
              <a
                href={itemCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir le Projet
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
