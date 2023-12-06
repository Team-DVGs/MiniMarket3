import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface productListState {
  loading: boolean;
  error: string;
  info: {
    // id: number;
    // thumbnail: string;
    // name: string;
    // discount_price: number;
    // discount_percent: number;
    // discount_price: number;
    // rating: number;
    // category: {
    //   id: number;
    //   name: string;
    // };
    id: number;
    thumbnail: string;
    name: string;
    rating: number;
    reg_price: number;
    discount_price: number;
    category: string;
  }[];
}
// Thunk functions
export const fetchProductList = createAsyncThunk(
  "danhmuctong/fetchStatus",
  () => {
    return axios
      .get("localhost/api/danhmuctonng")
      .then((response) => response.data);
  }
);

const initialState: productListState = {
  loading: false,
  error: "",
  info: [
    // {
    //   id: 0,
    //   thumbnail: "",
    //   name: "",
    //   price: 0,
    //   discount_percent: 0,
    //   discount_price: 0,
    //   shortdesc: "",
    //   description: "",
    //   rating: 0,
    //   gallery: [],
    //   category: {
    //     id: 0,
    //     name: "",
    //   },
    //   brand: {
    //     id: 0,
    //     name: "",
    //   },
    // },
  ],
};
const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    // update(
    //   state,
    //   action: PayloadAction<{
    //   }>
    // ) {
    //   state.list = action.payload.list;
    // },
    // add(state, action: PayloadAction<{ name: string; thumbnail: string }>) {
    //   state.list.push({
    //     ...state.list,
    //     id: state.list.length + 1,
    //     name: action.payload.name,
    //     thumbnail: action.payload.thumbnail,
    //   });
    // },
    // delete(state, action: PayloadAction<{ id: number }>) {
    //   state.list.filter((item) => item.id !== action.payload.id);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.info = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.loading = false;
      state.info = [
        {
          id: 1,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
          name: "Gorton’s Beer Battered Fish Fillets",
          rating: 4.5,
          discount_price: 23.85,
          reg_price: 28,
          category: "Bánh kẹo"
        },
        {
          id: 2,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-3.jpg?v=1663128562&width=360",
          name: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          discount_price: 32.45,
          reg_price: 37.96,
          category: "Bánh kẹo"
        },
        {
          id: 3,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
          name: "Seeds of Change Brown & Red Rice",
          rating: 3.7,
          discount_price: 72,
          reg_price: 80,
          category: "Bánh kẹo"
        },
        {
          id: 4,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/product-2-2_3f29934d-43f4-497f-a3c5-56b7159c91af.jpg?v=1663051490&width=360",
          name: "Sahale Crumble Cashew Mix Snacks",
          rating: 2,
          discount_price: 45.3,
          reg_price: 40,
          category: "Bánh kẹo"
        },
        {
          id: 5,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
          name: "Gorton’s Beer Battered Fish Fillets",
          rating: 4.8,
          discount_price: 23.85,
          reg_price: 28,
          category: "Bánh kẹo"
        },
        {
          id: 6,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-3.jpg?v=1663128562&width=360",
          name: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 5,
          discount_price: 32.45,
          reg_price: 37.96,
          category: "Bánh kẹo"
        },
        {
          id: 7,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
          name: "Seeds of Change Brown & Red Rice",
          rating: 4.1,
          discount_price: 72,
          reg_price: 80,
          category: "Bánh kẹo"
        },
        {
          id: 8,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/product-2-2_3f29934d-43f4-497f-a3c5-56b7159c91af.jpg?v=1663051490&width=360",
          name: "Sahale Crumble Cashew Mix Snacks",
          rating: 3.9,
          discount_price: 45.3,
          reg_price: 40,
          category: "Bánh kẹo"
        },
        {
          id: 9,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
          name: "Gorton’s Beer Battered Fish Fillets",
          rating: 4.5,
          discount_price: 23.85,
          reg_price: 28,
          category: "Bánh kẹo"
        },
        {
          id: 10,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-3.jpg?v=1663128562&width=360",
          name: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 5,
          discount_price: 32.45,
          reg_price: 37.96,
          category: "Bánh kẹo"
        },
        {
          id: 11,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
          name: "Seeds of Change Brown & Red Rice",
          rating: 5,
          discount_price: 72,
          reg_price: 80,
          category: "Bánh kẹo"
        },
        {
          id: 12,
          thumbnail:
            "https://boostify-nesst.myshopify.com/cdn/shop/products/product-2-2_3f29934d-43f4-497f-a3c5-56b7159c91af.jpg?v=1663051490&width=360",
          name: "Sahale Crumble Cashew Mix Snacks",
          rating: 5,
          discount_price: 45.3,
          reg_price: 40,
          category: "Bánh kẹo"
        },
      ];
      state.error = action.error.message || "Some thing wrong!";
    });
  },
});

export const productListActions = productListSlice.actions;
export default productListSlice;
