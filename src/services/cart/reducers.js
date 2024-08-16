import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REPLACE_BUN,
  MOVE_INGREDIENT,
  EMPTY_CART,
} from "./actions";

const initialState = {
  cart: [],
  bun: null,
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
    case EMPTY_CART: {
      return {
        ...state,
        cart: [],
        bun: null,
      };
    }
    default: {
      return state;
    }
  }
};
