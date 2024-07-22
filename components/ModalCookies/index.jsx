import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const ModalCookies = ({ show, handleClose, onAcceptAll, onRejectAll, onSavePreferences }) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (cookieType) => {
    setPreferences((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }));
  };

  const handleSave = () => {
    onSavePreferences(preferences);
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ position: 'fixed', bottom: 0, left: 0, margin: 0 }} dialogClassName="modal-dialog-centered">
      <Modal.Header>
        <Modal.Title>Configurações de Cookies</Modal.Title>
        <button type="button" className="btn-close" onClick={handleClose}></button>
      </Modal.Header>
      <Modal.Body>
        <p>Escolha suas preferências de cookies:</p>
        <Form>
          <Form.Group controlId="formNecessary">
            <Form.Check
              type="checkbox"
              label="Cookies Necessários"
              checked={preferences.necessary}
              disabled
            />
          </Form.Group>
          <Form.Group controlId="formAnalytics">
            <Form.Check
              type="checkbox"
              label="Cookies de Análise"
              checked={preferences.analytics}
              onChange={() => handleToggle('analytics')}
            />
          </Form.Group>
          <Form.Group controlId="formMarketing">
            <Form.Check
              type="checkbox"
              label="Cookies de Marketing"
              checked={preferences.marketing}
              onChange={() => handleToggle('marketing')}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <a className=" btn danger me-2"  onClick={onRejectAll}>
          Rejeitar Todos
        </a>
        <a className=" btn outline me-2"  onClick={onAcceptAll}>
          Aceitar Todos
        </a>
        <a className=" btn faleconosco me-2"  onClick={handleSave}>
          Salvar Preferências
        </a>
      </Modal.Footer>
    </Modal>
  );
};
