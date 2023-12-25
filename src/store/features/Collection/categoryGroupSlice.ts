import {PayloadAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import { error } from "console";
import { tenmien } from "../../../utils";

// import { createJsxSelfClosingElement } from "typescript";



interface categoryGroupData {
  id: number,
  name: string,
  thumbnail: string
}
interface categoryGroupState {
    loading: boolean,
    error: string,
    data: categoryGroupData[]
}
// Thunk functions
export const fetchCategoryGroup = createAsyncThunk('danhmuctong/fetchStatus', 
    () => {
        return axios
            .get(tenmien + '/api/danhmuc')
            .then((response) => response.data);
    }
)   

const initialState: categoryGroupState = {
    data: [],
    loading: false,
    error: ''
}
const categoryGroupSlice = createSlice({
    name: 'categoryGroup',
    initialState,
    reducers:{
        update(state, action: PayloadAction<{data: {id: number, name:string, thumbnail: string}[]}>){
            state.data  = action.payload.data;
        },
        add(state, action: PayloadAction<{name: string, thumbnail:string}>){
            state.data.push({
                ...state.data,
                id: state.data.length+1,
                name: action.payload.name,
                thumbnail: action.payload.thumbnail
            })
        },
        delete(state, action: PayloadAction<{id: number}>){
            state.data.filter(item => item.id!==action.payload.id);
        }

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchCategoryGroup.pending, state =>{
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchCategoryGroup.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchCategoryGroup.rejected, (state ,action) => {
            state.loading = false;
            state.data = [
              {
                id: 1,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
                name: "Cake and Milk",
              },
              {
                id: 2,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
                name: "Organic Kiwi",
              },
              {
                id: 3,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
                name: "Peach",
              },
              {
                id: 4,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
                name: "Cake and Milk",
              },
              {
                id: 5,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
                name: "Organic Kiwi",
              },
              {
                id: 6,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
                name: "Peach",
              },
              {
                id: 7,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
                name: "Cake and Milk",
              },
              {
                id: 8,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
                name: "Organic Kiwi",
              },
              {
                id: 9,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
                name: "Peach",
              },
              {
                id: 10,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
                name: "Cake and Milk",
              },
              {
                id: 11,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
                name: "Organic Kiwi",
              },
              {
                id: 12,
                thumbnail:
                  "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
                name: "Peach",
              },
            ];
            // state.error = "Error happened!";
            state.error = action.error.message || "Some thing wrong!";
            // state.error = "Some thing wrong!";
        })
    }
})


export const categoryGroupActions = categoryGroupSlice.actions;
export default categoryGroupSlice;