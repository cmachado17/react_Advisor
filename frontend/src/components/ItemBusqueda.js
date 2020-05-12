import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const ItemBusqueda = (props) => {
  return (
    <>
      <ListGroup.Item className="mb-3">
        <Row>
          <Col sm={12} md={4}>
            <Link to={`/detalle-cliente/${props.id}`} >
              <Image src={props.foto} rounded className="img-fluid"></Image>
            </Link>
          </Col>
          <Col sm={12} md={8}>
            <Link to={`/detalle-cliente/${props.id}`}>
              <h2>{props.nombreLugar}</h2>
            </Link>
            <p>
          {props.descripcion}
            </p>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default ItemBusqueda;
