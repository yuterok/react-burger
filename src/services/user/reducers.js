import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
  } from "./actions";

const initialState = {
    "email": "", 
    "name": "" ,
    loginRequest: false,
    loginFailed: false,
    registerRequest: false,
    registerFailed: false,
} 


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REGISTER_REQUEST: {
        return {
          ...state,
          registerRequest: true,
          registerFailed: false,
        };
      }
      case FETCH_REGISTER_SUCCESS: {
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        return {
          ...state,
          registerRequest: false,
          registerFailed: false,
          "email": action.payload.user.email,
          "name": action.payload.user.name,
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
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        return {
          ...state,
          loginRequest: false,
          loginFailed: false,
          "email": action.payload.user.email,
          "name": action.payload.user.name,
        };
      }
      case FETCH_LOGIN_FAILURE: {
        return {
          ...state,
          loginRequest: false,
          loginFailed: true,
        };
      }
      default: {
        return state;
      }
    }
  };


  
  
  export default userReducer;