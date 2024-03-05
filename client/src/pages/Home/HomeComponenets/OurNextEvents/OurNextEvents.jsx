import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import Container from "../../../../components/ui/Container";
import OurNextEventCard from "./OurNextEventCard/OurNextEventCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurNextEvents = () => {
  const [nextEvents, setNextEvents] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    axios
      .get("https://server-orpin-alpha.vercel.app/event")
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
    <div>
      <Container>
        <div>
          <SectionHeading
            title="Upcoming Event"
            normalSubTitleWord="latest"
            boldSubTitleWord="awesome events"
          />
        </div>
        <div className="max-w-[95%] mx-auto">
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
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default OurNextEvents;
