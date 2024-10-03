import {
  WS_PROFILE_ORDERS_CONNECT_SUCCESS,
  WS_PROFILE_ORDERS_DISCONNECT,
  WS_PROFILE_ORDERS_MESSAGE,
  WS_PROFILE_ORDERS_ERROR,
  ProfileOrdersActions,
} from "./profile-actions";

interface IOrder {
  _id: string;
  ingredients: string[];
  status: "done" | "pending" | "created";
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

interface IProfileOrdersState {
  userOrders: IOrder[];
  total: number;
  totalToday: number;
  isConnected: boolean;
  error: any;
}

const initialState: IProfileOrdersState = {
  userOrders: [],
  total: 0,
  totalToday: 0,
  isConnected: false,
  error: null,
};

const profileOrdersReducer = (
  state = initialState,
  action: ProfileOrdersActions
): IProfileOrdersState => {
  switch (action.type) {
    case WS_PROFILE_ORDERS_CONNECT_SUCCESS:
      return {
        ...state,
        isConnected: true,
        error: null,
      };

    case WS_PROFILE_ORDERS_DISCONNECT:
      return {
        ...state,
        userOrders: [],
        isConnected: false,
      };

    case WS_PROFILE_ORDERS_MESSAGE:
      console.log(action.payload);
      return {
        ...state,
        userOrders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    case WS_PROFILE_ORDERS_ERROR:
      return {
        ...state,
        error: action.payload,
        isConnected: false,
      };

    default:
      return state;
  }
};

export default profileOrdersReducer;
