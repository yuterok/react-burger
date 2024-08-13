import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients/reducers";
import currentIngredientReducer from "./currentIngredient/reducers";
import { cartReducer } from "./cart/reducers";
import orderReducer from "./order/reducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default rootReducer;
