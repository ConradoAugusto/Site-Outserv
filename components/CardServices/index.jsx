import { Link } from "react-scroll";
import styles from "./style.module.scss";

export const CardServices = ({ children, title, text, slogan, data }) => {
  return (
    <div
      className={`${styles.container} uk-animation-slide-left-medium`}
      data-uk-scrollspy={`${data} cls: uk-animation-slide-left-medium; repeat: false;`}
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <h3 className={`${styles.title} paragraph text textBold`}>{title}</h3>
          <p className={`${styles.text} paragraph`}>{text}</p>
          <h6 className={`${styles.slogan} paragraph inputText`}>{slogan}</h6>
        </div>
        <div className={styles.services}>{children}</div>
        <div className={styles.button}>
          <Link
            to="contato"
            smooth={true}
            duration={500}
            className={`${styles.btn} paragraph ctaService`}
          >
            Comece agora
          </Link>
        </div>
      </div>
    </div>
  );
};
