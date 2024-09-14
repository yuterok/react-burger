import {
  SET_AUTH_CHECKED,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  FETCH_REGISTER_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./actions";

const initialState = {
  user: null,

  loginRequest: false,
  loginFailed: false,

  registerRequest: false,
  registerFailed: false,

  isAuthChecked: false,

  profileUpdateRequest: false,
  profileUpdateFailed: false,

  logoutRequest: false,
  logoutFailed: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    case FETCH_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case FETCH_REGISTER_SUCCESS: {
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      return {
        ...state,
        registerRequest: false,
        registerFailed: false,
        user: action.payload.user,
      };
    }
    case FETCH_REGISTER_FAILURE: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }
    case FETCH_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case FETCH_LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: false,
        user: action.payload.user,
      };
    }
    case FETCH_LOGIN_FAILURE: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      };
    }
    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        logoutRequest: false,
        logoutFailed: false,
      };
    }
    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      };
    case UPDATE_PROFILE_REQUEST: {
      return {
        ...state,
        profileUpdateRequest: true,
        profileUpdateFailed: false,
      };
    }
    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        profileUpdateRequest: false,
        profileUpdateFailed: false,
        user: action.payload,
      };
    }
    case UPDATE_PROFILE_FAILURE: {
      return {
        ...state,
        profileUpdateRequest: false,
        profileUpdateFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
