import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../public/style/sliderStyle.css"
import baner1 from '../../public/photo/baner1.jpg'
import baner2 from '../../public/photo/baner2.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img src={baner1} /></SwiperSlide>
        <SwiperSlide ><img src={baner2} /></SwiperSlide>

      </Swiper>
    </>
  );
}
