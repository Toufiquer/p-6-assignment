import { handleRemoveItemDB, handleSetItemDB } from "./manageDB";

const handleAddToCart = (id) => {
  handleSetItemDB(id);
};
const handleRemoveFromCart = (id) => {
  handleRemoveItemDB(id);
};
const handleChooseMe = (id) => {
  console.log("handleChooseMe Add to Cart", id, " => Line No: 2");
};
const handleSingleCart = (id) => {
  console.log("handleSingleCart", id, " => Line No: 2");
};
const handleClear = () => {
  console.log("handleClear", " => Line No: 2");
};
export { handleAddToCart, handleChooseMe, handleRemoveFromCart, handleSingleCart, handleClear };
