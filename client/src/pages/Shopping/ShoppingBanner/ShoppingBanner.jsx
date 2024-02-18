import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const ShoppingBanner = () => {
    
      return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper mySwiper2 swiper-container h-[1200px]"
      >
        <SwiperSlide>
          <img
            className="bg-cover"
            src="https://i.ibb.co/p34c6K4/shopping-bag-cart.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/bPdYtg3/fsdfdsf.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/6vTPyRX/black-friday-elements-assortment.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/230pkLN/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg"
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
      );
};

export default ShoppingBanner;