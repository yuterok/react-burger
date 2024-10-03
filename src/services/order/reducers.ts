import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  FetchOrderActions,
} from "./actions";

interface OrderState {
  orderRequest: boolean;
  orderFailed: boolean;
  orderInfo: any;
};

const initialState: OrderState = {
  orderRequest: false,
  orderFailed: false,
  orderInfo: null,
};

export const orderReducer = (state = initialState, action: FetchOrderActions): OrderState => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case FETCH_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderInfo: action.payload,
      };
    }
    case FETCH_ORDER_FAILURE: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
