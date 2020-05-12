import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemAdminClientes = (props) => {
  return (
    <tr>
      <td>
        <Link to={`/detalle-cliente/${props.id}`}>{props.nombre}</Link>
      </td>
      <td>{props.barrio}</td>
      <td>{props.puntaje}</td>
      <td>
        <Button variant="success">
          <i class="fas fa-edit"></i>
        </Button>
      </td>
      <td>
        {" "}
        <Button variant="danger">
          <i class="fas fa-trash-alt"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemAdminClientes;
