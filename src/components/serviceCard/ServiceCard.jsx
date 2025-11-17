import styles from "./serviceCard.module.scss";
import {
  FaGlobe,
  FaLaptopCode,
  FaShoppingCart,
  FaTools,
  FaCode,
  FaMobileAlt,
  FaCheck,
  FaArrowRight
} from "react-icons/fa";

const iconMap = {
  FaGlobe,
  FaLaptopCode,
  FaShoppingCart,
  FaTools,
  FaCode,
  FaMobileAlt,
};

function ServiceCard({ service, onContact }) {
  const IconComponent = iconMap[service.icon];

  return (
    <div className={`${styles.serviceCard} ${service.popular ? styles.popular : ''}`}>
      {service.popular && <div className={styles.badge}>Populaire</div>}

      <div className={styles.header}>
        <div
          className={styles.iconWrapper}
          style={{ backgroundColor: `${service.color}20` }}
        >
          <IconComponent
            className={styles.icon}
            style={{ color: service.color }}
          />
        </div>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.price}>{service.price}</p>
      </div>

      <p className={styles.description}>{service.description}</p>

      <ul className={styles.features}>
        {service.features.map((feature, index) => (
          <li key={index}>
            <FaCheck className={styles.checkIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          className={styles.learnMoreBtn}
          onClick={() => onContact(service.title)}
        >
          <span>En savoir plus</span>
          <FaArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
