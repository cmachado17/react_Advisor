import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const RedesSociales = () => {
    return(
        <div className="text-left">
        <h3>Visita nuestras redes sociales</h3>
        <ButtonGroup size="lg" className="my-3">
          <Button variant="light">
            <i class="fab fa-facebook-square"></i>
          </Button>
          <Button variant="light">
            <i class="fab fa-twitter-square"></i>
          </Button>
          <Button variant="light">
            <i class="fab fa-instagram-square"></i>
          </Button>
        </ButtonGroup>
      </div>
    );
}

export default RedesSociales;