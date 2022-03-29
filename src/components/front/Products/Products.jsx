import React from "react";
import "./Products.css";

const Products = ({ shopProducts, addToCart }) => {
  return (
    <div className="product-item">
      {shopProducts.map((productItem) => (
        <div className="card" key={productItem.id}>
          <div className="card-img">
            <img src={productItem.image} alt={productItem.title} />
          </div>
          <div className="card-title">
            <h3>{productItem.title}</h3>
          </div>
          <div className="card-price">
            <span>$ {productItem.newPrice}</span>
          </div>
          <div>
            <button
              className="card-add-btn"
              onClick={() => addToCart(productItem)}
            >
              add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
