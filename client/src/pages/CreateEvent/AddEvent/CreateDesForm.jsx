import { useState } from 'react';
import HotDeals from '../../Home/HomeComponenets/HotDeals/HotDeals';
import './CreatDes.css';

const CreateDesForm = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [audienceSize, setAudienceSize] = useState('');
  const [useHotDeals, setUseHotDeals] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [otherDemands, setOtherDemands] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleCardSelect = (cardId) => {
    // Handle the selected card ID as needed
    console.log(`Selected card ID in CreateDesForm: ${cardId}`);
  };

  const handleNext = () => {
    // Check if the current question has been answered before proceeding to the next one
    if (
      (currentQuestion === 1 && organizationName) ||
      (currentQuestion === 2 && audienceSize) ||
      (currentQuestion === 3 && useHotDeals) ||
      (currentQuestion === 4 && (useHotDeals === 'Yes' || ticketPrice)) ||
      (currentQuestion === 5 && otherDemands) ||
      (currentQuestion === 6 && imageFile)
    ) {
      if (currentQuestion === 6) {
     
        // Log the form data to the console
        console.log('Form Data:', {
          organizationName,
          audienceSize,
          useHotDeals,
          ticketPrice: useHotDeals === 'Yes' ? null : ticketPrice,
          otherDemands,
          imageFile,
        });
        alert('Form submitted successfully!');
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle the uploaded image file as needed
    console.log('Uploaded image file:', file);
    setImageFile(file);
  };

  return (
    <div className='mt-18 h-full hero min-h-screen  bg-blue-50 justify-center align-middle items-center '>
      <div className='text-center p-4 mt-16'>
        {currentQuestion === 1 && (
          <div className='grid  '>
            <label htmlFor='organizationName' className='text-2xl font-bold mb-2 Quistions'>
              What is your organization name?
            </label>
            <input
              type='text'
              id='organizationName'
              value={organizationName}
              placeholder='Enter Your organization name'
              onChange={(e) => setOrganizationName(e.target.value)}
              className=' bg-white h-12 pl-5'
            />
          </div>
        )}

        {currentQuestion === 2 && (
          <div className='grid justify-center align-middle items-center'>
            <label htmlFor='audienceSize' className='text-2xl font-bold mb-4 Quistions'>
              How many people do you want as the audience in your event?
            </label>
            <input
              type='number'
              id='audienceSize'
              value={audienceSize}
              placeholder='minimum 20 people'
              className='bg-white h-12 w-96 text-center mx-auto'
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  // Update the state only if the entered value is a valid number (not NaN)
                  setAudienceSize(Math.max(value, 20)); // Enforce a minimum value of 20
                }
              }}
            />
          </div>
        )}

        {currentQuestion === 3 && (
          <div className='grid'>
            <label htmlFor='useHotDeals' className='text-2xl font-bold mb-4 Quistions'>
              Do you want to use our hot deals for tickets?
            </label>
            <div>
              <label className='m-12 text-2xl'>
                <input
                  type='radio'
                  name='useHotDeals'
                  value='Yes'
                  className='bg-white m-2 radio-input'
                  checked={useHotDeals === 'Yes'}
                  onChange={() => setUseHotDeals('Yes')}
                />
                Yes
              </label>
              <label className='m-12 text-2xl'>
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
            <h2 className='text-center text-5xl'> select Your Hot Deals </h2>
            <HotDeals onCardSelect={handleCardSelect} />
          </div>
        )}

        {currentQuestion === 4 && useHotDeals === 'No' && (
          <div className='grid'>
            <label htmlFor='ticketPrice' className='text-2xl font-bold mb-4 Quistions'>
              Enter your ticket price:
            </label>
            <input
              type='number'
              id='ticketPrice'
              className='bg-white h-12 pl-5 text-center'
              value={ticketPrice}
              placeholder='Enter a price '
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  // Update the state only if the entered value is a valid number (not NaN)
                  setTicketPrice(Math.max(value, 10)); // Enforce a minimum value of 10
                }
              }}
            />
          </div>
        )}

        {currentQuestion === 5 && (
          <div className='grid'>
            <label htmlFor='otherDemands' className='text-2xl font-bold mb-4 Quistions'>
              Add your other demands:
            </label>
            <textarea
              id='otherDemands'
              value={otherDemands}
              placeholder='Enter your other demands here'
              className='bg-white h-24 w-96 p-2'
              onChange={(e) => setOtherDemands(e.target.value)}
            />
          </div>
        )}

        {currentQuestion === 6 && (
          <div className='grid'>
            <label htmlFor='imageUpload' className='text-2xl font-bold mb-4 Quistions'>
              Add a recommended image:
            </label>
            <input
              type='file'
              id='imageUpload'
              accept='image/*'
              onChange={(e) => handleImageUpload(e)}
              className='bg-white p-2'
            />
          </div>
        )}

        <div className='flex justify-between p-4'>
          {currentQuestion > 1 && (
            <button onClick={handlePrevious} className='btn btn-ghost text-center'>
              {'<'} Previous
            </button>
          )}

          {currentQuestion === 6 ? (
            <button
              className='btn btn-ghost text-end'
              onClick={handleNext}
              disabled={
                !(
                  (currentQuestion === 1 && organizationName) ||
                  (currentQuestion === 2 && audienceSize) ||
                  (currentQuestion === 3 && useHotDeals) ||
                  (currentQuestion === 4 && (useHotDeals === 'Yes' || ticketPrice)) ||
                  (currentQuestion === 5 && otherDemands) ||
                  (currentQuestion === 6 && imageFile)
                )
              }
            >
              Submit
            </button>
          ) : (
            <button
              className='btn btn-ghost text-end'
              onClick={handleNext}
              disabled={
                !(
                  (currentQuestion === 1 && organizationName) ||
                  (currentQuestion === 2 && audienceSize) ||
                  (currentQuestion === 3 && useHotDeals) ||
                  (currentQuestion === 4 && (useHotDeals === 'Yes' || ticketPrice)) ||
                  (currentQuestion === 5 && otherDemands) ||
                  (currentQuestion === 6 && imageFile)
                )
              }
            >
              Next {'>'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateDesForm;
