import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";

const Routres = ({
  shopProducts,
  cartItems,
  addToCart,
  deleteFromCart,
  handleCartClear,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products shopProducts={shopProducts} addToCart={addToCart} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
            handleCartClear={handleCartClear}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Routres;
