import { memo, useCallback } from "react";
import { EntireRoomsWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/index";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailInfo } from "@/store/modules/detail";

const EntireRooms = memo(() => {
  const { roomListData, totalCount, isLoading } = useSelector(
    (state: RootState) => ({
      roomListData: state.entire.RoomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const itemClick = useCallback(
    (itemData) => {
      dispatch(changeDetailInfo(itemData));
      navigate("/detail");
      window.scrollTo(0, 0);
    },
    [dispatch, navigate]
  );
  return (
    <EntireRoomsWrapper>
      <div className="title">共{totalCount}多处住宿</div>
      <div className="list">
        {roomListData.map((item) => {
          return (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
              itemClick={itemClick}
            />
          );
        })}
      </div>
      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
