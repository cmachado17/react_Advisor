import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./styles/ItemBusqueda.css";

const ItemBusqueda = (props) => {
  console.log(props)
  return (
    <>
      <ListGroup.Item className="mb-3 border border-dark">
        <Row>
          <Col sm={12} md={4}>
            <Link to={`/detalle-cliente/${props.id}`}>
              <Image src={props.foto} rounded className="img-fluid"></Image>
            </Link>
          </Col>
          <Col sm={12} md={8}>
            <Link to={`/detalle-cliente/${props.id}`}>
              <h2>{props.nombreLugar}</h2>
            </Link>
            <p>{props.descripcion}</p>
            <p><span className="px-3 etiqueta"><i className="fas fa-map-marker-alt"></i> {props.barrio}</span></p>
            <p><span className="px-3 etiqueta"><i className="fas fa-check-circle"></i> {props.rubro}</span></p>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default ItemBusqueda;
