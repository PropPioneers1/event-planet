/* eslint-disable react/prop-types */
import Container from "../../../../components/ui/Container";
import { Typewriter } from 'react-simple-typewriter';

const UpComingBanner = ({eventDetails}) => {
  
    console.log(eventDetails)
    return (
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={eventDetails?.eventImages[0]}
          alt="Event Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000000b3] bg-blend-overlay flex justify-start items-center">
          <Container>
            <div className="text-center text-5xl font-bold text-neutral uppercase"><h2>Event Details</h2></div>
            <div>
              <h1 className="text-white md:text-4xl text-2xl text-center pt-3 md:pt-5 font-semibold">
        Know More {'👉'}
        <span className="text-primary">
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



