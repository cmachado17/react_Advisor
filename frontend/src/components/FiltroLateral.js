import React, {useState, useEffect, useRef} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './styles/FiltroLateral.css';

const FiltroLateral = (props) => {

const [filtroRubro, setFiltroRubro] = useState([]);
const [filtroBarrio, setFiltroBarrio] = useState([]);

const rubroRef = useRef('null');
const zonaRef = useRef('null');

let url = 'http://localhost:5000/'
useEffect(() => {
  let rubro = 'rubros';
  fetch(url+rubro).then(response => response.json())
  .then(data => {
   setFiltroRubro(data);
   
  })
}, [])

useEffect(() => {
  let barrio = 'barrios';
  fetch(url+barrio).then(response => response.json())
  .then(data => {
    setFiltroBarrio(data);
  })
}, [])

const handleFilterChange = () => {
  //alert(rubroRef.current.value + '' + zonaRef.current.value)
  props.onFilterChange(
    {
      rubro: rubroRef.current.value,
      zona: zonaRef.current.value
    }
  )
}

  return (
    <>


      <Form id="example-collapse-text">
        <Form.Group controlId="filtro1">
          <Form.Label>Rubro</Form.Label>
          <Form.Control as="select" ref={rubroRef}>
          {/* onChange={handleFilterChange} ref={rubroRef} */}
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
          <Form.Control as="select" ref={zonaRef}>
          {/* onChange={handleFilterChange} ref={zonaRef} */}
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
          <Button className='bg-orange' onClick={handleFilterChange}>
           
            Submit
          </Button>
        </Form.Group>
      </Form>
   
    </>
  );
};

export default FiltroLateral;
