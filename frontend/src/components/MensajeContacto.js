import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MensajeContacto = (props) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={6}>
          <p>{props.mensajes.cg_nombre}</p>
        </Col>
        <Col xs={6}>
          <p>{props.mensajes.niceDate}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <p>{props.mensajes.cg_email}</p>
        </Col>
        <Col xs={6}>
          <p>{props.mensajes.cg_telefono}</p>
        </Col>
      </Row>

      <p>{props.mensajes.cg_comentario}</p>
    </ListGroup.Item>
  );
};

export default MensajeContacto;
