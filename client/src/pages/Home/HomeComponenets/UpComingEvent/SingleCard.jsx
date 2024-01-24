/* eslint-disable react/prop-types */
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
const image = "https://i.ibb.co/QFrKPX3/birthday.jpg";

const SingleCard = ({card}) => {
    const {eventName,date,time,ticketPriceRange,description,countdownTimer,id} = card;

    return (
        <div>
          <div className="relative border group rounded shadow-lg overflow-hidden imgparent w-full">
            <img className="zoomm relative w-full" src={image} alt="Event" />
            
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500">
                <Link>
                <button className="absolute top-1/2 left-[40%] md:left-[40%] mb-3 lg:mb-0 lg:left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-white button px-4 py-3 rounded flex items-center text-lg font-semibold">Book <FaBookmark className="ml-2"></FaBookmark></button>
                </Link>
                <Link to={`/upcomingDetails/${id}`}>
                <button className="absolute top-1/2 lg:left-[200px] md:left-[240px] left-[240px] sm:left-[255px] transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-3 rounded flex items-center text-lg font-semibold button">More<MdOutlineArrowOutward className="animate-bounce ml-2"></MdOutlineArrowOutward> </button>
                </Link>
            </div>
            {/* Show price at the top */}
            <div className="absolute top-7 right-7 bg-opacity-60 rounded text-white font-medium p-2 bg-accent">
              Price {ticketPriceRange}
            </div>

            <div className="pb-8 p-4">
              <div className="">
                <div className="count-down-time">
                  <p className="text-slate-500 my-4 pt-8">{date} || {time}</p>
                  <p className=" days absolute top-[150px] md:top-[196px] lg:top-40 text-center items-center flex left-5 text-white px-3 py-2 bg-accent font-medium rounded-full w-20 h-20">{countdownTimer}</p>
                </div>
                <p className="text-lg font-bold mb-2 text-black inline-block">{eventName}</p>
                <hr />
                <p className="text-slate-600">{description}</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default SingleCard;
