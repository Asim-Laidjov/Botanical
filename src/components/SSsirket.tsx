import React, {  } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {Autoplay } from 'swiper/modules';
const SSsirket:React.FC  = () => {
  
  

  return (
    <>

    <div className='logo-swiper  py-5'>
    <Swiper
        
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={40}
        pagination={{
          type: 'fraction',
        }}
      
        modules={[Autoplay]}
      
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          
        }}
        breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}

        className="mySwiper"
      >
        <SwiperSlide><img src="/images/Timer/p-logo1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/Timer/p-logo5.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
     

     
    </>
  );
}
export default SSsirket
