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
            <img className=" mx-auto rounded-xl" src="https://i.ibb.co/ZYJnWyw/banner5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="https://i.ibb.co/r5W4q00/banner1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="https://i.ibb.co/PD3S9ZP/banner2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="https://i.ibb.co/m9y8bnW/banner3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
            <img className=" mx-auto rounded-xl" src="https://i.ibb.co/kyW4phj/banner4.jpg" alt="" />
        </SwiperSlide>
        
        
      </Swiper>
    </ >
  );
};

export default Banner;
