import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import './styles/Buscador.css';

const Buscador = (props) => {

const [terminoBuscado, setTerminoBuscado] = useState('');

const handleTerminoBuscadoChange = (e) =>  {
  let busqueda = e.target.value;

  setTerminoBuscado(busqueda);

  props.onSearchPubs(busqueda);
}

  return (
    <div className="container mt-5">
       <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                           
                            <Form.Control
                                type="text"
                                placeholder="Busca tu lugar favorito"
                                value={terminoBuscado}
                                onChange={handleTerminoBuscadoChange}
                                className="formato-input"
                            />
                             <InputGroup.Prepend>
                                <InputGroup.Text className="fondo-lupita">
                          
                                <Link to="/busqueda" ><i className="fa fa-search"></i></Link>
                            
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
    </div>
  );
};

export default Buscador;
