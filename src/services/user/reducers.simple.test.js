import userReducer, { initialState } from "./reducers";
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
describe("user actions", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle SET_AUTH_CHECKED", () => {
    const action = { type: SET_AUTH_CHECKED, payload: true };
    const expectedState = {
      ...initialState,
      isAuthChecked: true,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle FETCH_REGISTER_REQUEST", () => {
    const action = { type: FETCH_REGISTER_REQUEST };
    const expectedState = {
      ...initialState,
      registerRequest: true,
      registerFailed: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_REGISTER_SUCCESS", () => {
    const user = { email: "test@test.com", name: "Test User" };
    const action = {
      type: FETCH_REGISTER_SUCCESS,
      payload: {
        user,
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      },
    };
    const expectedState = {
      ...initialState,
      registerRequest: false,
      registerFailed: false,
      user: user,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_REGISTER_FAILURE", () => {
    const action = { type: FETCH_REGISTER_FAILURE };
    const expectedState = {
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle FETCH_LOGIN_REQUEST", () => {
    const action = { type: FETCH_LOGIN_REQUEST };
    const expectedState = {
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_LOGIN_SUCCESS", () => {
    const user = { email: "test@test.com", name: "User" };
    const action = { type: FETCH_LOGIN_SUCCESS, payload: { user } };
    const expectedState = {
      ...initialState,
      loginRequest: false,
      loginFailed: false,
      user: user,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_LOGIN_FAILURE", () => {
    const action = { type: FETCH_LOGIN_FAILURE };
    const expectedState = {
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOGOUT_REQUEST", () => {
    const action = { type: LOGOUT_REQUEST };
    const expectedState = {
      ...initialState,
      logoutRequest: true,
      logoutFailed: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOGOUT_SUCCESS", () => {
    const action = { type: LOGOUT_SUCCESS };
    const expectedState = {
      ...initialState,
      user: null,
      logoutRequest: false,
      logoutFailed: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle LOGOUT_FAILURE", () => {
    const action = { type: LOGOUT_FAILURE };
    const expectedState = {
      ...initialState,
      logoutRequest: false,
      logoutFailed: true,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_PROFILE_REQUEST", () => {
    const action = { type: UPDATE_PROFILE_REQUEST };
    const expectedState = {
      ...initialState,
      profileUpdateRequest: true,
      profileUpdateFailed: false,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_PROFILE_SUCCESS", () => {
    const user = { email: "test@test.com", name: "New User" };
    const action = { type: UPDATE_PROFILE_SUCCESS, payload: user };
    const expectedState = {
      ...initialState,
      profileUpdateRequest: false,
      profileUpdateFailed: false,
      user: user,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_PROFILE_FAILURE", () => {
    const action = { type: UPDATE_PROFILE_FAILURE };
    const expectedState = {
      ...initialState,
      profileUpdateRequest: false,
      profileUpdateFailed: true,
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
});
