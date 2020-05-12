import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CajaComentariosClientes = (props) => {
  return (
    <ListGroup className="container mb-5 p-0">
      {props.comentarios.map((coment) => {
        return (
          <ListGroup.Item className="mb-3">
            <Row className="p-0">
              <Col sm={12} md={8}>
                <h4 className="font-weight-bold">{coment.user_nombre}</h4>
                <p>{coment.opi_texto}</p>
                <p>
                  <span className="font-weight-bold">Puntuacion:</span>{" "}
                  {coment.opi_puntaje_id}
                </p>
                <p>
                  <span className="font-weight-bold">Fecha de visita:</span>{" "}
                  {coment.opi_fecha}
                </p>
              </Col>
              <Col sm={12} md={4}>
                <Image
                  rounded
                  src="http://localhost:5000/images/foto-comentario.jpg"
                  className="img-fluid"
                ></Image>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
export default CajaComentariosClientes;
