import React from "react";
import Button from "react-bootstrap/Button";

const FilaUsuario = (props) => {
  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.email}</td>
      <td>
        <Button variant="danger">
          <i class="fas fa-trash-alt"></i>
        </Button>
      </td>
    </tr>
  );
};

export default FilaUsuario;
