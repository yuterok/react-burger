import { ADD_INGREDIENT, DELETE_INGREDIENT, REPLACE_BUN } from "./actions";

const initialState = {
  cart: [],
  bun: {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      const existingIngredient = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (existingIngredient) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }],
      };
    }
    case DELETE_INGREDIENT: {
      const existingIngredient = state.cart.find(
        (item) => item._id === action.payload
      );

      if (existingIngredient && existingIngredient.count > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload
              ? { ...item, count: item.count - 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }
    case REPLACE_BUN: {
      return {
        ...state,
        bun: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
