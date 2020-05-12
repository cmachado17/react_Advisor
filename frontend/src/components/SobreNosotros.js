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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquet sem sapien, vel porttitor augue tincidunt sit amet. Integer
          bibendum lectus dapibus erat ultricies hendrerit. Etiam ac libero
          ullamcorper, varius urna et, tristique tellus. Nullam velit enim,
          venenatis quis ornare lobortis, bibendum in turpis. Donec sit amet
          massa lacinia, cursus ligula non, fermentum nibh. Pellentesque sit
          amet est et odio viverra bibendum. Donec lorem arcu, lacinia vitae
          lacus posuere, pretium laoreet ipsum. Phasellus scelerisque eros et
          cursus dictum. Sed vel dui et quam placerat semper. Suspendisse eu
          efficitur nisl. In mattis ipsum et tortor egestas gravida. Morbi a
          ipsum vel diam faucibus gravida id a enim. Curabitur convallis, neque
          non feugiat mollis, eros lorem imperdiet metus, quis gravida turpis
          diam non nisl. Pellentesque eu libero eu felis interdum gravida sit
          amet non enim. Aliquam aliquam sapien eget bibendum accumsan. Sed
          finibus nunc nec sem viverra gravida. Cras eget efficitur odio.
          Phasellus cursus est nec sem accumsan feugiat. Vivamus vulputate
          commodo dolor ut placerat.
        </Col>
      </Row>
      <hr />
      <Row className="py-3">
        <Col sm={12} xl={8} className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquet sem sapien, vel porttitor augue tincidunt sit amet. Integer
          bibendum lectus dapibus erat ultricies hendrerit. Etiam ac libero
          ullamcorper, varius urna et, tristique tellus. Nullam velit enim,
          venenatis quis ornare lobortis, bibendum in turpis. Donec sit amet
          massa lacinia, cursus ligula non, fermentum nibh. Pellentesque sit
          amet est et odio viverra bibendum. Donec lorem arcu, lacinia vitae
          lacus posuere, pretium laoreet ipsum. Phasellus scelerisque eros et
          cursus dictum. Sed vel dui et quam placerat semper. Suspendisse eu
          efficitur nisl. In mattis ipsum et tortor egestas gravida. Morbi a
          ipsum vel diam faucibus gravida id a enim. Curabitur convallis, neque
          non feugiat mollis, eros lorem imperdiet metus, quis gravida turpis
          diam non nisl. Pellentesque eu libero eu felis interdum gravida sit
          amet non enim. Aliquam aliquam sapien eget bibendum accumsan. Sed
          finibus nunc nec sem viverra gravida. Cras eget efficitur odio.
          Phasellus cursus est nec sem accumsan feugiat. Vivamus vulputate
          commodo dolor ut placerat.
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
