import {
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE,
  } from "./actions";

const initialState = {
    "email": "", 
    "name": "" 
} 


export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REGISTER_REQUEST: {
        return {
          ...state,
          registerRequest: true,
          registerFailed: false,
        };
      }
      case FETCH_REGISTER_SUCCESS: {
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
      default: {
        return state;
      }
    }
  };
  
  export default registerReducer;