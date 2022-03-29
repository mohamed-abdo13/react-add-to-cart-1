import "./App.css";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Routres from "./components/front/Routes/Routres";
import { useState } from "react";

const App = () => {
  const { shopProducts } = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const deleteFromCart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routres
          shopProducts={shopProducts}
          cartItems={cartItems}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
          handleCartClear={handleCartClear}
        />
      </Router>
    </div>
  );
};

export default App;
