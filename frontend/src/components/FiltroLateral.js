import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FiltroLateral = () => {

const [filtroRubro, setFiltroRubro] = useState([]);
let url = 'http://localhost:5000/'

useEffect(() => {
  let rubro = 'rubros';
  fetch(url+rubro).then(response => response.json())
  .then(data => {
   setFiltroRubro(data);
  })
}, [])

const [filtroBarrio, setFiltroBarrio] = useState([]);

useEffect(() => {
  let barrio = 'barrios';
  fetch(url+barrio).then(response => response.json())
  .then(data => {
    setFiltroBarrio(data);
  })
}, [])


  return (
    <>


      <Form id="example-collapse-text">
        <Form.Group controlId="filtro1">
          <Form.Label>Rubro</Form.Label>
          <Form.Control as="select">
           {
             filtroRubro.map( rubro => {
               return(
               <option value={rubro.tags_rubro_id}>{rubro.tags_rubro_nombre}</option>
               );
             })
           }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="filtro2">
          <Form.Label>Filtro 2</Form.Label>
          <Form.Control as="select">
    {
      filtroBarrio.map(barrio => {
        return(
        <option value={barrio.tags_zona_id}>{barrio.tags_zona_barrio}</option>
        )
      })
    }
          </Form.Control>
        </Form.Group>
        <Form.Group contrlId="btnEnviar" className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
   
    </>
  );
};

export default FiltroLateral;

  //const [open, setOpen] = useState(false);
      /* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"></button>
      <Collapse in={open}>
      </Collapse>
       */
