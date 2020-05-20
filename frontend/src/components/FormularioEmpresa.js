import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const FormularioEmpresa = () => {
  return (
    <Card className="my-3 text-left">
      <Card.Body>
        <Card.Text>
          <Form>
            <Form.Group>
              <Form.Label>Nombre de contacto</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre de contacto"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email de contacto</Form.Label>
              <Form.Control required type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre de la empresa"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Barrio</Form.Label>
              <Form.Control type="text" placeholder="Barrio" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Dirección" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción de su empresa</Form.Label>
              <Form.Control as="textarea" rows="5" required />
            </Form.Group>
            <div className="text-right">
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FormularioEmpresa;
