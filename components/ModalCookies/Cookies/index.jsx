import React, { useState, useEffect } from 'react';
import { ModalCookies } from '../index';
import { Container } from 'react-bootstrap';
import styles from "./style.module.scss";

export const Cookies = ({ setShowCookieIcon, setShowModal, showModal }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const userConsent = localStorage.getItem('userConsent');
    if (!userConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('userConsent', 'accepted');
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('userConsent', 'rejected');
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = (preferences) => {
    console.log(preferences);
    localStorage.setItem('userConsent', JSON.stringify(preferences));
    setShowModal(false);
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCustomize = () => {
    setShowModal(true);
    setShowBanner(false);
  };

  return (
    <div >
      {showBanner && (
        <div style={{zIndex: '999999', position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f8f9fa', padding: '10px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}>
          <Container>
            <div className={`${styles.cookieBanner} d-flex gap-3`}>
              <div className="w-70">
                <p>Usamos cookies para melhorar sua experiência. Você pode aceitar todos os cookies, rejeitá-los ou personalizar suas preferências.</p>
              </div>
              <div  className={`${styles.divButton} d-flex justify-content-center`}>
                <a  onClick={handleRejectAll} className=" btn outline me-2">
                  Rejeitar
                </a>
                <a  onClick={handleAcceptAll} className="btn outline me-2">
                  Aceitar
                </a>
                <a className="btn faleconosco"  onClick={handleCustomize}>
                  Personalizar
                </a>
              </div>
            </div>
          </Container>
        </div>
      )}
      <ModalCookies
        show={showModal}
        handleClose={handleClose}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
        onSavePreferences={handleSavePreferences}
        setShowCookieIcon={setShowCookieIcon}
      />
    </div>
  );
};
