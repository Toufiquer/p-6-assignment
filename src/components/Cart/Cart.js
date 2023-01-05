import React from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
const Cart = ({ cartProducts }) => {
  const newCart = [...cartProducts];
  newCart.length = 4;
  return (
    <div className="cart">
      <div className="cart-container">
        <h4 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "22px" }}>Cart Item</h4>
        {newCart.map((singleCart) => (
          <CartItem key={singleCart.id} singleCart={singleCart}></CartItem>
        ))}
        <div className="cart-button-container">
          <button className="choose">Choose For Me</button>
          <button className="clear">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
