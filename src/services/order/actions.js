import { apiLinkOrder } from "../../components/app/app";
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
    dispatch({ type: "FETCH_ORDER_REQUEST" });

    try {
      const response = await fetch(apiLinkOrder, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      dispatch({ type: "FETCH_ORDER_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_ORDER_FAILURE", error: error.message });
      console.log("Order fetch error: ", error);
    }
  };
};
