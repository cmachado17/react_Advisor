import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MensajeContacto = () => {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={6}>
          <p>Nombre</p>
        </Col>
        <Col xs={6}>
          <p>Fecha de mensaje</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <p>email@email.com</p>
        </Col>
        <Col xs={6}>
          <p>4455-9988</p>
        </Col>
        </Row>
     
      <p>
        In id elit odio. Praesent fermentum tincidunt libero, quis euismod quam
        dictum quis. Duis posuere nunc ante, et facilisis libero finibus eget.
        Nulla vehicula porttitor sapien, varius tincidunt ex convallis in. Sed
        ipsum lorem, aliquam vel nisi aliquam, consequat dictum lorem. Curabitur
        id lectus a leo iaculis tristique. Nunc eget sagittis lacus. In vel orci
        vitae est imperdiet fermentum. Aliquam luctus justo metus, at tincidunt
        quam aliquet et. Cras pharetra sollicitudin felis non posuere. Duis
        euismod purus sit amet egestas aliquet.
      </p>
    </ListGroup.Item>
  );
};

export default MensajeContacto;
