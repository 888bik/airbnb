import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IHomeState } from "@/types/home";
import { IEntireState } from "@/types/entire";
import { IDetailState } from "@/types/detail";
import detailReducer from "./modules/detail";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  home: IHomeState;
  entire: IEntireState;
  detail: IDetailState;
};
//创建类型化的hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
