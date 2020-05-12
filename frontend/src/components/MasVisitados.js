import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import TarjetaClienteVisitado from "./TarjetaClienteVisitado";

const MasVisitados = () => {
  const url = "http://localhost:5000/clientes";

  const [masVisitados, setMasVisitados] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMasVisitados(data);
      });
  }, []);

  return (
    <Row className="container mx-auto my-5">
      {masVisitados.map((masVisitado) => {
        return <TarjetaClienteVisitado nombre={masVisitado.cliente_nombre}
        foto={masVisitado.clientes_logo}
        id={masVisitado.clientes_id}
        />
      })
      }
    </Row>
  );
};
export default MasVisitados;
