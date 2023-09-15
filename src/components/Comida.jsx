import React from 'react';
import image2 from '../images/8.jpg';
import './Comida.css'; // Importa el archivo CSS

const Comida = () => {
  return (
    <div className="card-group">
      <div className="card border-0">
        <div className="card-body">
          <img src={image2} style={{ width: "800px", height: "600px" }} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="card border-0">
        <h5 className="card-title1">Prueba delicias</h5>
        <p className="card-text">Proin facilisis dolor vel est vestibulum, a tristique risus ultrices. Sed non metus nec ex lacinia finibus non quis elit...</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <div className="card-body">
          <div className="center-button">
            <button className="yellow-button">Mas recomendaciones</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comida;
