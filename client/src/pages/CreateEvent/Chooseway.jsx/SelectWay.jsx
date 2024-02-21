import { Link, useParams } from "react-router-dom";
import OurThemes from "../OurThemes/OurThemes";
import "./select.css";
import imgaprof from '../../../assets/image/Screenshot 2024-02-03 215020.png'
import imgau from '../../../assets/image/Screenshot 2024-02-03 214937.png'
import imgqna from '../../../assets/image/QNA-Transparent-Background.png'

const SelectWay = () => {
  const { label} = useParams();

  return (
   <div className="bg-white  mt-10 mx-4">
   <div className="">
  
  <h1 className="text-5xl font-bold mt-16 py-10 text-center text-black">
    Customize Your Event With <span className="text-blue-950">Event Planet</span>
  </h1>
  <p className="text-center  px-10 font-bold text-2xl mb-10 text-black">
    Choose one of the options below to tailor your event experience with precision. Event Planet offers you the flexibility <br /> to customize your event exactly the way you envision it.
  </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-lg">


     <div className=" bg-blue-950  p-5 rounded-lg 
     ">
   
      
      <div>
      <div  >
            <img className="h-56 mx-auto " src={imgau} alt="" />
          </div>
      <h1 className="text-3xl mt-10 font-bold mb-4 text-center text-white">
      Choose a theme of your event in category - {label}:
          </h1>
          <p className="text-center text-white">
          Explore our diverse collection of themes curated to enhance your event experience. Choose a theme that resonates with your vision and adds a touch of uniqueness to your event.
        </p>
          <OurThemes></OurThemes>
        
      </div>
      </div>

{/* <div className="bg-blue-50">

</div> */}
      <div className="flex justify-center rounded-lg p-5
       bg-gray-200 ">
        <div> 
        <div>
          <img src={imgaprof} className="mx-auto" alt="" />
        </div>
        <h1 className="text-3xl font-bold mt-10 mb-4 text-center
         text-black">
  Create Your Own Unique Event in the {label} Category:
</h1>
<p className="text-center text-black">
  Personalize your event to perfection by providing us with some essential details. Your thoughtful responses 
  will enable us to craft an event that aligns perfectly with your preferences
</p>
       <div className=" flex justify-center m-5">
    
     
          
          <Link  className="fancy" to={`/create-form/${label}`}>
  <span className="top-key"></span>
  <span className="text">Create YOur Event</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
        </Link>
   
       </div>
       <div><img className="h-36 mx-auto" src={imgqna} alt="" /></div>
        </div>
      
     
      </div>
      </div>
    
   </div>
  );
};

export default SelectWay;
