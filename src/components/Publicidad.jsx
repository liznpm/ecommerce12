import React from 'react';
import './Publicidad.css'; // Importa el archivo de estilos CSS
import image2 from '../images/58.jpeg'; // Importa la imagen 3.jpg desde tu carpeta images


function Anuncio() {
  return (
    <div className="anuncio">
      
      <img src={image2} className="card-img-top" alt="..." />

    </div>
  );
}

export default Anuncio;
