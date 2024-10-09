import {
  WS_FEED_CONNECT_SUCCESS,
  WS_FEED_DISCONNECT,
  WS_FEED_MESSAGE,
  WS_FEED_ERROR,
  FeedActions,
} from "./feed-actions";

interface IOrder {
  _id: string;
  ingredients: string[];
  status: "done" | "pending" | "created";
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

interface IFeedState {
  orders: IOrder[];
  total: number;
  totalToday: number;
  isConnected: boolean;
  error: any;
}

export const initialState: IFeedState = {
  orders: [],
  total: 0,
  totalToday: 0,
  isConnected: false,
  error: null,
};

const feedReducer = (state = initialState, action: FeedActions): IFeedState => {
  switch (action.type) {
    case WS_FEED_CONNECT_SUCCESS:
      return {
        ...state,
        isConnected: true,
        error: null,
      };

    case WS_FEED_DISCONNECT:
      return {
        ...state,
        orders: [],
        isConnected: false,
      };

    case WS_FEED_MESSAGE:
      const { orders, total, totalToday } = action.payload;
      return {
        ...state,
        orders,
        total,
        totalToday,
      };

    case WS_FEED_ERROR:
      return {
        ...state,
        error: action.payload,
        isConnected: false,
      };

    default:
      return state;
  }
};

export default feedReducer;
