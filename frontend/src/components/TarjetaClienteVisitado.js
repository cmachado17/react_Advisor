import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './styles/TarjetaClienteMasVisitado.css';

const TarjetaClienteVisitado = (props) => {
  return (
    <Col
      md={12}
      lg={6}
      xl={4}
      className="mb-4 text-center d-flex align-items-stretch justify-content-center"
    >
      <Card className="border border-dark">
        <Link to={`/detalle-cliente/${props.id}`}>
          <Card.Body>
            <img src={props.foto} className="img-fluid img-standar"></img>
            <Card.Title className="mt-3">
              <p className="h3">{props.nombre}</p>
            </Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default TarjetaClienteVisitado;
