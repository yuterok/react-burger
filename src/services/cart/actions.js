import { v4 as uuidv4 } from "uuid";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const REPLACE_BUN = "REPLACE_BUN";

export const MOVE_INGREDIENT = "MOVE_INGREDIENT";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: { ...ingredient, key: uuidv4() },
});

export const deleteIngredient = (key) => ({
  type: DELETE_INGREDIENT,
  payload: key,
});

export const replaceBun = (bun) => ({
  type: REPLACE_BUN,
  payload: bun,
});

export const moveIngredient = (dragIndex, dropIndex) => ({
  type: MOVE_INGREDIENT,
  payload: { dragIndex, dropIndex },
});
