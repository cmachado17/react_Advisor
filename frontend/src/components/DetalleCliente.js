import React, { useState, useEffect } from "react";
import DescripcionCliente from "./DescripcionCliente";
import CajaComentariosClientes from "./CajaComentariosClientes";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

const DetalleCliente = (props) => {
  let url = "http://localhost:5000/clientes/";

  let { id } = useParams();
  let [cliente, setCliente] = useState(null);
  let [comentario, setComentarios] = useState([]);

  useEffect(() => {
    fetch(url + id)
      .then((response) => response.json())
      .then((data) => {
        setCliente(data);
      });
  }, []);

  const cargarCajaComentarios = () => {
    fetch("http://localhost:5000/opiniones/" + id)
      .then((response) => response.json())
      .then((data) => {
        setComentarios(data);
      });
  };

  useEffect(cargarCajaComentarios, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/opiniones/' + id)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setComentarios(data);
  //     });
  // }, []);

  return (
    cliente &&
    comentario && (
      <div className="container">
        <DescripcionCliente
          cargarCajaComentarios={cargarCajaComentarios}
          user={props.user}
          idCliente={cliente[0].clientes_id}
          nombre={cliente[0].cliente_nombre}
          logo={cliente[0].clientes_logo}
          descripcion={cliente[0].clientes_descripcion}
          puntaje={cliente[0].cliente_puntuacion}
          website={cliente[0].cliente_website}
          ubicacion={cliente[0].cliente_ubicacion}
        />
        {comentario.length > 0 ? (
          <CajaComentariosClientes comentarios={comentario} />
        ) : (
          <div className="p-3 bg-white border border-dark text-center mb-5">
            <p className="h3">Parece que aún no hay nada por aqui...</p>
            <p className="h3">¡Sé el primero en comentar!</p>
            <Image
              src="http://localhost:5000/images/no-comentarios.svg"
              rounded
              className="img-fluid"
            ></Image>
          </div>
        )}
      </div>
    )
  );
};
export default DetalleCliente;
