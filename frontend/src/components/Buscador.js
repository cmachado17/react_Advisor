import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from "react-bootstrap/FormControl";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
                                placeholder="Search here.."
                                value={terminoBuscado}
                                onChange={handleTerminoBuscadoChange}
                            />
                             <InputGroup.Prepend>
                                <InputGroup.Text>
                          
                                <Link to="/busqueda"><i className="fa fa-search"></i></Link>
                            
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
    </div>
  );
};

export default Buscador;
