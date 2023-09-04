import {actionsCart} from '../actions/actionsCart';
const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      return { ...state, cartItems: state.cartItems.push(payload) };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != payload),
      };
    default:
      return state;
  }
};
