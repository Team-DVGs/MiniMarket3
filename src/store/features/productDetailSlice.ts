import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface productDetailState {
  loading: boolean;
  error: string;
  info: {
    id: number,
    thumbnail: string,
    name: string, 
    price: number,
    discount_percent: number,
    discount_price: number,
    shortdesc: string,
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
    shortdesc: "",
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
        shortdesc: `Cải thìa của Bách hóa Xanh được nuôi trồng và đóng gói theo những tiêu chuẩn nghiêm ngặt, bảo đảm các tiêu chuẩn xanh - sach, chất lượng và an toàn với người dùng. Vị cải giòn, ngọt, mát và chứa nhiều chất xơ, hàm lượng dinh dưỡng cao nên thường được dùng để chế biến các món rau xào hoặc luộc.`,
        description: `Đôi nét về thương hiệu\nKiddy là thương hiệu dầu ăn cho trẻ em thuộc Công ty TNHH CALOFIC, thấu hiểu được những nỗi lo lắng của các bậc phụ huynh về việc sử dụng dầu ăn tốt và an toàn cho sức khỏe của trẻ, thương hiệu Kiddy đã ra đời nhằm cung cấp cho thị trường một dòng sản phẩm cao cấp, bổ sung đầy đủ các loại dinh dưỡng cần thiết cho sự phát triển toàn diện của trẻ nhỏ. Thành phần dinh dưỡng trong sản phẩm
          Thành phần dinh dưỡng trong dầu cá hồi Kiddy bao gồm các loại dầu đậu nành tinh luyện, dầu gạo lứt, dầu hạt cải tinh luyện và dầu mè thơm, ngoài ra dầu cá hồi Kiddy còn chứa nhiều chất dinh dưỡng rất cần thiết như Omega 3,6,9, Vitamin A, Vitamin E và các axit béo.

          Trong 100ml dầu cá hồi Kiddy có chứa khoảng 820 calo.

          Tác dụng của sản phẩm với sức khỏe
          Các chất DHA, EPA tự nhiên, Omega 3 và các axit béo hữu ích khác giúp phát triển não bộ.

          Hỗ trợ phát triển thể chất toàn diện hơn.

          Thích hợp với trẻ bị suy dinh dưỡng, thiếu cân.

          Cung cấp dinh dưỡng cho phụ nữ mang thai.

          Giúp phát triển thị lực và ngăn ngừa các bệnh về mắt.`,
        rating: 4.2,
        gallery: [
          "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
          "https://boostify-nesst.myshopify.com/cdn/shop/products/product-10-1.jpg?v=1656924435&width=360",
          "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-10.jpg?v=1663128201&width=360",
          // "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
          // "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-4.jpg?v=1663128119&width=360",
          // "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-2.jpg?v=1663128083&width=360",
          // "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
          // "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-4.jpg?v=1663128119&width=360",
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
