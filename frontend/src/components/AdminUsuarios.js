import React, { useState, useEffect } from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import FilaUsuario from "./FilaUsuario";

const AdminUsuarios = () => {
  
  const url = "http://localhost:5000/usuarios";

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch(url).then(response => response.json()
    ).then(
      data =>{
        setUsuarios(data);
      }
    )
  }, []);

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
            usuario.user_id !== 1 ?  <FilaUsuario nombre={usuario.user_nombre}
            email={usuario.user_email}/> : ""
          )
        })
      }
        </tbody>
      </Table>
    </div>
  );
};

export default AdminUsuarios;
