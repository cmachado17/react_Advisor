import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2';

const FormularioNuevoComentario = (props) => {

  const [reseniaComentario, setReseniaComentario] = useState("");
  const [puntajeComentario, setPuntajeComentario] = useState("");
  const [fechaComentario, setFechaComentario] = useState("");
  const [fotoComentario, setFotoComentario] = useState("");
  const [previewProductImage, setPreviewProductImage] = useState("");


  //Tomar valores del form

  const handleResenia = (e) => {
    setReseniaComentario(e.target.value);
  };

  const handlePuntaje = (e) => {
    setPuntajeComentario(e.target.value);
  };

  const handleFecha = (e) => {
    setFechaComentario(e.target.value);
  };

  const handleFotoComentario = (e) => {
    setFotoComentario(e.target.files[0]);
    setPreviewProductImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    const formData = new FormData();

    formData.append("userNameComentario", props.user.id);
    formData.append("reseniaComentario", reseniaComentario);
    formData.append("puntajeComentario", puntajeComentario);
    formData.append("fechaComentario", fechaComentario);
    formData.append("fotoComentario", fotoComentario);
    formData.append("idDelCliente", props.idCliente);

    let url = "http://localhost:5000/opiniones";
    let method = "POST";
    // if (props.idProducto) {
    //   url += "/" + props.idProducto;
    //   method = "PUT";
    // }
    fetch(url, {
      method: method,
      body: formData,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {

        if (data.status === 'ok'){
  
        props.onComentSaved();
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data.message, 
          })
        }
      })
      .catch((error) => {
        console.log("Error");

        //Swal.fire({
         // text:
         // icon:
        //})
      });
  };

  // useEffect(
  //   () => {
  //     //tengo que enviarle el id desde el comentario
  //     if(props.idProducto){

  // fetch(url + props.idProducto)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setProductName(data.nombre);
  //     setProductPrice(data.precio);
  //     setProductImage("");
  //     setPreviewProductImage(data.imagen);
  //   });

  //     }else{
  //poner todas en blanco
  //setProductName('');
  //setProductImage('');
  //setProductprice('');
  //     }
  //   }, [props.idProducto]
  // )

  return (
    <Modal show={props.show} onHide={props.handleOcultar}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className="h3">Nuevo comentario</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Reseña</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={reseniaComentario}
              onChange={handleResenia}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Puntaje</Form.Label>
            <Form.Control
              type="text"
              value={puntajeComentario}
              onChange={handlePuntaje}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de visita</Form.Label>
            <Form.Control
              type="date"
              value={fechaComentario}
              onChange={handleFecha}
            />
          </Form.Group>
          {/* Prevista de la imagen */}
          <Form.Group className="d-flex justify-content-center">
            {previewProductImage && (
              <img style={{ height: "25vh" }} src={previewProductImage} />
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Foto</Form.Label>
            <Form.Control type="file" onChange={handleFotoComentario} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleSave}>
          Enviar
        </Button>
        <Button variant="secondary" onClick={props.handleOcultar}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormularioNuevoComentario;
