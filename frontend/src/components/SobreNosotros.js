import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import RedesSociales from './RedesSociales';


const SobreNosotros = () => {
  return (
    <div className="container text-center py-5">
      <h2>ReactAdvisor</h2>
      <Row className="py-3">
        <Col sm={12} xl={4}>
          <Image rounded src="http://localhost:5000/images/hamburger.jpg" className="img-fluid"></Image>
        </Col>
        <Col sm={12} xl={8} className="text-justify">
        ReactAdvisor nació de la pasion de un grupo de amigos que motivados por no perder la sana costumbre de verse todas las semanas, buscaban para cada encuentro un nuevo lugar donde pasar la sagrada velada. Ante capitulos excepcionales, como algunos decepcionantes y aprovechando el auge de las redes sociales en la vida comunitaria, empezaron a contarles a sus allegados y demas amigos, sus experiencias vividas en cada uno de estos lugares. Desde la sorpresa de las mejores hamburguesas que se probaron jamás, salidas de una parrilla en un localcito con apenas un cartelito en la puerta que indicaba que ahi se podia comer, a las peores criticas a las famosas pizzerias de la Avenida Corrientes o hasta el experimento cuasi locura de cambiar unas achuras y asado de tira por comida veggie, este grupo de amigos se volvio viral y empezaron a ser un desafio para los gastronomicos de la ciudad de Buenos Aires.
        </Col>
      </Row>
      <hr />
      <Row className="py-3">
        <Col sm={12} xl={8} className="text-justify">
        Como la amistad siempre fue unir, darle un consejo a un amigo y siempre sumar, surgio este sitio en el que invitamos a todo aquel que quiera formar parte de nuestro grupo de amigos, dejarnos una opinión o consejo de un lugar al que fueron y como la pasaron. Acá no hay sponsors, nadie nos paga ni nos pagara por alabanzas y que sus lugares sean los mas exitosos, eso vendra si les surge la pasión, como la que tenemos nosotros por nuestra amistad, por lo que hacen, por la atencion, el producto y el post-servicio. Todos podemos formar parte y darle ese empujon al que se esmera de verdad. 
        </Col>
        <Col sm={12} xl={4}>
          <Image rounded src="http://localhost:5000/images/pasta.jpg" className="img-fluid"></Image>
        </Col>
      </Row>
      <RedesSociales/>
    </div>
  );
};

export default SobreNosotros;
