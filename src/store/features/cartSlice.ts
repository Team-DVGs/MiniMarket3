import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";


interface cartState {
  loading: boolean;
  error: string;
  info: {
    id: number;
    quantity: number;
    total: number;
    saved: number;
    user_id: number;
    list: {
        id: number,
        thumbnail: string,
        name: string,
        reg_price: number,
        discount_price: number,
        quanity: number
    }[]
  };
}

// Thunk functions
export const fetchCart = createAsyncThunk('danhmuctong/fetchStatus', 
    () => {
        return axios
            .get('localhost/api/danhmuctonng')
            .then((response) => response.data);
    }
)  

const initialState: cartState = {
    loading: false, 
    error: "",
    info:{
        id: 0,
        quantity: 0,
        total: 0,
        saved: 0,
        user_id: 0,
        list: []
    }
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, state => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.loading = false;
            state.info = action.payload;
        })
        builder.addCase(fetchCart.rejected, (state, action) => {
            state.loading = false;
            state.info = {
              id: 1,
              quantity: 10,
              total: 300000,
              saved: 40000,
              user_id: 1,
              list: [
                {
                  id: 1,
                  thumbnail:
                    "https://down-vn.img.susercontent.com/file/sg-11134201-22110-ulgejzkxkbkv44",
                  name: "[Mã 12MINI7 giảm 40K đơn 150K] Giày derby đế đốc mũi có viền, đế cao su chống trơn size 39 đến 43",
                  reg_price: 189000,
                  discount_price: 150000,
                  quanity: 2,
                },
                {
                  id: 2,
                  thumbnail:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liecya5q3a3670",
                  name: "Giày loafer Rebloom - Giày da nữ đế răng cưa cao 5cm phong cách RETRO dành cho nữ - giày trending năm 2023",
                  reg_price: 250000,
                  discount_price: 210000,
                  quanity: 1,
                },
                // {
                //   id: 2,
                //   thumbnail:
                //     "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liecya5q3a3670",
                //   name: "Giày loafer Rebloom - Giày da nữ đế răng cưa cao 5cm phong cách RETRO dành cho nữ - giày trending năm 2023",
                //   reg_price: 250000,
                //   discount_price: 210000,
                //   quanity: 1,
                // },
                // {
                //   id: 2,
                //   thumbnail:
                //     "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liecya5q3a3670",
                //   name: "Giày loafer Rebloom - Giày da nữ đế răng cưa cao 5cm phong cách RETRO dành cho nữ - giày trending năm 2023",
                //   reg_price: 250000,
                //   discount_price: 210000,
                //   quanity: 1,
                // },
              ],
            };
            state.error = action.error.message || "Some thing wrong";
        })
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;