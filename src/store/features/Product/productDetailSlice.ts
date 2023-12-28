import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tenmien } from "../../../utils";
import { productInfoInterface } from "../../../utils";

interface productDetailState {
  loading: boolean;
  error: string;
  data: productInfoInterface
}
// Thunk functions
export const fetchProductDetail = createAsyncThunk(
  "productDetailSlice/fetchProductDetail",
  async (id: string) => {
    try {
      const response = await axios.get(tenmien + "/api/sanpham/"+id);
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const initialState: productDetailState = {
  loading: false,
  error: "",
  data: {
    id: 0,
    thumbnail: "",
    name: "",
    reg_price: 0,
    discount_percent: 0,
    discount_price: 0,
    canonical: "",
    quantity: 0,
    rating: 0,
    description: "",
    article: "",
    galleries: [],
    brand: {
      id: 0,
      name: "",
      // thumbnail: "",
    },
    category: {
      id: 0,
      name: ""
    }
  },
};
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.loading = false;
      state.data = {
        id: 1000,
        thumbnail:
          "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/sellingpoint.jpg",
        name: "Xúc xích hồ lô C.P gói 500g",
        reg_price: 106000,
        discount_percent: 0,
        discount_price: 106000.00,
        canonical: "500g",
        quantity: 28,
        rating: 4.4,
        description:
          "Xúc xích C.P với nguồn nguyên liệu này được chọn lọc kĩ càng, chế biến trên dây chuyền hiện đại. Xúc xích hồ lô C.P gói 500g là sản phẩm xúc xích có vị ngon tự nhiên, tiết kiệm tối đa thời gian nấu nướng mà vẫn có món ăn nhanh thơm ngon cho bữa ăn của mọi gia đình.",
        article: "",
        galleries: [
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/sellingpoint.jpg",
            sort: 7488,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931272126.jpg",
            sort: 7489,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931275720.jpg",
            sort: 7490,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931278635.jpg",
            sort: 7491,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931281448.jpg",
            sort: 7492,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931386634.jpg",
            sort: 7493,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931389944.jpg",
            sort: 7494,
            product_id: 1000,
          },
          {
            thumbnail:
              "https://cdn.tgdd.vn/Products/Images/7618/286781/bhx/xuc-xich-ho-lo-cp-goi-500g-202208190931392621.jpg",
            sort: 7495,
            product_id: 1000,
          },
          {
            thumbnail: "https://i.ytimg.com/vi/LOFaFLSaBm8/sddefault.jpg",
            sort: 7496,
            product_id: 1000,
          },
        ],
        brand: {
          id: 2,
          name: "C.P",
        },
        category: {
          id: 15,
          name: "Giày thể thao, sandals"
        }
      };

      state.error = action.error.message || "Some thing wrong!";
    });
  },
});

export const categoryGroupActions = productDetailSlice.actions;
export default productDetailSlice;
