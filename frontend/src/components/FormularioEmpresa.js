import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const FormularioEmpresa = () => {
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
    <Card className="my-3 text-left">
      <Card.Body>
        <Card.Text>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group ontrolId="validationCustom01">
              <Form.Label>Nombre de contacto</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre de contacto"
              />
              <Form.Control.Feedback>Suena bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Email de contacto</Form.Label>
              <Form.Control required type="email" placeholder="Email" />
              <Form.Control.Feedback>Suena bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group ontrolId="validationCustom03">
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre de la empresa"
              />
              <Form.Control.Feedback>Suena bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom04">
              <Form.Label>Barrio</Form.Label>
              <Form.Control type="text" placeholder="Barrio" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese un barrio valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom05">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Dirección" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingrese una dirección valida
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="Textarea1">
              <Form.Label>Descripción de su empresa</Form.Label>
              <Form.Control as="textarea" rows="5" required/>
            </Form.Group>
            <div className="text-right">
            <Button variant="success" type="submit">Enviar</Button>
            </div>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FormularioEmpresa;
