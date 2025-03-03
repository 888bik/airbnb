import { IRoomInfo } from "./home";

export interface IEntireState {
  RoomList: IRoomInfo[];
  totalCount: number;
  currentPage: number;
  isLoading: boolean;
}
