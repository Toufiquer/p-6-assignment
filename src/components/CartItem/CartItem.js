import React from "react";
import { iconDelete } from "../icons/fontawesome";
import "./cartItem.css";
const CartItem = ({ singleCart: { id, price, picture, name } }) => {
  return (
    <div className="cartItem">
      <img src={picture} alt={name} />
      <p>
        <strong>Name:</strong> {name}
      </p>
      <span className="icon">{iconDelete("28px", "28px")}</span>
    </div>
  );
};

export default CartItem;
