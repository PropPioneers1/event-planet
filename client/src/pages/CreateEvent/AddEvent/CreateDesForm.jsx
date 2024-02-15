import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft, FaArrowRight, FaSeedling } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { uploadImage } from "../../../api/utlis";
// import SectionTitle from "../../../components/ui/SectionTitle/SectionTitle";
// import HotDeals from "../../Home/HomeComponenets/HotDeals/HotDeals";

const CreateDesForm = () => {
  const { label } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [organizationName, setOrganizationName] = useState("");
  const [audienceSize, setAudienceSize] = useState("");
  const [eventName, setEventname] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [otherDemands, setOtherDemands] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [guestNames, setGuestNames] = useState("");
  const [guestProfessions, setGuestProfessions] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [venue, setVenue] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [localImage, setLocalImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [guestImages, setGuestImages] = useState([]);
  const totalQuestions = 12;

  const calculateProgress = () =>
    ((currentQuestion - 1) / (totalQuestions - 1)) * 100;

  const handleNext = async () => {
    // if (!localImage) {
    //   toast.error("Please upload an image before proceeding.");
    //   return;
    // }

    const venueDetails = {
      selectedcity: city,
      selectedstate: state,
      selectedvenu: venue,
    };

    if (
      (currentQuestion === 1 && organizationName) ||
      (currentQuestion === 2 && audienceSize) ||
      (currentQuestion === 3 && organizationName) ||
      (currentQuestion === 4 && ticketPrice) ||
      (currentQuestion === 5 && otherDemands) ||
      (currentQuestion === 6 &&
        numberOfGuests &&
        guestNames &&
        guestProfessions) ||
      (currentQuestion === 7 && venueDetails) ||
      (currentQuestion === 8 && eventTime) || eventDate || eventEndDate ||
      (currentQuestion === 9 && localImage) ||
      (currentQuestion === 10 && expectedPrice) ||
      (currentQuestion === 11 && userName) ||
      (currentQuestion === 12 && phoneNumber)
    ) {
      if (currentQuestion === totalQuestions) {
        const QnaData = {
          userName: userName,
          email: user.email,
          organization: organizationName,
          category: label,
          eventName: eventName,
          totalSeat: audienceSize,
          state: venueDetails.selectedstate,
          city: venueDetails.selectedcity,
          venue: venueDetails.selectedvenu,
          startDate: eventDate,
          endDate: eventEndDate,
          ticketPrice: ticketPrice,
          speakers: [guestNames],
          eventPrice: expectedPrice,
          description: otherDemands,
          eventImages: [localImage],
          speakersImages: [guestImages],

          status: "unpaid",
        };
        console.log(QnaData);

        try {
          await axios.post(
            "https://event-planet-server.vercel.app/event",
            QnaData
          );
          toast.success("Your Response sent successfully");
          navigate("/");
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("Error submitting form. Please try again.");
        }
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      toast.error("Please answer the current question before proceeding.");
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const getImageUrl = async (event) => {
    try {
      const image = event.target.files[0];
      console.log(image, "hek");
      // const formData = new FormData();
      // formData.append("image", image);

      const response = await uploadImage(image);
      const imageUrl = response.data.display_url;

      setLocalImage(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image. Please try again.");
    }
  };
  const handleGuestImageUpload = async (event, index) => {
    try {
      const image = event.target.files[0];
      const response = await uploadImage(image);
      const imageUrl = response.data.display_url;

      // Update the guest images array with the new image URL
      const updatedGuestImages = [...guestImages];
      updatedGuestImages[index] = imageUrl;
      setGuestImages(updatedGuestImages);
    } catch (error) {
      console.error("Error uploading guest image:", error);
      toast.error("Error uploading guest image. Please try again.");
    }
  };

  return (
    <div className="mt-18 h-full hero min-h-screen bg-white justify-center align-middle items-center ">
      <div className="mt-32 mb-10">
        <h1 className="md:text-5xl text-2xl text-center font-bold  ">
          Create Your Event
        </h1>

        <p className="text-center text-slate-700 text-xl  mt-4">
          Answer the following questions to customize your event.
        </p>

        <div className="text-center p-10 rounded-xl bg-neutral shadow-2xl shadow-blue-200 mx-auto mt-6  md:w-[650px] w-[320px]  lg:w-[800px]">
          {currentQuestion === 1 && (
            <div className="grid " data-aos="fade-right">
              <label
                htmlFor="organizationName"
                className=" md:text-4xl text-xl text-black font-bold mb-10 Quistions"
              >
                What is your organization name?
              </label>
              <input
                type="text"
                id="organizationName"
                value={organizationName}
                placeholder="Enter Your organization name"
                onChange={(e) => setOrganizationName(e.target.value)}
                className=" bg-white h-12 pl-5  w-56 md:w-96 mx-auto rounded-full"
              />
            </div>
          )}

          {currentQuestion === 2 && (
            <div
              data-aos="fade-right"
              className="grid justify-center align-middle items-center"
            >
              <label
                htmlFor="audienceSize"
                className=" md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                How many people do you want as the audience in your event?
              </label>
              <input
                type="number"
                id="audienceSize"
                value={audienceSize}
                placeholder="minimum 20 people"
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setAudienceSize(Math.max(value, 20));
                  }
                }}
              />
            </div>
          )}

          {currentQuestion === 3 && (
            <div className="grid" data-aos="fade-right">
              {/* Question 3 */}
              <label
                htmlFor="useHotDeals"
                className=" md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                what is your event name
              </label>
              <input
                type="text"
                id="EventName"
                value={eventName}
                placeholder="Enter Your Event name"
                onChange={(e) => setEventname(e.target.value)}
                className=" bg-white h-12 pl-5  w-56 md:w-96 mx-auto rounded-full"
              />
            </div>
          )}

          {currentQuestion === 4 && (
            <div className="grid">
              {/* Question 4 (alternative for No) */}
              <label
                htmlFor="ticketPrice"
                className=" md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Enter your ticket price:
              </label>
              <input
                type="number"
                id="ticketPrice"
                className="bg-white w-44 mx-auto pl-5 text-center rounded-full"
                value={ticketPrice}
                placeholder="Enter a price"
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setTicketPrice(Math.max(value, 10));
                  }
                }}
              />
            </div>
          )}

          {currentQuestion === 5 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="otherDemands"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Do you have any other special demands for your event?
              </label>
              <textarea
                id="otherDemands"
                value={otherDemands}
                placeholder="Enter Your Special Demands"
                onChange={(e) => setOtherDemands(e.target.value)}
                className="h-24 p-4  w-76 md:w-96 mx-auto rounded-xl"
              ></textarea>
            </div>
          )}

          {currentQuestion === 6 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="numberOfGuests"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                How many guests are you inviting?
              </label>
              <input
                type="number"
                id="numberOfGuests"
                value={numberOfGuests}
                placeholder="Enter number of guests"
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setNumberOfGuests(value);
                  }
                }}
              />
              {Array.from({ length: numberOfGuests }).map((_, index) => (
                <div
                  key={index}
                  className="md:flex items-center justify-center align-middle
    grid space-x-4 gap-5 mt-4"
                >
                  <input
                    type="text"
                    placeholder={`Guest ${index + 1} Name`}
                    className="h-12 p-2 md:w-56 w-36 rounded-md border border-gray-300"
                    value={guestNames[index] || ""}
                    onChange={(e) => {
                      const updatedGuestNames = [...guestNames];
                      updatedGuestNames[index] = e.target.value;
                      setGuestNames(updatedGuestNames);
                    }}
                  />
                  <input
                    type="text"
                    placeholder={`Guest ${index + 1} Profession`}
                    className="h-12 p-2 md:w-56 w-36 rounded-md border border-gray-300"
                    value={guestProfessions[index] || ""}
                    onChange={(e) => {
                      const updatedGuestProfessions = [...guestProfessions];
                      updatedGuestProfessions[index] = e.target.value;
                      setGuestProfessions(updatedGuestProfessions);
                    }}
                  />
                  <input
                    onChange={(e) => handleGuestImageUpload(e, index)}
                    name={`guestImage${index}`}
                    className="file-input file-input-bordered w-full h-16"
                    type="file"
                    id={`guest-image-file-${index}`}
                    required
                  />
                </div>
              ))}
            </div>
          )}

          {currentQuestion === 7 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="city"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Which city will the event take place in?
              </label>
              <input
                type="text"
                id="city"
                value={city}
                placeholder="Enter City"
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => setCity(e.target.value)}
              />
              <label
                htmlFor="state"
                className="md:text-4xl text-xl text-black font-bold mb-4 mt-8 Quistions"
              >
                Which state will the event take place in?
              </label>
              <input
                type="text"
                id="state"
                value={state}
                placeholder="Enter State"
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => setState(e.target.value)}
              />
              <label
                htmlFor="venue"
                className="md:text-4xl text-xl text-black font-bold mb-4 mt-8 Quistions"
              >
                Enter the venue of the event.
              </label>
              <input
                type="text"
                id="venue"
                value={venue}
                placeholder="Enter Venue"
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => setVenue(e.target.value)}
              />
            </div>
          )}

          {currentQuestion === 8 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="eventDate"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Add the start date of your event?
              </label>
              <input
                type="date"
                id="eventDate"
                value={eventDate}
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => setEventDate(e.target.value)}
              />

              <label
                htmlFor="eventEndDate"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                When does your event end? (End Date)
              </label>
              <input
                type="date"
                id="eventEndDate"
                value={eventEndDate}
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => setEventEndDate(e.target.value)}
              />

              <label
                htmlFor="eventTime"
                className="md:text-4xl text-xl text-black font-bold mb-4 mt-8 Quistions"
              >
                At what time will the event start?
              </label>
              <input
                type="time"
                id="eventTime"
                value={eventTime}
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => setEventTime(e.target.value)}
              />
            </div>
          )}

          {currentQuestion === 9 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="image"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Add your event display Image
              </label>
              <input
                onChange={getImageUrl}
                name="imageFile"
                className="file-input file-input-bordered w-full h-16"
                type="file"
                id="image-file"
                required
              />
            </div>
          )}
          {currentQuestion === 10 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="expectedPrice"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Add your expected price for your desired event:
              </label>
              <input
                type="number"
                id="expectedPrice"
                value={expectedPrice}
                placeholder="Enter your expected price"
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setExpectedPrice(value);
                  }
                }}
              />
            </div>
          )}
          {currentQuestion === 11 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="userName"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Please enter your name:
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                placeholder="Enter Your Name"
                onChange={(e) => setUserName(e.target.value)}
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
              />
            </div>
          )}

          {currentQuestion === 12 && (
            <div className="grid" data-aos="fade-right">
              <label
                htmlFor="phoneNumber"
                className="md:text-4xl text-xl text-black font-bold mb-4 Quistions"
              >
                Please enter your phone number:
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                placeholder="Enter Your Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
              />
            </div>
          )}

          <div className="flex-1 my-auto mt-10 mx-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-sm text-black">
                  <span className="absolute md:ml-2 lg:ml-12 font-bold md:text-2xl text-sm mt-1 text-white md:text-black ml-6">
                    {Math.round(calculateProgress())}%
                  </span>
                </div>
              </div>
              <div className="flex h-4 w-44 md:w-96  mb-4 mx-auto overflow-hidden rounded-2xl shadow-lg bg-blue-200">
                <div
                  style={{ width: `${calculateProgress()}%` }}
                  className="flex flex-col justify-center bg-green-950
                  shadow-lg  transition-all duration-300 ease-in"
                ></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-black p-4">
            {currentQuestion > 1 && (
              <button
                onClick={handlePrevious}
                className="btn btn-ghost bg-blue-200 p-2 text-center"
              >
                <FaArrowLeft /> Previous
              </button>
            )}

            {currentQuestion === totalQuestions ? (
              <button
                className="btn btn-ghost  text-black bg-200 p-2 text-center"
                onClick={handleNext}
                disabled={
                  !city ||
                  !venue ||
                  !state ||
                  !eventDate ||
                  !eventTime ||
                  !localImage
                }
              >
                Submit <FaSeedling />
                <Toaster />
              </button>
            ) : (
              <button
                className="btn btn-ghost text-black text-end bg-blue-200"
                onClick={handleNext}
                disabled={
                  !(
                    (currentQuestion === 1 && organizationName) ||
                    (currentQuestion === 2 && audienceSize) ||
                    (currentQuestion === 3 && organizationName) ||
                    (currentQuestion === 4 && ticketPrice) ||
                    (currentQuestion === 5 && otherDemands) ||
                    (currentQuestion === 6 &&
                      numberOfGuests &&
                      guestNames &&
                      guestProfessions) ||
                    (currentQuestion === 7 && city && state && venue) ||
                    (currentQuestion === 8 && eventDate && eventTime) ||
                    (currentQuestion === 9 && localImage) ||
                    (currentQuestion === 10 && expectedPrice) ||
                    (currentQuestion === 11 && userName) ||
                    (currentQuestion === 12 && phoneNumber)
                  )
                }
              >
                Next <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDesForm;
