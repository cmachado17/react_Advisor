import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import './styles/Comentario.css';

const Comentario = (props) => {

    return ( 

  
        <ListGroup.Item className="border border-dark mb-3">
            <Row className="p-0">
              <Col sm={12} md={8} className="mb-2 p-2 etiqueta-comentario">
                <h4 className="px-2 font-weight-bold">{props.nombreUser}</h4>
                <p className="px-2">{props.texto}</p>
                <p>
                  <span className="px-2 font-weight-bold">Puntuacion:</span>{" "}
                  {props.puntaje}
                </p>
                <p>
                  <span className="px-2 font-weight-bold">Fecha de visita:</span>{" "}
                  {props.fecha}
                </p>
              </Col>
              <Col sm={12} md={4} className="text-center">
                <Image
                  rounded
                  src={props.imagen}
                  className="img-fluid altura-imagen"
                ></Image>
              </Col>
            </Row>
          </ListGroup.Item>
        
     );
}
 
export default Comentario;