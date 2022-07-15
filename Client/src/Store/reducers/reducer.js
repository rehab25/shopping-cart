// const reducer =(state={}, action) =>{
//     return state
// }

// export default reducer

import { combineReducers } from "redux";
import { cartReducer } from "./CartReducer";
import { orderReducer } from "./orderReducer";
import { ProductsReducer } from "./ProductsReducer";
export default combineReducers({
  products: ProductsReducer,
  cart: cartReducer,
  order: orderReducer
});
