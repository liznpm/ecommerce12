import React from 'react';
import './Card1.css'; // Importa tu archivo CSS personalizado
import image1 from '../images/6.jpg'; // Importa la imagen 4.jpg desde tu carpeta images
import image2 from '../images/2.jpg'; // Importa la imagen 4.jpg desde tu carpeta images
import image3 from '../images/11.webp'; // Importa la imagen 4.jpg desde tu carpeta images
import image4 from '../images/9.jpg'; // Importa la imagen 4.jpg desde tu carpeta images
import image5 from '../images/13.jpg'; // Importa la imagen 4.jpg desde tu carpeta images
import image6 from '../images/14.jpg'; // Importa la imagen 4.jpg desde tu carpeta images



const Card1 = () => {
  return (


    <div class="row">
            <div class="col-md-2 col-sm-2 mb-2">
    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image1} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <span class="product-discount-label2">-123%</span>

            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <div class="price">$79.90</div>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>

        </div>
    </div>
</div>
<div class="col-md-2 col-sm-2 mb-4">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image2} className="card-img-top" alt="..." />

            </a>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Women's Shirt</a></h3>
            <div class="price">$79.90</div>
        </div>
    </div>
</div>
<div class="col-md-2 col-sm-2 mb-2">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image3} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>
        </div>
    </div>
    
</div>
<div class="col-md-2 col-sm-2 mb-4">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image5} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>
        </div>
    </div>
    
</div>
<div class="col-md-2 col-sm-2 mb-4">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image6} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>

        </div>
    </div>
    
</div>
<div class="col-md-2 col-sm-2 mb-4">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image4} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>

        </div>
    </div>
    
</div>
<div class="col-md-2 col-sm-2 mb-4">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image3} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>

        </div>
    </div>
    
</div>
  <div class="col-md-2 col-sm-2 mb-4">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image4} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>

        </div>
    </div>
</div>

<div class="col-md-2 col-sm-2 mb-2">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image4} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>

        </div>
    </div>
</div><div class="col-md-2 col-sm-2 mb-2">

<div class="product-grid">
    <div class="product-image">
        <a href="#" class="image">
        <img src={image4} className="card-img-top" alt="..." />

        </a>
        <span class="product-discount-label">-33%</span>
        <ul class="product-links">
            <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
            <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
            <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
        </ul>
    </div>
    <div class="product-content">
        <ul class="rating">
            <li class="fas fa-star"></li>
            <li class="fas fa-star"></li>
            <li class="fas fa-star"></li>
            <li class="fas fa-star"></li>
            <li class="far fa-star"></li>
        </ul>
        <h3 class="title"><a href="#">Men's Blazer</a></h3>
        <div class="price">$79.90</div>

    </div>
</div>
</div><div class="col-md-2 col-sm-2 mb-2">

<div class="product-grid">
    <div class="product-image">
        <a href="#" class="image">
        <img src={image4} className="card-img-top" alt="..." />

        </a>
        <span class="product-discount-label">-33%</span>
        <ul class="product-links">
            <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
            <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
            <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
        </ul>
    </div>
    <div class="product-content">
        <ul class="rating">
            <li class="fas fa-star"></li>
            <li class="fas fa-star"></li>
            <li class="fas fa-star"></li>
            <li class="fas fa-star"></li>
            <li class="far fa-star"></li>
        </ul>
        <h3 class="title"><a href="#">Men's Blazer</a></h3>
        <div class="price">$79.90</div>

    </div>
</div>
</div><div class="col-md-2 col-sm-2 mb-2">

    <div class="product-grid">
        <div class="product-image">
            <a href="#" class="image">
            <img src={image4} className="card-img-top" alt="..." />

            </a>
            <span class="product-discount-label">-33%</span>
            <ul class="product-links">
                <li><a href="#" data-tip="Add to Wishlist"><i class="fas fa-heart"></i></a></li>
                <li><a href="#" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                <li><a href="#" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
        <div class="product-content">
            <ul class="rating">
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="fas fa-star"></li>
                <li class="far fa-star"></li>
            </ul>
            <h3 class="title"><a href="#">Men's Blazer</a></h3>
            <div class="price">$79.90</div>

        </div>
    </div>
</div>
        </div>

  );
}

export default Card1;
