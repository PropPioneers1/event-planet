/* eslint-disable react/prop-types */
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import Container from "../../../../components/ui/Container";
import { Typewriter } from 'react-simple-typewriter';

const UpComingBanner = ({eventDetails}) => {

    return (
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={eventDetails?.eventImages[0]}
          alt="Event Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000b3] bg-blend-overlay flex justify-start items-center">
          <Container>
            {/* <div className="text-center lg:text-5xl md:text-4xl text-2xl font-bold text-neutral uppercase"><h2>Event Details</h2></div> */}
            <div>
              <h1 className="">
                
        <h2 className="text-center lg:text-5xl md:text-4xl text-2xl font-bold text-neutral uppercase mt-2 md:pt-0">know more</h2> <HiOutlineArrowLongDown className="mx-auto my-2 md:my-5 text-white text-3xl animate-bounce"></HiOutlineArrowLongDown>
        <span className="text-primary md:text-4xl text-2xl text-center pt-2 md:pt-5 font-semibold">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[`${eventDetails?.eventName}`]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={500}
          />
        </span>
      </h1>
            </div>
          </Container>
        </div>
      </div>
      
      
    );
};

export default UpComingBanner;



