import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './styles/Slider.css';

const Slider = () => {
  return (
    <Carousel className="container my-5">
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/barbacoa.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/hamburger.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/presentacion.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
