import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./TesPlaner.css";

const TestPlaner = () => {
  const [eventPlaner, setEventPlaner] = useState([]);

  useEffect(() => {
    fetch("EventPlaner.json")
      .then((res) => res.json())
      .then((data) => setEventPlaner(data));
  }, []);
  return (
    <div>
      <div className="w-full lg:w-3/4 mb-5  mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mx-auto">
        {eventPlaner?.map((event, idx) => (
          <div key={idx} className="card-planer ">
            <div className="card-inner">
              <div
                className="front "
                style={{
                  backgroundImage: `url(${event?.photoUrl})`,
                }}
              >
                <h2 className="text-2xl font-title font-medium">
                  {event?.eventPlannerName}
                </h2>
                <p className="text-lg font-medium">{event?.eventTitle}</p>
                <button>Hover Me</button>
              </div>
              <div className="back">
                <img
                  className="left-1/2 back-img"
                  src="https://uploads-ssl.webflow.com/60f0a1afc7be292413e48176/6143aa43202ad63a1d409343_hand-wave.gif"
                  alt=""
                />
                <h1 className="font-title text-3xl mb-3 font-medium text-center">
                  Welcome Here
                </h1>
                <p className="break-all h-[240px] font-title ">
                  {event?.description}
                </p>

                <div className="flex justify-center  items-center gap-5 ]">
                  <a
                    href={event?.facebook}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="w-7 hover:text-[#F53F7B] mt-5 h-7"></FaFacebook>
                  </a>
                  <a href="">
                    <FaLinkedin className="w-7 hover:text-[#F53F7B] mt-5 h-7"></FaLinkedin>
                  </a>
                  <a href="">
                    <FaInstagram className="w-7 hover:text-[#F53F7B] mt-5 h-7"></FaInstagram>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPlaner;
