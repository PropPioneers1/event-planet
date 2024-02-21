
import Footer from "../../components/shared/Footer";
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import Container from "../../components/ui/Container";

// import { FaAward } from "react-icons/fa6";
// import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
// import TestMonial from "../Home/HomeComponenets/Testmonial/Testmonial";
// import Ourteam from "./Ourteam";
import WhyChoose from "../Home/HomeComponenets/WhyChooseEventPlanet/WhyChoose";
const About = () => {
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
            <div
              className=" grid py-32 w-full

h-full bg-neutral lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-10 px-20 gap-5"
            >
              <div className="col-span-1 md:col-span-2  lg:col-span-1 ">
                <SectionHeading
                  colortitle="text-[rgb(255 255 255 / var(--tw-text-opacity))]"
                  align="lg:text-start md:text-center "
                  title="DISCOVER OUR MISSION AND VISION"
                  normalSubTitleWord="Event"
                  boldSubTitleWord=" Excellence"
                  colorboldmrsub="text-accent"
                  colornormrsub="text-black"
                />
              </div>
              <div className="grid">
                <div className="flex gap-2  ">
                  <h1 className="font-bold text-3xl tracking-[0.2rem] mb-5">
                    {" "}
                    Our Mision
                  </h1>
                  <div className="w-16 bg-accent h-[.35rem]  mt-6"></div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Harum et odit aspernatur magni aliquam distinctio vero
                    voluptate cumque consectetur minima quia, laborum ab id
                    accusamus dignissimos laboriosam soluta ipsum illo? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus eaque recusandae saepe fugiat ratione cum
                    aspernatur molestias vitae tempore. Minus quod molestias ea
                    maxime eos fugiat consequuntur veniam odio obcaecati!
                  </p>
                </div>
              </div>
              <div className="grid">
                <div className="flex gap-2  ">
                  <h1 className="font-bold text-3xl tracking-[0.2rem] mb-5">
                    {" "}
                    Our Vision
                  </h1>
                  <div className="w-16 bg-accent h-[.35rem]  mt-6"></div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Harum et odit aspernatur magni aliquam distinctio vero
                    voluptate cumque consectetur minima quia, laborum ab id
                    accusamus dignissimos laboriosam soluta ipsum illo? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus eaque recusandae saepe fugiat ratione cum
                    aspernatur molestias vitae tempore. Minus quod molestias ea
                    maxime eos fugiat consequuntur veniam odio obcaecati!
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* end mission and vission */}
        {/* working data */}
        <Container>
          <div className="">
            <div
              className=" hero-content pl-20
   flex-col gap-10 lg:flex-row mt-10 mb-10 
   "
            >
              {/* <div className="hidden md:block"></div> */}
              <div className="relative">
                <img
                  className="h-[450px] w-[500px]"
                  src="https://i.ibb.co/w4mZvYh/pexels-dominique-barrera-20184430.jpg"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-white bg-opacity-80  p-4">
                    <p className="text-black text-center font-bold">
                      Event planet
                      <br />
                      Working Since 2024
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-full">
                <SectionHeading
                  colortitle="text-[rgb(255 255 255 / var(--tw-text-opacity))]"
                  align="lg:text-start md:text-center "
                  title="EVENT AWAED"
                  normalSubTitleWord="OUR  "
                  boldSubTitleWord="AWARDS"
                  colorboldmrsub="text-accent"
                  colornormrsub="text-black"
                />
                {/* < FaArrowAltCircleUp  className="md:-ml-[0.35rem] lg:md:-ml-[0.5rem]"/> */}

                <ul className="">
                  <li>
                    <div
                      className="h-72  lg:max-w-[500px]
     overflow-auto scrollbar-hide
       border-l-4 -my-1 border-slate-700 "
                      style={{
                        overflow: "auto",
                        scrollbarWidth: "none",
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none",
                        "-webkit-scrollbar": "none",
                      }}
                    >
                      <div className="my-4">
                        {/* <FaFeatherPointed className=" "/> */}
                        <div className="flex gap-4 justify-normal relative">
                          <h1
                            className="text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 font-bold
   h-8 border-b-secondary border-b-2 text-accent  relative"
                          >
                            AUG 2015
                            <div
                              className="absolute  right-full transform 
    translate-x-3/4 -translate-y-2/4"
                            ></div>
                          </h1>
                          <div className="pl-3 ">
                            <h1 className="mb-2  text-start text-sm md:text-xl lg:text-2xl font-bold">
                              1st Place For Unique Events 2018
                            </h1>
                            <p className=" md:w-96 w-64 text-xs">
                              Lorem ipsum dolor sit amet, loremconsectetuer
                              adipiscing elit diam sed diam nonummy nibh euismod
                              tincidunt. loremconsectetuer adipiscing elit diam
                              sed diam nonummy nibh euismod tincidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="my-4">
                        {/* <FaFeatherPointed className=" "/> */}
                        <div className="flex gap-4 justify-normal relative">
                          <h1
                            className="text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 font-bold
   h-8 border-b-secondary border-b-2 text-accent  relative"
                          >
                            AUG 2015
                            <div
                              className="absolute  right-full transform 
    translate-x-3/4 -translate-y-2/4"
                            ></div>
                          </h1>
                          <div className="pl-3 ">
                            <h1 className="mb-2  text-start text-sm md:text-xl lg:text-2xl font-bold">
                              1st Place For Unique Events 2018
                            </h1>
                            <p className=" md:w-96 w-64 text-xs">
                              Lorem ipsum dolor sit amet, loremconsectetuer
                              adipiscing elit diam sed diam nonummy nibh euismod
                              tincidunt. loremconsectetuer adipiscing elit diam
                              sed diam nonummy nibh euismod tincidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="my-4">
                        {/* <FaFeatherPointed className=" "/> */}
                        <div className="flex gap-4 justify-normal relative">
                          <h1
                            className="text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 font-bold
   h-8 border-b-secondary border-b-2 text-accent  relative"
                          >
                            AUG 2015
                            <div
                              className="absolute  right-full transform 
    translate-x-3/4 -translate-y-2/4"
                            ></div>
                          </h1>
                          <div className="pl-3 ">
                            <h1 className="mb-2  text-start text-sm md:text-xl lg:text-2xl font-bold">
                              1st Place For Unique Events 2018
                            </h1>
                            <p className=" md:w-96 w-64 text-xs">
                              Lorem ipsum dolor sit amet, loremconsectetuer
                              adipiscing elit diam sed diam nonummy nibh euismod
                              tincidunt. loremconsectetuer adipiscing elit diam
                              sed diam nonummy nibh euismod tincidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="my-4">
                        {/* <FaFeatherPointed className=" "/> */}
                        <div className="flex gap-4 justify-normal relative">
                          <h1
                            className="text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 font-bold
   h-8 border-b-secondary border-b-2 text-accent  relative"
                          >
                            AUG 2015
                            <div
                              className="absolute  right-full transform 
    translate-x-3/4 -translate-y-2/4"
                            ></div>
                          </h1>
                          <div className="pl-3 ">
                            <h1 className="mb-2  text-start text-sm md:text-xl lg:text-2xl font-bold">
                              1st Place For Unique Events 2018
                            </h1>
                            <p className=" md:w-96 w-64 text-xs">
                              Lorem ipsum dolor sit amet, loremconsectetuer
                              adipiscing elit diam sed diam nonummy nibh euismod
                              tincidunt. loremconsectetuer adipiscing elit diam
                              sed diam nonummy nibh euismod tincidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="my-4">
                        {/* <FaFeatherPointed className=" "/> */}
                        <div className="flex gap-4 justify-normal relative">
                          <h1
                            className="text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 font-bold
   h-8 border-b-secondary border-b-2 text-accent  relative"
                          >
                            AUG 2015
                            <div
                              className="absolute  right-full transform 
    translate-x-3/4 -translate-y-2/4"
                            ></div>
                          </h1>
                          <div className="pl-3 ">
                            <h1 className="mb-2  text-start text-sm md:text-xl lg:text-2xl font-bold">
                              1st Place For Unique Events 2018
                            </h1>
                            <p className=" md:w-96 w-64 text-xs">
                              Lorem ipsum dolor sit amet, loremconsectetuer
                              adipiscing elit diam sed diam nonummy nibh euismod
                              tincidunt. loremconsectetuer adipiscing elit diam
                              sed diam nonummy nibh euismod tincidunt.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="my-4">
                        {/* <FaFeatherPointed className=" "/> */}
                        <div className="flex gap-4 justify-normal relative">
                          <h1
                            className="text-sm lg:pl-4 w-20 md:pl-2 lg:w-96 font-bold
   h-8 border-b-secondary border-b-2 text-accent  relative"
                          >
                            AUG 2015
                            <div
                              className="absolute  right-full transform 
    translate-x-3/4 -translate-y-2/4"
                            ></div>
                          </h1>
                          <div className="pl-3 ">
                            <h1 className="mb-2  text-start text-sm md:text-xl lg:text-2xl font-bold">
                              1st Place For Unique Events 2018
                            </h1>
                            <p className=" md:w-96 w-64 text-xs">
                              Lorem ipsum dolor sit amet, loremconsectetuer
                              adipiscing elit diam sed diam nonummy nibh euismod
                              tincidunt. loremconsectetuer adipiscing elit diam
                              sed diam nonummy nibh euismod tincidunt.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Repeat these divs as needed */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* advantages */}

          <WhyChoose></WhyChoose>

          {/* scrooll */}
        </Container>
        <div></div>
        {/* <div
          className=" mx-auto lg:h-[500px] md:h-[580px]  h-[610px] pt-10 bg-cover bg-no-repeat
 bg-[hsl(233,24%,93%)]  bg-blend-overlay  "
          style={{
            backgroundImage:
              'url("https://i.ibb.co/2qd2xfP/pexels-eberhard-grossgasteiger-691668.jpg")',
          }}
        >
          <Container>
            <Ourteam></Ourteam>
          </Container>
        </div> */}

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
            <button
              className="btn btn-ghost rounded-3xl w-24 md:w-44
               bg-white
   hover:text-white hover:bg-primary text-xs md:text-lg"
            >
              Contact us
            </button>
          </div>
        </div>

      
        </Container>
        <Footer></Footer>
      </div>
   
  );
};

export default About;
