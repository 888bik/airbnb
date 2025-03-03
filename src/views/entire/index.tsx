import React, { memo, useEffect } from "react";
import { EntireWrapper } from "./style";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import { fetchEntireDataAction } from "@/store/modules/entire";
import { useAppDispatch } from "@/store";
import EntirePagination from "./c-cpns/entire-pagination";

const Entire = memo(() => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
