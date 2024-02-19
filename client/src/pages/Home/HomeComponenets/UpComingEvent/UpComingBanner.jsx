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
              <div>
              <p className=" text-white inline p-[5px] rounded text-left font-semibold bg-primary bg-opacity-25">
                Upcoming Event
              </p>
              <h2 className="lg:text-6xl md:text-5xl text-3xl font-semibold text-white mt-[3px]"> {eventDetails?.eventName} </h2>
              </div>
            <div>
              <h1 className="text-white md:text-4xl text-2xl text-center pt-3 md:pt-5">
        Enjoy Your Life{' '}
        <span className="text-primary">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Education', 'Business', 'Sport', 'Fasion','Food Festival']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={500}
          />
        </span>
      </h1>
              <div className="text-center pt-10">
                <button className="button">Register Now</button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      
      
    );
};

export default UpComingBanner;



