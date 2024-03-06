import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AllEvent.css";

import { Autoplay, Pagination } from "swiper/modules";
import Container from "../../components/ui/Container";
import { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EventCard from "./EventCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SearchInputs from "./SearchInputs";
import Loader from "../../components/Loader/Loader";

const AllEvent = () => {
  const axiosSecure = useAxiosSecure();

  //   const [events, setEvents] = useState({ eventCount: 0, data: [] });
  const [page, setPage] = useState(0);

  const [category, setCategory] = useState("");
  const [state, setState] = useState("");

  const [eventTitle, setEventTitle] = useState("");

  const [city, setCity] = useState("");
  const [venues, setVenues] = useState("");
  // const [setDivision] = useState("");

  // handle state change
  const handleStateChange = (selectedState) => {
    setState(selectedState);
    setCity(""); // Reset city when state changes
    setVenues(""); // Reset venues when state changes
  };

  // handle city change
  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
    setVenues(""); // Reset venues when city changes
  };

  // handle venues change
  const handleVenuesChange = (selectedVenues) => {
    setVenues(selectedVenues);
  };

  const {
    data: events = { eventCount: 0, events: [] },
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["all-events", page, category, eventTitle],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `/event?page=${page}&&title=${eventTitle}&&category=${category}&&state=${state}&&city=${city}&&venue=${venues}`
      );
      return result?.data;
    },
  });

  const totalPages = Math.ceil(events?.eventCount / 8);

  const pages = [...new Array(totalPages).fill(0)];
  if (isPending) {
    return <Loader></Loader>;
  }
  return (
    <div>
      {/* Slider */}
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
            src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2016/10/Event-00BG.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg_4_new.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg_3_new.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2016/10/Bg_0001.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2018/04/news-bg.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="bg-neutral py-10">
        <Container>
          {/* Search Inputs */}
          <SearchInputs
            state={state}
            city={city}
            venues={venues}
            setEventTitle={setEventTitle}
            eventTitle={eventTitle}
            setCategory={setCategory}
            category={setCategory}
            refetch={refetch}
            handleStateChange={handleStateChange}
            handleCityChange={handleCityChange}
            handleVenuesChange={handleVenuesChange}
          />
          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 py-8 ">
            {events?.events?.map((item) => (
              <EventCard key={item._id} item={item}></EventCard>
            ))}
          </div>
          {/* Pagination Buttons */}
          <div className="flex justify-center gap-2">
            {page !== 0 && (
              <div className="flex flex-row-reverse items-center">
                <button
                  onClick={() => setPage(page - 1)}
                  className="text-2xl font-semibold text-[#878787] mr-4"
                >
                  Prev
                </button>

                <IoIosArrowBack className="text-2xl font-semibold text-[#878787]" />
              </div>
            )}

            {pages?.map((item, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`w-10 py-0 font-semibold ${
                  page == index
                    ? "text-2xl font-bold border-b-4 border-primary	"
                    : "text-xl text-[#878787] "
                }`}
              >
                {`${index + 1 <= 9 ? "0" : ""}${index + 1}`}
              </button>
            ))}

            {page !== pages?.length - 1 && (
              <div className="flex items-center">
                <button
                  onClick={() => setPage(page + 1)}
                  className="text-2xl font-semibold text-[#878787] ml-4"
                >
                  Next
                </button>
                <IoIosArrowForward className="text-2xl font-semibold text-[#878787]" />
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllEvent;
