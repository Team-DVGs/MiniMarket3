import {configureStore} from "@reduxjs/toolkit";
import categoryGroupSlice from "./features/categoryGroupSlice";
import productDetailSlice from "./features/productDetailSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    categoryGroup: categoryGroupSlice.reducer,
    productDetail: productDetailSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;