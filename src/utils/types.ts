export interface IngredientType {
  readonly _id: string;
  readonly name: string;
  readonly type: "bun" | "sauce" | "main";
  readonly calories: number;
  readonly proteins: number;
  readonly fat: number;
  readonly carbohydrates: number;
  readonly price: number;
  readonly image: string;
  readonly image_mobile: string;
  readonly image_large: string;
  key?: string;
}

export interface IUser {
  name: string;
  email: string;
}
