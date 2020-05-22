import React, { useState, useEffect } from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ItemAdminClientes from "./ItemAdminClientes";
import ModalCliente from "./ModalCliente";
import Swal from "sweetalert2";

const AdminClientes = () => {
  const [clientes, setclientes] = useState([]);

  const [mostrarModalCliente, setMostrarModalCliente] = useState(false);

  const [selectedCliente, setSelectedCliente] = useState(null);

  const handleMostrarModalCliente = () => {
    setSelectedCliente(null);
    setMostrarModalCliente(true);
  };

  const handleOcultarModalCliente = () => {
    setSelectedCliente(null);
    setMostrarModalCliente(false);
  };

  const handleComentSaved = (message) => {
    setMostrarModalCliente(false);
    cargarTablaClientes();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Cliente agregado",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const url = "http://localhost:5000/clientes";
  let urlDelete = "http://localhost:5000/clientes/";

  const cargarTablaClientes = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setclientes(data);
      });
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Eliminar este cliente?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        fetch(urlDelete + id, {
          method: "DELETE",
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "ok") {
              cargarTablaClientes();
              Swal.fire({
                icon: "success",
                title: "Cliente eliminado correctamente",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
            }
          });
      }
    });
  };

  useEffect(cargarTablaClientes, []);

  const handleEditClick = (idCliente) => {
    setSelectedCliente(idCliente);
    setMostrarModalCliente(true);
  };

  return (
    <div className="container my-5">
      <VolverAdmin />
      <Row>
        <Col>
          <p className="h2">Clientes</p>
          <Button size="lg" block onClick={handleMostrarModalCliente}>
            Nuevo
          </Button>
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
                onDeleteClick={handleDeleteClick}
                onEditClick={handleEditClick}
              />
            );
          })}
        </tbody>
      </Table>
      <ModalCliente
        show={mostrarModalCliente}
        handleOcultar={handleOcultarModalCliente}
        onSave={handleComentSaved}
        idCliente={selectedCliente}
      />
    </div>
  );
};

export default AdminClientes;
