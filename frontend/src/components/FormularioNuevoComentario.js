import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormularioNuevoComentario = (props) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modal show={props.show} onHide={props.handleOcultar}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="h3">Nuevo comentario</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationCustom04">
            <Form.Label>Fecha de visita</Form.Label>
            <Form.Control type="date" placeholder="Fecha de visita" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una fecha valida
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom05">
            <Form.Label>Puntuación</Form.Label>
            <Form.Control as="select" custom required>
              <option selected disabled>
                Puntaje
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una dirección valida
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Textarea1">
            <Form.Label>Descripción de su empresa</Form.Label>
            <Form.Control as="textarea" rows="3" required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Enviar</Button>
        <Button variant="secondary" onClick={props.handleOcultar}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormularioNuevoComentario;
