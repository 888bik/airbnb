import { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { EntirePaginationWrapper } from "./style";

const EntirePagination = memo(() => {
  return (
    <EntirePaginationWrapper>
      <Pagination count={10} />
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
