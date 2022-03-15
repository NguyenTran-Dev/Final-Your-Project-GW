import React from "react";
import { useHistory } from "react-router-dom";

const Emty = () => {
  const history = useHistory();
  const toShopping = () => {
    history.push("/shop-product");
  };
  return (
    <div className="cart__emty">
      <img src="Images/about/no-cart.png" alt="Img" />
      <p className="cart__emty-p">YOUR CART IS EMTY</p>
      <a onClick={toShopping} className="cart__emty-a">
        LET's BUY SOMETHING
      </a>
    </div>
  );
};
export default Emty;
