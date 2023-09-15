import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import dosImage from '../images/50.jpg';
import tresImage from '../images/51.jpg';
import cuatroImage from '../images/55.jpeg';

const Product = () => {
  const handleImageClick = (event) => {
    event.target.classList.add("image-animation");
    setTimeout(() => {
      event.target.classList.remove("image-animation");
    }, 1000);
  };

  return (
      <div className="me-5 d-none d-lg-block">
      <Carousel>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="card custom-card-bg">
                  <div className="card-body">
                    <img src={tresImage} style={{ width: "2000px", height: "800px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />                 
                  </div>
                </div>
              </div>
              
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="card custom-card-bg">
                  <div className="card-body">
                    <img src={cuatroImage} style={{ width: "2000px", height: "800px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                  </div>
                </div>
              </div>
              
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-sm-2">
                <div className="card custom-card-bg">
                  <div className="card-body">
                    <img src={dosImage} style={{ width: "2000px", height: "800px" }} alt="Image" onClick={handleImageClick} className="clickable-image" />
                  </div>
                </div>
              </div>
              
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default Product;