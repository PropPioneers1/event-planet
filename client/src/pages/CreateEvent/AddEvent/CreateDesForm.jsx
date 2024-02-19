import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft, FaArrowRight, FaSeedling } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { uploadImage } from "../../../api/utlis";
import SectionHeading from "../../../components/shared/SectionHeading/SectionHeading";

const CreateDesForm = () => {
  const { label } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState(1);
  // const [localImage, setLocalImage] = useState(null);
  // const [speakersImages, setSpeakersImages] = useState([]);
  const [formData, setFormData] = useState({
    organization: "",
    userName: "",
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
    startDate: "",
    endDate: "",
    eventTime: "",
    eventImages: [],
    speakersImages: [],
  });

  // const [guestImages, setGuestImages] = useState([]);// State to track if all images are ready

  const handleNext = async () => {
    if (currentCategory === 1) {
      if (!formData.userName || !formData.organization || !formData.phone) {
        toast.error("Please answer all questions before proceeding.");
        return;
      }
    } 
    else if (currentCategory === 2) {
      if (
        !formData.eventName ||
        !formData.totalSeat ||
        !formData.ticketPrice ||
        !formData.description ||
        !formData.numberOfGuests ||
        formData.speakers.length !== parseInt(formData.numberOfGuests, 10) 
        // !speakersImages.length
      ) {
        toast.error("Please answer all questions before proceeding.");
        return;
      }
    }
    else if (currentCategory === 3) {
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
      try {
        const data = {
          ...formData,
          speakers:formData.speakers.map((item)=>item.name),
          speakersImages:formData.speakers.map((item)=>item.image),
          email: user.email,
          category: label,
          status: "unpaid",
          ticketSold:0
        };
        console.log(data,'her');
         await axios.post("http://localhost:5000/event", data);
        toast.success("Your response has been submitted successfully");
        navigate("/");
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form. Please try again.");
      }
    }
  };

  const handlePrevious = () => {
    setCurrentCategory(currentCategory - 1);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleEventImageUpload = async (event) => {
    try {
      const image = event.target.files[0];
      const response = await uploadImage(image);
      const imageUrl = response.data.display_url;
  
      // Update the eventImages array with the new image URL
      setFormData(prevState => ({
        ...prevState,
        eventImages: [...prevState.eventImages, imageUrl]
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
  
      // Update the speakersImages array with the new image URL
      const updatedSpeakers = [...formData.speakers];
      updatedSpeakers[index] = {
        ...updatedSpeakers[index],
        image: imageUrl
      };
      setFormData(prevState => ({
        ...prevState,
        speakers: updatedSpeakers
      }));
    } catch (error) {
      console.error("Error uploading guest image:", error);
      toast.error("Error uploading guest image. Please try again.");
    }
  };
  


  return (
    <div className="">
      <div className="min-h-[60vh] hero py-8 bg-cover bg-no-repeat bg-[#050410cd] bg-blend-overlay items-center bg-fixed" style={{ backgroundImage: "url(https://i.ibb.co/SJRm756/pexels-min-an-1157557.jpg)" }}>
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
      <div className="mb-10">
        <div className="text-center p-10 rounded-xl bg-neutral shadow-2xl shadow-blue-200 mx-auto mt-6 md:w-[650px] w-[320px] lg:w-[800px]">
          {currentCategory === 1 && (
          <div>
             <h1 className={`text-xl md:text-2xl mb-10 md:tracking-[0.2rem] tracking-[0.1rem] uppercase font-semibold `}> About you</h1>
             <div className="grid grid-cols-1 gap-2 justify-center align-middle items-center mx-auto" data-aos="fade-right">
             
             <div className="grid">
             <label htmlFor="userName" className=" text-middle tracking-[0.09rem] font-semibold text-xl">What is your name?</label>
               <input type="text" id="userName" value={formData.userName} placeholder="Enter Your  name" onChange={(e) =>
                  handleInputChange('userName', e.target.value)}
                   className="w-44 md:w-96  h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg" />
             </div>
            <div className="grid">
            <label htmlFor="organization" className=" text-center tracking-[0.09rem] font-semibold text-xl">What is your organization name?</label>
               <input type="text" id="organization" value={formData.organization} placeholder="Enter Your organization name" onChange={(e) => 
                 handleInputChange('organization', e.target.value)} 
                 className="w-44 md:w-96  h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg"/>
            </div>
         <div className="grid">
         <label htmlFor="phone" className=" text-center tracking-[0.09rem] font-semibold text-xl">What is your phone number?</label>
               <input type="text" id="phone" value={formData.phone} placeholder="Enter Your phoneNumber" onChange={(e) => 
                 handleInputChange('phone', e.target.value)}
                  className=" w-44 md:w-96 h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg" />
         </div>
             </div>
          </div>
          )}
          {currentCategory === 2 && (
          <div>
                       <h1 className={`text-xl md:text-2xl mb-10 md:tracking-[0.2rem] tracking-[0.1rem] uppercase font-semibold `}> About Your event </h1>
              <div className="grid  grid-cols-1 gap-2 justify-center align-middle items-center mx-auto" data-aos="fade-right">
              <label htmlFor="eventName" className=" text-center 
              text-xs md:text-xl tracking-[0.09rem] font-semibold ">What is your event name?</label>
              <input type="text" id="eventName" value={formData.eventName} placeholder="Enter Your Event name" onChange={(e) =>
                 handleInputChange('eventName', e.target.value)} 
                  className="w-44 md:w-96  h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg" />
              <label htmlFor="totalSeat" 
              className=" text-center tracking-[0.09rem] font-semibold text-xs md:text-xl">How many people do you want as the audience in your event?</label>
              <input type="number" id="totalSeat" value={formData.totalSeat} placeholder="minimum 20 people"
               className="w-44 md:w-96  h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg"
                onChange={(e) => handleInputChange('totalSeat', e.target.value)} />
              <label htmlFor="ticketPrice"
               className=" text-center tracking-[0.09rem] font-semibold text-xs md:text-xl">Enter your ticket price:</label>
              <input type="number" id="ticketPrice"  value={formData.ticketPrice}
               placeholder="Enter a price" onChange={(e) =>
                handleInputChange('ticketPrice', e.target.value)} 
                 className="w-44 md:w-96  h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg" />
              <label htmlFor="description"
              className=" text-center tracking-[0.09rem] font-semibold text-xs md:text-xl">
                Do you have any other special demands for your event?</label>
              <textarea id="description" value={formData.description} placeholder="Enter Your Special Demands" 
              onChange={(e) => handleInputChange('description', e.target.value)} className="h-24 p-4 w-76 md:w-96 mx-auto rounded-xl"></textarea>
              <label htmlFor="numberOfGuests" className=" text-center tracking-[0.09rem] font-semibold text-xs md:text-xl">How many guests are you inviting?</label>
              <input type="number" id="numberOfGuests" value={formData.numberOfGuests} placeholder="Enter number of guests"
               className="bg-white h-12 w-44 md:w-96  text-center mx-auto rounded-full" onChange={(e) => handleInputChange('numberOfGuests', e.target.value)} />
              {Array.from({ length: parseInt(formData.numberOfGuests, 10) }).map((_, index) => (
  <div key={index}
  className="md:flex items-center justify-center align-middle grid space-x-4 gap-5 mt-4">
    <input 
      type="text" 
      placeholder={`Speaker ${index + 1} Name`} 
      className="h-12 p-2 md:w-56 w-36 rounded-md border border-gray-300" 
      value={formData.speakers[index]?.name || ""} 
      onChange={(e) => {
        const updatedSpeakers = [...formData.speakers];
        updatedSpeakers[index] = {
          ...updatedSpeakers[index],
          name: e.target.value
        };
        handleInputChange('speakers', updatedSpeakers);
      }} 
    />
    <input
      onChange={(e) => handleGuestImageUpload(e, index)}
      name={`guestImage${index}`}
      className="w-96 h-11 text-center shadow-2xl mx-auto shadow-blue-50 mt-2 rounded-lg"
      type="file"
      id={`guest-image-file-${index}`}
    />
  </div>
))}

            </div>
          </div>
          )}
          {currentCategory === 3 && (
           <div>
             <h1 className={`text-xl md:text-2xl mb-10 md:tracking-[0.2rem] tracking-[0.1rem] uppercase font-semibold `}> location and time </h1>
             <div className="grid  grid-cols-1 gap-2 justify-center align-middle items-center mx-auto" data-aos="fade-right">
              <label htmlFor="city"
               className=" text-center tracking-[0.09rem] font-semibold text-xl">Which city will the event take place in?</label>
              <input type="text" id="city" value={formData.city} placeholder="Enter City"
               className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full"
               onChange={(e) => handleInputChange('city', e.target.value)} />
              <label htmlFor="state" 
             className=" text-center tracking-[0.09rem] font-semibold text-xl">Which state will the event take place in?</label>
              <input type="text" id="state" value={formData.state} placeholder="Enter State"
               className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full" onChange={(e) => handleInputChange('state', e.target.value)} />
              <label htmlFor="venue"
             className=" text-center tracking-[0.09rem] font-semibold text-xl">Enter the venue of the event.</label>
              <input type="text" id="venue" value={formData.venue} placeholder="Enter Venue"
               className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full" onChange={(e) => handleInputChange('venue', e.target.value)} />
              <label htmlFor="startDate" 
            className=" text-center tracking-[0.09rem] font-semibold text-xl">Add the start date of your event?</label>
              <input type="date" id="startDate" value={formData.startDate} 
              className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full" onChange={(e) => handleInputChange('startDate', e.target.value)} />
              <label htmlFor="endDate"
              className=" text-center tracking-[0.09rem] font-semibold text-xl">When does your event end? (End Date)</label>
              <input type="date" id="endDate" value={formData.endDate}
               className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full" onChange={(e) => handleInputChange('endDate', e.target.value)} />
              <label htmlFor="eventTime"
             className=" text-center tracking-[0.09rem] font-semibold text-xl">At what time will the event start?</label>
              <input type="time" id="eventTime" value={formData.eventTime}
               className="bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full" onChange={(e) => handleInputChange('eventTime', e.target.value)} />
              <label htmlFor="localImage"
             className=" text-center tracking-[0.09rem] font-semibold text-xl">Upload event image:</label>
              <input
  onChange={handleEventImageUpload}
  name="eventImageFile"
  className="file-input file-input-bordered w-full h-16"
  type="file"
  id="eventImage"
/>
              {/* <input type="file"  className="file-input file-input-bordered w-full h-16" onChange={getImageUrl} required /> */}
            </div>
           </div>
          )}
          <div className="flex-1 my-auto mt-10 mx-4">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-sm text-black">
                  <span className="absolute md:ml-2 lg:ml-12 font-bold md:text-2xl text-sm mt-1 text-white md:text-black ml-6">{Math.round((currentCategory / 3) * 100)}%</span>
                </div>
              </div>
              <div className="flex h-4 w-44 md:w-96 mb-4 mx-auto overflow-hidden rounded-2xl shadow-lg bg-blue-200">
                <div style={{ width: `${(currentCategory / 3) * 100}%` }} className="flex flex-col justify-center bg-green-950 shadow-lg transition-all duration-300 ease-in"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-black p-4">
            {currentCategory > 1 && (
              <button onClick={handlePrevious} className="btn btn-ghost bg-blue-200 p-2 text-center">
                <FaArrowLeft /> Previous
              </button>
            )}
            {currentCategory === 3 ? (
              <button className="btn btn-ghost text-black bg-200 p-2 text-center" onClick={handleNext} disabled={!formData.city || !formData.venue || 
              !formData.state || !formData.startDate || !formData.eventTime }>
                Submit <FaSeedling />
                <Toaster />
              </button>
            ) : (
              <button className="btn btn-ghost text-black text-end bg-blue-200" onClick={handleNext} disabled={currentCategory === 1 && 
              (!formData.userName || !formData.organization || !formData.phone) || currentCategory === 2 && (!formData.eventName || !formData.totalSeat || 
              !formData.ticketPrice || !formData.description || !formData.numberOfGuests ||
               formData.speakers.length !== parseInt(formData.numberOfGuests, 10))}>
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
