import React, { useState, useEffect } from "react";
import DescripcionCliente from "./DescripcionCliente";
import CajaComentariosClientes from "./CajaComentariosClientes";
import { useParams } from "react-router-dom";

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
    fetch('http://localhost:5000/opiniones/' + id)
    .then((response) => response.json())
    .then((data) => {
      setComentarios(data);
    });
  }

useEffect( cargarCajaComentarios, []);

  // useEffect(() => {
  //   fetch('http://localhost:5000/opiniones/' + id)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setComentarios(data);
  //     });
  // }, []);

  return (

    cliente &&
    comentario &&
    (
      <div className="container">
      <DescripcionCliente cargarCajaComentarios={cargarCajaComentarios} user={props.user} idCliente={cliente[0].clientes_id} nombre={cliente[0].cliente_nombre} logo={cliente[0].clientes_logo} descripcion={cliente[0].clientes_descripcion} puntaje={cliente[0].cliente_puntuacion} website={cliente[0].cliente_website} ubicacion={cliente[0].cliente_ubicacion}/>
      <CajaComentariosClientes comentarios={comentario}/> 
      </div>
    )
  );
};
export default DetalleCliente;
