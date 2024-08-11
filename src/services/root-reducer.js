import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients/reducers";
import currentIngredientReducer from "./currentIngredient/reducers";
import { cartReducer } from "./cart/reducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
  cart: cartReducer
});

export default rootReducer;
