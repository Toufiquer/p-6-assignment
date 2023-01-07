const cartToProducts = (ids, products) => {
  console.log(ids, products, " => Line No: 2");
  const filterProducts = [];
  for (let curr in ids) {
    const product = products.find((item) => item.id === curr);
    product && filterProducts.push(product);
  }
  return filterProducts;
};
export { cartToProducts };
