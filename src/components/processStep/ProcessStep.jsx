import styles from "./processStep.module.scss";
import { FaComments, FaFileAlt, FaCode, FaRocket } from "react-icons/fa";

const iconMap = {
  FaComments,
  FaFileAlt,
  FaCode,
  FaRocket,
};

function ProcessStep({ step, isLast }) {
  const IconComponent = iconMap[step.icon];

  return (
    <div className={styles.processStep}>
      <div className={styles.iconWrapper} style={{ backgroundColor: `${step.color}20` }}>
        <IconComponent className={styles.icon} style={{ color: step.color }} />
      </div>

      <div className={styles.content}>
        <div className={styles.stepNumber}>Étape {step.id}</div>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.description}>{step.description}</p>
      </div>

      {!isLast && <div className={styles.connector} />}
    </div>
  );
}

export default ProcessStep;
