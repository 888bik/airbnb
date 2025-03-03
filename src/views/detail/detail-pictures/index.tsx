import { memo } from "react";
import { DetailPictureWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/store";

const DetailPicture = memo(() => {
  const { detailInfo } = useSelector((state: RootState) => {
    return {
      detailInfo: state.detail.DetailInfo,
    };
  }, shallowEqual);
  console.log(detailInfo);
  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={detailInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo.picture_urls.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
    </DetailPictureWrapper>
  );
});

export default DetailPicture;
