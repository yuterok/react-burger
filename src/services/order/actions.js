export const FETCH_ORDER_REQUEST = 'FETCH_ORDER_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';

export const fetchOrderRequest = () => ({
type: FETCH_ORDER_REQUEST,
});

export const fetchOrderSuccess = (ingredients) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: ingredients,
});

export const fetchOrderFailure = (error) => ({
  type: FETCH_ORDER_FAILURE,
  payload: error,
});


const apiLink = 'https://norma.nomoreparties.space/api/orders'

export const fetchOrder = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_INGREDIENTS_REQUEST' });

    try {
      const response = await fetch(apiLink);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_INGREDIENTS_SUCCESS', payload: data.data });
    } catch (error) {
      dispatch({ type: 'FETCH_INGREDIENTS_FAILURE', error: error.message });
      console.log('error', error);
    }
  };
};