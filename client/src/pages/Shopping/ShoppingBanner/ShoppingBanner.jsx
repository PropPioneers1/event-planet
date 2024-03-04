import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const ShoppingBanner = () => {
    
      return (
        <Swiper style={{ height: '600px' }}
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
        className="mySwiper mySwiper2 swiper-container"
      >
        <SwiperSlide>
          <img
            className="bg-cover"
            src="https://i.ibb.co/4ZFPPmB/5092541.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/njF7v8c/5655678.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XsLfD0w/Optimized-9167.jpg"
            alt=""
          />
        </SwiperSlide>
    
        
        
      </Swiper>
      );
};

export default ShoppingBanner;