import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients/reducers";
import { cartReducer } from "./cart/reducers";
import orderReducer from "./order/reducers";
import userReducer from "./user/reducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
});

export default rootReducer;
