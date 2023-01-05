import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import "./ShopContainer.css";
const ShopContainer = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <Shop products={products}></Shop>
      <Cart></Cart>
    </div>
  );
};

export default ShopContainer;
