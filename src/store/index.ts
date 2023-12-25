import {configureStore} from "@reduxjs/toolkit";
import categoryGroupSlice from "./features/Collection/categoryGroupSlice";
import productDetailSlice from "./features/Product/productDetailSlice";
import productListSlice from "./features/Products/productListSlice";
import cartSlice from "./features/Cart/cartSlice";
import salesSlice from "./features/Sales/salesSlice";
import productsSalesSlice from "./features/Sales/productsSalesSlice";
import categoryGroupProductsSlice from "./features/Collection/categoryGroupProductsSlice";
import productsBestSellSlice from "./features/Home/productsBestSellSlice";
import productsPopularSlice from "./features/Home/productsPopularSlice";
import brandSlice from "./features/CategoryProducts/brandSlice";
import categorySlice from "./features/CategoryProducts/categorySlice";
import categoryGroupRandSlice from "./features/CategoryProducts/categoryGroupRandSlice";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReviewSlice from "./features/Product/productReviewSlice";


export const store = configureStore({
  reducer: {
    categoryGroup: categoryGroupSlice.reducer,
    category: categorySlice.reducer,
    productDetail: productDetailSlice.reducer,
    productList: productListSlice.reducer,  
    cart: cartSlice.reducer,
    sales: salesSlice.reducer,
    productsSales: productsSalesSlice.reducer,
    categoryGroupProducts: categoryGroupProductsSlice.reducer,
    productsBestSell: productsBestSellSlice.reducer,
    productsPopular: productsPopularSlice.reducer,
    brand: brandSlice.reducer,
    categoryGroupRand: categoryGroupRandSlice.reducer,
    productReview: productReviewSlice.reducer
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;