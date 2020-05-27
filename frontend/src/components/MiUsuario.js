import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ComentarioMiUsuario from "./ComentarioMiUsuario";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Image from 'react-bootstrap/Image';

const MiUsuario = (props) => {
  const [comentariosEnUsuario, setComentariosEnUsuario] = useState([]);

  let url = "http://localhost:5000/opiniones/user/";
  let urlDelete = "http://localhost:5000/opiniones/miusuario/";
  let { id } = useParams();

  const cargarComentarioEnUsuario = () => {
    fetch(url + id)
      .then((response) => response.json())
      .then((data) => {
        setComentariosEnUsuario(data);
      });
  };

  const handleDeleteClick = (idComent) => {
    Swal.fire({
      title: "Eliminar este comentario?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        fetch(urlDelete + idComent, {
          method: "DELETE",
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "ok") {
              cargarComentarioEnUsuario();
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

  useEffect(cargarComentarioEnUsuario, []);

  return (
    <div className="container my-5 text-center">
      <h2>Mis comentarios</h2>

      {
        comentariosEnUsuario.length > 0 ? 
        <ListGroup>
        {comentariosEnUsuario.map((comentario) => {
          return (
            <ComentarioMiUsuario
              coment={comentario}
              onDeleteClick={handleDeleteClick}
            />
          );
        })}
      </ListGroup> : 
      <div className="bg-white border border-dark mt-3 py-2">
        <p className="h3">Parece que no hay nada por aquí..</p>
        <p className="h3">Busca tu lugar favorito y contanos tu experiencia</p>
        <Image src="http://localhost:5000/images/no-comentarios.svg" rounded className="img-fluid"></Image>
        </div>
      }

    </div>
  );
};

export default MiUsuario;
