import { createStore } from "redux";
import {
  actionProducts,
  getProduct,
  setProducts,
} from "../actions/actionsProducts";
// import { Console } from "console";
const initialState = {
  Products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, Products: payload };
    case "GET_PRODUCT":{
      // debugger
      return {
        ...state,
        Product: state.Products.find((item) => item.id === Number(payload)),
      };
    }
    default:
      return state;
  }
};
