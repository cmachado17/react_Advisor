import React,{useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import TarjetOperacion from "./TarjetaOperacion";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

const Admin = (props) => {


  return (
    <div className="container py-3">
      {props.user  && props.user.id === 1? (
  
     <>
     <Row>
       <TarjetOperacion
         source="http://localhost:5000/images/clientes.svg"
         tarea="Clientes"
         route="/admin/clientes"
       />
       <TarjetOperacion
         source="http://localhost:5000/images/usuarios.svg"
         tarea="Usuarios"
         route="/admin/usuarios"
       />
     </Row>
     <Row>
       <TarjetOperacion
         source="http://localhost:5000/images/casilla.svg"
         tarea="Casilla de contacto"
         route="/admin/casilla"
       />
       <TarjetOperacion
         source="http://localhost:5000/images/comentarios.svg"
         tarea="Moderacion"
         route="/admin/moderacion"
       />
     </Row>
   </>
      ) : (
        <p>NO TIENE PERMISO</p>
      )}
    </div>
  );
};

export default Admin;
