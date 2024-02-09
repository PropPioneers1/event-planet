import { useEffect, useState } from "react";
import axios from "axios";
import { LuLinkedin, LuShare2, LuTwitter } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import Container from "../../../../components/ui/Container";

const OurEventPlaners = () => {
  const [planers, setPlaners] = useState([]);

  useEffect(() => {
    axios.get("/EventPlaner.json").then((res) => {
      setPlaners(res.data);
    });
  }, []);

  return (
    <div>
      <Container>
        {/* <SectionTitle title={"Event Planer & Organizer"} pb={"pb-12"} /> */}
        {/* heading */}
        <div>
          <SectionHeading
            align="text-right"
            title="event planers"
            normalSubTitleWord="make your"
            boldSubTitleWord="events awesome"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {planers?.map((planer, idx) => (
            <div key={idx} className=" relative ">
              <div className="group h-[400px]  rounded-[4px] overflow-hidden">
                <img
                  src={planer?.photoUrl}
                  className="w-full h-full object-cover  transition-all duration-300 ease-in group-hover:scale-125"
                  alt=""
                />
                <div>
                  <h2 className="px-4 py-2 bg-neutral text-secondary hover:text-primary transition-all duration-300 text-xl font-semibold absolute bottom-[76px]">
                    {planer?.eventPlannerName}
                  </h2>
                  <p className="px-4 py-2 bg-neutral text-gray-600 text-xl font-semibold absolute bottom-6">
                    {planer?.eventTitle}
                  </p>
                </div>
              </div>
              {/* icons */}
              <div className="absolute z-20 top-2 right-2 group">
                <div className=" p-2 rounded-sm bg-neutral cursor-pointer ">
                  <a className=" text-2xl hover:text-primary cursor-pointer">
                    <LuShare2 />
                  </a>
                </div>
                {/* icons container */}
                <div
                  className=" rounded-sm bg-neutral mt-[2px]  h-0
                 overflow-hidden group-hover:h-[140px] transition-all duration-500 ease-out "
                >
                  <div className="p-2.5 space-y-2.5">
                    <div className="  rounded-sm ">
                      <a className=" text-2xl hover:text-primary cursor-pointer">
                        <LuFacebook />
                      </a>
                    </div>
                    <div className=" rounded-sm ">
                      <a className=" text-2xl hover:text-primary cursor-pointer">
                        <LuInstagram />
                      </a>
                    </div>
                    <div className="rounded-sm ">
                      <a className=" text-2xl hover:text-primary cursor-pointer">
                        <LuLinkedin />
                      </a>
                    </div>
                    <div className="rounded-sm ">
                      <a className=" text-2xl hover:text-primary cursor-pointer">
                        <LuTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurEventPlaners;
