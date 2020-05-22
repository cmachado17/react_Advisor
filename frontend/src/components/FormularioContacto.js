import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './styles/FormulariosContacto.css';

const FormularioContacto = () => {
  return (
    <>
      <Card className="my-3 text-left">
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group>
                <Form.Label>Nombre de contacto</Form.Label>
                <Form.Control required type="text" placeholder="Nombre" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email de contacto</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefono de contacto</Form.Label>
                <Form.Control required type="text" placeholder="Telefono" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Su comentario</Form.Label>
                <Form.Control as="textarea" rows="5" required />
              </Form.Group>
              <div className="text-right">
                <Button className="bg-orange" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormularioContacto;
