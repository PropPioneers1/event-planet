import React from 'react';
import './Ourtheme.css';

const OurThemes = () => {
  return (
    <div className='m-10 '>
      <h1 className='text-3xl text-green-800 '>Choose Your Design Themes:</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-10 align-middle items-center 
justify-center'>
   {/* theme one */}
   <div className='hidden lg:grid'></div>
   <div className="container">
      <div className="cardth">
          <p className="title">Elegant</p>
          <p className="font-bold">Theme-One</p>
          <div className="card-hidden">
              <p className="title-in">Elegant</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
              <a className="button">Details</a>
          </div>

      </div>
      <div className="card-border"></div>
  </div>



{/* theme two */}
<div className="container">
      <div className="cardth">
          <p className="title">Casual</p>
          <p className="font-bold">Theme-Two</p>
          <div className="card-hidden">
              <p className="title-in">Casual</p>
              <p>Lorem ipsum dolor sit amet, cons.</p>
              <a className="button">Details</a>
          </div>

      </div>
      <div className="card-border"></div>
  </div>
 {/* theme three */}
 <div className="container">
      <div className="cardth">
          <p className="title">Classic</p>
          <p className="font-bold">Theme-Three</p>
          <div className="card-hidden">
              <p className="title-in">Classic</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <a className="button">Casual</a>
          </div>

      </div>
      <div className="card-border"></div>
  </div>

</div>








    </div>
  );
};

export default OurThemes;
