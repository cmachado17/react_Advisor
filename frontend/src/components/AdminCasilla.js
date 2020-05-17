import React, { useState, useEffect } from "react";
import VolverAdmin from "./VolverAdmin";
import ListGroup from "react-bootstrap/ListGroup";
import MensajeContacto from "./MensajeContacto";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminCasilla = () => {


  return (
    <div className="container my-5">
      <VolverAdmin />
      <Row>
        <Col sm={12} md={6}>
          <h2>General</h2>
          <ListGroup>
            <MensajeContacto />
          </ListGroup>
        </Col>
        <Col sm={12} md={6}>
          <h2>Empresarial</h2>
          <ListGroup>
            <MensajeContacto  />
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCasilla;
