import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

const BarraFiltros = () => {
  return (
    <Row className="bg-success h2 m-0">
      <Col xs={6} md={3} className="d-flex justify-content-center px-0 py-3">
      <Link to="/busqueda"><Button variant="primary"><i className="fa fa-hamburger"></i></Button></Link>
      </Col> 
      <Col xs={6} md={3} className="d-flex justify-content-center px-0 py-3">
       <Link to="/busqueda"><Button variant="primary"><i className="fa fa-beer"></i></Button></Link>
      </Col> 
      <Col xs={6} md={3} className="d-flex justify-content-center px-0 py-3">
       <Link to="/busqueda"><Button variant="primary"><i className="fa fa-store"></i></Button></Link>
      </Col> 
      <Col xs={6} md={3} className="d-flex justify-content-center px-0 py-3">
       <Link to="/busqueda"><Button variant="primary"><i className="fa fa-ice-cream"></i></Button></Link>
      </Col> 
    </Row>
  );
};

export default BarraFiltros;
