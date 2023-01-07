import React from "react";
import CartItem from "../CartItem/CartItem";
import { handleChooseMe, handleClear } from "../utilities/eventHandler";
import "./Cart.css";
const Cart = ({ cartProducts }) => {
  cartProducts.length > 4 && (cartProducts.length = 4);
  if (cartProducts.length === 0) {
    console.log(cartProducts, " => Line No: 18");
    return (
      <div className="cart">
        <div className="cart-container">
          <h4 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "22px" }}>Please Add First</h4>
          <p style={{ textAlign: "center" }}>Ops!!! Nothing was found</p>
        </div>
      </div>
    );
  }
  if (cartProducts.length >= 1) {
    console.log(cartProducts, " => Line No: 18");
    return (
      <div className="cart">
        <div className="cart-container">
          <h4 style={{ textAlign: "center", fontWeight: "bolder", fontSize: "22px" }}>Cart Item</h4>

          {cartProducts.map((singleCart) => (
            <CartItem key={singleCart?.id} singleCart={singleCart}></CartItem>
          ))}
          <div className="cart-button-container">
            <button onClick={() => handleChooseMe(cartProducts)} className="choose">
              Choose For Me
            </button>
            <button onClick={() => handleClear()} className="clear">
              Clear All
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Cart;
