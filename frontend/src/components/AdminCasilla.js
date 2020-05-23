import React, {useState, useEffect} from "react";
import VolverAdmin from "./VolverAdmin";
import ListGroup from "react-bootstrap/ListGroup";
import MensajeContacto from "./MensajeContacto";
import MensajeContactoEmpresarial from './MensajeContactoEmpresarial';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminCasilla = () => {

const [contactoGeneral, setContactoGeneral] = useState([]);
const [contactoEmpresarial, setContactoEmpresarial] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/contacto/general')
  .then(response => response.json())
  .then(data => {
    setContactoGeneral(data);
  })
}, []);

useEffect(() => {
  fetch('http://localhost:5000/contacto/empresarial')
  .then(response => response.json())
  .then(data => {
    setContactoEmpresarial(data);
  })
}, []);

  return (
    <div className="container my-5">
      <VolverAdmin />
      <Row>
        <Col sm={12} md={6}>
          <h2>General</h2>
          <ListGroup>
            {
              contactoGeneral.map(mensaje => {
                return(
                  <MensajeContacto mensajes={mensaje}/>
                )
              })
            }
           
          </ListGroup>
        </Col>
        <Col sm={12} md={6}>
          <h2>Empresarial</h2>
          <ListGroup>
            {
              contactoEmpresarial.map(mensajeEmpresarial => {
                return(
                  <MensajeContactoEmpresarial mensajes={mensajeEmpresarial} />
                )
              })
            }
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCasilla;
