import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tenmien } from "../../../utils";

interface productReviewState {
  loading: boolean;
  error: string;
  data: {
    id: number, 
    fullname: string,
    created_at: string,
    rating: number,
    title: string,
    comment: string
  }[];
}
// Thunk functions
export const fetchProductReview = createAsyncThunk(
  "productReview/fetchProductReview",
  async (id:string) => {
    try {
      const response = await axios.get(tenmien + "/api/sanpham/"+id+"/danhgia");
      return response.data;
    } catch (err) {
      throw err;
    }
  }
);

const initialState: productReviewState = {
  loading: false,
  error: "",
  data: []
};
const productReviewSlice = createSlice({
  name: "productReview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductReview.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.data = [];
    });
    builder.addCase(fetchProductReview.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductReview.rejected, (state, action) => {
      state.loading = false;
      state.data = [
        {
          id: 1,
          fullname: "Dũng CT",
          created_at: "21/12/2023",
          rating: 4,
          title: "Chê, sản phẩm như ***",
          comment:
            "Tôi thật sự không thể giấu được sự thất vọng và tức giận của mình khi trải nghiệm sản phẩm này. Nếu có thể, tôi muốn đánh giá âm hơn một sao, vì sản phẩm này không đáng đồng tiền bát gạo. Đầu tiên, chất lượng của nó thật sự kém, từ vật liệu đến thiết kế, tất cả đều đánh mất sự chắc chắn và tinh tế. Sự giả mạo từ hình ảnh quảng cáo và thực tế là rõ ràng, khiến tôi cảm thấy như mình đã bị lừa dối.",
        },
        {
          id: 2,
          fullname: "Ngọc Anh",
          created_at: "22/12/2023",
          rating: 3,
          title: "Gian lận về chất lượng",
          comment:
            "Sản phẩm này là một ví dụ điển hình về sự gian lận về chất lượng. Khi nhận được, tôi đã ngạc nhiên vì khác biệt lớn giữa hình ảnh trên trang web và sản phẩm thực tế. Vật liệu kém chất lượng và họa tiết in độc đáo đã biến thành một mớ lộn xộn không hài hòa. Ngoài ra, sản phẩm còn gặp vấn đề về hiệu suất, làm cho việc sử dụng trở nên khó khăn. Một sự mất lòng tin lớn đối với nhãn hiệu này!",
        },
        {
          id: 3,
          fullname: "Trang Lê",
          created_at: "23/12/2023",
          rating: 3,
          title: "Không đáng mua!",
          comment:
            "Đã có lẽ đây là một trong những lựa chọn tồi nhất của tôi khi mua sắm trực tuyến. Sản phẩm không chỉ không đáp ứng kỳ vọng của tôi mà còn gây thất vọng lớn. Chất lượng kém, thiết kế không thực tế, và dịch vụ khách hàng không có sự chuyên nghiệp. Mọi nỗ lực để giải quyết vấn đề đều thất bại. Tôi không khuyến khích bất kỳ ai mua sản phẩm từ nhãn hiệu này.",
        },
        {
          id: 4,
          fullname: "Hồng Trần",
          created_at: "24/12/2023",
          rating: 4,
          title: "Sản phẩm thảm họa",
          comment:
            "Không thể tin được là một sản phẩm có thể tồn tại trên thị trường với chất lượng như vậy. Tôi đã mua nó dựa trên đánh giá tích cực trên trang web, nhưng giờ đây tôi thấy những đánh giá đó là giả mạo. Chất liệu kém, độ bền thấp, và hiệu suất không thể chấp nhận. Đồng thời, dịch vụ khách hàng cũng không có trách nhiệm. Tôi hy vọng người khác sẽ tránh xa để không phải trải qua cảm giác thất vọng như tôi.",
        },
        {
          id: 5,
          fullname: "Minh Hoàng",
          created_at: "25/12/2023",
          rating: 4,
          title: "Sản phẩm giả mạo!",
          comment:
            "Mua sản phẩm này là một sai lầm lớn nhất của tôi trong năm. Tôi đã hy vọng rằng nó sẽ đáp ứng mong đợi, nhưng thực tế là nó đơn giản chỉ là một bản sao giả mạo của những gì được quảng cáo. Chất lượng kém, không giống hình ảnh trên trang web, và sự thiếu chuyên nghiệp trong dịch vụ khách hàng khiến tôi thất vọng đến mức không thể tả. Không bao giờ mua sản phẩm từ nhãn hiệu này lần nữa!",
        },
        {
          id: 6,
          fullname: "Thu Hà",
          created_at: "26/12/2023",
          rating: 5,
          title: "Tệ hại về mọi mặt",
          comment:
            "Sản phẩm này thực sự là một thảm họa từ đầu đến cuối. Chất lượng kém, hiệu suất không đáng kể, và dịch vụ khách hàng quá tệ. Tôi đã đưa ra phản ánh của mình và hy vọng họ sẽ giải quyết vấn đề, nhưng không có phản ứng nào từ phía họ. Điều này chứng minh sự không chuyên nghiệp và thiếu trách nhiệm. Nếu bạn đang xem xét sản phẩm này, hãy tránh xa và tìm kiếm các lựa chọn khác.",
        },
      ];

      state.error = action.error.message || "Some thing wrong!";
    });
  },
});

export const categoryGroupActions = productReviewSlice.actions;
export default productReviewSlice;
