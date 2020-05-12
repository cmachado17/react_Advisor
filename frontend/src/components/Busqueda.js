import React, {useState, useEffect} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemBusqueda from "./ItemBusqueda";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiltroLateral from "./FiltroLateral";
import './styles/Busqueda.css';

const Busqueda = () => {
  const url = "http://localhost:5000/clientes";

  const [clientes, setClientes] = useState([])

  useEffect(() =>{
    fetch(url).then(response => response.json())
    .then(data=>{
      setClientes(data);
    })
  }, [])

  return (
    <div className="container my-5">
      <Row>
        <Col sm={12} md={3} className="bg-success">
         <FiltroLateral />
        </Col>
        <Col sm={12} md={9} className="distancia-mobile">
          <ListGroup>
      {
        clientes.map( cliente => {
          return(<ItemBusqueda id={cliente.clientes_id} nombreLugar={cliente.cliente_nombre}
          descripcion={cliente.clientes_descripcion} foto={cliente.clientes_logo}/>)
        })
      }
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Busqueda;
