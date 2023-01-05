import React from "react";
import { handleSingleCart } from "../utilities/eventHandler";
import { iconDelete } from "../icons/fontAwesome";
import "./cartItem.css";
const CartItem = ({ singleCart: { id, picture, name } }) => {
  return (
    <div className="cartItem">
      <img src={picture} alt={name} />
      <p>
        <strong>Name:</strong> {name}
      </p>
      <span onClick={() => handleSingleCart(id)} className="icon">
        {iconDelete("28px", "28px")}
      </span>
    </div>
  );
};

export default CartItem;
