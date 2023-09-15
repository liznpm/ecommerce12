import React from 'react';
import image2 from '../images/35.jpg'; // Importa la imagen 3.jpg desde tu carpeta images
import './Card5.css'; // Importa tu archivo CSS personalizado

const Card1 = () => {
  return (
    <div className="card-group">

<div className="card border-0">
        <div className="card-body">
        <h5 className="card-title2">¿Quieres algo delicioso?</h5>

          <p className="card-text">Proin facilisis dolor vel est vestibulum</p>
          <div className="center-button">
            <button className="yellow-button">Mas recomendaciones</button> {/* Agrega tu botón aquí */}
          </div>
        </div>
      </div>
      <div className="card border-0">
      <img src={image2} style={{ width: "800px", height: "600px" }}className="card-img-top" alt="..." />

        <div className="card-body">
        
        </div>
      </div>
      
      
    </div>
  );
}

export default Card1;