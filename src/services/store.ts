import rootReducer from "./root-reducer";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {
  feedMiddleware,
  profileOrdersMiddleware,
} from "./order-info/middleware";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // иначе вылезало предупреждение при выполнении экшенов WS_SUCCESS
    }).concat(feedMiddleware, profileOrdersMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
