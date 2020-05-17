import React, { useState, useEffect } from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import ItemAdminClientes from "./ItemAdminClientes";
import ModalCliente from './ModalCliente';

const AdminClientes = () => {
  const [clientes, setclientes] = useState([]);
  
  const [mostrarModalCliente, setMostrarModalCliente] = useState(false);
    
  const handleMostrarModalCliente = () => {
      setMostrarModalCliente(true);
    };

    const handleOcultarModalCliente = () => {
      setMostrarModalCliente(false);
    };

  const url = "http://localhost:5000/clientes";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setclientes(data);
      });
  }, []);

  return (
    <div className="container my-5">
      <VolverAdmin />
      <Row>
        <Col >
          <p className="h2">Clientes</p>
          <Button size="lg" block onClick={handleMostrarModalCliente}>Nuevo</Button>
        </Col>
    
      </Row>
      <Table className="bg-white text-center" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Barrio</th>
            <th>Puntaje</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => {
            return (
              <ItemAdminClientes
                id={cliente.clientes_id}
                nombre={cliente.cliente_nombre}
                barrio={cliente.tags_zona_barrio}
                puntaje={cliente.cliente_puntuacion}
              />
            );
          })}
        </tbody>
      </Table>
      <ModalCliente show={mostrarModalCliente} handleOcultar={handleOcultarModalCliente}/>
    </div>
  );
};

export default AdminClientes;
