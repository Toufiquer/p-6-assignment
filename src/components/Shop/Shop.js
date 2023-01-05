import React from "react";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = ({ products }) => {
  return (
    <div className="shop">
      <Products products={products}></Products>
    </div>
  );
};

export default Shop;
