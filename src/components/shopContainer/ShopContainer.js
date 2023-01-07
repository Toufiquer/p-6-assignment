import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Shop from "../Shop/Shop";
import { getRandomNumber } from "../utilities/calculation";
import { cartToProducts } from "../utilities/filterProducts";
import { getStoredCart, handleChooseItem } from "../utilities/manageDB";
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
    if (getCartProducts.length === 0) {
    } else {
      getCartProducts.length > 4 && (getCartProducts.length = 4);
      setCartProducts(getCartProducts);
    }
  }, [products]);
  const showUiCart = () => {
    const getCart = getStoredCart();
    const getCartProducts = cartToProducts(getCart, products);
    setCartProducts(getCartProducts);
  };
  const chooseForMe = () => {
    const newCartProducts = [...cartProducts];
    let cartProductsLength = cartProducts.length;
    if (cartProductsLength > 1) {
      const number = getRandomNumber(cartProductsLength);
      const chosenProduct = newCartProducts[number - 1];
      if (!chosenProduct) {
        return chooseForMe();
      }
      console.log(chosenProduct.id, " => Line No: 40");
      handleChooseItem(chosenProduct.id);
      fnShowUiCart();
    } else {
      alert("minimum select two item for choose one");
    }
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
