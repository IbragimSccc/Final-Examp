import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Sw() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="./images/Google Pixel 6 Pro.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Google Pixel 6 Pro.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Google Pixel 6 Pro.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Google Pixel 6 Pro.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Google Pixel 6 Pro.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
