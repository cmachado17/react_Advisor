import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./styles/ModalComentarioAdmin.css";

const ModalComentarioAdmin = (props) => {


  return (
    <Modal show={props.show} onHide={props.handleOcultarModal}>
      <Modal.Header closeButton>Comentario</Modal.Header>
      <Modal.Body className="modal-body">
        <Row>
          <Col sm={12}>
            <p>{props.texto}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Image
              src={props.foto}
              rounded
              className="img-fluid"
            ></Image>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleOcultarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComentarioAdmin;
