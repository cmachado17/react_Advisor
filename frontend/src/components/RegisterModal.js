import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2';
import './styles/LoginModal.css';

const RegisterModal = (props) => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [emailNuevoUsuario, setEmailNuevoUsuario] = useState("");
  const [passwordNuevoUsuario, setPasswordNuevoUsuario] = useState("");

  const handleNombreUsuario = (e) => {
    setNombreUsuario(e.target.value);
  };

  const handleEmailNuevoUsuario = (e) => {
    setEmailNuevoUsuario(e.target.value);
  };

  const handlePasswordNuevoUsuario = (e) => {
    setPasswordNuevoUsuario(e.target.value);
  };

  const handleSave = () => {
    let formData = new FormData();

    formData.append("nombreUsuario", nombreUsuario);
    formData.append("emailNuevoUsuario", emailNuevoUsuario);
    formData.append("passwordNuevoUsuario", passwordNuevoUsuario);

    let url = "http://localhost:5000/auth/register";

    fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          Swal.fire({
            position:'top-center',
            icon:'success',
            title: 'Cuenta creada, logeate para confirmar',
            showConfirmButton: false,
            timer: 2000
          })
          props.handleHide();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message, 
          })
        }
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  return (
    <Modal show={props.show} onHide={props.handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Ingrese su usuario"
              value={nombreUsuario}
              onChange={handleNombreUsuario}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su email"
              value={emailNuevoUsuario}
              onChange={handleEmailNuevoUsuario}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su constraseña"
              value={passwordNuevoUsuario}
              onChange={handlePasswordNuevoUsuario}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-orange" onClick={handleSave}>
          Enviar
        </Button>
        <Button variant="secondary" onClick={props.handleHide}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
