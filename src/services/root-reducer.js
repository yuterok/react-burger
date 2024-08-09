import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients/reducers";
import currentIngredientReducer from "./currentIngredient/reducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  currentIngredient: currentIngredientReducer,
});

export default rootReducer;
