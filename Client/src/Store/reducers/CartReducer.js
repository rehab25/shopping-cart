import { ADD_CART, CLEAR_CART, REMOVE_CART } from "../Actions/types";

export const cartReducer = (
  state = {
    CardItems: JSON.parse(localStorage.getItem("CartItems")) || [],
  },
  action
) => {
  switch (action.type) {
    case ADD_CART:
      return { CardItems: action.data.CardItems };

    case REMOVE_CART:
      return { CardItems: action.data.CardItems };

    case CLEAR_CART:
      return {...state, products: [] }
    default:
      return state;
  }
};
