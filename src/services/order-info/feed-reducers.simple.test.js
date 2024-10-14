import {
  WS_FEED_CONNECT_SUCCESS,
  WS_FEED_DISCONNECT,
  WS_FEED_MESSAGE,
  WS_FEED_ERROR,
  FeedActions,
} from "./feed-actions";

import feedReducer, { initialState } from "./feed-reducers";

describe("feed orders websocket actions", () => {
  it("should return the initial state", () => {
    expect(feedReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle WS_FEED_CONNECT_SUCCESS", () => {
    const action = { type: WS_FEED_CONNECT_SUCCESS };
    const expectedState = {
      ...initialState,
      isConnected: true,
      error: null,
    };
    expect(feedReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle WS_FEED_DISCONNECT", () => {
    const action = { type: WS_FEED_DISCONNECT };
    const expectedState = {
      ...initialState,
      isConnected: false,
      orders: [],
    };
    expect(feedReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle WS_FEED_MESSAGE", () => {
    const orders = [
      {
        _id: "6705c17413a2b7001c8f0d7d",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Space флюоресцентный бургер",
        createdAt: "2024-10-08T23:34:12.962Z",
        updatedAt: "2024-10-08T23:34:13.804Z",
        number: 55743,
      },
      {
        _id: "6705bd7513a2b7001c8f0d74",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa0944",
          "643d69a5c3f7b9001cfa093f",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный традиционный-галактический бессмертный бургер",
        createdAt: "2024-10-08T23:17:09.347Z",
        updatedAt: "2024-10-08T23:17:11.383Z",
        number: 55742,
      },
    ];
    const action = {
      type: WS_FEED_MESSAGE,
      payload: { orders, total: 200, totalToday: 50 },
    };

    const expectedState = {
      ...initialState,
      orders,
      total: 200,
      totalToday: 50,
    };
    expect(feedReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle WS_FEED_ERROR", () => {
    const action = {
      type: WS_FEED_ERROR,
      payload: "Connection error",
    };
    const expectedState = {
      ...initialState,
      error: "Connection error",
      isConnected: false,
    };
    expect(feedReducer(initialState, action)).toEqual(expectedState);
  });
});
