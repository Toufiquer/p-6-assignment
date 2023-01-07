import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import { cartToProducts } from "../utilities/filterProducts";
import { getStoredCart } from "../utilities/manageDB";
import "./ShopContainer.css";
let fnShowUiCart = () => {};
let fnChooseMe = () => {};
const ShopContainer = () => {
  let [products, setProducts] = useState([]);
  let [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  useEffect(() => {
    const getCart = getStoredCart();
    const getCartProducts = cartToProducts(getCart, products);
    console.log(getCartProducts, " => Line No: 20");
    if (getCartProducts.length === 0) {
      console.log("length is 0", " => Line No: 22");
    } else {
      getCartProducts.length > 4 && (getCartProducts.length = 4);
      console.log(getCartProducts, " => Line No: 27");
      setCartProducts(getCartProducts);
    }
  }, [products]);
  const showUiCart = () => {
    console.log("update Ui", " => Line No: 32");
    const getCart = getStoredCart();
    const getCartProducts = cartToProducts(getCart, products);
    setCartProducts(getCartProducts);
  };
  const chooseForMe = () => {
    console.log("call choose me", " => Line No: 38");
  };
  fnChooseMe = chooseForMe;
  fnShowUiCart = showUiCart;
  return (
    <div className="shop-container">
      <Shop products={products}></Shop>
      <Cart cartProducts={cartProducts}></Cart>
    </div>
  );
};

export default ShopContainer;
export { fnShowUiCart, fnChooseMe };
