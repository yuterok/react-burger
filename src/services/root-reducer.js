import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients/reducers";
import currentIngredientReducer from "./currentIngredient/reducers";
import { cartReducer } from "./cart/reducers";
import orderReducer from "./order/reducers";
import registerReducer from "./user/register/reducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
  cart: cartReducer,
  order: orderReducer,
  registration: registerReducer,
});

export default rootReducer;
