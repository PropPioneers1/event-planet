
import PropTypes from 'prop-types';
import { IoLocationSharp, IoTimeOutline } from 'react-icons/io5';

const EventCard = ({item}) => {
    const { eventName, venue, startDate, eventImages, ticketPrice } = item;
    

    const month = new Date(startDate).toLocaleString('default', { month: 'long' })
    const eventDate = new Date(startDate).getDate();
    const time = new Date(startDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })


    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white border border-primary border-opacity-10 hover:border-opacity-100 rounded transition-all duration-500">
            {/* div for image */}
            <div
                className="relative w-full md:w-11/12">
                <img
                    className="object-cover w-full h-[250px] md:h-full  rounded " src={eventImages[0]} alt="Event Image"
                />
                {/* date and month*/}
                <div
                    className="absolute top-0 w-[70px] h-[70px] p-6 flex flex-col items-center justify-center  bg-gradient-to-tr  from-primary to-[#921b42]  ">
                    <p className="text-2xl text-white font-bold">
                        {
                            eventDate
                        }
                    </p>
                    <p className="text-base text-white font-bold">
                        {
                            month.length > 4 ? month.slice(0, 3) : month
                        }
                    </p>
                </div>
                {/* for right side border style */}
                <div className="absolute top-4 -right-1 w-2 h-16 bg-primary">

                </div>
            </div>
            {/* div for content */}
            <div>
                <h3 className="text-xl font-bold">{eventName}</h3>
                <p className="text-lg text-primary">Tickets from $ {ticketPrice}</p>
                {/* Start time and location */}
                <div className="my-6 space-y-2">
                    <div className="flex items-center gap-4">
                        <div className="bg-neutral p-2 rounded-full">
                            <IoTimeOutline className="text-primary"></IoTimeOutline>
                        </div>
                        <p className='text-[#878787]'>Start at {time}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-neutral p-2 rounded-full">
                            <IoLocationSharp className="text-primary"></IoLocationSharp>
                        </div>
                        <p className='text-[#878787]'>{venue}</p>
                    </div>
                </div>
                <div className='md:w-56 sm:w-auto max-w-56'>
                    <button
                        className="btn rounded-full w-full text-[#636363] text-lg font-bold my-4 hover:bg-primary hover:text-white transition-all duration-300">
                        Ticket & Details
                    </button>
                </div>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    item: PropTypes.object
};

export default EventCard;