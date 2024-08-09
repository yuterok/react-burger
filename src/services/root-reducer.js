import { combineReducers } from "redux";
import ingredientsReducer from './ingredients/reducers';

const rootReducer = combineReducers({
    ingredients: ingredientsReducer
});

export default rootReducer;