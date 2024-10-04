import { request, fetchWithRefresh, saveTokens } from "../../utils/request";
import { AppDispatch } from "../store";

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

interface ISetAuthChecked {
  type: typeof SET_AUTH_CHECKED;
  payload: boolean;
}

export const setAuthChecked = (value: boolean): ISetAuthChecked => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

interface IFetchRegisterRequest {
  type: typeof FETCH_REGISTER_REQUEST;
}
interface IFetchRegisterSuccess {
  type: typeof FETCH_REGISTER_SUCCESS;
  payload: object;
}
interface IFetchRegisterFailure {
  type: typeof FETCH_REGISTER_FAILURE;
  payload: Error;
}

export const fetchRegisterRequest = (): IFetchRegisterRequest => ({
  type: FETCH_REGISTER_REQUEST,
});

export const fetchRegisterSuccess = (info: object): IFetchRegisterSuccess => ({
  type: FETCH_REGISTER_SUCCESS,
  payload: info,
});

export const fetchRegisterFailure = (error: Error): IFetchRegisterFailure => ({
  type: FETCH_REGISTER_FAILURE,
  payload: error,
});

interface IFetchLoginRequest {
  type: typeof FETCH_LOGIN_REQUEST;
}
interface IFetchLoginSuccess {
  type: typeof FETCH_LOGIN_SUCCESS;
  payload: object;
}
interface IFetchLoginFailure {
  type: typeof FETCH_LOGIN_FAILURE;
  payload: Error;
}

export const fetchLoginRequest = (): IFetchLoginRequest => ({
  type: FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = (info: object): IFetchLoginSuccess => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: info,
});

export const fetchLoginFailure = (error: Error): IFetchLoginFailure => ({
  type: FETCH_LOGIN_FAILURE,
  payload: error,
});

export const logOut = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await request("/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch({ type: LOGOUT_SUCCESS });
      console.log(res);
    } catch (error: any) {
      console.error("Ошибка при выходе из системы:", error);
      dispatch({ type: LOGOUT_FAILURE });
    }
  };
};

interface IUpdateProfileRequest {
  type: typeof UPDATE_PROFILE_REQUEST;
}
interface IUpdateProfileSuccess {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: object;
}
interface IUpdateProfileFailure {
  type: typeof UPDATE_PROFILE_FAILURE;
  payload: Error;
}

export const updateProfileRequest = (): IUpdateProfileRequest => ({
  type: UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = (info: object): IUpdateProfileSuccess => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: info,
});

export const updateProfileFailure = (error: Error): IUpdateProfileFailure => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: error,
});

export const fetchRegister = (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_REGISTER_REQUEST });
    try {
      const res = await request("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_REGISTER_SUCCESS, payload: res });
      console.log("Registration successful:", res);
      saveTokens(res.accessToken, res.refreshToken);
    } catch (error: any) {
      dispatch({ type: FETCH_REGISTER_FAILURE, error: error.message });
      if (error === "Ошибка 403") {
        alert("Пользователь с такими данными уже существует");
      }
      console.error("Registration failed:", error);
    }
  };
};

export const fetchLogin = (data: { email: string; password: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_LOGIN_REQUEST });
    try {
      const res = await request("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch({ type: FETCH_LOGIN_SUCCESS, payload: res });
      console.log(res);
      saveTokens(res.accessToken, res.refreshToken);
    } catch (error: any) {
      dispatch({ type: FETCH_LOGIN_FAILURE, error: error.message });
      console.log("Login error: ", error);
    }
  };
};

export const checkUserAuth = () => {
  return async (dispatch: AppDispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const res = await fetchWithRefresh("/auth/user", {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: accessToken,
          },
        });
        dispatch(fetchLoginSuccess(res));
        dispatch(setAuthChecked(true));
      } catch (err: any) {
        console.log("Ошибка проверки токена", err);
        dispatch(logOut());
      }
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};

export const updateUserProfile = (data: { name?: string; email?: string }) => {
  return async (dispatch: AppDispatch) => {
    dispatch(updateProfileRequest());
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetchWithRefresh("/auth/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: token }),
        },
        body: JSON.stringify(data),
      });
      dispatch(updateProfileSuccess(res.user));
      console.log(res);
    } catch (error: any) {
      dispatch(updateProfileFailure(error.message));
    }
  };
};
