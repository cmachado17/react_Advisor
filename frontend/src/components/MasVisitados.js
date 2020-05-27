import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import TarjetaClienteVisitado from "./TarjetaClienteVisitado";


const MasVisitados = () => {
  const url = "http://localhost:5000/clientes/masvisitados";

  const [masVisitados, setMasVisitados] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMasVisitados(data);
      });
  }, []);

  return (
    <div className="text-center mt-5">
      <p className="h2 font-weight-bold">Mas Visitados</p>
    <Row className="container mx-auto my-5">
      {masVisitados.map((masVisitado) => {
        return <TarjetaClienteVisitado nombre={masVisitado.cliente_nombre}
        foto={masVisitado.clientes_logo}
        id={masVisitado.clientes_id}
        />
      })
      }
    </Row>
    </div>
  );
};
export default MasVisitados;
