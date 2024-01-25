

import React, { useState } from 'react';

const HotDeals = ({ onCardSelect }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (cardId) => {
    setSelectedCard(cardId);
    onCardSelect(cardId); 
    console.log(`Selected card ID: ${cardId}`);
  };

    return (
        <div>
            <div  className="mt-10  grid grid-cols-1 md:grid-cols-2 gap-4
             items-center justify-center align-middle ">
        {/* first card */}
        <div className="ml-12 lg:mr-0">
          <div data-aos="flip-right" className="relative flex w-full max-w-[20rem] text-black flex-col rounded-xl bg-gradient-to-tr from-white to-blue-400 bg-clip-border p-8  shadow-md shadow-pink-500/40">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-black antialiased">
                standard
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-black antialiased">
                <span className="mt-2 text-4xl">$</span>29
                <span className="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
   
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                     
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    3 team members
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
             
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                   
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    200+ components
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
               
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                   
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    40+ Extra benefits
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
        
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                   
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    10 days updates
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
             
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
            <button
                onClick={() => handleSelect('standard')}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                {selectedCard === 'standard' ? 'Selected' : 'Select'}
              </button>
            </div>
          </div>
        </div>
        {/* second card */}

        <div className="ml-12 lg:mr-0">
        <div data-aos="flip-right" className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-white to-blue-400 bg-clip-border p-8 text-black shadow-md shadow-pink-500/40">
          <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
            <p className="block font-sans text-sm font-normal uppercase leading-normal text-black antialiased">
              Pro
            </p>
            <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-black antialiased">
              <span className="mt-2 text-4xl">$</span>39
              <span className="self-end text-4xl">/mo</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
     
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3"
                  >
                    <path
                      
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  4 team members
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3"
                  >
                    <path
                 
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  250+ components
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
     
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3"
                  >
                    <path
                 
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  45+ extra benefits
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                 
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3"
                  >
                    <path
                  
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  15 days updates
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                 
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3"
                  >
                    <path
                      
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </span>
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  Life time technical support
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-12 p-0">
          <button
                onClick={() => handleSelect('pro')}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                {selectedCard === 'pro' ? 'Selected' : 'Select'}
              </button>
          </div>
        </div>
        </div>
        <div className="ml-12 lg:mr-0">
          <div data-aos="flip-right" className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-white to-blue-400 bg-clip-border p-8 text-black shadow-md shadow-pink-500/40">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <p className="block font-sans text-sm font-normal uppercase leading-normal text-black antialiased">
                Pro Plus
              </p>
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-black antialiased">
                <span className="mt-2 text-4xl">$</span>49
                <span className="self-end text-4xl">/mo</span>
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
             
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    6 team members
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                  
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                     
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    300+ components
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                    
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    50+ extra benefits
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                       
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    1 month updates
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="rounded-full border border-white/20 bg-white/20 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
             
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                       
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </span>
                  <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                    Life time technical support
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-12 p-0">
            <button
                onClick={() => handleSelect('proPlus')}
                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                {selectedCard === 'proPlus' ? 'Selected' : 'Select'}
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HotDeals;