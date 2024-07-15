import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import CookieModal from '..';
import RoundCookieIcon from '../RoundCookieIcon';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showCookieIcon, setShowCookieIcon] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    setShowCookieIcon(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
    setShowCookieIcon(false);
  };

  const handleCustomize = () => {
    setShowConsent(false);
    setShowCookieModal(true);
  };

  const handleCloseCookieModal = () => {
    setShowCookieModal(false);
    setShowCookieIcon(true);
  };

  if (showCookieIcon) {
    return <RoundCookieIcon onClick={() => { setShowConsent(true); setShowCookieIcon(false); }} />;
  }

  if (!showConsent) return null;

  return (
    <>
      <div className={styles.consentContainer}>
        <div className={styles.consentBar}>
          <div className={styles.notice}>
            <p className="paragraph bold ">Valorizamos sua privacidade</p>
            <div className={styles.noticeGroup}>
              <div className={styles.noticeDes}>
                <p className="paragraph">Utilizamos cookies para aprimorar sua experiência de navegação, exibir anúncios ou conteúdo personalizado e analisar nosso tráfego. Ao clicar em “Aceitar todos”, você concorda com nosso uso de cookies.</p>
              </div>
              <div className={styles.noticeBtnWrapper}>
                <button className="btn outline" onClick={handleCustomize}>Personalizar</button>
                <button className="btn outline" onClick={handleRejectAll}>Rejeitar</button>
                <button className="faleconosco" onClick={handleAcceptAll}>Aceitar tudo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCookieModal && <CookieModal onClose={handleCloseCookieModal} />}
    </>
  );
};

export default CookieConsent;
