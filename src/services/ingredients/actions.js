import { apiLink } from "../../components/app/app";

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
    dispatch({ type: "FETCH_INGREDIENTS_REQUEST" });

    try {
      const response = await fetch(apiLink);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch({ type: "FETCH_INGREDIENTS_SUCCESS", payload: data.data });
    } catch (error) {
      dispatch({ type: "FETCH_INGREDIENTS_FAILURE", error: error.message });
      console.log("error", error);
    }
  };
};
