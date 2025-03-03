import { memo } from "react";
import { DetailWrapper } from "./style";
import DetailPicture from "./detail-pictures";

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture />
    </DetailWrapper>
  );
});

export default Detail;
