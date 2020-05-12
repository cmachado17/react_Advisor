import React from "react";
import VolverAdmin from "./VolverAdmin";
import ListGroup from "react-bootstrap/ListGroup";
import MensajeContacto from "./MensajeContacto";


const AdminCasilla = () => {
  return (
    <div className="container my-5">
      <VolverAdmin />

      <ListGroup>
          <MensajeContacto />
      </ListGroup>
    </div>
  );
};

export default AdminCasilla;
