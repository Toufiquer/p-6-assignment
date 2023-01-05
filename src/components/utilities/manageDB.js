const getItemDB = () => {
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
  let cart = getItemDB();
  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }
  setItemDB(cart);
};
const handleRemoveItemDB = (id) => {
  let cart = getItemDB();
  if (cart[id] === 1) {
    delete cart[id];
  } else if (cart[id] > 1) {
    cart[id] -= 1;
  }
  setItemDB(cart);
};
export { handleRemoveItemDB, handleSetItemDB };
