const getStoredCart = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = {};
  }
  return cart;
};
const setItemDB = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
const handleSetItemDB = (id) => {
  let cart = getStoredCart();
  if (cart[id]) {
    alert("You Already Have This Item.");
    // cart[id] += 1;
  } else {
    cart[id] = 1;
  }
  setItemDB(cart);
};
const handleChooseItem = (id) => {
  let cart = {};
  cart[id] = 1;
  setItemDB(cart);
};
const handleRemoveItemDB = (id) => {
  let cart = getStoredCart();
  if (cart[id] === 1) {
    delete cart[id];
  } else if (cart[id] > 1) {
    cart[id] -= 1;
  }
  setItemDB(cart);
};
export { handleRemoveItemDB, handleSetItemDB, getStoredCart, handleChooseItem };
