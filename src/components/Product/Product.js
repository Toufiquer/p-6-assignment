import React from "react";
import "./Product.css";
const Product = ({ product: { id, name, picture, price } }) => {
  return (
    <div className="product">
      <img src={picture} alt={name} />
      <h2>Name: {name}</h2>
      <p>Price: ${price}</p>
      <small>ID: {id}</small>
      <p>
        <strong>Details:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti perferendis reprehenderit nihil odio?
      </p>
      <div className="button-container">
        <button className="add">Add To Cart</button>
        <button className="remove">Remove From Cart</button>
      </div>
    </div>
  );
};

export default Product;
