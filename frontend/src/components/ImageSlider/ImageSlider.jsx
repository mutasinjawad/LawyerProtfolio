import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App({ images }) {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="bg-white custom-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
