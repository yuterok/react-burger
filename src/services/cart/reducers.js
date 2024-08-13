import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REPLACE_BUN,
  MOVE_INGREDIENT,
} from "./actions";

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
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.key !== action.payload),
      };
    }
    case REPLACE_BUN: {
      return {
        ...state,
        bun: action.payload,
      };
    }
    case MOVE_INGREDIENT: {
      const { dragIndex, dropIndex } = action.payload;
      const newCart = [...state.cart];
      newCart.splice(dragIndex, 0, newCart.splice(dropIndex, 1)[0]);

      return {
        ...state,
        cart: newCart,
      };
    }
    default: {
      return state;
    }
  }
};
