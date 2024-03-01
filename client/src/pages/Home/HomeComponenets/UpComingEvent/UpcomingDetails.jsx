import { useState } from "react";
import {   useNavigate, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
// import { FaCircleArrowRight } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdSettingsVoice } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
// import { TbSitemap } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import Container from "../../../../components/ui/Container";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import Footer from "../../../../components/shared/Footer";
import "./upcoming.scss";
// import EventMap from "./EventMap";
// import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { getTime } from "../../../../utils/getTime";
import { getDate } from "../../../../utils/getDate";
import useAuth from "../../../../hooks/useAuth";
import nullImage from "../../../../assets/image/user.png"
// import UpComingBanner from "./UpComingBanner";
// import { BiArea } from "react-icons/bi";
import PostFeedback from "./PostFeedback";
import ShowFeedback from "./ShowFeedback";
import UpComingBanner from "./UpComingBanner";

const UpcomingDetails = () => {

  const {user}=useAuth()
  const shareUrl = "https://event-planet-9789f.web.app/";
  const params = useParams();
  const ids=params.id
  const [number, setNumber] = useState(0);
  const [showDescription,setShowDescription] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const feedbackTitle = "Event"
  // decrement
  const decrement = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };
  // increment
  const increment = () => {
    setNumber(number + 1);
  };



  const { data: eventDetails, refetch } = useQuery({
    queryKey: ["event-details"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/event/${ids}`);
      return result?.data;
    },
  });
  console.log("event detalils",eventDetails?.speakersImages?.length)
  
  const fullDescription = eventDetails?.description;
  const shortDescription = fullDescription ? fullDescription.substring(0, 120) : "";

  const toggleDescription = () => {
      setShowDescription(!showDescription)
  }
  
  const date = getDate(eventDetails?.startDate);

  const time = getTime(eventDetails?.startDate);

  const totalPrice = number * eventDetails?.ticketPrice;

const handleNavigate=async()=>{
  
  const datasfront={
  eventName: eventDetails.eventName,
  cus_email: user?.email,
  total_amount:totalPrice,
  ticketquantity:number,
  
};

navigate(`/checkout/${'boking'}/${ids}`,{state:datasfront});

}
  return (
    <>
      <div className="">
      <UpComingBanner eventDetails={eventDetails}></UpComingBanner>
      </div>
      <Container>
        <div className="py-[50px]">
          {/* heading */}
          {/* upcoming details: */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-6 lg:gap-12 gap-5 ">
              {/* left side */}
              <div className="md:col-span-4 col-span-1 -mt-24 z-10">
                <div className="left-side">
                  
                  <div className="relative">
                    <img
                      src={eventDetails?.eventImages[0]}
                      className="w-full rounded border-[15px] border-neutral"
                      alt=""
                    />
                    <div className=" absolute top-[45px] bg-neutral  px-7 py-3 font-semibold text-lg">
                      {eventDetails?.eventName}
                    </div>
                  </div>
                  <div className="md:flex items-center justify-between px-2 md:px-3 gap-2 lg:gap-4 py-5 space-y-4 md:space-y-0">
                    <div className="lg:py-3 lg:px-10 py-2 px-5
                        bg-gradient-to-tl from-[#861f42]
                        to-primary shadow-lg flex items-center justify-center gap-3 text-white">
                      <div className="text-center">
                        <h2 className="md:text-lg font-semibold text-center pb-1">
                          Event Date
                        </h2>
                        <div className="flex items-center gap-2">
                          <BsCalendar2DateFill className="text-neutral" />

                          <p className="font-semibold">{date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:py-3 lg:px-10 py-2 px-4 bg-gradient-to-tl from-[#861f42]
                        to-primary shadow-lg  gap-3 text-white">
                      <h2 className="text-lg font-semibold text-center">
                        Event Time
                      </h2>
                      <div className="flex items-center justify-center gap-2">
                        <IoMdTime className="text-neutral" />
                        <p className="font-semibold">{time}</p>
                      </div>
                    </div>
                    <div className="lg:py-3 lg:px-10 py-2 px-4 bg-gradient-to-tl from-[#861f42]
                        to-primary shadow-lg  gap-3 text-white">
                      <h2 className="text-lg font-semibold text-center">
                        Event Location
                      </h2>
                      <div className="flex items-center gap-2 justify-center">
                        <FaLocationDot className="text-neutral"></FaLocationDot>
                        <p className="font-semibold">{eventDetails?.city}</p>
                      </div>
                    </div>
                  </div>
                  {/* descriptions */}
                  <div className="mb-5 md:px-3 px-2">
                      {
                         showDescription ? (
                          <p className="text-slate-700 inline">{eventDetails?.description}</p>
                         ):(
                          <p className="text-slate-700 inline">{shortDescription} </p>
                         )
                      }
                       {
                       eventDetails?.description.length > 120 &&(
                    <button onClick={toggleDescription} className="text-primary font-semibold ml-2 underline">{
                      showDescription ? 'Collapse !' : 'Learn More..'
                    }
                    </button>
                       )
                        }
                  </div>

                  {/* Register now */}
                  <div className="md:p-5 bg-white">
                    <div>
                      <h2 className="font-medium text-2xl mb-4">
                        Book Your Event👍
                      </h2>
                      <div className="bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white">
                            <h2 className="py-4 text-center bg-secondary text-white font-medium">
                              Event Name
                            </h2>
                            <div className="bg-white overflow-hidden text-black p-3">
                              <div className="mb-4">
                                <p className="text-lg md:text-xl font-semibold">
                                  {eventDetails?.eventName}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white border-l border-r">
                            <h2 className="py-4 text-center bg-secondary text-white font-medium">
                              Event Ticket
                            </h2>
                            <div className="bg-white text-secondary p-3">
                              <div className="mb-8 text-center">
                                <h2 className="mb-4 font-semibold">VIP</h2>
                                <div className="flex justify-center items-center">
                                  <button
                                    onClick={() => decrement()}
                                    className="bg-secondary px-4 rounded hover:bg-black py-2 cursor-pointer font-bold text-white"
                                  >
                                    -
                                  </button>
                                  <span className="border px-4 py-2 border-gray-600 mx-2 p-3 rounded">
                                    {number}
                                  </span>
                                  <button
                                    onClick={() => increment()}
                                    className="bg-secondary px-4 rounded hover:bg-black py-2 cursor-pointer font-bold text-white"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white">
                            <h2 className="py-4 text-center bg-secondary text-white font-medium">
                              Total Price
                            </h2>
                            <div className="bg-white flex-col items-center text-center text-black p-3">
                              <div className=" font-medium">
                                <p className="font-semibold">
                                  Price: ${totalPrice}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-secondary flex flex-col md:flex-row items-center justify-between p-5">
                          <div className="text-white font-medium mb-3 md:mb-0">
                            <p>Quantity: {number}</p>
                          </div>
                          <div className="text-white font-medium">
                            <p>Total: {totalPrice}</p>
                          </div>
                          {
                            number > 0 ?  <><button
                            onClick={handleNavigate}
                            className="button flex items-center gap-3 mt-3 md:mt-0"
                          >
                            <FaCartPlus></FaCartPlus>Register Now
                          </button></> : <><button
                            className="button flex items-center gap-3 mt-3 md:mt-0 disabled"
                          >
                            <FaCartPlus></FaCartPlus>Register Now
                          </button></>
                          }
                         
                        </div>
                      </div>
                    </div>

                    {/* show feed back */}
                    <div>
                      <ShowFeedback title={eventDetails?.eventName} id={ids}></ShowFeedback>
                    </div>

                    {/* evetn FAQ */}
                  {/* <div className="hidden md:block">
                  <div className="bg-secondary p-4 mt-10 font-medium text-white text-xl">
                      Event FAQ
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input
                        type="radio"
                        name="my-accordion-3"
                        checked="checked"
                      />
                      <div className="collapse-title text-xl font-medium">
                        How do I book tickets for an event?
                      </div>
                      <div className="collapse-content">
                        <p>
                          To books tickets for an event, simply navigate to the
                          event page on our website and select the desired date
                          and ticket type. Then, proceed to the checkout where
                          you can review your order and complete the booking
                          process. You will receive a confirmation email once
                          your booking is successful.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        What payment methods are accepted?
                      </div>
                      <div className="collapse-content">
                        <p>
                          We accept a variety of payment methods to make your
                          booking experience convenient. You can pay securely
                          using major credit cards, including Visa, Mastercard,
                          American Express, and Discover. Additionally, we also
                          offer payment through Stripe for seamless online
                          transactions.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        How will I receive my tickets after booking?
                      </div>
                      <div className="collapse-content">
                        <p>
                          After successfully completing your booking, you will
                          receive an email confirmation containing your tickets.
                          You can either print out the tickets or present the
                          digital copy on your smartphone at the event venue.
                          Please ensure to check your spam or junk folder if you{" "}
                          {"don't"} see the confirmation email in your inbox.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        How can I contact customer support?
                      </div>
                      <div className="collapse-content">
                        <p>
                          Our customer support team is available to assist you
                          with any questions or concerns you may have. You can
                          reach us via email at support:proppionears1@gmail.com
                          or by phone at +88 (880) 1634-264626 during our
                          business hours. We strive to provide prompt and
                          helpful assistance to ensure your event experience is
                          smooth and enjoyable.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Is there parking available at the venue?
                      </div>
                      <div className="collapse-content">
                        <p>
                          Yes, parking facilities are available at the event
                          venue for your convenience. We recommend arriving
                          early to secure a parking spot, especially during peak
                          hours or popular events. Please follow any signage or
                          instructions provided by the venue staff for smooth
                          parking.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Can I bring outside food or drinks to the event?
                      </div>
                      <div className="collapse-content">
                        <p>
                          Outside food and drinks are generally not permitted at
                          the event venue. However, some events may have
                          specific policies or exceptions regarding this. We
                          kindly ask that you adhere to the {"venue's"}{" "}
                          guidelines to ensure the safety and enjoyment of all
                          attendees. Refreshments and concessions are typically
                          available for purchase at the venue.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="md:col-span-2 col-span-1 mt-0 md:mt-16">
                <div className="bg-white border p-3">
                  <div>
                    <div className="">
                      {/* <div className=" flex items-center gap-3">
                        <BiArea className="text-2xl"></BiArea>
                        <h2 className="my-3 text-2xl font-semibold">
                          Show Event Area
                        </h2>
                      </div> */}
                      {/* <EventMap></EventMap> */}
                    </div>
                    {/* <h2 className="border-b border-b-gray-300 pb-2 text-xl">
                      <span className="font-semibold">Total Seats:</span> 500{" "}
                      <span className="font-semibold">(500 left)</span>
                    </h2> */}
                    {/* <div className="flex items-center gap-4 text-lg mt-3">
                      <div>
                        <TbSitemap></TbSitemap>
                      </div>
                      <div className="">
                        <h2 className="text-lg font-semibold">Event Items</h2>
                      </div>
                    </div> */}
                    {/* <div className="p-4 border-b-gray-600">
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Sound Ecosystems</div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Wireless Bluetooth Speakers</div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Audio-Visual Synthesizers</div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Eco-Friendly Utensils</div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Curved LED Display Walls</div>
                      </div>
                      <div className="flex items-center gap-3 pb-2 ">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Touchscreen LED Monitors</div>
                      </div>
                      <div className="flex items-center gap-3 pb-2 ">
                        <div>
                          <FaCircleArrowRight className=" text-secondary"></FaCircleArrowRight>
                        </div>
                        <div>Artistic Collaboration Canvases</div>
                      </div>
                    </div> */}
                    {/* event shedule */}
                    <div className="hidden md:block">
                  <div className="bg-secondary p-4 mt-10 font-medium text-white text-xl">
                      Event FAQ
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input
                        type="radio"
                        name="my-accordion-3"
                        checked="checked"
                      />
                      <div className="collapse-title text-xl font-medium">
                        How do I book tickets for an event?
                      </div>
                      <div className="collapse-content">
                        <p>
                          To books tickets for an event, simply navigate to the
                          event page on our website and select the desired date
                          and ticket type. Then, proceed to the checkout where
                          you can review your order and complete the booking
                          process. You will receive a confirmation email once
                          your booking is successful.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        What payment methods are accepted?
                      </div>
                      <div className="collapse-content">
                        <p>
                          We accept a variety of payment methods to make your
                          booking experience convenient. You can pay securely
                          using major credit cards, including Visa, Mastercard,
                          American Express, and Discover. Additionally, we also
                          offer payment through Stripe for seamless online
                          transactions.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        How will I receive my tickets after booking?
                      </div>
                      <div className="collapse-content">
                        <p>
                          After successfully completing your booking, you will
                          receive an email confirmation containing your tickets.
                          You can either print out the tickets or present the
                          digital copy on your smartphone at the event venue.
                          Please ensure to check your spam or junk folder if you{" "}
                          {"don't"} see the confirmation email in your inbox.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        How can I contact customer support?
                      </div>
                      <div className="collapse-content">
                        <p>
                          Our customer support team is available to assist you
                          with any questions or concerns you may have. You can
                          reach us via email at support:proppionears1@gmail.com
                          or by phone at +88 (880) 1634-264626 during our
                          business hours. We strive to provide prompt and
                          helpful assistance to ensure your event experience is
                          smooth and enjoyable.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Is there parking available at the venue?
                      </div>
                      <div className="collapse-content">
                        <p>
                          Yes, parking facilities are available at the event
                          venue for your convenience. We recommend arriving
                          early to secure a parking spot, especially during peak
                          hours or popular events. Please follow any signage or
                          instructions provided by the venue staff for smooth
                          parking.
                        </p>
                      </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                      <input type="radio" name="my-accordion-3" />
                      <div className="collapse-title text-xl font-medium">
                        Can I bring outside food or drinks to the event?
                      </div>
                      <div className="collapse-content">
                        <p>
                          Outside food and drinks are generally not permitted at
                          the event venue. However, some events may have
                          specific policies or exceptions regarding this. We
                          kindly ask that you adhere to the {"venue's"}{" "}
                          guidelines to ensure the safety and enjoyment of all
                          attendees. Refreshments and concessions are typically
                          available for purchase at the venue.
                        </p>
                      </div>
                    </div>
                  </div>
                    <div className=" pb-3">
                      <h2 className=" font-semibold pt-3 text-lg">
                        Event Shedule Details
                      </h2>
                      <div className="p-3">
                        <div className="flex items-center gap-3">
                          <MdDateRange></MdDateRange>
                          <p>March 12 2023 - March 14 2024</p>
                        </div>
                      </div>
                    </div>
                    {/* Share this event */}
                    <div className=" pb-3">
                      <h2 className=" font-semibold text-lg pt-3">
                        Social Share Event
                      </h2>
                      <div className="py-4">
                        <div className="flex items-center gap-4 md:gap-2 lg:gap-8">
                          <FacebookShareButton
                            url={shareUrl}
                            quote={"Share our event"}
                            title="Share Event"
                            description="this is event"
                          >
                            <FacebookIcon round={true} size={40}></FacebookIcon>
                          </FacebookShareButton>
                          <TwitterShareButton
                            className="md:hidden"
                            url={shareUrl}
                            quote={"Share our event"}
                            title="Share Event"
                          >
                            <TwitterIcon round={true} size={40}></TwitterIcon>
                          </TwitterShareButton>
                          <LinkedinShareButton
                            url={shareUrl}
                            title="share Event"
                          >
                            <LinkedinIcon round={true} size={40}></LinkedinIcon>
                          </LinkedinShareButton>
                          <WhatsappShareButton url={shareUrl}>
                            <WhatsappIcon round={true} size={40}></WhatsappIcon>
                          </WhatsappShareButton>
                          <EmailShareButton url={shareUrl}>
                            <EmailIcon round={true} size={40}></EmailIcon>
                          </EmailShareButton>
                        </div>
                      </div>
                    </div>
                    {/* Event Speakers */}
                    <div>
                      <div className="flex items-center mt-4 mb-4 gap-3 text-lg">
                        <MdSettingsVoice></MdSettingsVoice>
                        <h2 className="font-semibold">Event Speaker</h2>
                      </div>
                      <div className="">
                        <div className="flex gap-10 ml-4">
                        {eventDetails && eventDetails.speakersImages.map((guestImage, index) => (
                          <div key={index} className="">
                            {eventDetails?.speakersImages?.length > 0 ? (
                              <img
                                src={guestImage}
                                className="rounded-full w-14 h-14"
                                alt={`Speaker ${index + 1}`}
                              />
                            ) : (
                              <img
                                src={nullImage}
                                className="rounded-full w-20 h-20"
                                alt="Placeholder"
                              />
                            )}
                          </div>
                        ))}

                        </div>

                        <div className="flex gap-3">
                          {eventDetails &&
                            eventDetails?.speakers.map((names) => (
                              <h2
                                key={names?._id}
                                className="font-medium mt-3 w-20 text-center"
                              >
                                {" "}
                                {names}{" "}
                              </h2>
                            ))}
                        </div>
                      </div>
                    </div>
                    {/* add calander  */}
                    <div className="button text-center mt-4  ">
                      <a href="https://calendar.google.com/calendar/u/0/r">
                        Add Calender
                      </a>
                    </div>
                    <div>
                      <PostFeedback
                        title={eventDetails?.eventName}
                        image={eventDetails?.eventImages[0]}
                        id={ids}
                        refetch={refetch}
                        feedbackTitle={feedbackTitle}
                      ></PostFeedback>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* footer */}
      <Footer></Footer>
    </>
  );
};

export default UpcomingDetails;
