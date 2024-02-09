import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import bgImg from "../../../../assets/banner/banner-bg-4.jpg";

const TestMonial = () => {
  const [testmonial, setTestmonial] = useState([]);
  useEffect(() => {
    fetch("Testmonial.json")
      .then((res) => res.json())
      .then((data) => setTestmonial(data));
  }, []);

  return (
    <div
      id="my-id"
      className=" min-h-[70vh] py-8 items-center bg-fixed bg-center bg-blend-overlay"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundColor: "#000000b3",
      }}
    >
      <div className=" mx-auto text-white md:w-6/12 lg:w-4/12 text-center my-5">
        <h1 className="text-3xl font-title font-semibold">Testmonial</h1>
        <p className="text-xl font-title border-y-2 border-[#F53F7B]  py-4 mt-2">
          Our Client Say and Our Reviews
        </p>
      </div>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:w-3/4 mx-auto p-5"
      >
        <div>
          {testmonial?.map((testInfo, id) => (
            <div key={id}>
              <SwiperSlide>
                <div className="p-10">
                  <div className="card  space-y-3 p-2 card-compact  bg-neutral-100 shadow-2xl">
                    <div className="bg-white md:w-3/4 mx-auto relative rounded-xl p-5">
                      <FaQuoteLeft className="absolute text-[#F53F7B]"></FaQuoteLeft>
                      <p className="ml-6 text-lg text-center break-all font-title">
                        {testInfo?.review}
                      </p>
                      <FaQuoteRight className="relative text-[#F53F7B] left-full"></FaQuoteRight>
                    </div>

                    <div className="flex items-center justify-center gap-7">
                      <img
                        className="w-[90px] h-[90px] rounded-full"
                        src={testInfo?.profilePicUrl}
                        alt={testInfo?.name}
                      />
                      <div>
                        <div>
                          <h1 className="text-xl font-medium font-title">
                            {testInfo?.name}
                          </h1>
                          <div className="rating">
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                              checked
                            />
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                              type="radio"
                              name="rating-2"
                              className="mask mask-star-2 bg-orange-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TestMonial;
