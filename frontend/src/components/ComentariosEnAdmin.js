import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ComentariosEnAdmin = (props) => {
  return (
    <tr>
      <td>{props.nombre}</td>
      <td>{props.usuario}</td>
      <td>
        <Button variant="primary">
          <i class="fas fa-eye"></i>
        </Button>
      </td>
      <td>
        <Form.Check className="check-size" />
      </td>
      <td>
        <Button variant="danger">
          <i class="fas fa-trash-alt"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ComentariosEnAdmin;
