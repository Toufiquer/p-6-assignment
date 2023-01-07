const cartToProducts = (ids, products) => {
  const filterProducts = [];
  for (let curr in ids) {
    const product = products.find((item) => item.id === curr);
    product && filterProducts.push(product);
  }
  return filterProducts;
};
export { cartToProducts };
