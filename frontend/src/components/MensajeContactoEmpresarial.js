import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MensajeContactoEmpresarial = (props) => {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={6}>
          <p>{props.mensajes.ce_nombre}</p>
        </Col>
        <Col xs={6}>
          <p>Fecha de mensaje</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <p>{props.mensajes.ce_email}</p>
        </Col>
        <Col xs={6}>
          <p>{props.mensajes.ce_empresa}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <p>{props.mensajes.ce_barrio}</p>
        </Col>
        <Col xs={6}>
          <p>{props.mensajes.ce_direccion}</p>
        </Col>
      </Row>

      <p>{props.mensajes.ce_descripcion}</p>
    </ListGroup.Item>
  );
};

export default MensajeContactoEmpresarial;
