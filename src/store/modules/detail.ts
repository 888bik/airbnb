import { createSlice } from "@reduxjs/toolkit";

export const DetailSlice = createSlice({
  name: "detail",
  initialState: {
    DetailInfo: {},
  },
  reducers: {
    changeDetailInfo(state, { payload }) {
      state.DetailInfo = payload;
    },
  },
});
export const { changeDetailInfo } = DetailSlice.actions;
export default DetailSlice.reducer;
