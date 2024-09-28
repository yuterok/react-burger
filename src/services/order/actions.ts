import { request } from "../../utils/request";
import { AppDispatch } from "../store";
export const FETCH_ORDER_REQUEST = "FETCH_ORDER_REQUEST";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_FAILURE = "FETCH_ORDER_FAILURE";

interface IFetchOrderRequest {
  type: typeof FETCH_ORDER_REQUEST;
}
interface IFetchOrderSuccess {
  type: typeof FETCH_ORDER_SUCCESS;
  payload: object;
}
interface IFetchOrderFailure {
  type: typeof FETCH_ORDER_FAILURE;
  payload: Error | undefined;
}

export const fetchOrderRequest = (): IFetchOrderRequest => ({
  type: FETCH_ORDER_REQUEST,
});

export const fetchOrderSuccess = (info: object): IFetchOrderSuccess => ({
  type: FETCH_ORDER_SUCCESS,
  payload: info,
});

export const fetchOrderFailure = (
  error: Error | undefined
): IFetchOrderFailure => ({
  type: FETCH_ORDER_FAILURE,
  payload: error,
});

export const fetchOrder = (data: { ingredients: string[] }) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_ORDER_REQUEST });
    try {
      const token = localStorage.getItem("accessToken");
      const res = await request("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: token }),
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_ORDER_SUCCESS, payload: res });
      console.log(res);
    } catch (error: any) {
      dispatch({ type: FETCH_ORDER_FAILURE, error: error.message });
      console.log("Order fetch error: ", error);
    }
  };
};
