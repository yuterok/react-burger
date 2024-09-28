import { v4 as uuidv4 } from "uuid";
import { IngredientType } from "../../utils/types";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const REPLACE_BUN = "REPLACE_BUN";
export const EMPTY_CART = "EMPTY_CART";

export const MOVE_INGREDIENT = "MOVE_INGREDIENT";

interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  payload: IngredientType;
}
interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: string | undefined;
}
interface IReplaceBunAction {
  readonly type: typeof REPLACE_BUN;
  readonly payload: IngredientType;
}
interface IEmptyCartAction {
  readonly type: typeof EMPTY_CART;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly payload: { dragIndex: number; dropIndex: number };
}

export const addIngredient = (
  ingredient: IngredientType
): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  payload: { ...ingredient, key: uuidv4() },
});

export const deleteIngredient = (
  key: string | undefined
): IDeleteIngredientAction => ({
  type: DELETE_INGREDIENT,
  payload: key,
});

export const replaceBun = (bun: IngredientType): IReplaceBunAction => ({
  type: REPLACE_BUN,
  payload: bun,
});

export const moveIngredient = (
  dragIndex: number,
  dropIndex: number
): IMoveIngredientAction => ({
  type: MOVE_INGREDIENT,
  payload: { dragIndex, dropIndex },
});

export const emptyCart = (): IEmptyCartAction => ({
  type: EMPTY_CART,
});
