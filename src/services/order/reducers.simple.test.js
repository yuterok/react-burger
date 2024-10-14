import orderReducer, { initialState } from "./reducers";
import {
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  FETCH_ORDER_REQUEST,
} from "./actions";
describe("order actions", () => {
  it("should return the initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle FETCH_ORDER_REQUEST", () => {
    const action = { type: FETCH_ORDER_REQUEST };
    const expectedState = {
      ...initialState,
      orderRequest: true,
      orderFailed: false,
    };
    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle FETCH_ORDER_SUCCESS", () => {
    const order = [
      {
        ingredients: [],
        _id: "6705c17413a2b7001c8f0d7d",
        owner: {
          name: "Юля",
          email: "yuterok@yandex.ru",
          createdAt: "2024-08-28T23:06:43.517Z",
          updatedAt: "2024-09-28T23:46:03.183Z",
        },
        status: "done",
        name: "Space флюоресцентный бургер",
        createdAt: "2024-10-08T23:34:12.962Z",
        updatedAt: "2024-10-08T23:34:13.804Z",
        number: 55743,
        price: 2056,
      },
    ];
    const action = { type: FETCH_ORDER_SUCCESS, payload: order };
    const expectedState = {
      ...initialState,
      orderInfo: order,
      orderRequest: false,
      orderFailed: false,
    };
    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_ORDER_FAILURE", () => {
    const action = {
      type: FETCH_ORDER_FAILURE,
      payload: new Error(),
    };
    const expectedState = {
      ...initialState,
      orderRequest: false,
      orderFailed: true,
    };
    expect(orderReducer(initialState, action)).toEqual(expectedState);
  });
});
