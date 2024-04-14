import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Pagination, Scrollbar,  Navigation } from "swiper/modules";

const Banner = () => {

   
  return (
    <>
      <Swiper
      
      navigation = { true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination,  Scrollbar, Navigation]}
        className="mySwiper border h-[550px] rounded-xl my-10"
      >
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="../../public/images/banner1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="../../public/images/banner2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="../../public/images/banner3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="../../public/images/banner4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="../../public/images/banner5.jpg" alt="" />
        </SwiperSlide>
        
        
      </Swiper>
    </ >
  );
};

export default Banner;
