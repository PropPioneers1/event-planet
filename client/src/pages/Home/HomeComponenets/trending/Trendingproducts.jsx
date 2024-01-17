import { useEffect, useState } from 'react';
import './trending.css';
import Lottie from "lottie-react";
// import shop from '../../../../assets/image/shop.webp'
import { IoStar } from "react-icons/io5";
import lcottievb from '../../../../../public/Animation - 1705432373781.json'
import { FaShopify } from 'react-icons/fa';
const Trendingproducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/trendprod.json') 
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []);

  return (
    
  <div className='shadow-bg'>
     <h2 className="text-center font-bold mt-10 mb-5 text-3xl underline">Our trending products</h2>
        <div>
        <p className="text-center mb-10  p-8">
  Hello Human! We're here to make your special moments even more memorable.
  Explore our curated collection of essential products for various events and
  find the perfect items to elevate your experiences.<br></br> Whether it's a wedding,
  celebration, or a professional gathering, our diverse range of high-quality
  products awaits you. Visit our shop now and discover a world of elegance and
  functionality at your fingertips.
</p>
        </div>
     <div className='flex '>
    
    <div className=' w-96'>
    <Lottie animationData={lcottievb}></Lottie>
    
    </div>
      {/* <img className=' h-72  w-96 rounded-badge' src={shop} alt="" /> */}
         <div className='slider'>
          
          <div className='slide-track gap-10'>
            {data.map((item, index) => (
              <div key={index} className='slide relative card
              h-96  bg-transparent '>
                <img className=' px-8 h-24' src={item.image} alt="" />
                <div className=' h-96 card-body  '>
                  <h2 className='card-title w-54'>{item.itemName}</h2>
                  <h2 className='font-bold w-54'> ${item.price}</h2>
    
                 <div className='flex gap-3'>
                   <h3 className=''>{item.brandName}</h3>
                 <p className='flex items-center font-bold text-blue-950 gap-2'><IoStar></IoStar> {item.rating}</p>
                 </div>
                </div>
    
                
              </div>
            ))}
          </div>
          
        </div>
       
       </div>

       <div className="text-center mb-10">
        <button className="btn btn-wide mt-4
         bg-blue-300">Visit Our Shop <FaShopify /></button>
      </div>
       
  </div>
  );
};

export default Trendingproducts;
