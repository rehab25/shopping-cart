import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const CardItems = getState().cart.CardItems;
    const CardItemsClone = [...CardItems];
    let IsProductExist = false;
    CardItemsClone.forEach((p) => {
      if (product._id === p._id) {
        p.qty++;
        IsProductExist = true;
      }
    });
    if (!IsProductExist) {
      CardItemsClone.push({ ...product, qty: 1 });
    }
    dispatch({
      type: ADD_CART,
      data: {
        CardItems: CardItemsClone,
      },
    });
    localStorage.setItem("CartItems", JSON.stringify(CardItemsClone));
  };
};

export const removeCart = (product) => {
  return (dispatch, getState) => {
    const CardItems = getState().cart.CardItems;
    const CardItemsClone = [...CardItems];
    const updatedCartItems = CardItemsClone.filter(
      (p) => p._id !== product._id
    );
    dispatch({
      type: REMOVE_CART,
      data: {
        CardItems: updatedCartItems,
      },
    });
    localStorage.setItem("CartItems", JSON.stringify(updatedCartItems));
  };
};
