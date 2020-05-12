import React,{useState, useEffect} from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import ItemAdminClientes from "./ItemAdminClientes";

const AdminClientes = () => {

  const [clientes, setclientes] = useState([]);
  const url = 'http://localhost:5000/clientes';

  useEffect(() => {
      fetch(url).then(response => response.json())
      .then(data => {
         setclientes(data);
      })
  }, []);


  return (
    <div className="container my-5">
      <VolverAdmin />
      <p className="h2">Clientes</p>
      <Table className="bg-white text-center" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Barrio</th>
            <th>Puntaje</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map(cliente => {
              return(
                <ItemAdminClientes id={cliente.clientes_id} nombre={cliente.cliente_nombre} barrio={cliente.tags_zona_barrio} puntaje={cliente.cliente_puntuacion} />
              );
            })
          }
         
        </tbody>
      </Table>
    </div>
  );
};

export default AdminClientes;
