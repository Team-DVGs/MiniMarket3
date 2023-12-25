import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import { error } from "console";


interface categoryGroupData {
  id: number;
  name: string;
  thumbnail: string;
}
interface categoryGroupState {
  loading: boolean;
  error: string;
  data: categoryGroupData[];
}
// Thunk functions
export const fetchCategoryGroup = createAsyncThunk(
  "danhmuctong/fetchStatus",
  () => {
    return axios
      .get("/api/danhmuc")
      .then((response) => response.data);
  }
);

const initialState: categoryGroupState = {
  data: [],
  loading: false,
  error: "",
};
const categoryGroupSlice = createSlice({
  name: "categoryGroup",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryGroup.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCategoryGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategoryGroup.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      // state.error = "Error happened!";
      state.error = action.error.message || "Some thing wrong!";
      // state.error = "Some thing wrong!";
    });
  },
});

export const categoryGroupActions = categoryGroupSlice.actions;
export default categoryGroupSlice;
