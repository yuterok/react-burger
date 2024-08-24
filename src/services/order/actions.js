import { BASE_URL } from "../../utils/constants";
import { request } from "../../utils/request";
export const FETCH_ORDER_REQUEST = "FETCH_ORDER_REQUEST";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_FAILURE = "FETCH_ORDER_FAILURE";

export const fetchOrderRequest = () => ({
  type: FETCH_ORDER_REQUEST,
});

export const fetchOrderSuccess = (info) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: info,
});

export const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  payload: error,
});

export const fetchOrder = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ORDER_REQUEST });
    try {
      const res = await request(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_ORDER_SUCCESS, payload: res });
      console.log(res)
    } catch (error) {
      dispatch({ type: FETCH_ORDER_FAILURE, error: error.message });
      console.log("Order fetch error: ", error);
    }
  };
};
