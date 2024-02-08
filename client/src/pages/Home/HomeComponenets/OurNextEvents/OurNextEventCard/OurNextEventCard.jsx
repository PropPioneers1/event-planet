import { MdLocationOn, MdOutlineWatchLater } from "react-icons/md";
import { getTime } from "../../../../../utils/getTime";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

const OurNextEventCard = ({ event, activeSlide, idx }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // months array
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(event?.startDate).getDate();
  const month = months[new Date(event?.startDate).getMonth()];
  const time = getTime(event?.startDate);

  useEffect(() => {
    const targetDate = new Date(event?.startDate);

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        // Event has started, you can handle this case as needed
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    // Update every second (1000 milliseconds)
    const intervalId = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [event?.startDate]);

  return (
    <div key={idx} className="px-5   md:h-[540px]">
      {/* Countdown */}
      <div
        className={`grid place-items-center pb-5 md:pb-8 transition-all duration-500 ease-in-out  ${
          activeSlide === idx ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-4 lg:w-[400px] md:w-[300px] w-[250px]">
          {/* days */}
          <div className="border-2 border-gray-500 rounded-2xl lg:w-20 lg:h-20 md:w-16md:h-16  w-14 h-14 grid place-items-center">
            <div>
              <h3 className="text-center font-bold text-gray-500 lg:text-4xl md:text-3xl text-2xl">
                {countdown?.days}
              </h3>
              <p className="text-center text-gray-500  font-semibold text-sm lg:text-base">
                Days
              </p>
            </div>
          </div>
          {/* hours */}
          <div className="border-2 border-gray-500 rounded-2xl lg:w-20 lg:h-20 md:w-16md:h-16  w-14 h-14 grid place-items-center">
            <div>
              <h3 className="text-center font-bold text-gray-500 lg:text-4xl md:text-3xl text-2xl">
                {countdown?.hours}
              </h3>
              <p className="text-center text-gray-500  font-semibold text-sm lg:text-base">
                Hours
              </p>
            </div>
          </div>
          {/* minutes */}
          <div className="border-2 border-gray-500 rounded-2xl lg:w-20 lg:h-20 md:w-16md:h-16  w-14 h-14 grid place-items-center">
            <div>
              <h3 className="text-center font-bold text-gray-500 lg:text-4xl md:text-3xl text-2xl">
                {countdown?.minutes}
              </h3>
              <p className="text-center text-gray-500  font-semibold text-sm lg:text-base">
                Mins
              </p>
            </div>
          </div>
          {/* seconds */}
          <div className="border-2 border-gray-500 rounded-2xl lg:w-20 lg:h-20 md:w-16md:h-16  w-14 h-14 grid place-items-center">
            <div>
              <h3 className="text-center font-bold text-gray-500 lg:text-4xl md:text-3xl text-2xl">
                {countdown?.seconds}
              </h3>
              <p className="text-center text-gray-500  font-semibold text-sm lg:text-base">
                Seco
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="relative ">
        {/* image container */}
        <div className="lg:w-[550px] lg:h-[300px] md:w-[450px] md:h-[300px] h-[200px] w-full">
          <img
            src={event?.eventImages[0]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* date of event */}
        <div
          className="absolute top-5 left-5 py-2 px-5  bg-gradient-to-tl from-[#781435]
               to-primary flex items-center justify-center flex-col "
        >
          <div className=" text-[22px] font-bold text-center text-white">
            <h3 className=" leading-6">{date}</h3>
            <h3 className="font-normal leading-8">{month}</h3>
          </div>
        </div>

        {/* event content */}
        <div
          className={`md:py-10 md:px-8 py-7 px-4 static w-full md:w-[300px] md:absolute top-14 right-6 bg-white
                before:absolute before:w-[6px] before:h-20
                 before:bg-primary before:-left-[3px] shadow-md 
                 shadow-[#22283138] z-30 transition-all duration-500 
                 ease-out space-y-5 ${
                   activeSlide === idx ? "opacity-100" : "opacity-0"
                 }`}
        >
          <div>
            <h3 className="text-lg md:text-xl font-semibold">
              {event?.eventName}
            </h3>
            <p className="text-base lg:text-lg pt-3 text-primary">
              Tickets from ${event?.ticketPrice}
            </p>
          </div>
          {/* time and location */}
          <div>
            <div className="space-y-2 mb-4">
              <p className="flex items-center gap-2.5">
                <span className=" p-2 rounded-full bg-neutral">
                  <MdOutlineWatchLater className="text-lg text-primary" />
                </span>
                <span className="pb-0.5">Start {time}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className=" p-2 rounded-full bg-neutral">
                  <MdLocationOn className="text-lg text-primary" />
                </span>
                <span className="pb-0.5">
                  {event?.city}, {event?.state}
                </span>
              </p>
            </div>
          </div>
          <button
            className=" w-full font-semibold py-3 rounded-full transition-all duration-300 ease-in
                    bg-gradient-to-tl from-[#861f42]
                    to-primary hover:bg-gradient-to-tr
                   text-white"
          >
            Tickets & Details
          </button>
        </div>
      </div>
    </div>
  );
};

OurNextEventCard.propTypes = {
  event: PropTypes.object,
  activeSlide: PropTypes.number,
  idx: PropTypes.number,
};

export default OurNextEventCard;
