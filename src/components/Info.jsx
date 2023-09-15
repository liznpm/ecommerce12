import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faMapMarkerAlt, faDollarSign, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Info.css'; // Importa el archivo de estilos CSS

const CardGroup = () => {
  return (
    <div className="card-group">
      {/* Tarjeta 1 */}
      <div className="card text-dark" style={{ backgroundColor: ' #fff7d4', color: 'white', margin: '10px', borderRadius: '10px' }}>
        <div className="card-icon d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faUtensils} size="4x" style={{ color: '#fed633' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Comida</h5>
          <p className="card-text">Descripción de la tarjeta de comida.</p>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div className="card text-dark" style={{ backgroundColor: ' #fff7d4', color: 'white', margin: '10px', borderRadius: '10px' }}>
        <div className="card-icon d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="4x" style={{ color: '#fed633' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Ubicación</h5>
          <p className="card-text">Descripción de la tarjeta de ubicación.</p>
        </div>
      </div>

      {/* Tarjeta 3 (pago) */}
      <div className="card text-dark" style={{ backgroundColor: ' #fff7d4', color: 'white', margin: '10px', borderRadius: '10px' }}>
        <div className="card-icon d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faDollarSign} size="4x" style={{ color: '#fed633' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Pago</h5>
          <p className="card-text">Descripción de la tarjeta de pago.</p>
        </div>
      </div>

      {/* Tarjeta 4 (encanto) */}
      <div className="card text-dark" style={{ backgroundColor: ' #fff7d4', color: 'white', margin: '10px', borderRadius: '10px' }}>
        <div className="card-icon d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faHeart} size="4x" style={{ color: '#fed633' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Encanto</h5>
          <p className="card-text">Descripción de la tarjeta de encanto.</p>
        </div>
      </div>
    </div>
  );
}

export default CardGroup;
