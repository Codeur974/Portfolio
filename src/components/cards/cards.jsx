import Card from "./card";
import api from "../../doc.json";
import styles from "./card.module.scss";

function Cards() {
  return (
    <div>
      <ul className={styles.cards__container}>
        {api.map((itemCard) => (
          <Card itemCard={itemCard} key={itemCard.id} />
        ))}
      </ul>
    </div>
  );
}

export default Cards;
