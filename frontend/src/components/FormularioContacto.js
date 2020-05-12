import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormularioContacto = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return(
      <>
        <Card className="my-3 text-left">
        <Card.Body>
          <Card.Text>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group ontrolId="validationCustom01">
                <Form.Label>Nombre de contacto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                />
                <Form.Control.Feedback>Suena bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Email de contacto</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
                <Form.Control.Feedback>Suena bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group ontrolId="validationCustom03">
                <Form.Label>Telefono de contacto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Telefono"
                />
                <Form.Control.Feedback>Suena bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="Textarea1">
                <Form.Label>Su comentario</Form.Label>
                <Form.Control as="textarea" rows="5" required/>
              </Form.Group>
              <div className="text-right">
              <Button variant="success" type="submit">Enviar</Button>
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
}

export default FormularioContacto;