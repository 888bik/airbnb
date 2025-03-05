import { memo, useState } from "react";
import { DetailPictureWrapper } from "./style";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/store";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailPicture = memo(() => {
  const [showBrowser, setShowBrowser] = useState(false);
  const { detailInfo } = useSelector((state: RootState) => {
    return {
      detailInfo: state.detail.DetailInfo,
    };
  }, shallowEqual);
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
          {detailInfo.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={() => setShowBrowser(true)}>
        显示更多照片
      </div>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={() => setShowBrowser(false)}
        />
      )}
    </DetailPictureWrapper>
  );
});

export default DetailPicture;
