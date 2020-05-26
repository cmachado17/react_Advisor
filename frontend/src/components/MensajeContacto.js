import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './styles/MensajeContacto.css';

const MensajeContacto = (props) => {
  return (
    <ListGroup.Item className="p-0 mb-4 borde font-weight-bold">
      <Row className="bg-naranja mx-0 mt-0">
        <Col xs={7} className="border border-dark">
          <p>
            <i className="text-danger fas fa-user"></i> {props.mensajes.cg_nombre}
          </p>
        </Col>
        <Col xs={5} className="border border-dark">
          <p>
            <i className="text-danger fas fa-calendar-plus"></i> {props.mensajes.niceDate}
          </p>
        </Col>
      </Row>
      <Row className="bg-naranja mx-0">
        <Col xs={7} className="border border-dark">
          <p>
            <i className="text-danger fas fa-envelope-open-text"></i>{" "}
            {props.mensajes.cg_email}
          </p>
        </Col>
        <Col xs={5} className="border border-dark">
          <p>
            <i className="text-danger fas fa-phone-square-alt"></i>{" "}
            {props.mensajes.cg_telefono}
          </p>
        </Col>
      </Row>
      <div className="p-2">
        <p>{props.mensajes.cg_comentario}</p>
      </div>
    </ListGroup.Item>
  );
};

export default MensajeContacto;
