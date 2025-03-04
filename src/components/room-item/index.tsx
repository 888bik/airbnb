import { memo, useRef } from "react";
import { ItemRoomWrapper } from "./style";
import { IRoomInfo } from "@/types/home";
import Rating from "@mui/material/Rating";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface IProps {
  itemData: IRoomInfo;
  itemWidth?: string;
  key: number;
  itemClick?: (itemData: IRoomInfo) => void;
}
const RoomItem = memo((props: IProps) => {
  const { itemData, itemWidth = "25%", itemClick } = props;
  const sliderRef = useRef(null);
  //事件处理
  function handleItemClick(itemData) {
    if (itemClick) {
      itemClick(itemData);
    }
  }
  function handleControlClick(event, isRight: boolean) {
    event.stopPropagation();
    if (isRight) {
      sliderRef.current.swiper.slideNext();
    } else {
      sliderRef.current.swiper.slidePrev();
    }
  }
  return (
    <ItemRoomWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $itemWidth={itemWidth}
    >
      <div className="inner" onClick={() => handleItemClick(itemData)}>
        {/* 轮播图 */}
        <div className="slider">
          <div className="control">
            <div
              className="btn left"
              onClick={(e) => handleControlClick(e, false)}
            >
              <IconArrowLeft width="30" height="30" />
            </div>
            <div
              className="btn right"
              onClick={(e) => handleControlClick(e, true)}
            >
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <Swiper ref={sliderRef}>
            {itemData.picture_urls.map((item) => {
              return (
                <SwiperSlide key={item}>
                  <div className="room-img">
                    <img src={item} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* <div className="room-img">
            <img
              src={itemData.picture_url}
              alt=""
              // onClick={() => handleItemClick(itemData)}
            />
          </div> */}
        </div>
        {/* 单张图片展示 */}
        <div className="desc">{itemData.verify_info.messages?.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}/晚</div>
      </div>
      <div className="bottom">
        <Rating
          name="half-rating-read"
          defaultValue={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
        />
        <span className="count">{itemData.reviews_count}</span>
        {itemData.bottom_info && (
          <span className="extra">{itemData.bottom_info?.content}</span>
        )}
      </div>
    </ItemRoomWrapper>
  );
});

export default RoomItem;
