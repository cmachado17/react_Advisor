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
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/hamburger.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/presentacion.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/salad.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="img-altura d-block w-100"
          src="http://localhost:5000/images/pasta.jpg"
          alt="Fifthu slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
