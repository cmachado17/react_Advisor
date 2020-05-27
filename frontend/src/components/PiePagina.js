import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/PiePagina.css";
import { Link } from "react-router-dom";

const PiePagina = () => {
  return (
    <footer className="bg-red font-weight-bold footer-abajo">
      <div className="container">
        <Row className="h4 text-center">
          <Col md={12} lg={4}  className="p-3">
            <Link to="/about-us">Sobre nosotros <i class="fas fa-users"></i></Link>
          </Col>
          <Col md={12} lg={4} className="p-3">
            <Link to="/suma-tu-empresa">Suma tu empresa <i class="fas fa-user-plus"></i></Link>
          </Col>
          <Col md={12} lg={4} className="p-3">
            <p>
              Tenes dudas?{" "}
              <a href="#">
               <Link to ="/contactanos">Contactanos <i class="fas fa-envelope-open-text"></i></Link>
              </a>
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <p>
            Desarrollado por{" "}
            <a href="https://github.com/cmachado17" target="_blank">
              Cmachado17
            </a>
          </p>
        </Row>
      </div>
    </footer>
  );
};

export default PiePagina;
