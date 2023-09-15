import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Importa tu archivo CSS personalizado

import image1 from '../images/12.webp';
import image2 from '../images/15.webp';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/55.jpeg';
import image8 from '../images/50.jpg';


function CircularCarousel() {
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1, // Cambia a 1 para moverse de una en una
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true, // Habilitar desplazamiento táctil
  };

  return (

    <div className="container mt-5"> {/* Aumenta el valor de mt para más espacio desde arriba */}

    <div className="circular-carousel-container">
      <Slider {...settings}>
        <div>
          <div className="circle-image">
            <img src={image1} alt="Image 1" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image2} alt="Image 2" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image3} alt="Image 3" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image4} alt="Image 4" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image5} alt="Image 5" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image6} alt="Image 6" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image7} alt="Image 6" />
          </div>
        </div>
        <div>
          <div className="circle-image">
            <img src={image8} alt="Image 6" />
          </div>
        </div>
      </Slider>
    </div>
    </div>

    
  );
}

export default CircularCarousel;
