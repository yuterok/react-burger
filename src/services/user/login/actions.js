import { BASE_URL } from "../../../utils/constants";
import { request } from "../../../utils/request";
export const FETCH_AUTH_REQUEST = "FETCH_AUTH_REQUEST";
export const FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS";
export const FETCH_AUTH_FAILURE = "FETCH_AUTH_FAILURE";

export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST,
});

export const fetchAuthSuccess = (info) => ({
  type: FETCH_AUTH_SUCCESS,
  payload: info,
});

export const fetchAuthFailure = (error) => ({
  type: FETCH_AUTH_FAILURE,
  payload: error,
});

export const fetchAuth = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_AUTH_REQUEST });
    try {
      const res = await request(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_AUTH_SUCCESS, payload: res });
      console.log(res)
    } catch (error) {
      dispatch({ type: FETCH_AUTH_FAILURE, error: error.message });
      console.log("Auth error: ", error);
    }
  };
};
