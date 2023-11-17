import {configureStore} from "@reduxjs/toolkit";
import cateSlice from "./categories-slice";


const store = configureStore({
    reducer:{
        cate: cateSlice.reducer
    }
});

export default store;