import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./styles/MensajeContacto.css";

const MensajeContactoEmpresarial = (props) => {
  return (
    <ListGroup.Item className="p-0 mb-2 borde font-weight-bold">
      <Row className="bg-naranja mx-0 mt-0">
        <Col xs={7} className="border border-dark">
          <p>
            <i className="text-danger fas fa-user"></i>{" "}
            {props.mensajes.ce_nombre}
          </p>
        </Col>
        <Col xs={5} className="border border-dark">
          <p>
            <i className="text-danger fas fa-calendar-plus"></i>{" "}
            {props.mensajes.niceDate}
          </p>
        </Col>
      </Row>
      <Row className="bg-naranja mx-0">
        <Col xs={7} className="border border-dark">
          <p>
            <i className="text-danger fas fa-envelope-open-text"></i>{" "}
            {props.mensajes.ce_email}
          </p>
        </Col>
        <Col xs={5} className="border border-dark">
          <p>
            <i className="text-danger fas fa-file-signature"></i>{" "}
            {props.mensajes.ce_empresa}
          </p>
        </Col>
      </Row>
      <Row className="bg-naranja mx-0">
        <Col xs={7} className="border border-dark">
          <p>
            <i className="text-danger fas fa-map-marker-alt"></i>{" "}
            {props.mensajes.ce_barrio}
          </p>
        </Col>
        <Col xs={5} className="border border-dark">
          <p>
            <i className="text-danger fas fa-location-arrow"></i>{" "}
            {props.mensajes.ce_direccion}
          </p>
        </Col>
      </Row>
      <div className="p-2">
        <p>{props.mensajes.ce_descripcion}</p>
      </div>
    </ListGroup.Item>
  );
};

export default MensajeContactoEmpresarial;
