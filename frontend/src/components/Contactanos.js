import React from "react";
import FormularioContacto from "./FormularioContacto";
import RedesSociales from './RedesSociales';

const Contactanos = () => {
  return (
    <div className="container my-5 px-5 text-center">
       <RedesSociales />
        <p className="h2">Estamos en contacto</p>
      <FormularioContacto />
    </div>
  );
};

export default Contactanos;
