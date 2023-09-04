export const setProducts = (Products) => {
  
  return { type: "SET_PRODUCTS", payload: Products };
};
export const getProduct = (ProductID) => {
  return { type: "GET_PRODUCT", payload: ProductID };
};
