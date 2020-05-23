import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./styles/FormulariosContacto.css";
import Swal from "sweetalert2";

const FormularioEmpresa = () => {
  //estados de datos a enviar

  const [nombreContactoEmpresarial, setNombreContactoEmpresarial] = useState(
    ""
  );
  const [emailContactoEmpresarial, setEmailContactoEmpresarial] = useState("");
  const [
    telefonoContactoEmpresarial,
    setTelefonoContactoEmpresarial,
  ] = useState("");
  const [empresaContactoEmpresarial, setEmpresaContactoEmpresarial] = useState(
    ""
  );
  const [barrioContactoEmpresarial, setBarrioContactoEmpresarial] = useState(
    ""
  );
  const [
    direccionContactoEmpresarial,
    setDireccionContactoEmpresarial,
  ] = useState("");
  const [
    descripcionContactoEmpresarial,
    setDescripcionContactoEmpresarial,
  ] = useState("");

  //Tomar valores del formulario

  const handleNombreContactoEmpresarial = (e) => {
    setNombreContactoEmpresarial(e.target.value);
  };
  const handleEmailContactoEmpresarial = (e) => {
    setEmailContactoEmpresarial(e.target.value);
  };
  const handleTelefonoContactoEmpresarial = (e) => {
    setTelefonoContactoEmpresarial(e.target.value);
  };
  const handleEmpresaContactoEmpresarial = (e) => {
    setEmpresaContactoEmpresarial(e.target.value);
  };
  const handleBarrioContactoEmpresaria = (e) => {
    setBarrioContactoEmpresarial(e.target.value);
  };
  const handleDireccionContactoEmpresarial = (e) => {
    setDireccionContactoEmpresarial(e.target.value);
  };
  const handleDescripcionContactoEmpresarial = (e) => {
    setDescripcionContactoEmpresarial(e.target.value);
  };

  //Evento al enviar el formulario
  const handleSave = () => {

    //Date del envio del contacto
    let fecha = new Date().toISOString().slice(0, 19).replace("T", " ");

   //Creando objeto para pasar al back y dandole valores
   const formData = new FormData();

formData.append("nombre", nombreContactoEmpresarial)
formData.append("email", emailContactoEmpresarial)
formData.append("telefono", telefonoContactoEmpresarial)
formData.append("empresa", empresaContactoEmpresarial)
formData.append("barrio", barrioContactoEmpresarial)
formData.append("direccion", direccionContactoEmpresarial)
formData.append("descripcion", descripcionContactoEmpresarial)
formData.append("fecha", fecha)

let url="http://localhost:5000/contacto/empresarial"

//Insertar en la BD

fetch(url,{
  method: 'POST',
  body: formData,
  credentials: 'include'
}).then(response => response.json())
.then(data => {
  if (data.status === 'ok'){
    Swal.fire({
      icon: "success",
      text: data.message,
    });
    //resetear formulario
    setNombreContactoEmpresarial("");
    setEmailContactoEmpresarial("");
    setTelefonoContactoEmpresarial("");
    setEmpresaContactoEmpresarial("");
    setBarrioContactoEmpresarial("");
    setDireccionContactoEmpresarial("");
    setDescripcionContactoEmpresarial("");
  }else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: data.message,
    });
  }
})

  };

  return (
    <Card className="my-3 text-left">
      <Card.Body>
        <Card.Text>
          <Form>
            <Form.Group>
              <Form.Label>Nombre de contacto</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre de contacto"
                value={nombreContactoEmpresarial}
                onChange={handleNombreContactoEmpresarial}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email de contacto</Form.Label>
              <Form.Control required 
              type="email" 
              placeholder="Email"
              value={emailContactoEmpresarial}
              onChange={handleEmailContactoEmpresarial}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Telefono de contacto</Form.Label>
              <Form.Control required 
              type="text" 
              placeholder="Telefono de contacto"
              value={telefonoContactoEmpresarial}
              onChange={handleTelefonoContactoEmpresarial}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre de la empresa</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre de la empresa"
                value={empresaContactoEmpresarial}
                onChange={handleEmpresaContactoEmpresarial}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Barrio</Form.Label>
              <Form.Control 
              required
              type="text" 
              placeholder="Barrio"
              value={barrioContactoEmpresarial}
              onChange={handleBarrioContactoEmpresaria}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Dirección</Form.Label>
              <Form.Control 
              required
              type="text"
               placeholder="Dirección"
               value={direccionContactoEmpresarial}
               onChange={handleDireccionContactoEmpresarial}
               />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción de su empresa</Form.Label>
              <Form.Control required 
              as="textarea" 
              rows="5"
              value={descripcionContactoEmpresarial}
              onChange={handleDescripcionContactoEmpresarial}
              />
            </Form.Group>
          </Form>
          <div className="text-right">
            <Button className="bg-orange" onClick={handleSave}>
              Enviar
            </Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FormularioEmpresa;
