import React, { useState, useEffect } from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import "./styles/AdminModeracion.css";
import ComentariosEnAdmin from "./ComentariosEnAdmin";
import Swal from "sweetalert2";

const AdminModeracion = () => {
  const [comentarios, setComentarios] = useState([]);

  const url = "http://localhost:5000/opiniones";
  let urlDelete = "http://localhost:5000/opiniones/miusuario/";

  const cargarComentariosEnAdmin = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setComentarios(data);
      });
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Eliminar este comentario?",
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
              cargarComentariosEnAdmin();
              Swal.fire({
                icon: "success",
                title: "Comentario eliminado correctamente",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
            }
          });
      }
    });
  };

  useEffect(cargarComentariosEnAdmin, []);

  return (
    <>
      <div className="container my-5">
        <VolverAdmin />
        <p className="h2">Moderacion</p>
        <Table
          className="bg-white text-center"
          striped
          bordered
          hover
          responsive
        >
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Usuario</th>
              <th>Comentario</th>
              <th>Moderado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {comentarios.map((comentario) => {
              return (
                <ComentariosEnAdmin
                  nombre={comentario.cliente_nombre}
                  usuario={comentario.user_nombre}
                  comentario={comentario.opi_texto}
                  comentId={comentario.opi_id}
                  texto={comentario.opi_texto}
                  foto={comentario.opi_foto}
                  onDeleteClick={handleDeleteClick}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminModeracion;
