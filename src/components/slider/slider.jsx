

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";


import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderBox() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./images/iPhone 13 Pro-Max.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Samsung Galaxy S21-Ultra.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/OnePlus 9-Pro.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Google Pixel 6-Pro.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
