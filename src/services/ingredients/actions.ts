import { request } from "../../utils/request";
import { IngredientType } from "../../utils/types";
import { AppDispatch } from "../store";

export const FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";

interface IFetchIngredientsRequest {
  readonly type: typeof FETCH_INGREDIENTS_REQUEST;
}
interface IFetchIngredientsSuccess {
  readonly type: typeof FETCH_INGREDIENTS_SUCCESS;
  payload: Array<IngredientType>;
}
interface IFetchIngredientsFailure {
  readonly type: typeof FETCH_INGREDIENTS_FAILURE;
  payload: Error | undefined;
}

export type FetchIngredientsActions = IFetchIngredientsRequest | IFetchIngredientsSuccess | IFetchIngredientsFailure;

export const fetchIngredientsRequest = (): IFetchIngredientsRequest => ({
  type: FETCH_INGREDIENTS_REQUEST,
});

export const fetchIngredientsSuccess = (
  ingredients: Array<IngredientType>
): IFetchIngredientsSuccess => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

export const fetchIngredientsFailure = (
  error: Error | undefined
): IFetchIngredientsFailure => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: error,
});

export const fetchIngredients = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    try {
      const data = await request("/ingredients");
      dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: data.data });
    } catch (error: any) {
      dispatch({ type: FETCH_INGREDIENTS_FAILURE, error: error.message });
      console.log("error", error);
    }
  };
};
