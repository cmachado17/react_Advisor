import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

const ModalCliente = (props) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [logo, setLogo] = useState("");
  const [zona, setZona] = useState("");
  const [rubro, setRubro] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sitioWeb, setSitioWeb] = useState("");
  const [ubicacionMaps, setUbicacionMaps] = useState("");
  const [previewLogo, setPreviewLogo] = useState("");

  //tomar valores del form

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleLogo = (e) => {
    setLogo(e.target.files[0]);
    setPreviewLogo(URL.createObjectURL(e.target.files[0]));
  };

  const handleZona = (e) => {
    setZona(e.target.value);
  };

  const handleRubro = (e) => {
    setRubro(e.target.value);
  };

  const handlePuntuacion = (e) => {
    setPuntuacion(e.target.value);
  };

  const handleDireccion = (e) => {
    setDireccion(e.target.value);
  };
  const handleSitioWeb = (e) => {
    setSitioWeb(e.target.value);
  };
  const handleUbicacionMaps = (e) => {
    setUbicacionMaps(e.target.value);
  };

  const handleSave = () => {
    const formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("logo", logo);
    formData.append("zona", zona);
    formData.append("rubro", rubro);
    formData.append("puntuacion", puntuacion);
    formData.append("direccion", direccion);
    formData.append("sitioWeb", sitioWeb);
    formData.append("ubicacionMaps", ubicacionMaps);

    let url = "http://localhost:5000/clientes";
    let method = "POST";

    if (props.idCliente) {
      url += `/${props.idCliente}`;
      method = "PUT";
    }

    fetch(url, {
      method: method,
      body: formData,
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          props.onSave();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }
      });
  };

  useEffect(() => {
    if (props.idCliente) {
      fetch(`http://localhost:5000/clientes/${props.idCliente}`)
        .then((response) => response.json())
        .then((data) => {
          setNombre(data[0].cliente_nombre);
          setDescripcion(data[0].clientes_descripcion);
          setLogo("");
          setPreviewLogo(data[0].clientes_logo);
          setZona(data[0].clientes_tag_zona_id);
          setRubro(data[0].clientes_tag_rubro);
          setPuntuacion(data[0].cliente_puntuacion);
          setDireccion(data[0].cliente_direccion);
          setSitioWeb(data[0].cliente_website);
          setUbicacionMaps(data[0].cliente_ubicacion);
        });
    } else {
      setNombre("");
      setDescripcion("");
      setLogo("");
      setPreviewLogo("");
      setZona("");
      setRubro("");
      setPuntuacion("");
      setDireccion("");
      setSitioWeb("");
      setUbicacionMaps("");
    }
  }, [props.idCliente]);

  const [selectRubro, setSelectRubro] = useState([]);
  const [selectBarrio, setSelectBarrio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rubros")
      .then((response) => response.json())
      .then((data) => {
        setSelectRubro(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/barrios")
      .then((response) => response.json())
      .then((data) => {
        setSelectBarrio(data);
      });
  }, []);

  return (
    <Modal show={props.show} onHide={props.handleOcultar}>
      <Modal.Header closeButton>Nuevo - editando cliente</Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre del cliente</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cliente"
              value={nombre}
              onChange={handleNombre}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Descripción"
              value={descripcion}
              onChange={handleDescripcion}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Logo</Form.Label>
            <Form.Control type="file" onChange={handleLogo}></Form.Control>
          </Form.Group>
          {/* Prevista de la imagen */}
          <Form.Group className="d-flex justify-content-center">
            {previewLogo && (
              <img style={{ height: "25vh" }} src={previewLogo} />
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Zona</Form.Label>
            <Form.Control as="select" value={zona} onChange={handleZona}>
              {selectBarrio.map((barrio) => {
                return (
                  <option value={barrio.tags_zona_id}>
                    {barrio.tags_zona_barrio}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rubro</Form.Label>
            <Form.Control as="select" value={rubro} onChange={handleRubro}>
              {selectRubro.map((rubro) => {
                return (
                  <option value={rubro.tags_rubro_id}>
                    {rubro.tags_rubro_nombre}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Puntuacion</Form.Label>
            <Form.Control
              type="text"
              placeholder="Puntuacion"
              value={puntuacion}
              onChange={handlePuntuacion}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={handleDireccion}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sitio web</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sitio web"
              value={sitioWeb}
              onChange={handleSitioWeb}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ubicacion google maps</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ubicacion"
              value={ubicacionMaps}
              onChange={handleUbicacionMaps}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Enviar
        </Button>
        <Button variant="secondary" onClick={props.handleOcultar}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCliente;
