import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./trending.css";
import { FaShopify, FaStar } from "react-icons/fa";
import Container from "../../../../components/ui/Container";
import Buttonall from "../../../../components/ui/ButtonAll/Buttonall";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Trendingproducts = () => {
  const [data, setData] = useState([]);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const axioSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  useEffect(() => {
    axioSecure.get('/shop/trending')
      .then((response) => {
        setData(response.data.result);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const handleMouseMove = (e) => {
    if (!startX) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setStartX(0);
  };

  const handleNavigate = () => {
    navigate('/shopping');
  };

  return (
    <div className="shadow-bg bg-neutral mt-10 pt-4">
      <Container>
        <SectionHeading
          colortitle='text-[rgb(255 255 255 / var(--tw-text-opacity))]'
          align="text-center"
          title="Visit Our Shop"
          normalSubTitleWord="OUR "
          boldSubTitleWord=" SHOP PRODUCTS"
          colorboldmrsub='text-accent'
          colornormrsub='text-black'
        />
        <div>
          <p className="text-center mb-10 text-gray-700 text-xl px-4">
            Hello Human! We're here to make your special moments even more
            memorable. Explore our curated collection of essential products for
            various events and find the perfect items to elevate your
            experiences.
          </p>
        </div>
      </Container>

      <div className="flex">
        <div></div>
        <div
          className="slider rounded-r-2xl
          rounded-l-3xl"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="slide-track gap-5 pb-5">
            {data.concat(data).map((item, index) => (
              <div
                key={index}
                className="slide relative 
              rounded-md 
              h-auto bg-transparent shadow-xl"
              >

                <div className=" relative">
                  <img
                    className="h-[100px] w-full mx-auto object-cover rounded-md"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className=" h-44 w-56 my-auto">
                  <h2
                    className=" text-secondary text-lg
                  text-start my-auto border-slate-300   font-bold mt-4 "
                  >
                    {item.title.slice(0, 20)}
                  </h2>
                  <h2 className="font-bold  border-slate-300  text-slate-500 ">
                    Price :{" "}
                    <span className="text-pink-500 font-bold text-xl">
                      ${item.price}
                    </span>
                  </h2>
                  <h3 className="text-slate-600  border-slate-300 ">
                    {" "}
                  Name : {item.title.slice(0, 20)}
                  </h3>
                  <div className="flex gap-2 pb-4 border-slate-300">
                    <p className="text-start text-slate-700"> Rating :</p>
                    <div className="rating rating-sm mt-1">
                      {item.rating && typeof item.rating === 'number' && item.rating > 0 && item.rating <= 5 ? (
                        [...Array(Math.floor(item.rating))].map((_, i) => (
                          <FaStar className="text-primary" key={i} />
                        ))
                      ) : (
                        <span>No rating available</span>
                      )}
                    </div>
                  </div>

                  <Link to={`details-shopCart/${item._id}`}>
                    <button
                      className="w-full font-semibold py-3 rounded-md transition-all duration-300 ease-in
                    bg-gradient-to-tl from-accent
                    to-accent/70 hover:bg-gradient-to-tr
                   text-white "
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Buttonall onClick={handleNavigate}>
        Shop Now <FaShopify />
      </Buttonall>
    </div>
  );
};

export default Trendingproducts;
