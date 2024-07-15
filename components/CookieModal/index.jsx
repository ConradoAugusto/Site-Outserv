import React, { useState } from "react";
import styles from "./style.module.scss";
import InformationModal from "./InformationModal";

const CookieModal = ({ onClose }) => {
  const [showCookieModal, setShowCookieModal] = useState(true);
  const [showInformationModal, setShowInformationModal] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleCloseCookieModal = () => {
    setShowCookieModal(false);
    onClose();
  };

  const handleShowInformationModal = () => {
    setShowInformationModal(true);
  };

  const handleCloseInformationModal = () => {
    setShowInformationModal(false);
  };

  const handleAccordionClick = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  if (!showCookieModal) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div>
          <div className={styles.preferenceHeader}>
            <p className="paragraph bold mb-0">
              Personalizar preferências de consentimento
            </p>
            <button
              className={styles.btnClose}
              aria-label="Fechar"
              onClick={handleCloseCookieModal}
            >
              X
            </button>
          </div>
          <div className={styles.preferenceBodyWrapper}>
            <div className={styles.preferenceContentWrapper}>
              <p className="paragraph cookies">
                Utilizamos cookies para ajudar você a navegar com eficiência e
                executar certas funções. Você encontrará informações detalhadas
                sobre todos os cookies sob cada categoria de consentimento
                abaixo. Os cookies que são classificados com a marcação
                “Necessário” são armazenados em seu navegador, pois são
                essenciais para possibilitar o uso de funcionalidades básicas do
                site. Também usamos cookies de terceiros que nos ajudam a
                analisar como você usa esse site, armazenar suas preferências e
                fornecer conteúdo e anúncios que sejam relevantes para você.
                Esses cookies somente serão armazenados em seu navegador
                mediante seu prévio consentimento. Você pode optar por ativar ou
                desativar alguns ou todos esses cookies, mas desativá-los pode
                afetar sua experiência de navegação.
              </p>
            </div>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed paragraph cookies"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body paragraph cookies">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header " id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed paragraph cookies"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body paragraph cookies">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed paragraph cookies"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body paragraph cookies">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerWrapper}>
          <hr/>
          <div className={styles.preferenceBtnWrapper}>
            <button
              className={`btn outline ${styles.btnReject}`}
              aria-label="Rejeitar"
              onClick={handleCloseCookieModal}
            >
              Rejeitar
            </button>
            <button
              className={`btn outline ${styles.btnPreferences}`}
              aria-label="Salvar minhas preferências"
              onClick={handleCloseCookieModal}
            >
              Salvar minhas preferências
            </button>
            <button
              className={`faleconosco ${styles.btnAccept}`}
              aria-label="Aceitar tudo"
              onClick={handleCloseCookieModal}
            >
              Aceitar tudo
            </button>
          </div>
        </div>
      </div>
      {showInformationModal && (
        <InformationModal onClose={handleCloseInformationModal} />
      )}
    </div>
  );
};

export default CookieModal;
