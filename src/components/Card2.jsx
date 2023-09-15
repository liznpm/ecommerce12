import React from 'react';
import './Card1.css'; // Importa tu archivo CSS personalizado
import image2 from '../images/3.jpg'; // Importa la imagen 3.jpg desde tu carpeta images

const Card1 = () => {
  return (
    <div className="card-group">

<div className="card border-0">
        <div className="card-body">
        <h5 className="card-title" >Lorem</h5>

          <p className="card-text">Proin facilisis dolor vel est vestibulum, a tristique risus ultrices. Sed non metus nec ex lacinia finibus non quis elit. Sed lacinia interdum urna, id tincidunt nisi pharetra ut. Nullam tristique elit ac tristique varius. In laoreet libero eget nulla pharetra, in venenatis sapien consequat. Nunc feugiat bibendum mi, vel scelerisque purus blandit sed. Nulla facilisi. Sed volutpat mauris vel velit auctor, a lacinia libero convallis. Vivamus quis faucibus nulla. Nunc condimentum velit eget justo blandit, vel facilisis est dictum. Fusce eget est ut nisl blandit vehicula at in odio. Sed eu augue nec dolor congue dignissim. Nullam bibendum felis vel eros aliquet feugiat. Duis nec enim vel ligula fringilla malesuada nec a tellus. Vivamus tristique fermentum sem, non euismod libero viverra vel. Nullam at urna vitae leo hendrerit venenatis id ac elit</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card border-0">
      <img src={image2} className="card-img-top" alt="..." />

        <div className="card-body">
        
        </div>
      </div>
      
      
    </div>
  );
}

export default Card1;