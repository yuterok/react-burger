import {FETCH_INGREDIENTS_REQUEST, FETCH_INGREDIENTS_SUCCESS, FETCH_INGREDIENTS_FAILURE} from './actions'

const initialState = {
    items: [],
    itemsRequest: false,
    itemsFailed: false
};

const ingredientsReducer = (state = initialState, action) => {
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