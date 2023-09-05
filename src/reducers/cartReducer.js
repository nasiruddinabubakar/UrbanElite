import {actionsCart} from '../actions/actionsCart';
const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  console.log('cart reducerpayload',payload);
  switch (type) {
    case "ADD_ITEM":
      // debugger;
      return { ...state, cartItems: [...state.cartItems, payload] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != payload),
      };
    default:
      return state;
  }
};
