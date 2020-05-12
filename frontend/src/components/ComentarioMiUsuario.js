import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/ComentarioMiUsuario.css';

const ComentarioMiUsuario = () =>{
    return(
        <ListGroup.Item>
        <Row>
            <Col xs={12} md={8}>
                <h3>Titule</h3>
                <p>Fecha: 88//77/1945</p>
                <Button variant="success">Ver</Button>
                <Button variant="danger">Eliminar</Button>
            </Col>
            <Col xs={12} md={4}>
                <Image src="http://localhost:5000/images/barbacoa.jpg" rounded className="img-fluid altura-foto"></Image>
            </Col>
        </Row>
        </ListGroup.Item>
    );
}

export default ComentarioMiUsuario;