import {SET_CURRENT_INGREDIENT, CLEAR_CURRENT_INGREDIENT} from './actions';

const initialState = {
    currentIngredient: null
};

const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.payload
            }
        };
        case CLEAR_CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: null
            }
        };
        default: {
            return state;
        }
    }
};
export default currentIngredientReducer;