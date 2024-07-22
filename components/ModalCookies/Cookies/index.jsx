import React, { useState, useEffect } from 'react';
import { ModalCookies } from '../index';
import { Button, Container, Row, Col } from 'react-bootstrap';

export const Cookies = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const userConsent = localStorage.getItem('userConsent');
    if (!userConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('userConsent', 'accepted');
    console.log('Aceitar todos os cookies');
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('userConsent', 'rejected');
    console.log('Rejeitar todos os cookies');
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = (preferences) => {
    localStorage.setItem('userConsent', JSON.stringify(preferences));
    console.log('Salvar preferências de cookies', preferences);
    setShowModal(false);
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCustomize = () => {
    setShowModal(true);
  };

  return (
    <div >
      {showBanner && (
        <div className="cookie-banner" style={{zIndex: '999999', position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f8f9fa', padding: '10px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}>
          <Container>
            <Row>
              <Col md={8}>
                <p>Usamos cookies para melhorar sua experiência. Você pode aceitar todos os cookies, rejeitá-los ou personalizar suas preferências.</p>
              </Col>
              <Col md={4} className="d-flex justify-content-end">
                <a  onClick={handleRejectAll} className=" btn outline me-2">
                  Rejeitar
                </a>
                <a  onClick={handleAcceptAll} className="btn outline me-2">
                  Aceitar
                </a>
                <a className="btn faleconosco"  onClick={handleCustomize}>
                  Personalizar
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      <ModalCookies
        show={showModal}
        handleClose={handleClose}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
        onSavePreferences={handleSavePreferences}
      />
    </div>
  );
};
