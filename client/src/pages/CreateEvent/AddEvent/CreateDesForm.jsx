import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRight, FaSeedling } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { uploadImage } from "../../../api/utlis";
import SectionHeading from "../../../components/shared/SectionHeading/SectionHeading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Container from "../../../components/ui/Container";

const CreateDesForm = () => {
  const { label } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(1);
  // const [total,settotal]=useState()
  const handleCategoryChange = (categoryNumber) => {
    setCurrentCategory(categoryNumber);
  };

  const [formData, setFormData] = useState({
    organization: "",
    firstName: "",
    lastName: "",
    phone: "",
    totalSeat: "",
    eventName: "",
    ticketPrice: "",
    description: "",
    numberOfGuests: "",
    speakers: [],
    eventPrice: 0,
    city: "",
    state: "",
    venue: "",
    startDate: null,
    endDate: null,
    eventTime: "",
    eventImages: [],
    speakersImages: [],
  });
  const [venues, setVenues] = useState([]);
  // const [selectdistrict,setDistricts]=useState('')
  useEffect(() => {
    axios.get("/Ourvenues.json").then((res) => {
      setVenues(res.data);
    });
  }, []);
  const handleInputChange = (field, value) => {
    if (field === "state") {
      // When the state changes, update the selected state in the form data
      setFormData({
        ...formData,
        [field]: value,

        city: "",
        venue: "",
        venuePrice: 0, // Reset the venue price when the state changes
      });
    } else if (field === "totalSeat") {
      // Calculate event price based on audience quantity
      let eventPrice = 0;
      const audienceQuantity = parseInt(value);
      if (audienceQuantity <= 500) {
        eventPrice = 100;
      } else if (audienceQuantity <= 1500) {
        eventPrice = 500;
      } else {
        eventPrice = 1000;
      }
      setFormData({
        ...formData,
        [field]: value,
        eventPrice: eventPrice,
      });
    } else if (field === "venue") {
      const selectedVenue = filterVenues.find((venue) => venue.name === value);
      if (selectedVenue) {
        setFormData({
          ...formData,
          [field]: value,
          venuePrice: selectedVenue.price,
        });
      }
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleNext = async () => {
    if (currentCategory === 1) {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.organization ||
        !formData.phone
      ) {
        toast.error("Please answer all questions before proceeding.");
        return;
      }

      const userName = `${formData.firstName} ${formData.lastName}`;
      setFormData((prevState) => ({
        ...prevState,
        userName: userName.trim(),
      }));
    } else if (currentCategory === 2) {
      if (
        !formData.eventName ||
        !formData.totalSeat ||
        !formData.ticketPrice ||
        !formData.description ||
        !formData.numberOfGuests ||
        formData.speakers.length !== parseInt(formData.numberOfGuests, 10)
      ) {
        toast.error("Please answer all questions before proceeding.");
        return;
      }
    } else if (currentCategory === 3) {
      if (
        !formData.city ||
        !formData.state ||
        !formData.venue ||
        !formData.startDate ||
        !formData.endDate ||
        !formData.eventTime
      ) {
        toast.error("Please answer all questions before proceeding.");
        return;
      }
    }

    if (currentCategory < 3) {
      setCurrentCategory(currentCategory + 1);
    } else {
      const totalPrice =
        (formData.eventPrice || 0) + (formData.venuePrice || 0);
      try {
        const data = {
          ...formData,
          speakers: formData.speakers.map((item) => item.name),
          speakersImages: formData.speakers.map((item) => item.image),
          email: user.email,
          category: label,
          eventPrice: totalPrice,
          status: "pending",
          ticketSold: 0,
        };

        await axios.post("http://localhost:5000/event", data);
        toast.success("Your response has been submitted successfully");
        navigate("/");
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form. Please try again.");
      }
    }
  };

  const handleStartDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      startDate: date,
      endDate: date < prevState.endDate ? prevState.endDate : date,
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      endDate: date,
    }));
  };

  const handleEventImageUpload = async (event) => {
    try {
      const image = event.target.files[0];
      const response = await uploadImage(image);
      const imageUrl = response.data.display_url;

      setFormData((prevState) => ({
        ...prevState,
        eventImages: [...prevState.eventImages, imageUrl],
      }));
    } catch (error) {
      console.error("Error uploading event image:", error);
      toast.error("Error uploading event image. Please try again.");
    }
  };

  const handleGuestImageUpload = async (event, index) => {
    try {
      const image = event.target.files[0];
      const response = await uploadImage(image);
      const imageUrl = response.data.display_url;

      const updatedSpeakers = [...formData.speakers];
      updatedSpeakers[index] = {
        ...updatedSpeakers[index],
        image: imageUrl,
      };
      setFormData((prevState) => ({
        ...prevState,
        speakers: updatedSpeakers,
      }));
    } catch (error) {
      console.error("Error uploading guest image:", error);
      toast.error("Error uploading guest image. Please try again.");
    }
  };

  const filterDistrict =
    venues
      .find((division) => division.division === formData.state)
      ?.districts.map((district) => district.district) || [];

  // Filter venues based on the selected state and city
  const filterVenues =
    venues
      .find((division) => division.division === formData.state)
      ?.districts.find((district) => district.district === formData.city)
      ?.venues || [];

  return (
    <div>
      <div
        className="min-h-[40vh] hero py-8 bg-cover bg-no-repeat bg-[#050410cd] bg-blend-overlay items-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/SJRm756/pexels-min-an-1157557.jpg)",
        }}
      >
        <div className="text-2xl bg-transparent font-bold">
          <SectionHeading
            colortitle="text-white"
            align="text-center"
            title=" Create Your Event"
            normalSubTitleWord="MAKE YOUR EVENTS"
            boldSubTitleWord="AWSOME"
            colorboldmrsub="text-accent"
            colornormrsub="text-white"
          />
        </div>
      </div>

      <div className="grid mx-4 lg:grid-cols-4   ">
        <div className="">
          <div
            className="lg:grid 
   flex  w-96 h-10 lg:grid-cols-1 mt-10 ml-12 lg:h-44"
          >
            <button
              className={`w-44 border-2 border-black ${
                currentCategory === 1
                  ? "bg-gray-300 text-accent  font-semibold"
                  : ""
              }`}
              onClick={() => handleCategoryChange(1)}
            >
              About You
            </button>
            <button
              disabled={
                !formData.firstName ||
                !formData.lastName ||
                !formData.organization ||
                !formData.phone
              }
              className={`w-44 border-2 border-black ${
                currentCategory === 2
                  ? "bg-gray-300 text-accent  font-semibold"
                  : ""
              }
  ${
    !formData.firstName ||
    !formData.lastName ||
    !formData.organization ||
    !formData.phone
      ? "border-slate-100 text-slate-200"
      : "border"
  }`}
              onClick={() => handleCategoryChange(2)}
            >
              Event Info
            </button>

            <button
              className={`w-64 lg:w-44 border-black border-2 ${
                currentCategory === 3
                  ? "bg-gray-300 text-accent  font-semibold"
                  : ""
              }
          ${
            !formData.eventName ||
            !formData.totalSeat ||
            !formData.ticketPrice ||
            !formData.description ||
            !formData.numberOfGuests ||
            formData.speakers.length !== parseInt(formData.numberOfGuests, 10)
              ? "border-slate-100 text-slate-200"
              : "border"
          }
          
          `}
              onClick={() => handleCategoryChange(3)}
              disabled={
                !formData.eventName ||
                !formData.totalSeat ||
                !formData.ticketPrice ||
                !formData.description ||
                !formData.numberOfGuests ||
                formData.speakers.length !==
                  parseInt(formData.numberOfGuests, 10)
              }
            >
              Time and location
            </button>
          </div>
        </div>

        <div
          className="mb-10 lg:col-span-3 grid justify-start 
      md:grid-cols-2 lg:grid-cols-3 lg:gap-96 w-[720px]
      align-middle  items-start "
        >
          <div className="col-span-1">
            {currentCategory === 1 && (
              <div>
                <div>
                  <h1
                    className={`text-xl md:text-2xl mt-5 mb-10  w-96
             md:tracking-[0.2rem] tracking-[0.1rem] uppercase 
             font-semibold `}
                  >
                    {" "}
                    About you
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-4 " data-aos="fade-right">
                  <div className="flex">
                    <div className="grid">
                      <label
                        htmlFor="firstName"
                        className="text-start tracking-[0.09rem]"
                      >
                        {" "}
                        first name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        placeholder="Your First Name"
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className=" w-32  mr-2 bg-white border-black border 
          h-8 text-center shadow-2xl shadow-blue-50 mt-2 rounded-sm"
                      />
                    </div>
                    <div className="grid">
                      <label
                        htmlFor="lastName"
                        className="text-start tracking-[0.09rem]"
                      >
                        {" "}
                        last name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        placeholder="Your Last Name"
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className=" w-32   bg-white border-black border h-8 text-center shadow-2xl shadow-blue-50 mt-2 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className="grid">
                    <label
                      htmlFor="organization"
                      className=" text-start tracking-[0.09rem]"
                    >
                      Your organization name*
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      placeholder="Enter Your organization name"
                      onChange={(e) =>
                        handleInputChange("organization", e.target.value)
                      }
                      className="w-44 md:w-72 lg:w-96  bg-white border-black border h-8 text-center 
                 shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                    />
                  </div>
                  <div className="grid">
                    <label
                      htmlFor="phone"
                      className=" text-start tracking-[0.09rem]"
                    >
                      {" "}
                      Give your phone number*
                    </label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      placeholder="Enter Your phoneNumber"
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-44 md:w-72 lg:w-96 bg-white border-black border h-8 text-center 
                 shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                    />
                  </div>
                </div>
              </div>
            )}
            {currentCategory === 2 && (
              <div>
                <h1
                  className={`text-xl md:text-2xl mt-5 mb-10  w-96
             md:tracking-[0.2rem] tracking-[0.1rem] uppercase 
             font-semibold `}
                >
                  {" "}
                  Event Info{" "}
                </h1>
                <div
                  className="grid  grid-cols-1 gap-2 justify-center
               align-middle items-center mx-auto"
                  data-aos="fade-right"
                >
                  <label
                    htmlFor="eventName"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    {" "}
                    event name*
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    value={formData.eventName}
                    placeholder="Enter Your Event name"
                    onChange={(e) =>
                      handleInputChange("eventName", e.target.value)
                    }
                    className="w-44 md:w-72 lg:w-96  bg-white border-black border h-8 text-center 
                 shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                  />
                  <label
                    htmlFor="totalSeat"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    Quantity of Audience*{" "}
                  </label>
                  <input
                    type="number"
                    id="totalSeat"
                    value={formData.totalSeat}
                    placeholder="minimum 20 people"
                    className="w-44 md:w-72 lg:w-96 bg-white border-black border h-8 text-center 
             shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                    onChange={(e) => {
                      // Ensure the value is within the range of 20 to 2500
                      const audienceQuantity = Math.min(
                        Math.max(0, parseInt(e.target.value) || 0),
                        5000
                      );
                      handleInputChange(
                        "totalSeat",
                        audienceQuantity.toString()
                      );
                    }}
                  />
                  <label
                    htmlFor="ticketPrice"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    Enter your ticket price:
                  </label>
                  <input
                    type="number"
                    id="ticketPrice"
                    value={formData.ticketPrice}
                    placeholder="Enter a price"
                    onChange={(e) => {
                      // Ensure the value is at least 10
                      const ticketPrice = Math.max(
                        10,
                        parseInt(e.target.value) || 10
                      );
                      handleInputChange("ticketPrice", ticketPrice.toString());
                    }}
                    className="w-44 md:w-72 lg:w-96 bg-white border-black border h-8 text-center 
                shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                  />
                  <label
                    htmlFor="description"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    Additional requirements*
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    placeholder="Enter Your Special Demands"
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className="w-44 md:w-72 lg:w-96 bg-white h-28 border-black border  text-center 
                 shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                  ></textarea>

                  <label
                    htmlFor="localImage"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    Upload event image:
                  </label>
                  <input
                    onChange={handleEventImageUpload}
                    name="eventImageFile"
                    className="file-input file-input-bordered    w-64  md:w-72 lg:w-96 bg-white border-black border h-8 text-center 
  shadow-2xl  shadow-blue-50 mt-2 rounded-sm "
                    type="file"
                    id="eventImage"
                  />

                  <label
                    htmlFor="numberOfGuests"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    Quantity of speakers
                  </label>
                  <input
                    type="number"
                    id="numberOfGuests"
                    value={formData.numberOfGuests}
                    placeholder="Enter number of guests"
                    className="w-44 md:w-72 lg:w-96 bg-white border-black border h-8 text-center 
               shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                    onChange={(e) => {
                      // Ensure the value is at least 1
                      const numberOfGuests = Math.max(
                        1,
                        parseInt(e.target.value) || 1
                      );
                      handleInputChange(
                        "numberOfGuests",
                        numberOfGuests.toString()
                      );
                    }}
                  />
                  {Array.from({
                    length: parseInt(formData.numberOfGuests, 10),
                  }).map((_, index) => (
                    <div key={index} className=" ">
                      <div className="grid">
                        <label
                          htmlFor="numberOfGuests"
                          className=" text-start md:w-72 tracking-[0.09rem]"
                        >
                          Name and image
                        </label>
                        <input
                          type="text"
                          placeholder={`Speaker ${index + 1} Name`}
                          className="w-44 md:w-72 lg:w-96 bg-white border-black border
       h-8 
      shadow-2xl text-center shadow-blue-50 mt-2 rounded-sm"
                          value={formData.speakers[index]?.name || ""}
                          onChange={(e) => {
                            const updatedSpeakers = [...formData.speakers];
                            updatedSpeakers[index] = {
                              ...updatedSpeakers[index],
                              name: e.target.value,
                            };
                            handleInputChange("speakers", updatedSpeakers);
                          }}
                        />
                        <input
                          onChange={(e) => handleGuestImageUpload(e, index)}
                          name={`guestImage${index}`}
                          className="file-input file-input-bordered    w-64  md:w-72 lg:w-96 bg-white border-black border h-8 text-center 
      shadow-2xl  shadow-blue-50 mt-2 rounded-sm "
                          type="file"
                          id={`guest-image-file-${index}`}
                        />
                      </div>
                      <div></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {currentCategory === 3 && (
              <div>
                <h1
                  className={`text-xl md:text-2xl mt-5 mb-10  w-96
             md:tracking-[0.2rem] tracking-[0.1rem] uppercase 
             font-semibold `}
                >
                  {" "}
                  location and time{" "}
                </h1>
                <div
                  className="grid  grid-cols-1 gap-2 justify-center align-middle items-center mx-auto"
                  data-aos="fade-right"
                >
                  <div className="grid grid-cols-2 w-96 gap-2">
                    <div className="grid">
                      <label
                        htmlFor="state"
                        className="text-start tracking-[0.09rem]"
                      >
                        Select your state
                      </label>
                      <select
                        onChange={(e) =>
                          handleInputChange("state", e.target.value)
                        }
                        id="state"
                        value={formData.state}
                        className="lg:py-1 py-3 border-2 w-44 md:w-72 lg:w-96 rounded-[4px] px-5 lg:px-4"
                      >
                        <option value="">All States</option>
                        {venues.map((division, i) => (
                          <option key={i} value={division.division}>
                            {division.division}
                          </option>
                        ))}
                      </select>

                      <label
                        htmlFor="city"
                        className="text-start tracking-[0.09rem]"
                      >
                        Select your city
                      </label>
                      <select
                        type="text"
                        id="city"
                        value={formData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        className="lg:py-1 py-3 mt-2 w-44 md:w-72 lg:w-96 rounded-[4px] border-2 px-5 lg:px-4"
                      >
                        <option value="">All Cities</option>
                        {filterDistrict.map((district, i) => (
                          <option key={i} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>

                      <label
                        htmlFor="venue"
                        className="text-start tracking-[0.09rem]"
                      >
                        Select your venue
                      </label>
                      <select
                        type="text"
                        id="venue"
                        value={formData.venue}
                        onChange={(e) =>
                          handleInputChange("venue", e.target.value)
                        }
                        className="lg:py-1 py-3 border-2 w-44 md:w-72 lg:w-96 mt-2 rounded-[4px] px-5 lg:px-4"
                      >
                        <option value="">All Venues</option>

                        {filterVenues.map((venue, i) => (
                          <option key={i} value={venue.name}>
                            {venue.name} - ${venue.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="grid mr-2">
                      <label
                        htmlFor="startDate"
                        className=" text-start tracking-[0.09rem]"
                      >
                        even start date
                      </label>

                      <DatePicker
                        type="date"
                        id="startDate"
                        selected={formData.startDate}
                        onChange={handleStartDateChange}
                        dateFormat="yyyy-MM-dd"
                        className=" w-32  bg-white border-black border h-8 text-center shadow-2xl shadow-blue-50 mt-2 rounded-sm"
                      />
                    </div>
                    <div className="grid">
                      <label
                        htmlFor="endDate"
                        className=" text-start tracking-[0.09rem]"
                      >
                        {" "}
                        Event end date
                      </label>

                      <DatePicker
                        id="endDate"
                        selected={formData.endDate}
                        onChange={handleEndDateChange}
                        dateFormat="yyyy-MM-dd"
                        className=" w-32  bg-white border-black border h-8 text-center shadow-2xl shadow-blue-50 mt-2 rounded-sm"
                        minDate={formData.startDate}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="eventTime"
                    className=" text-start md:w-72 tracking-[0.09rem]"
                  >
                    Event Time
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    value={formData.eventTime}
                    className="w-44 md:w-72 lg:w-96 bg-white border-black border h-11 text-center 
                 shadow-2xl  shadow-blue-50 mt-2 rounded-sm"
                    onChange={(e) =>
                      handleInputChange("eventTime", e.target.value)
                    }
                  />

                  {/* <input type="file"  className="file-input file-input-bordered w-full h-16" onChange={getImageUrl} required /> */}
                </div>
              </div>
            )}

            <div className="flex justify-between text-black p-4">
              {currentCategory === 3 ? (
                <button
                  className="btn btn-ghost text-black bg-200 p-2 text-center"
                  onClick={handleNext}
                  disabled={
                    !formData.city ||
                    !formData.venue ||
                    !formData.state ||
                    !formData.startDate ||
                    !formData.eventTime
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
                    (currentCategory === 1 &&
                      (!formData.firstName ||
                        !formData.lastName ||
                        !formData.organization ||
                        !formData.phone)) ||
                    (currentCategory === 2 &&
                      (!formData.eventName ||
                        !formData.totalSeat ||
                        !formData.ticketPrice ||
                        !formData.description ||
                        !formData.numberOfGuests ||
                        formData.speakers.length !==
                          parseInt(formData.numberOfGuests, 10)))
                  }
                >
                  Next <FaArrowRight />
                </button>
              )}
            </div>
          </div>
          <div>
            <div
              className="border-2 border-black
       bg-accent lg:h-80 mt-20 ml-10 lg:w-72 md:h-96 md:w-60 p-4"
            >
              <div className="border-b-2">
                <div>
                  <ul className="list-disc p-4 text-white">
                    Price On Audience Quantity:
                    <li className="text-xs text-white">
                      From 10 to 500 the cost is $100
                    </li>
                    <li className="text-xs text-white">
                      From 501 to 1500 the cost is $500
                    </li>
                    <li className="text-xs text-white">
                      From 1501 to 5000 the cost is $1000
                    </li>
                  </ul>
                </div>
                <p className="lg:text-end text-white text-xl font-semibold">
                  Audience Price: ${formData.eventPrice}
                </p>
              </div>
              <div className="border-b-2">
                <ul className="list-disc p-4 text-white">
                  Venue Price:
                  <li className="text-xs text-white">
                    {" "}
                    Choose your nearest venue
                  </li>
                </ul>
                <p className="lg:text-end  text-white text-xl font-semibold">
                  Venue price: ${formData.venuePrice}
                </p>
              </div>
              <div className="lg:text-end px-10 text-xl font-semibold text-white">
                Total Price: $
                {formData.eventPrice + formData.venuePrice
                  ? formData.eventPrice + formData.venuePrice
                  : "0.00"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDesForm;
