import  { useState, useEffect } from 'react';
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import Container from "../../components/ui/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoGoal } from "react-icons/go";
import Ourteam from "./Ourteam";
import WhyChoose from "../Home/HomeComponenets/WhyChooseEventPlanet/WhyChoose";
import { GiStairsGoal } from "react-icons/gi";
import { Link } from 'react-router-dom';

const About = () => {
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/Award.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch awards data');
        }
        return res.json();
      })
      .then((data) => {
        setAwards(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const toggleMission = () => {
    setShowMission(!showMission);
  };

  const toggleVision = () => {
    setShowVision(!showVision);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
   
      <div className="">
        <div
          id="my-id"
          className="min-h-[60vh] hero py-8 bg-cover bg-no-repeat bg-[#0c0835cd] bg-blend-overlay items-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/MRRKzRC/landscape-1328858-1280.jpg)",
          }}
        >
          <div className=" text-2xl  bg-transparent font-bold">
            <SectionHeading
              // className='text-white'
              colortitle="text-white"
              align="text-center"
              title="ALL YOU NEED TO KNOW"
              normalSubTitleWord="ABOUT"
              boldSubTitleWord="EVENT PLANET"
              colorboldmrsub="text-accent"
              colornormrsub="text-white"
            />
          </div>
        </div>

        {/* misson and vission */}
        <Container >       
        <div className="bg-neutral mt-10">
        <Container>
            <div className="grid py-32 w-full bg-neutral 
            md:grid-cols-2 grid-cols-1 p-10 px-20 gap-5    justify-center
             align-middle items-center">
              <div className="col-span-1 md:col-span-2 ">
                <SectionHeading
                  colortitle="text-black "
                  align="lg:text-start md:text-center "
                  title=" OUR MISSION AND VISION"
                  normalSubTitleWord="Event"
                  boldSubTitleWord=" Excellence"
                  colorboldmrsub="text-accent"
                  colornormrsub="text-black"
                />
              </div>
              <div className="grid">
            
                  <h1 className="font-bold text-xl flex justify-start
                  align-middle items-center gap-1  tracking-[0.2rem] ">
                    Our Mission <GoGoal />
                  </h1>
            
                <div className="w-full  text-start
                 rounded-lg ">
                  {showMission ? (
                    <>
                      <p>
                        At Event Planet, our mission is to revolutionize event
                        planning by providing a seamless platform where
                        individuals and businesses can create, manage, and book
                        events of all types and sizes. We aim to simplify the
                        event planning process, offering a comprehensive range
                        of tools and resources tailored to meet the diverse
                        needs of our users. We aim to simplify the event
                        planning process, offering a comprehensive range of
                        tools and resources tailored to meet the diverse needs
                        of our users.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        At Event Planet, our mission is to revolutionize event
                        planning by providing a seamless platform where
                        individuals and businesses can create, manage, and book
                        events of all types and sizes.
                      </p>
                      <button
                        className="text-blue-500 underline"
                        onClick={toggleMission}
                      >
                        Read More
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="grid ">
               
                  <h1 className="font-bold text-xl flex justify-start 
                  align-middle items-center gap-1 tracking-[0.2rem]  ">
                    Our Vision <GiStairsGoal />
                  </h1>
              
                <div className="w-full  text-start rounded-lg overflow-auto">
                  {showVision ? (
                    <>
                      <p>
                        Our vision at Event Planet is to become the go-to
                        destination for all things related to event planning
                        and management. We envision a future where organizing
                        events is not only stress-free but also enjoyable and
                        excellence in the industry and inspire creativity and
                        Ultimately, we aspire to be the catalyst for memorable
                        moments and successful events that leave a lasting
                        impact on everyone involved. stress-free but also
                        enjoyable and rewarding.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Our vision at Event Planet is to become the go-to
                        destination for all things related to event planning
                        and management. We envision a future where organizing
                        events is not only
                      </p>
                      <button
                        className="text-blue-500 underline"
                        onClick={toggleVision}
                      >
                        Read More
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
  <div className="   gap-10 lg:flex md:grid justify-center align-middle items-center mt-10 mb-10">
  <div className='lg:hidden block'>
     <SectionHeading
        colortitle="text-[rgb(255 255 255 / var(--tw-text-opacity))]"
        align="lg:text-start md:text-center "
        title="EVENT AWARD"
        normalSubTitleWord="OUR  "
        boldSubTitleWord="AWARDS"
        colorboldmrsub="text-accent"
        colornormrsub="text-black"
      />
     </div>
    <div className="relative">
      <img className="h-[450px] w-[400px] mx-auto lg:w-[300px]" 
      src="https://i.ibb.co/QNN1JfM/Dark-Blue-and-Blue-Modern-Wavy-Curve-Completion-Certificate.jpghttps://i.ibb.co/hZbNfpX/Dark-Blue-and-Blue-Modern-Wavy-Curve-Completion-Certificate-1.jpg" />
    </div>
    <div className="h-full">
     <div className='hidden lg:block'>
     <SectionHeading
        colortitle="text-[rgb(255 255 255 / var(--tw-text-opacity))]"
        align="lg:text-start md:text-center "
        title="EVENT AWARD"
        normalSubTitleWord="OUR  "
        boldSubTitleWord="AWARDS"
        colorboldmrsub="text-accent"
        colornormrsub="text-black"
      />
     </div>
      <ul className=" mt-5">
        <div className="h-72 lg:max-w-[500px] overflow-y-auto 
        scrollbar-hide border-l-4 -my-1 border-slate-700">
          {awards.map((award, index) => (
            <li key={index}>
              <div className="my-4">
                <div className="flex gap-4 justify-normal relative">
                  <h1 className="md:text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 
                  font-bold h-8 border-b-secondary border-b-2
                   text-accent text-xs  relative">
                    {award.date}
                    <div className="absolute right-full w-2
                    transform translate-x-3/4 -translate-y-2/4"></div>
                  </h1>
                  <div className="pl-3">
                    <h1 className="mb-2 text-start text-sm md:text-xl  font-bold">{award.title}</h1>
                    <p className="md:w-96 w-44 text-xs">{award.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  </div>
</Container>
{/*why choose us */}
          <WhyChoose></WhyChoose>

          {/* scrooll */}
      
        <div></div>
        <div
          className=" mx-auto lg:h-[500px] md:h-[580px]  h-[610px] pt-10 bg-cover bg-no-repeat
 bg-[hsl(233,24%,93%)]  bg-blend-overlay  "
          style={{
            backgroundImage:
              'url("https://i.ibb.co/2qd2xfP/pexels-eberhard-grossgasteiger-691668.jpg")',
          }}
        >
          <Container>
            {/* Our team  */}
            <Ourteam></Ourteam>
          </Container>
        </div>

        <div className="w-full p-4 mb-20 bg-accent h-44 grid grid-cols-4 justify-center align-middle items-center">
          <div className="col-span-3 pl-6">
            <h1 className="text-2xl lg:text-5xl text-white">
              Looking For{" "}
              <span className="font-semibold ">
                {" "}
                Something Special For Your Moment?
              </span>
            </h1>
            <p>
              Contact us now and we will make your event unique & unforgettable
            </p>
          </div>
          <div>
           <Link to='/contact'>
           <button
              className="btn btn-ghost rounded-3xl w-24 md:w-44
               bg-white
   hover:text-white hover:bg-primary text-xs md:text-lg"
            >
              Contact us
            </button>
           </Link>
          </div>
        </div>

      
        </Container>
        
      </div>
   
  );
};

export default About;
