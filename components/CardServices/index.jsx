import styles from "./style.module.scss";

export const CardServices = ({ children, title, text, slogan, data}) => {
  const whatsapp =
    "https://api.whatsapp.com/send?phone=5519996844020&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços.";

  return (
    <div className={`${styles.container } uk-animation-slide-left-medium`}
    data-uk-scrollspy={`${data} cls: uk-animation-slide-left-medium; repeat: true; `}
    >
      <div className={styles.card}>
        <div className={styles.content}>
          <h3 className={`${styles.title} paragraph textDark text bold`}>{title}</h3>
          <p className={`${styles.text} paragraph textBold`}>{text}</p>
          <h6 className={`${styles.slogan} paragraph inputText`}>
            {slogan}
          </h6>
        </div>
        <div className={styles.services}>
        {children}
        </div>
        <div className={styles.button}>
        <a href="#contato" className={`${styles.btn} paragraph ctaService` }>Comece agora</a>
        </div>
      </div>
    </div>
  );
};

