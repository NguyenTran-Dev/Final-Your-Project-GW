import React from "react";
import Emty from "./Cart.Emty";
import CartTable from "./Cart.CartTable";
import "../../../style/cart.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProductApi } from "../../../redux/reducers/productSlice";
const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProductApi());
    window.scrollTo(0, 50);
  }, []);
  const { cart } = useSelector((state) => state.listProduct);
  return (
    <div>
      <div className="cart__header">
        <h1 className="cart__header-h1">Shop</h1>
        <h3 className="cart__header-h3">Cart </h3>
      </div>
      <div className="container">{cart.length ? <CartTable /> : <Emty />}</div>
    </div>
  );
};
export default Cart;
