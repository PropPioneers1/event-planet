/* eslint-disable react/prop-types */
import Container from "../../../../components/ui/Container";

const image = "https://i.ibb.co/QFrKPX3/birthday.jpg";
const SingleCard = ({card}) => {
    const {eventName,date,time,ticketPriceRange,description,countdownTimer} = card
    return (
        <div>
            <Container>
          <div className="relative group  shadow-2xl p-4 rounded overflow-hidden imgparent w-full">
            <img className="rounded zoomm relative w-full" src={image} alt="Event" />
            
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded">Booked now</button>
            </div>
            {/* Show price at the top */}
            <div className="absolute top-7 right-7 bg-opacity-60 rounded text-white font-medium p-2 bg-primary">
              Price {ticketPriceRange}
            </div>

            <div className="pb-6">
              <div className=" text-black">
                <div className="my-2">
                  <p className="text-slate-500 mb-2">{date} || {time}</p>
                  <p className=" bg-gradient-to-r from-cyan-500 to-blue-600 rounded-tr-full rounded-br-full rounded-bl-full inline-block px-3 py-2 text-white font-medium">{countdownTimer}</p>
                </div>
                <p className="text-lg font-semibold bg-gradient-to-r from-red-600 via-green-700 to-indigo-600 inline-block text-transparent bg-clip-text">{eventName}</p>
                <p className="mb-2">{description}</p>
                <p className="text-black text-center hover:underline absolute">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          {/*  */}
      </Container>
        </div>
    );
};

export default SingleCard;