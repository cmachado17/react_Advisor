import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2';
import './styles/LoginModal.css';

const LoginModal = (props) => {

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setNombreUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleLoginClick = () => {
    let url = "http://localhost:5000/auth";

    let params = {
      user: nombreUsuario,
      password: password,
    };

    fetch(url, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          props.handleLoginSuccess(data.loggedUser);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `Bienvenido ${params.user}`,
            showConfirmButton: false,
            timer: 2000
          })
          props.handleHide();
          setNombreUsuario("");
          setPassword("");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message,
         
          })
        }
      });
  };



  return (
    <Modal show={props.show} onHide={props.handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su usuario"
              value={nombreUsuario}
              onChange={handleUserNameChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese su constraseña"
              value={password}
              onChange={handlePasswordChange}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="bg-orange" onClick={handleLoginClick}>
          Entrar
        </Button>
        <Button variant="secondary" onClick={props.handleHide}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
