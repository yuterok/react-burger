export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const REPLACE_BUN = "REPLACE_BUN";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});

export const deleteIngredient = (ingredientId) => ({
  type: DELETE_INGREDIENT,
  payload: ingredientId,
});

export const replaceBun = (bun) => ({
  type: REPLACE_BUN,
  payload: bun,
});
