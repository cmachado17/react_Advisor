import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const TarjetOperacion = (props) => {
  return (
    <Col md={12} lg={6} className="my-3">
      <Link to={props.route}>
        <Card className="h-100">
          <Card.Header>
            <Image src={props.source} rounded className="img-fluid"></Image>
          </Card.Header>
          <Card.Body className="text-center">
            <p className="h3">{props.tarea}</p>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default TarjetOperacion;
