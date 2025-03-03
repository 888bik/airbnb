import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export const fetchEntireDataAction = createAsyncThunk(
  "entire/fetchData",
  (_, { dispatch, getState }) => {
    let offset = ((getState() as RootState).entire.currentPage - 1) * 20;
    dispatch(changeLoadingStatus(true));
    try {
      getEntireRoomList(offset, 20).then((res) => {
        dispatch(changeEntireRoomList(res));
        dispatch(changeLoadingStatus(false));
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const entireSlice = createSlice({
  name: "entire",
  initialState: {
    RoomList: [],
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
  },
  reducers: {
    changeEntireRoomList(state, { payload }) {
      state.RoomList = payload.list;
      state.totalCount = payload.totalCount;
    },
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    changeLoadingStatus(state, { payload }) {
      state.isLoading = payload;
    },
  },
});
export const { changeEntireRoomList, changeCurrentPage, changeLoadingStatus } =
  entireSlice.actions;
export default entireSlice.reducer;
