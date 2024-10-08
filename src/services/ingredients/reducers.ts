import {IngredientType} from '../../utils/types';

import {FETCH_INGREDIENTS_REQUEST, FETCH_INGREDIENTS_SUCCESS, FETCH_INGREDIENTS_FAILURE, FetchIngredientsActions} from './actions';

interface IngredientsState {
    items: IngredientType[];
    itemsRequest: boolean;
    itemsFailed: boolean;
}
export const initialState: IngredientsState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false
};

const ingredientsReducer = (state = initialState, action: FetchIngredientsActions): IngredientsState => {
    switch (action.type){
        case FETCH_INGREDIENTS_REQUEST: {
            return {
                ...state,
                itemsRequest: true,
                itemsFailed: false,
            };
        }
        case FETCH_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                items: action.payload,
                itemsRequest: false,
                itemsFailed: false,
            };
        }
        case FETCH_INGREDIENTS_FAILURE: {
            return {
                ...state,
                itemsFailed: true,
                itemsRequest: false,
            };
        }
        default: {
            return state;
        }
    }
}

export default ingredientsReducer;