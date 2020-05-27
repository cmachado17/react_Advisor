import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/ComentarioMiUsuario.css';
//import Swal from 'sweetalert2';

const ComentarioMiUsuario = (props) =>{

    //let url = 'http://localhost:5000/opiniones/miusuario/'


    const handleDeleteClick = ()=>{
        props.onDeleteClick(props.coment.opi_id)
    }

    // const eliminarComentario = (idComent) => {
    //     if(idComent){
    //         url += idComent
    //         fetch(url,{
    //             method: 'DELETE',
    //             credentials: 'include'
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             if(data.status === 'ok'){
    //                alert('Comentario eliminado')
    //             }else{
    //                 alert('error al eliminar el comentario')
    //             }
    //         })
    //     }else{
    //         alert('no llego el id')
    //     }

    // }

    return(
        <ListGroup.Item className="border border-dark">
        <Row>
            <Col xs={12} md={8}>
                <h3>{props.coment.cliente_nombre}</h3>
                <p>{props.coment.niceDate}</p>
                <p>{props.coment.opi_texto}</p>
                <Button variant="danger" onClick={handleDeleteClick}>Eliminar</Button>
            </Col>
            <Col xs={12} md={4}>
                <Image src={props.coment.opi_foto} rounded className="img-fluid altura-foto"></Image>
            </Col>
        </Row>
        </ListGroup.Item>
    );
}

export default ComentarioMiUsuario;

//componente nuevo o componente comentario modificado condicional type=paginacliente o type=miusuario

//desde caja de comentario le pasa el id
//const handleEditClick(idProducto) => {
    //desde descripcioncliente muestro el modal
    //setSelectedProduct(idProducto);
    //setMostrarFormNuevoComentario(true);
//}

//editar desde el boton, le pasa el id del comentario
// const handleEditClick= () => {
//     props.onEditClick(props.id);
// }

// const [selectedProduct, setSelectedProduct] = useState("");

//***********************eliminar comentario***********/

// onChange={handleEditClick}

// const handleDeleteClick = () => {
//     props.onDeleteClick(props.id);
// }

//------al que maneja el estado -----------
// const handleDeleteClick = (idProducto) => {
//     Swal.fire({
//         title: 'Confirma que desea eliminar la publicacion?',
//         icon : 'question',
//         showCancelButton: true,
//         confirmButtonText: 'Aceptar',
//         cancelButtonText: 'Cancelar'
//     }).then(result => {
//         if (result.value) {
//             fetch (`http://localhost:5000/favoritos/${idComentario}`,
//             {
//                 method: 'DELETE',
//                 credentials: 'include'
//             }
//             ).then(response => response.json())
//             .then(data =>{
//                 if(data.status === 'ok'){
//                     Swal.fire({
//                         text: data.message,
//                         icon: 'success'
//                     });
//                  cargarListadoProductos();
//                 }else{
//                     Swal.fire({
//                         text: data.message,
//                         icon: 'error'
//                     })
//                 }
//             })
//         }
//     })
// }