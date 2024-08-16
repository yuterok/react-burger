import { BASE_URL } from "../../components/app/app";
import { request } from "../../utils/request";

export const FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILURE = "FETCH_INGREDIENTS_FAILURE";

export const fetchIngredientsRequest = () => ({
  type: FETCH_INGREDIENTS_REQUEST,
});

export const fetchIngredientsSuccess = (ingredients) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

export const fetchIngredientsFailure = (error) => ({
  type: FETCH_INGREDIENTS_FAILURE,
  payload: error,
});

export const fetchIngredients = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_INGREDIENTS_REQUEST });
    try {
      const data = await request(`${BASE_URL}/ingredients`);
      dispatch({ type: FETCH_INGREDIENTS_SUCCESS, payload: data.data });
    } catch (error) {
      dispatch({ type: FETCH_INGREDIENTS_FAILURE, error: error.message });
      console.log("error", error);
    }
  };
};
