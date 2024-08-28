import { BASE_URL } from "../../utils/constants";
import { request, fetchWithRefresh, saveTokens } from "../../utils/request";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";

export const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
export const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
export const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";

export const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
export const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
export const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";

export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const LOGOUT = "LOGOUT";

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

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await request(`${BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      });
      if (res.success) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch({ type: LOGOUT_SUCCESS });
        console.log(res);
      }
    } catch (error) {
      console.error("Ошибка при выходе из системы:", error);
      dispatch({ type: LOGOUT_FAILURE });
    }
  };
};

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = (info) => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: info,
});

export const updateProfileFailure = (error) => ({
  type: UPDATE_PROFILE_FAILURE,
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
      saveTokens(res.accessToken, res.refreshToken);
    } catch (error) {
      dispatch({ type: FETCH_REGISTER_FAILURE, error: error.message });
      if (error.message === "User already exists") {
        alert("Пользователь с такими данными уже существует");
      }
      console.error("Registration failed:", error);
    }
  };
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
      console.log(res);
      saveTokens(res.accessToken, res.refreshToken);
    } catch (error) {
      dispatch({ type: FETCH_LOGIN_FAILURE, error: error.message });
      console.log("Login error: ", error);
    }
  };
};

export const checkUserAuth = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const res = await fetchWithRefresh(`${BASE_URL}/auth/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": accessToken
          },
        });
        dispatch(fetchLoginSuccess(res));
        console.log(res);
        dispatch(setAuthChecked(true));
      } catch (err) {
        console.log("Ошибка проверки токена", err);
        dispatch(logOut());
      }
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

export const updateUserProfile = (data) => {
  return async (dispatch) => {
    dispatch(updateProfileRequest());
    try {
      const res = await fetchWithRefresh(`${BASE_URL}/auth/user`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken")
        },
        body: JSON.stringify(data),
      });
      dispatch(updateProfileSuccess(res.user));
      console.log(res);
    } catch (error) {
      dispatch(updateProfileFailure(error.message));
    }
  };
};
