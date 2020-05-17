import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

const ModalCliente = (props) => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [logo, setLogo] = useState('');
    const [zona, setZona] = useState('');
    const [rubro, setRubro] = useState('');
    const [puntuacion, setPuntuacion] = useState('');
    const [direccion, setDireccion] = useState('');
    const [sitioWeb, setSitioWeb] = useState('');
    const [ubicacionMaps, setUbicacionMaps] = useState('');

  return (
    <Modal show={props.show} onHide={props.handleOcultar}>
      <Modal.Header closeButton>Nuevo - editando cliente</Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre del cliente</Form.Label>
            <Form.Control type="text" placeholder="Cliente"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea"
              rows="3" placeholder="Descripción"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Logo</Form.Label>
            <Form.Control type="file"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Zona</Form.Label>
            <Form.Control type="text" placeholder="Zona"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rubro</Form.Label>
            <Form.Control type="text" placeholder="Rubro"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Puntuacion</Form.Label>
            <Form.Control type="text" placeholder="Puntuacion"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Dirección"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sitio web</Form.Label>
            <Form.Control type="text" placeholder="Sitio web"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ubicacion google maps</Form.Label>
            <Form.Control type="text" placeholder="Ubicacion"></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary">
          Enviar
        </Button>
        <Button variant="secondary" onClick={props.handleOcultar}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCliente;
