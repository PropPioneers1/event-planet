import { useEffect, useState ,} from "react";
import {  Link } from "react-router-dom";

import "./trending.css";
import Lottie from "lottie-react";
// import shop from '../../../../assets/image/shop.webp'
import { IoStar } from "react-icons/io5";
import lcottievb from "../../../../../public/Animation - 1705432373781.json";
import { FaShopify } from "react-icons/fa";
import Container from "../../../../components/ui/Container";
import Buttonall from "../../../../components/ui/ButtonAll/Buttonall";
const Trendingproducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/trendprod.json")
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []);

  return (
    <div className="shadow-bg bg-blue-200 mt-10">
      <Container>
        <h2 className="text-3xl font-bold text-center pt-10">
          Trending Products
        </h2>
        <div>
          <p className="text-center mb-10 text-gray-700 text-xl p-8">
            Hello Human! We{`'`}re here to make your special moments even more
            memorable. Explore our curated collection of essential products for
            various events and find the perfect items to elevate your
            experiences. 
          </p>
        </div>
        </Container>
      
     <div className='flex '>
    
    <div >
    <Lottie className=' md:w-[350px] 
    hidden md:block  mt-20
    ' animationData={lcottievb}></Lottie>
    
    </div>
      {/* <img className=' h-72  w-96 rounded-badge' src={shop} alt="" /> */}
         <div className='slider rounded-r-2xl
          rounded-l-3xl'>
          
          <div className='slide-track gap-5 '>
            {data.concat(data).map((item, index)=> (
              <div key={index} className='slide relative 
              card 
              h-72 bg-transparent '>
                  {/* <p className='flex items-center font-bold text-blue-950 gap-2'><IoStar></IoStar> {item.rating}</p> */}

        
<div className="mb-4">

</div>

          <div className='trendingimg w-44 relative' >
                  <img className='h-20 w-44 mx-auto ' src={item.image} alt="" />
                  <div className="buy-now-button absolute top-1/2 left-1/2 
                  transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <button className="  border-2 backdrop-blur-lg font-bold
                     border-slate-700 text-white px-4 py-2 rounded">Buy Now</button>
                  </div>
                </div>

{/* 
<Link className='trendingimg  w-96  ' to='/'>
                <img className='h-20 w-44 mx-auto ' src={item.image} alt="" /></Link> */}
                <div className=' h-44 w-56 '>
                  <h2 className=' text-slate-700  text-xl  border bottom-2 border-slate-300  text-wrap font-bold mt-4 ' >{item.itemName}</h2>
                  <h2 className='font-bold  border bottom-2 border-slate-300  text-slate-500 '>Price : <span className="text-pink-500 font-bold text-xl">${item.price}</span></h2>
                  <h3 className='text-slate-600  border bottom-2 border-slate-300 '> Brand : {item.brandName}</h3>
                  <div className="flex gap-2 border bottom-2 border-slate-300  ">
            <p className="text-start  text-slate-700"> Rating :</p>
          <div className="rating rating-sm mt-1 ">
                  {Array.from({ length: 5 }, (_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${item.id}`} 
                      className={`mask mask-star-2 bg-pink-600 
                      ${i < item.rating ? 'checked' : ''}`}
                      checked={i < item.rating}
                      readOnly
                    />
                  ))}
                </div>
          </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  
 
<Buttonall> Visit Our Shop <FaShopify></FaShopify> </Buttonall>
  </div>


    
    
  );
};

export default Trendingproducts;
