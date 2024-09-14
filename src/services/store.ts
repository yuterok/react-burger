import { createStore, applyMiddleware } from 'redux';
import {thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducer';
import { useDispatch, TypedUseSelectorHook, useSelector  } from 'react-redux';


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
