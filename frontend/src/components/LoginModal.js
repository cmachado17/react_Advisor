import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const LoginModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su usuario"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su constraseña"></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Entrar</Button>
        <Button variant="secondary" onClick={props.handleHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
