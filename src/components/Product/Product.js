import React from "react";
import { handleAddToCart, handleRemoveFromCart } from "../utilities/eventHandler";
import { iconCart, iconDelete } from "../icons/fontAwesome";
import "./Product.css";
const Product = ({ product: { id, name, picture, price } }) => {
  return (
    <div className="product">
      <img src={picture} alt={name} />
      <h4>Name: {name}</h4>
      <hr />
      <p>Price: ${price}</p>
      <small>ID: {id}</small>
      <p>
        <strong>Details:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti perferendis reprehenderit nihil odio?
      </p>
      <div className="button-container">
        <button onClick={() => handleAddToCart(id)} className="add">
          <span>Add To Cart </span>
          {iconCart()}
        </button>
        <button onClick={() => handleRemoveFromCart(id)} className="remove">
          Remove From Cart {iconDelete()}
        </button>
      </div>
    </div>
  );
};

export default Product;
