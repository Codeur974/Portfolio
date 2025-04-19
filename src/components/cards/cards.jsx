import Card from "./card";
import api from "../../doc.json";
import styles from "./card.module.scss";

function Cards() {
  const filteredApi = api.filter((itemCard) => itemCard.id !== "skills");

  return (
    <div>
      <ul className={styles.cards__container}>
        {filteredApi.map((itemCard) => (
          <Card itemCard={itemCard} key={itemCard.id} />
        ))}
      </ul>
    </div>
  );
}

export default Cards;
