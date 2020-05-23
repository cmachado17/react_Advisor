import React, { useState, useEffect } from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import FilaUsuario from "./FilaUsuario";
import Swal from 'sweetalert2';

const AdminUsuarios = () => {
  
  const url = "http://localhost:5000/usuarios";

  const [usuarios, setUsuarios] = useState([]);

  const cargarTablaUsuarios = () => {
    fetch(url).then(response => response.json()
    ).then(
      data =>{
        setUsuarios(data);
      }
    )
  }

  const handleClickBorrar = (userId) => {
    let urlDelete = `http://localhost:5000/usuarios/${userId}`
    Swal.fire({
      title: "Eliminar este Usuario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        fetch(urlDelete, {
          method: "DELETE",
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "ok") {
              cargarTablaUsuarios();
              Swal.fire({
                icon: "success",
                title: "Usuario eliminado correctamente",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
            }
          });
      }
    });
  }


  useEffect(cargarTablaUsuarios, []);

  return (
    <div className="container my-5">
      <VolverAdmin />
      <p className="h2">Usuarios</p>
      <Table className="bg-white text-center" striped bordered hover>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>E-mail</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {
        usuarios.map( usuario =>{
          return (
            usuario.user_id !== 1 ?  <FilaUsuario id={usuario.user_id} nombre={usuario.user_nombre}
            email={usuario.user_email} handleClickBorrar={handleClickBorrar}/> : ""
          )
        })
      }
        </tbody>
      </Table>
    </div>
  );
};

export default AdminUsuarios;
