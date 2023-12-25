import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import { error } from "console";
import { tenmien, productHomeInterface } from "../../../utils";


interface productsPopularState {
  loading: Boolean;
  error: string;
  data: {
    categoryID: number;
    name: string;
    products: productHomeInterface[];
  }[]; // lay mang khoang 5 cai
}

// Thunk functions
export const fetchProductsPopular = createAsyncThunk(
  "danhmuctong/fetchStatus",
  (categoryGroupId) => {
    return axios
      .get(`${tenmien}/api/sanpham/phobien`)
      .then((response) => response.data);
  }
);

const initialState: productsPopularState = {
  data: [],
  loading: false,
  error: "",
};
const productsPopularSlice = createSlice({
  name: "productsPopular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsPopular.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });
    builder.addCase(fetchProductsPopular.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductsPopular.rejected, (state, action) => {
      state.loading = false;
      state.data = [
        {
          categoryID: 1,
          name: "Sữa tươi",
          products: [
            {
              id: 1, //id san pham
              name: "Sữa bò Long Thành",
              thumbnail:
                "https://cuongdulich.com/assets/posts/1585766837-bo-sua-long-thanh-dac-san-dong-nai-2.jpg",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.3,
              category_name: "Sữa bò",
            },
            {
              id: 2, //id san pham
              name: "Sữa bò socola",
              thumbnail:
                "https://cdn.tgdd.vn/Products/Images/2386/80464/bhx/loc-4-hop-sua-tiet-trung-socola-dutch-lady-180ml-202104140022543100.jpg",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.3,
              category_name: "Sữa bò",
            },
          ],
        },
        {
          categoryID: 2,
          name: "Bánh quy",
          products: [
            {
              id: 1, //id san pham
              name: "Bánh quy Oreo",
              thumbnail:
                "https://cdn.tgdd.vn/Products/Images/3357/79861/bhx/banh-quy-nhan-kem-vani-oreo-goi-665g-202209120921387006.jpg",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.8,
              category_name: "Bánh quy sữa",
            },
            {
              id: 2, //id san pham
              name: "Bánh Blackpink",
              thumbnail:
                "https://lzd-img-global.slatic.net/g/p/f287e7eb1b70d94ce046431e2de7c1a0.jpg_720x720q80.jpg",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.8,
              category_name: "Bánh quy sữa",
            },
          ],
        },
        {
          categoryID: 3,
          name: "Thịt heo và thịt khác",
          products: [
            {
              id: 1, //id san pham
              name: "Thịt heo new deli",
              thumbnail:
                "https://cdn.vietnambiz.vn/171464876016439296/2021/6/1/z2526257923411e69d955b078aaeeabd4b2be4faf45cd9-1622537865484409026561.jpg",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.8,
              category_name: "Bánh quy sữa",
            },
            {
              id: 2, //id san pham
              name: "Thịt gà đóng hộp",
              thumbnail:
                "https://csfood.vn/wp-content/uploads/2021/09/16-min.png",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.8,
              category_name: "Bánh quy sữa",
            },
          ],
        },
        {
          categoryID: 4,
          name: "Nước hoa",
          products: [
            {
              id: 1, //id san pham
              name: "Nước hoa canal flower",
              thumbnail:
                "https://bizweb.dktcdn.net/100/110/910/files/b02c7f75-ec61-4209-9d3e-027ec27e894e-jpeg.jpg?v=1597213737716",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.8,
              category_name: "Bánh quy sữa",
            },
            {
              id: 2, //id san pham
              name: "Nước hoa canal flower",
              thumbnail:
                "https://bizweb.dktcdn.net/100/110/910/files/b02c7f75-ec61-4209-9d3e-027ec27e894e-jpeg.jpg?v=1597213737716",
              reg_price: 10000,
              discount_price: 5000,
              discount_percent: 10,
              rating: 4.8,
              category_name: "Bánh quy sữa",
            },
          ],
        },
        // .....
      ];

      // state.error = "Error happened!";
      state.error = action.error.message || "Some thing wrong!";
      // state.error = "Some thing wrong!";
    });
  },
});

export const productsPopularActions = productsPopularSlice.actions;
export default productsPopularSlice;
