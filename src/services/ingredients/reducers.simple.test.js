import ingredientsReducer, { initialState } from "./reducers";
import {
  FETCH_INGREDIENTS_FAILURE,
  FETCH_INGREDIENTS_REQUEST,
  FETCH_INGREDIENTS_SUCCESS,
} from "./actions";
describe("ingredients actions", () => {
  // arrange
  it("should return the initial state", () => {
    // act
    // assert
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle FETCH_INGREDIENTS_REQUEST", () => {
    const action = { type: FETCH_INGREDIENTS_REQUEST };
    const expectedState = {
      ...initialState,
      itemsRequest: true,
      itemsFailed: false,
    };
    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle FETCH_INGREDIENTS_SUCCESS", () => {
    const ingredients = [{ id: "1", name: "Bun", type: "bun", price: 10 }];
    const action = { type: FETCH_INGREDIENTS_SUCCESS, payload: ingredients };
    const expectedState = {
      ...initialState,
      items: ingredients,
      itemsRequest: false,
      itemsFailed: false,
    };
    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FETCH_INGREDIENTS_FAILURE", () => {
    const action = {
      type: FETCH_INGREDIENTS_FAILURE,
      payload: new Error(),
    };
    const expectedState = {
      ...initialState,
      itemsRequest: false,
      itemsFailed: true,
    };
    expect(ingredientsReducer(initialState, action)).toEqual(expectedState);
  });
});
