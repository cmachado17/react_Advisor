import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Comentario = (props) => {

    return ( 

  
        <ListGroup.Item className="border border-dark mb-3">
            <Row className="p-0">
              <Col sm={12} md={8}>
                <h4 className="font-weight-bold">{props.nombreUser}</h4>
                <p>{props.texto}</p>
                <p>
                  <span className="font-weight-bold">Puntuacion:</span>{" "}
                  {props.puntaje}
                </p>
                <p>
                  <span className="font-weight-bold">Fecha de visita:</span>{" "}
                  {props.fecha}
                </p>
              </Col>
              <Col sm={12} md={4}>
                <Image
                  rounded
                  src={props.imagen}
                  className="img-fluid"
                ></Image>
              </Col>
            </Row>
          </ListGroup.Item>
        
     );
}
 
export default Comentario;