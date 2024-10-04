import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients/reducers";
import { cartReducer } from "./cart/reducers";
import orderReducer from "./order/reducers";
import userReducer from "./user/reducers";
import orderFeedReducer from "./order-info/feed-reducers";
import profileOrdersReducer from "./order-info/profile-reducers";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
  orderFeed: orderFeedReducer,
  orderProfile: profileOrdersReducer,
});

export default rootReducer;
