import { memo, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { EntirePaginationWrapper } from "./style";
import { useSelector } from "react-redux";
import {
  changeCurrentPage,
  fetchEntireDataAction,
} from "@/store/modules/entire";
import { RootState, useAppDispatch } from "@/store";

const EntirePagination = memo(() => {
  const dispatch = useAppDispatch();
  const { currentPage, totalCount, roomList } = useSelector(
    (state: RootState) => {
      return {
        currentPage: state.entire.currentPage,
        totalCount: state.entire.totalCount,
        roomList: state.entire.RoomList,
      };
    }
  );
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = (currentPage - 1) * 20 + 1;
  const endCount = currentPage * 20;
  function handleChange(_, page) {
    //滚到顶部
    window.scrollTo(0, 0);
    //更改页码获取对应的数据
    dispatch(changeCurrentPage(page));
  }
  useEffect(() => {
    dispatch(fetchEntireDataAction());
  }, [currentPage]);
  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={handleChange} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
