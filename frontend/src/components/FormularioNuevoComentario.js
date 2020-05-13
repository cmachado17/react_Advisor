import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormularioNuevoComentario = (props) => {

  const [userNameComentario, setUserNameComentario] = useState("");
  const [reseniaComentario, setReseniaComentario] = useState("");
  const [puntajeComentario, setPuntajeComentario] = useState("");
  const [fechaComentario, setFechaComentario] = useState("");
  const [fotoComentario, setFotoComentario] = useState('');

  

  const handleUserName = (e) => {
    setUserNameComentario(e.target.value);
  };

  const handleResenia = (e) => {
    setReseniaComentario(e.target.value);
  };

  const handlePuntaje = (e) => {
    setPuntajeComentario(e.target.value);
  };

  const handleFecha = (e) => {
    setFechaComentario(e.target.value);
  };

  const handleFotoComentario = (e) => {
    console.log(e.target.files[0]);
    setFotoComentario(e.target.files[0]);
  };

  const handleSave = () => {
    const formData = new FormData();

    formData.append('userNameComentario', userNameComentario);
    formData.append('reseniaComentario', reseniaComentario);
    formData.append('puntajeComentario', puntajeComentario);
    formData.append('fechaComentario', fechaComentario);
    formData.append('fotoComentario', fotoComentario);

    fetch('http://localhost:5000/opiniones', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Error')
    })
  }


  return (
    <Modal show={props.show} onHide={props.handleOcultar}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="h3">Nuevo comentario</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              value={userNameComentario}
              onChange={handleUserName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Reseña</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={reseniaComentario}
              onChange={handleResenia}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Puntaje</Form.Label>
            <Form.Control
              type="text"
              value={puntajeComentario}
              onChange={handlePuntaje}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de visita</Form.Label>
            <Form.Control type="date" value={fechaComentario} onChange={handleFecha} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Foto</Form.Label>
            <Form.Control
              type="file"
              
              onChange={handleFotoComentario}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSave}>
          Enviar
        </Button>
        <Button variant="secondary" onClick={props.handleOcultar}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormularioNuevoComentario;
