import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ cartItems }) => {
  const cartIcon = <i className="fas fa-shopping-cart"></i>;
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <h1>
              <Link to="/" className="logo">
                home shop
              </Link>
            </h1>
          </div>
          <div className="links-container">
            <ul className="navbar-links">
              <li className="link-item">
                <Link to="/">home</Link>
              </li>
              <li className="link-item">
                <Link to="/signup">signup</Link>
              </li>
              <li className="link-item">
                <Link to="/cart" className="cart">
                  {cartIcon}
                  <span className="cart-length">
                    {cartItems.length === 0 ? "" : cartItems.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
