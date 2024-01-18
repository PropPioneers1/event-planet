import { useEffect, useState } from "react";
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
    <div className="shadow-bg bg-[#EEEEEE] mt-10">
      <Container>
        <h2 className="text-3xl font-bold text-center pt-10">
          Trending Products
        </h2>
        <div>
          <p className="text-center mb-10  p-8">
            Hello Human! We{`'`}re here to make your special moments even more
            memorable. Explore our curated collection of essential products for
            various events and find the perfect items to elevate your
            experiences. Whether it{`'`}s a wedding, celebration, or a
            professional gathering, our diverse range of high-quality products
            awaits you. Visit our shop now and discover a world of elegance and
            functionality at your fingertips.
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
         <div className='slider rounded-r-2xl rounded-l-3xl'>
          
          <div className='slide-track gap-10'>
            {data.map((item, index) => (
              <div key={index} className='slide relative card
              h-96  bg-transparent '>
                <img className='trendingimg px-8 h-24' src={item.image} alt="" />
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

  
 
<Buttonall> Shop Now <FaShopify></FaShopify> </Buttonall>
  </div>


    
    
  );
};

export default Trendingproducts;
