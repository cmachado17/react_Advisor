import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Comentario from './Comentario';

const CajaComentariosClientes = (props) => {
  return (
    <ListGroup className="container mb-5 p-0">
      {props.comentarios.map((coment) => {
        return (
          <Comentario nombreUser={coment.user_nombre} texto={coment.opi_texto} puntaje={coment.opi_puntaje_id} fecha={coment.niceDate} imagen={coment.opi_foto} />
        );
      })}
    </ListGroup>
  );
};
export default CajaComentariosClientes;
