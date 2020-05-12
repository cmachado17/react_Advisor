import React, {useState, useEffect} from "react";
import VolverAdmin from "./VolverAdmin";
import Table from "react-bootstrap/Table";
import "./styles/AdminModeracion.css";
import ComentariosEnAdmin from "./ComentariosEnAdmin";

const AdminModeracion = () => {
 
  const url = 'http://localhost:5000/opiniones';

  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    fetch(url).then(response=>response.json())
    .then(data => {
      setComentarios(data);
    })
  }, []);

  return (
    <div className="container my-5">
      <VolverAdmin />
      <p className="h2">Moderacion</p>
      <Table className="bg-white text-center" striped bordered hover responsive>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Usuario</th>
            <th>Comentario</th>
            <th>Moderado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
{
  comentarios.map(comentario => {
    return(
      <ComentariosEnAdmin nombre={comentario.cliente_nombre} usuario={comentario.user_nombre} comentario={comentario.opi_texto}/>
    );
  })
}
       
        </tbody>
      </Table>
    </div>
  );
};

export default AdminModeracion;

{/* <Button variant="danger">
<i class="fas fa-trash-alt"></i>
</Button> */}