import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ComentarioMiUsuario from "./ComentarioMiUsuario";


const MiUsuario = () => {
  return (
    <div className="container my-5 text-center">
      <h2>Mis comentarios</h2>
      <ListGroup>
              <ComentarioMiUsuario />
              <ComentarioMiUsuario />
              <ComentarioMiUsuario />
              <ComentarioMiUsuario />
      </ListGroup>
    </div>
  );
};

export default MiUsuario;
