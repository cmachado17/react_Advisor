import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Buscador = () => {
  return (
    <div className="container mt-5">
      <Form className="">
        <Form.Row>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        </Form.Row>
        <Link to="/busqueda">
          <Button variant="primary">
            <i className="fa fa-search"></i>
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Buscador;
