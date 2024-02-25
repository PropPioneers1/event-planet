import { useEffect, useState } from "react";
import Slider from "react-slick";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

function Ourteam() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [teamData, setTeamData] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [speed, setspeed] = useState();
  useEffect(() => {
    fetch("/Ourteam.json")
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data);
      })
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2);
        setspeed(3000)
      } else {
        setSlidesToShow(1);
        setspeed(4000)
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true, 
    initialSlide: 0,
    afterChange: (current) => setActiveSlide(current),
    autoplay: true, 
    autoplaySpeed: speed,
    pauseOnHover: true,
    rtl: false ,
    ltr:true
  };

  const handleImageClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="slider-container">
      {teamData.length > 0 && (
        <div>
          <div className="md:grid md:grid-cols-3 ">
            
            <div className="md:col-span-2 pl-4"> 
              <SectionHeading
                colortitle='text-[rgb(255 255 255 / var(--tw-text-opacity))]'
                align="lg:text-start md:text-center"
                title="EVENT PIONEERS"
                normalSubTitleWord=" OUR PROFESSIONAL"
                boldSubTitleWord="PLANER"
                colorboldmrsub='text-accent'
                colornormrsub='text-black'
              />
               <div className="">
  <img src={teamData[activeSlide].image} className="  md:hidden block 
  w-44 h-44 mx-auto mb-4 object-cover" alt="" />
</div>
              <div className="member-details">
                <div className="flex">
                  <div>
                    <h2><span className="font-bold">{teamData[activeSlide].name} </span>
                    <span className="text-primary">||  {teamData[activeSlide].professional}</span> </h2>
                  </div>
                </div>
                <p>Category: <span className="text-accent">{teamData[activeSlide].category}</span></p>
                <p>Speciality: <span className="text-accent">{teamData[activeSlide].speciality}</span></p>
               <div className="flex gap-3 p-2">
                <FaFacebook></FaFacebook>
                <FaInstagram></FaInstagram>
                <FaWhatsapp></FaWhatsapp>
               </div>
               
               <div className="w-[300px] pl-5 lg:w-[600px]  pt-4">
            <Slider {...settings}>
              {teamData.map((member, index) => (
                <div key={index} onClick={() => handleImageClick(index)} className="">
                  <div>
                    <div className="w-32">
                      <img className={`h-12 border-4 w-12 ${index === activeSlide ? 'border-accent' : 'border-white'} mx-auto -mb-5 rounded-full `}
                        src={member.image} alt={member.name} />
                      <p className={`text-center rounded-lg h-16 text-xs pt-5
                       ${index === activeSlide ? 'bg-gradient-to-t from-blue-400 to-accent  text-white font-semibold transition-all duration-700' : 'bg-white'}`}>{member.name} <br /> {member.category} </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
              </div>
            </div>

 <div className="">
  <img src={teamData[activeSlide].image} className="hidden md:block 
  md:h-64 lg:h-96 md:w-44 md:mt-44 lg:mt-[4.9rem] lg:w-72 mb-0 object-cover" alt="" />
</div>

            
          </div> 
         
        </div>
      )}
    </div>
  );
}

export default Ourteam;
