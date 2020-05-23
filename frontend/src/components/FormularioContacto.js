import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./styles/FormulariosContacto.css";
import Swal from "sweetalert2";

const FormularioContacto = () => {
  //Estados de datos a enviar

  const [nombreContacto, setNombreContacto] = useState("");
  const [emailContacto, setEmailContacto] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [comentarioContacto, setComentarioContacto] = useState("");

  //Tomar valores del formulario

  const handleNombreContacto = (e) => {
    setNombreContacto(e.target.value);
  };
  const handleEmailContacto = (e) => {
    setEmailContacto(e.target.value);
  };
  const handleTelefonoContacto = (e) => {
    setTelefonoContacto(e.target.value);
  };
  const handleComentarioContacto = (e) => {
    setComentarioContacto(e.target.value);
  };

  //Evento al enviar formulario
  const handleSave = () => {
    //date del envio del contacto
    let fecha = new Date().toISOString().slice(0, 19).replace("T", " ");

    //Creando objeto para pasar al back y dandole valores
    const formData = new FormData();
    formData.append("nombre", nombreContacto);
    formData.append("email", emailContacto);
    formData.append("telefono", telefonoContacto);
    formData.append("comentario", comentarioContacto);
    formData.append("fecha", fecha);

    let url = "http://localhost:5000/contacto/general";

    //Insertar en la BD
    fetch(url, {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          Swal.fire({
            icon: "success",
            text: data.message,
          });
          //Resetear formulario
          setNombreContacto("");
          setEmailContacto("");
          setTelefonoContacto("");
          setComentarioContacto("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Card className="my-3 text-left">
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group>
                <Form.Label>Nombre de contacto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  value={nombreContacto}
                  onChange={handleNombreContacto}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email de contacto</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  value={emailContacto}
                  onChange={handleEmailContacto}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Telefono de contacto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Telefono"
                  value={telefonoContacto}
                  onChange={handleTelefonoContacto}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Su comentario</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="5"
                  value={comentarioContacto}
                  onChange={handleComentarioContacto}
                />
              </Form.Group>
            </Form>
            <div className="text-right">
              <Button className="bg-orange" type="submit" onClick={handleSave}>
                Enviar
              </Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormularioContacto;
