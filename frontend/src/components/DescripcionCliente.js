import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./styles/DescripcionCliente.css";
import FormularioNuevoComentario from "./FormularioNuevoComentario";
import Swal from "sweetalert2";

const DescripcionCliente = (props) => {
  const [mostrarFormNuevoComentario, setMostrarFormNuevoComentario] = useState(
    false
  );

  const handleMostrarFormNuevoComentario = () => {
    setMostrarFormNuevoComentario(true);
  };

  const handleOcultarFormNuevoComentario = () => {
    //setSelectedProduct(null);
    setMostrarFormNuevoComentario(false);
  };

  const handleComentSaved = (message) => {
    handleOcultarFormNuevoComentario(false);
    props.cargarCajaComentarios();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Comentario agregado",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <>
      <div className="container font-weight-bold p-0">
        <Row className="mt-5 mb-3 alinear-vertical">
          <Col sm={12} md={6} className="p-0 alinear-mobile">
            <Image src={props.logo} className="img-fluid" rounded></Image>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <h1 className="mx-auto font-weight-bold">{props.nombre}</h1>
            </Row>
            <Row>
              <p className="h3 mx-auto font-weight-bold">
                Puntaje: {props.puntaje}
              </p>
            </Row>
            <Row>
              <a
                className="btn btn-primary mx-auto"
                href={props.website}
                target="_blank"
              >
                Sitio web
              </a>
              <a
                className="btn btn-primary mx-auto"
                href={props.ubicacion}
                target="_blank"
              >
                Como llegar
              </a>
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm={12} md={9} className="alinear-vertical">
            <p>{props.descripcion}</p>
          </Col>

          <Col sm={12} md={3} className="alinear-vertical">
            {props.user ? (
              <Button
                className="mx-auto"
                onClick={handleMostrarFormNuevoComentario}
              >
                Deja tu reseña
              </Button>
            ) : (
              <div className="text-center">
                <p>Inicia sesión para dejar tus reseñas</p>
                <Image
                  src={"http://localhost:5000/images/onlinePost.svg"}
                  className="img-fluid"
                ></Image>
              </div>
            )}
          </Col>
        </Row>
        <hr />
      </div>
      <FormularioNuevoComentario
        user={props.user}
        idCliente={props.idCliente}
        show={mostrarFormNuevoComentario}
        handleOcultar={handleOcultarFormNuevoComentario}
        onComentSaved={handleComentSaved}
      />
    </>
  );
};

export default DescripcionCliente;
