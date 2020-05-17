import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ComentarioMiUsuario from "./ComentarioMiUsuario";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MiUsuario = (props) => {
  const [comentariosEnUsuario, setComentariosEnUsuario] = useState([]);

  let url = "http://localhost:5000/opiniones/user/";
  let urlDelete= 'http://localhost:5000/opiniones/miusuario/';
  let { id } = useParams();

 const cargarComentarioEnUsuario = () => {
    fetch(url + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setComentariosEnUsuario(data);
        console.log(comentariosEnUsuario);
      });
  }

  const handleDeleteClick = (idComent) => {
    Swal.fire({
      title: "Eliminar este comentario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        fetch (urlDelete+idComent,
          {
            method: 'DELETE',
            credentials: 'include'
          }).then(response => response.json())
          .then(data =>{
            if (data.status == 'ok'){
              cargarComentarioEnUsuario();
              Swal.fire({
                icon: 'success',
                title: 'Comentario eliminado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
            }
          })
      }
    });
  };

  useEffect(cargarComentarioEnUsuario, [])

  return (
    <div className="container my-5 text-center">
      <h2>Mis comentarios</h2>
      <ListGroup>
        {comentariosEnUsuario.map((comentario) => {
          return (
            <ComentarioMiUsuario
              coment={comentario}
              onDeleteClick={handleDeleteClick}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};

export default MiUsuario;
