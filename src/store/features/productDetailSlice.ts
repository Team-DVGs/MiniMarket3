import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface productDetailState {
  loading: Boolean;
  error: string;
  info: {
    id: number,
    thumbnail: string,
    name: string, 
    price: number,
    discount_percent: number,
    discount_price: number,
    description: string,
    rating: number,
    gallery: string[],
    category:{
        id: number,
        name: string
    }
    brand: {
        id: number,
        name: string
    }
  }
}
// Thunk functions
export const fetchProductDetail = createAsyncThunk(
  "danhmuctong/fetchStatus",
  () => {
    return axios
      .get("localhost/api/danhmuctonng")
      .then((response) => response.data);
  }
);

const initialState: productDetailState = {
  loading: false,
  error: "",
  info: {
    id: 0,
    thumbnail: "",
    name: "", 
    price: 0,
    discount_percent: 0,
    discount_price: 0,
    description: "",
    rating: 0,
    gallery: [],
    category: {
        id: 0,
        name: ""
    },
    brand: {
        id: 0,
        name: ""
    }
  }
};
const productDetailSlice = createSlice({
  name: "productDetail",
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
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.info = action.payload;
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.loading = false;
      state.info = {
        id: 0,
        thumbnail:
          "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
        name: "Giày loafer chunky đế độn 5cm tăng chiều cao, dễ phối đồ, thương hiệu Rebloom, chất liệu da",
        price: 34,
        discount_percent: 2,
        discount_price: 30,
        description: "Hello",
        rating: 4.2,
        gallery: [
          "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
          "https://boostify-nesst.myshopify.com/cdn/shop/products/product-10-1.jpg?v=1656924435&width=360",
          "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-10.jpg?v=1663128201&width=360",
          "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
          "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-4.jpg?v=1663128119&width=360",
          // "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-2.jpg?v=1663128083&width=360",
        ],
        category: {
          id: 1,
          name: "Nước trái cây",
        },
        brand: {
          id: 1,
          name: "Chinsu Food",
        },
      };
      state.error = action.error.message || "Some thing wrong!";
    });
  },
});

export const categoryGroupActions = productDetailSlice.actions;
export default productDetailSlice;
