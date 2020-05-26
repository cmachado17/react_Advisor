import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const VolverAdmin = () =>{
    return(
        <Link to ="/admin" ><Button  className="bg-orange mb-5"><i class="fas fa-arrow-left"></i>Administracion</Button></Link>
    );
}

export default VolverAdmin;