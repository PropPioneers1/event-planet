import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import Container from "../../../../components/ui/Container";
import OurNextEventCard from "./OurNextEventCard/OurNextEventCard";

const OurNextEvents = () => {
  const [nextEvents, setNextEvents] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/event")
      .then((res) => setNextEvents(res?.data?.events?.slice(0, 6)));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    className: "center",
    afterChange: (index) => {
      setActiveSlide(index);
    },
    responsive: [
      {
        breakpoint: 768, // for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="">
      <Container>
        {/* <div className="border-2 border-red-400 grid grid-cols-12 gap-10 "> */}
        {/* heading */}
        <div>
          <SectionHeading
            title="Upcoming Event"
            normalSubTitleWord="latest"
            boldSubTitleWord="awesome events"
          />
        </div>
        <Slider {...settings}>
          {nextEvents?.map((event, idx) => (
            <OurNextEventCard
              key={idx}
              event={event}
              activeSlide={activeSlide}
              idx={idx}
            />
          ))}
        </Slider>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default OurNextEvents;
