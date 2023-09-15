import React from 'react';
import './Card1.css'; // Import your custom CSS file
import image1 from '../images/6.jpg';
import image2 from '../images/2.jpg';

const Card1 = () => {
  return (
    <div className="container mt-5">

    <div className="row">
    <div className="col-md-4 col-sm-10 mb-5"> {/* Add mb-4 class for margin-bottom */}

        <div className="product-grid">
          <div className="product-image">
            <a href="#" className="image">
              <img src={image1} className="card-img-top" alt="Product 1" />
            </a>
            <span className="product-discount-label">-33%</span>
            <span className="product-discount-label2">-123%</span>
            <ul className="product-links">
              <li><a href="#" data-tip="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
              <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li>
              <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="far fa-star"></li>
            </ul>
            <div className="price">$79.90</div>
            <h3 className="title"><a href="#">Men's Blazer</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mb-2">
        <div className="product-grid">
          <div className="product-image">
            <a href="#" className="image">
              <img src={image1} className="card-img-top" alt="Product 1" />
            </a>
            <span className="product-discount-label">-33%</span>
            <span className="product-discount-label2">-123%</span>
            <ul className="product-links">
              <li><a href="#" data-tip="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
              <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li>
              <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="far fa-star"></li>
            </ul>
            <div className="price">$79.90</div>
            <h3 className="title"><a href="#">Men's Blazer</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mb-2">
        <div className="product-grid">
          <div className="product-image">
            <a href="#" className="image">
              <img src={image1} className="card-img-top" alt="Product 1" />
            </a>
            <span className="product-discount-label">-33%</span>
            <span className="product-discount-label2">-123%</span>
            <ul className="product-links">
              <li><a href="#" data-tip="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
              <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li>
              <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="far fa-star"></li>
            </ul>
            <div className="price">$79.90</div>
            <h3 className="title"><a href="#">Men's Blazer</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mb-2">
        <div className="product-grid">
          <div className="product-image">
            <a href="#" className="image">
              <img src={image1} className="card-img-top" alt="Product 1" />
            </a>
            <span className="product-discount-label">-33%</span>
            <span className="product-discount-label2">-123%</span>
            <ul className="product-links">
              <li><a href="#" data-tip="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
              <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li>
              <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="far fa-star"></li>
            </ul>
            <div className="price">$79.90</div>
            <h3 className="title"><a href="#">Men's Blazer</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mb-2">
        <div className="product-grid">
          <div className="product-image">
            <a href="#" className="image">
              <img src={image1} className="card-img-top" alt="Product 1" />
            </a>
            <span className="product-discount-label">-33%</span>
            <span className="product-discount-label2">-123%</span>
            <ul className="product-links">
              <li><a href="#" data-tip="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
              <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li>
              <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="far fa-star"></li>
            </ul>
            <div className="price">$79.90</div>
            <h3 className="title"><a href="#">Men's Blazer</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 mb-2">
        <div className="product-grid">
          <div className="product-image">
            <a href="#" className="image">
              <img src={image1} className="card-img-top" alt="Product 1" />
            </a>
            <span className="product-discount-label">-33%</span>
            <span className="product-discount-label2">-123%</span>
            <ul className="product-links">
              <li><a href="#" data-tip="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
              <li><a href="#" data-tip="Compare"><i className="fa fa-random"></i></a></li>
              <li><a href="#" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="fas fa-star"></li>
              <li className="far fa-star"></li>
            </ul>
            <div className="price">$79.90</div>
            <h3 className="title"><a href="#">Men's Blazer</a></h3>
          </div>
        </div>
      </div>
      
      </div>

    
    </div>
  );
}

export default Card1;
