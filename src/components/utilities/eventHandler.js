import { fnChooseMe, fnShowUiCart } from "../shopContainer/ShopContainer";
import { handleRemoveItemDB, handleSetItemDB } from "./manageDB";

const handleAddToCart = (id) => {
  handleSetItemDB(id);
  fnShowUiCart();
};
const handleRemoveFromCart = (id) => {
  handleRemoveItemDB(id);
  fnShowUiCart();
};
const handleChooseMe = (id) => {
  fnChooseMe();
  fnShowUiCart();
};
const handleSingleCart = (id) => {
  handleRemoveItemDB(id);
  fnShowUiCart();
};
const handleClear = () => {
  localStorage.removeItem("cart");
  fnShowUiCart();
};
export { handleAddToCart, handleChooseMe, handleRemoveFromCart, handleSingleCart, handleClear };
