import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";

export const ModalCookies = ({
  show,
  handleClose,
  onAcceptAll,
  onRejectAll,
  onSavePreferences,
  setShowCookieIcon,
}) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const storedPreferences = localStorage.getItem("cookiePreferences");
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences));
    }
  }, []);

  const handleCookieIconClick = () => {
    setShowCookieIcon(true);
  };

  const handleToggle = (cookieType) => {
    setPreferences((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }));
  };

  const handleSave = () => {
    onSavePreferences(preferences);
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      style={{ position: "fixed", bottom: 0, left: 0, margin: 0 }}
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>Configurações de Cookies</Modal.Title>
        <a
          type="button"
          className="btn-close"
          onClick={() => {
            handleClose();
            handleCookieIconClick();
          }}
        ></a>
      </Modal.Header>
      <Modal.Body>
        <p>Escolha suas preferências de cookies:</p>
        <Form>
          <Form.Group controlId="formNecessary">
            <div className="checkBox">
              <Form.Check
                type="checkbox"
                label="Cookies Necessários"
                checked={preferences.necessary}
                disabled
              />
            </div>
          </Form.Group>
          <Form.Group controlId="formAnalytics">
            <div className="checkBox">
              <Form.Check
                type="checkbox"
                label="Cookies de Análise"
                checked={preferences.analytics}
                onChange={() => handleToggle("analytics")}
              />
            </div>
          </Form.Group>
          <Form.Group controlId="formMarketing">
            <div className="checkBox">
              <Form.Check
                type="checkbox"
                label="Cookies de Marketing"
                checked={preferences.marketing}
                onChange={() => handleToggle("marketing")}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a className=" btn danger me-2 bold" onClick={onRejectAll}>
          Rejeitar Todos
        </a>
        <a className=" btn outline me-2 bold" onClick={onAcceptAll}>
          Aceitar Todos
        </a>
        <a className=" btn faleconosco me-2 bold" onClick={handleSave}>
          Salvar Preferências
        </a>
      </Modal.Footer>
    </Modal>
  );
};
