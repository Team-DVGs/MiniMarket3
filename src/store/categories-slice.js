import {createSlice} from "@reduxjs/toolkit";
import { createJsxSelfClosingElement } from "typescript";

const cateSlice =createSlice({
    name: 'category',
    initialState: {
        list: [],
        n: 0,

    },
    reducers:{
        updateCate(state){
            state.n = state.n+1;
        }
    }

})


export const cateActions = cateSlice.actions;
export default cateSlice;