import React from "react";
import "./Cart.css";

const Cart = ({ cartItems, addToCart, deleteFromCart, handleCartClear }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.newPrice,
    0
  );

  return (
    <div className="cart-items">
      <h2 className="cart-items-header">cart items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-items" onClick={handleCartClear}>
            clear cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">no items are added...</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img className="cart-items-img" src={item.image} alt={item.title} />
            <div className="cart-items-title">{item.title}</div>
            <div className="cart-items-btn">
              <button
                className="cart-items-add"
                onClick={() => addToCart(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => deleteFromCart(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * {item.newPrice}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-name">
        total price
        <div className="cart-items-total-price">$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
