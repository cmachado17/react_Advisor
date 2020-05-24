import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalComentarioAdmin from "./ModalComentarioAdmin";


const ComentariosEnAdmin = (props) => {

const[mostrarModal, setMostrarModal] = useState(false);

const handleMostrarCLiente = () =>{
  setMostrarModal(true);
}

const handleOcultarModal = () => {
  setMostrarModal(false);
}

const handleDeleteClick = () => {
  props.onDeleteClick(props.comentId)
}

  return (
    <>
      <tr>
        <td>{props.nombre}</td>
        <td>{props.usuario}</td>
        <td>
          <Button variant="primary" onClick={handleMostrarCLiente}>
            <i className="fas fa-eye"></i>
          </Button>
        </td>
        <td>
          <Form.Check className="check-size" />
        </td>
        <td>
          <Button variant="danger" onClick={handleDeleteClick}>
            <i className="fas fa-trash-alt"></i>
          </Button>
        </td>
      </tr>
      <ModalComentarioAdmin show={mostrarModal} handleOcultarModal={handleOcultarModal} texto={props.texto} foto={props.foto}/>
    </>
  );
};

export default ComentariosEnAdmin;
