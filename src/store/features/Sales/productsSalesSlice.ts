import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import { error } from "console";
import { tenmien, productHomeInterface } from "../../../utils";

export interface productsSalesData extends productHomeInterface {
  quantity: number, // so luong con ton / da ban
}
interface productsSalesState {
  loading: boolean;
  error: string;
  data: productsSalesData[];
}
// Thunk functions
export const fetchProductSales = createAsyncThunk(
  "danhmuctong/fetchStatus",
  () => {
    return axios.get(tenmien + "/api/sales/sanpham").then((response) => response.data);
  }
);

const initialState: productsSalesState = {
  data: [],
  loading: false,
  error: "",
};
const productsSalesSlice = createSlice({
  name: "productsSales",
  initialState,
  reducers: {
  //  
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductSales.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });
    builder.addCase(fetchProductSales.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductSales.rejected, (state, action) => {
      state.loading = false;
      state.data = [
        {
          id: 1, //id san pham
          name: "Sữa bò Long Thành",
          thumbnail:
            "https://bizweb.dktcdn.net/100/144/367/articles/sua-tuoi-edd60355-d601-4684-b461-0ffa984eb6f4.jpg?v=1611374579213",
          reg_price: 10000,
          discount_price: 5000,
          discount_percent: 10,
          rating: 4.3,
          category_name: "Sữa bò",
          quantity: 233,
        },
        {
          id: 2, //id san pham
          name: "Sữa bò Long Thành 100% thiên nhiên, ít béo, phù hợp cho người lớn tuổi và con nít",
          thumbnail:
            "https://bizweb.dktcdn.net/100/144/367/articles/sua-tuoi-edd60355-d601-4684-b461-0ffa984eb6f4.jpg?v=1611374579213",
          reg_price: 10000,
          discount_price: 5000,
          discount_percent: 10,
          rating: 4.3,
          category_name: "Sữa bò",
          quantity: 233,
        },
        {
          id: 3, //id san pham
          name: "Set 12 trứng gà tươi nhập khẩu Mỹ, tươi ngon chất lượng hảo hạng",
          thumbnail:
            "data:image/jpeg;base64,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",
          reg_price: 10000,
          discount_price: 5000,
          discount_percent: 10,
          rating: 3.9,
          category_name: "Trứng gà",
          quantity: 122,
        },
        {
          id: 4, //id san pham
          name: "Sữa bò Long Thành 100% thiên nhiên, ít béo, phù hợp cho người lớn tuổi và con nít",
          thumbnail:
            "https://bizweb.dktcdn.net/100/144/367/articles/sua-tuoi-edd60355-d601-4684-b461-0ffa984eb6f4.jpg?v=1611374579213",
          reg_price: 10000,
          discount_price: 5000,
          discount_percent: 10,
          rating: 4.3,
          category_name: "Sữa bò",
          quantity: 233,
        },
        {
          id: 5, //id san pham
          name: "Sữa bò Long Thành 100% thiên nhiên, ít béo, phù hợp cho người lớn tuổi và con nít",
          thumbnail:
            "https://bizweb.dktcdn.net/100/144/367/articles/sua-tuoi-edd60355-d601-4684-b461-0ffa984eb6f4.jpg?v=1611374579213",
          reg_price: 10000,
          discount_price: 5000,
          discount_percent: 10,
          rating: 4.3,
          category_name: "Sữa bò",
          quantity: 233,
        },
      ];
      // state.error = "Error happened!";
      state.error = action.error.message || "Some thing wrong!";
      // state.error = "Some thing wrong!";
    });
  },
});

export const productsSalesActions = productsSalesSlice.actions;
export default productsSalesSlice;
