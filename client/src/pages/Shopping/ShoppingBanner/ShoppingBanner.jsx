import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const ShoppingBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/PM0dKMj/front-view-woman-with-shopping-bag-concept.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/wYCb8K3/sdsad.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/SRxQRY9/dsd.jpg" alt="" />
          </div>
          
          
          
        </Slider>
      );
};

export default ShoppingBanner;