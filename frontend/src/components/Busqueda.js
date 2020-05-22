import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemBusqueda from "./ItemBusqueda";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/Busqueda.css";

const Busqueda = (props) => {
  let url = "http://localhost:5000/clientes";

  const [clientes, setClientes] = useState([]);

  const cargarListadoClientes = () => {
    if (props.searchPub) {
      url += "/search/buscador/" + props.searchPub;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setClientes(data);
        });
    }
  };

  useEffect(cargarListadoClientes, [props.searchPub]);

  return (
    <div className="container my-5">
      <Row>
        <Col sm={12} className="distancia-mobile">
          <ListGroup>
            {!props.searchPub == "" && clientes.length > 0 ? (
              clientes.map((cliente) => {
                return (
                  <ItemBusqueda
                    id={cliente.clientes_id}
                    nombreLugar={cliente.cliente_nombre}
                    descripcion={cliente.clientes_descripcion}
                    foto={cliente.clientes_logo}
                  />
                );
              })
            ) : (
              <div className="bg-white border border-dark text-center p-5">
                <p className="h2 mt-3">
                  Aun no hay coincidencias en tu busqueda
                </p>
                <p className="h3 mt-3">Sigue buscando</p>
                <img
                  src="http://localhost:5000/images/search.svg"
                  className="mt-3 img-fluid"
                ></img>
              </div>
            )}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Busqueda;
