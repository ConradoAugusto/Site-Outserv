import styles from "./style.module.scss";
import { IconSquareArrowRight } from "@tabler/icons-react";

export const CardServiceItem = ({ content }) => {
  return (
    <div className={styles.content}>
      <div className={styles.icon}>
      <IconSquareArrowRight size={40} stroke={2} color="#21b88f" />
      </div>
      <p className="paragraph"> {content}</p>
    </div>
  );
};
