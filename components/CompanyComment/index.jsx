import styles from "./style.module.scss";

export const CompanyComment = ({ image, content, cliente, cargo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageComment}>
          <img
            src={image}
            alt="imagem de uma pessoa ou empresa"
          />
        </div>
        <div className={`${styles.textComments} d-flex flex-column justify-content-between`}>
          <p className="paragraph demoimentos">{content}</p>
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="paragraph bold mb-0" style={{ lineHeight: 2 }}>{cliente}</h4>
              <span className="paragraph">{cargo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
