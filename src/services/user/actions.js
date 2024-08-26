import { BASE_URL } from "../../utils/constants";
import { request } from "../../utils/request";

export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";

export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";

export const fetchRegisterRequest = () => ({
  type: FETCH_REGISTER_REQUEST,
});

export const fetchRegisterSuccess = (info) => ({
  type: FETCH_REGISTER_SUCCESS,
  payload: info,
});

export const fetchRegisterFailure = (error) => ({
  type: FETCH_REGISTER_FAILURE,
  payload: error,
});

export const fetchLoginRequest = () => ({
  type: FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = (info) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: info,
});

export const fetchLoginFailure = (error) => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error,
});

export const fetchRegister = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_REGISTER_REQUEST });
    try {
      const res = await request(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_REGISTER_SUCCESS, payload: res });
      console.log("Registration successful:", res);
    } catch (error) {
      dispatch({ type: FETCH_REGISTER_FAILURE, error: error.message });
      if (error.message == "User already exists") {
        alert("Пользователь с такими данными уже существует");
      }
      console.error("Registration failed:", error);
    }
  }
};

export const fetchLogin = (data) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOGIN_REQUEST });
    try {
      const res = await request(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res });
      console.log(res)
    } catch (error) {
      dispatch({ type: FETCH_LOGIN_FAILURE, error: error.message });
      console.log("Login error: ", error);
    }
  };
};