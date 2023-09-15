import React from 'react';
import './Card.css'; // Importa tu archivo CSS personalizado
import image4 from '../images/5.jpg'; // Importa la imagen 3.jpg desde tu carpeta images

const Card1 = () => {
  return (
    <div className="card-group">
      <div className="card border-0">
        <div className="card-body">
        <h5 className="card-title" style={{ color: '#156eb3' }}>Write</h5>

          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div className="card border-0">
      <img src={image4} className="card-img-top" alt="..." />

        <div className="card-body">
         
        </div>
      </div>
      <div className="card border-0">
        <div className="card-body">
        <h5 className="card-title" style={{ color: '#156eb3' }}>Read</h5>

          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
      </div>
    </div>
  );
}

export default Card1;