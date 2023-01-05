import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import "./ShopContainer.css";
let fnProducts;
let fnCartProducts;
const getProducts = () => fnProducts;
const getCartProducts = () => fnCartProducts;
const ShopContainer = () => {
  let [products, setProducts] = useState([]);
  let [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        fnProducts = data;
      });
  }, []);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data);
        fnCartProducts = data;
      });
  }, []);
  return (
    <div className="shop-container">
      <Shop products={products}></Shop>
      <Cart cartProducts={cartProducts}></Cart>
    </div>
  );
};

export default ShopContainer;
export { getCartProducts, getProducts };
