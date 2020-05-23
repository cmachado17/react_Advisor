import React from "react";
import Button from "react-bootstrap/Button";

const FilaUsuario = (props) => {

const onDeleteClick = e => {
  props.handleClickBorrar(props.id)
}
  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.email}</td>
      <td>
        <Button variant="danger" onClick={onDeleteClick}>
          <i class="fas fa-trash-alt" ></i>
        </Button>
      </td>
    </tr>
  );
};

export default FilaUsuario;
