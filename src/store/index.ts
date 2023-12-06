import {configureStore} from "@reduxjs/toolkit";
import categoryGroupSlice from "./features/categoryGroupSlice";
import productDetailSlice from "./features/productDetailSlice";
import productListSlice from "./features/productListSlice";
import cartSlice from "./features/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    categoryGroup: categoryGroupSlice.reducer,
    productDetail: productDetailSlice.reducer,
    productList: productListSlice.reducer,  
    cart: cartSlice.reducer
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;