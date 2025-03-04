import { memo } from "react";
import { DemoWrapper } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const Demo = memo(() => {
  return (
    <DemoWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </DemoWrapper>
  );
});

export default Demo;
