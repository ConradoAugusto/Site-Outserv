import React from 'react';
import styles from './style.module.scss';

const InformationModal = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.preferenceHeader}>
          <span className={styles.preferenceTitle}>Mais Informações</span>
          <button className={styles.btnClose} aria-label="Fechar" onClick={onClose}>
            <img src="https://rockcontent.com/br/wp-content/plugins/cookie-law-info/lite/frontend/images/close.svg" alt="Close" />
          </button>
        </div>
        <div className={styles.preferenceBodyWrapper}>
          <div className={styles.preferenceContentWrapper}>
            <p>Aqui estão mais informações sobre o uso de cookies no nosso site.</p>
          </div>
        </div>
        <div className={styles.footerWrapper}>
          <button className={`${styles.btn} ${styles.btnCloseModal}`} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationModal;