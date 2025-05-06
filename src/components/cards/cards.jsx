import Card from "./card";
import api from "../../doc.json";
import styles from "./card.module.scss";

function Cards({ filter }) {
  const filteredApi =
    filter === "all"
      ? api.filter((itemCard) => itemCard.id !== "skills")
      : api.filter(
          (itemCard) => itemCard.id !== "skills" && itemCard.category === filter
        );
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
