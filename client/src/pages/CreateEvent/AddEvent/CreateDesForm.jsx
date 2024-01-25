import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import HotDeals from '../../Home/HomeComponenets/HotDeals/HotDeals';
import './CreatDes.css';
import axios from 'axios';
// import toast from 'react-hot-toast'
import toast, { Toaster } from 'react-hot-toast';
// import { } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaSeedling } from 'react-icons/fa6';
const CreateDesForm = () => {
  const navigate =useNavigate()
  const [organizationName, setOrganizationName] = useState('');
  const [audienceSize, setAudienceSize] = useState('');
  const [useHotDeals, setUseHotDeals] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [otherDemands, setOtherDemands] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [guestNames, setGuestNames] = useState('');
  const [guestProfessions, setGuestProfessions] = useState('');
  const [cardId, selectCardId] = useState('');

  const handleCardSelect = (cardId) => {
    selectCardId(cardId);
  };

  const totalQuestions = 6;

  const calculateProgress = () => ((currentQuestion - 1) / (totalQuestions - 1)) * 100;

  const handleNext = () => {
    if (
      (currentQuestion === 1 && organizationName) ||
      (currentQuestion === 2 && audienceSize) ||
      (currentQuestion === 3 && useHotDeals) ||
      (currentQuestion === 4 && (useHotDeals === 'Yes' || ticketPrice)) ||
      (currentQuestion === 5 && otherDemands) ||
      (currentQuestion === 6 && numberOfGuests && guestNames && guestProfessions)
    ) {
      if (currentQuestion === 6) {
        const formData = {
          organizationName,
          audienceSize,
          useHotDeals,
          selectedCardOrTicketPrice: useHotDeals === 'Yes' ? cardId : ticketPrice,
          otherDemands,
          numberOfGuests,
          guestNames,
          guestProfessions,
          status:'pending'
        };

        axios.post('http://localhost:5000/qna', formData)
  .then(() => {
    toast.success('Your Response sent successfully');
    navigate("/");
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
    toast.error('Error submitting form. Please try again.');
  });
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      alert('Please answer the current question before proceeding.');
    
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className='mt-18 h-full hero min-h-screen bg-white justify-center align-middle items-center '>
      <div className='mt-32 mb-10'>
        <h1 className='md:text-5xl text-2xl text-center font-bold  '>
          Create Your Event
        </h1>

        <p className='text-center text-slate-700 text-xl  mt-4'>
          Answer the following questions to customize your event.
        </p>

        <div className='text-center p-10 rounded-xl
         bg-neutral shadow-2xl shadow-blue-200 mx-auto
         mt-6  md:w-[650px] w-[320px]  lg:w-[800px]'>
          {currentQuestion === 1 && (
            <div className='grid ' data-aos="fade-right">
              <label htmlFor='organizationName' className=' md:text-4xl text-xl
               text-black font-bold mb-10 Quistions'>
                What is your organization name?
              </label>
              <input
                type='text'
                id='organizationName'
                value={organizationName}
                placeholder='Enter Your organization name'
                onChange={(e) => setOrganizationName(e.target.value)}
                className=' bg-white h-12 pl-5  w-56 md:w-96 mx-auto rounded-full'
              />
            </div>
          )}

          {currentQuestion === 2 && (
            <div data-aos="fade-right" className='grid justify-center align-middle items-center' data-aos="fade-right">
              <label htmlFor='audienceSize' className=' md:text-4xl text-xl text-black font-bold mb-4 Quistions'>
                How many people do you want as the audience in your event?
              </label>
              <input
                type='number'
                id='audienceSize'
                value={audienceSize}
                placeholder='minimum 20 people'
                className='bg-white h-12 w-76 md:w-96 text-center mx-auto rounded-full'
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
            <div className='grid' data-aos="fade-right">
              <label htmlFor='useHotDeals' className=' md:text-4xl text-xl text-black font-bold mb-4 Quistions'>
                Do you want to use our hot deals for tickets?
              </label>
              <div>
                <label className='m-12 text-2xl'>
                  <input
                    type='radio'
                    name='useHotDeals'
                    value='Yes'
                    className='bg-white m-2 radio-input '
                    checked={useHotDeals === 'Yes'}
                    onChange={() => setUseHotDeals('Yes')}
                  />
                  Yes
                </label>
                <label className='mb:m-12  text-2xl'>
                  <input
                    type='radio'
                    name='useHotDeals'
                    value='No'
                    className='bg-white m-2 radio-input'
                    checked={useHotDeals === 'No'}
                    onChange={() => setUseHotDeals('No')}
                  />
                  No
                </label>
              </div>
            </div>
          )}

          {currentQuestion === 4 && useHotDeals === 'Yes' && (
            <div>
              <h2 className='text-center text-5xl font-bold mt-10 text-black'>Select Your Hot Deals</h2>
              <HotDeals onCardSelect={handleCardSelect} />
            </div>
          )}

          {currentQuestion === 4 && useHotDeals === 'No' && (
            <div className='grid'>
              <label htmlFor='ticketPrice' className=' md:text-4xl text-xl text-black font-bold mb-4 Quistions'>
                Enter your ticket price:
              </label>
              <input
                type='number'
                id='ticketPrice'
                className='bg-white w-44 mx-auto pl-5 text-center rounded-full'
                value={ticketPrice}
                placeholder='Enter a price'
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
            <div className='grid' data-aos="fade-right">
              <label htmlFor='otherDemands' className=' md:text-4xl text-xl text-black font-bold mb-4 Quistions'>
                Add your other demands:
              </label>
              <textarea
                id='otherDemands'
                value={otherDemands}
                placeholder='Enter your other demands here'
                className='bg-white h-24 w-56 md:w-96 p-2 mx-auto rounded-lg'
                onChange={(e) => setOtherDemands(e.target.value)}
              />
            </div>
          )}

          {currentQuestion === 6 && (
            <div className='grid' data-aos="fade-right">
              <label htmlFor='numberOfGuests' className=' md:text-2xl text-xl text-black text-start font-bold mb-4 Quistions'>
                1/  Enter the number of guests:
              </label>
              <input
                type='number'
                id='numberOfGuests'
                value={numberOfGuests}
                placeholder='Enter the number of guests'
                className='bg-white w-56 md:w-96  text-center rounded-lg  h-8'
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) {
                    setNumberOfGuests(Math.max(value, 1));
                  }
                }}
              />

              <label htmlFor='guestNames' className=' md:text-2xl text-xl text-start text-black font-bold mb-4 Quistions mt-6'>
                2/ Enter the names of the guests (comma-separated):
              </label>
              <input
                type='text'
                id='guestNames'
                value={guestNames}
                placeholder='Enter guest names'
                className='bg-white w-56 md:w-96  text-center rounded-lg  h-8'
                onChange={(e) => setGuestNames(e.target.value)}
              />

              <label htmlFor='guestProfessions' className=' md:text-2xl text-xl text-start text-black font-bold mb-4 Quistions mt-6'>
                3/  Enter the professions of the guests (comma-separated):
              </label>
              <input
                type='text'
                id='guestProfessions'
                value={guestProfessions}
                placeholder='Enter guest professions'
                className='bg-white w-56 md:w-96  text-center rounded-lg  h-8'
                onChange={(e) => setGuestProfessions(e.target.value)}
              />
            </div>
          )}

          <div className='flex-1 my-auto mt-10 mx-4'>
            <div className='relative pt-1'>
              <div className='flex mb-2 items-center justify-between'>
                <div className='text-sm text-black'>
                  <span className='absolute md:ml-2 lg:ml-12 font-bold md:text-2xl text-sm mt-1 text-white md:text-black ml-6'>
                    {Math.round(calculateProgress())}%</span>
                </div>
              </div>
              <div className='flex h-4 w-44 md:w-96  mb-4 mx-auto overflow-hidden rounded-2xl shadow-lg bg-blue-200'>
                <div
                  style={{ width: `${calculateProgress()}%` }}
                  className='flex flex-col justify-center bg-green-950
                  shadow-lg  transition-all duration-300 ease-in'
                ></div>
              </div>
            </div>
          </div>

          <div className='flex justify-between text-black p-4'>
            {currentQuestion > 1 && (
              <button onClick={handlePrevious} className='btn 
              btn-ghost bg-blue-200 p-2 text-center'>
                <FaArrowLeft></FaArrowLeft> Previous
              </button>
            )}

            {currentQuestion === 6 ? (
              <button
                className='btn btn-ghost text-end text-black bg-blue-200'
                onClick={handleNext}
                disabled={!numberOfGuests || !guestNames || !guestProfessions}
              >
                Submit <FaSeedling></FaSeedling>
                <Toaster/>
              </button>
            ) : (
              <button
                className='btn btn-ghost text-black text-end bg-blue-200'
                onClick={handleNext}
                disabled={
                  !(
                    (currentQuestion === 1 && organizationName) ||
                    (currentQuestion === 2 && audienceSize) ||
                    (currentQuestion === 3 && useHotDeals) ||
                    (currentQuestion === 4 && (useHotDeals === 'Yes' || ticketPrice)) ||
                    (currentQuestion === 5 && otherDemands)
                  )
                }
              >
                Next <FaArrowRight></FaArrowRight>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDesForm;