import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import Container from "../../../../components/ui/Container";

const OurGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get("/ourGallery.json").then((res) => setGallery(res?.data));
  }, []);

  return (
    <div>
      <Container>
        <SectionHeading
          align="text-left"
          title="our gallery"
          normalSubTitleWord="Take a look"
          boldSubTitleWord="event gallery"
        />
      </Container>
      <div
        className="grid grid-cols-2
       lg:grid-cols-12 grid-rows-3 lg:min-h-[900px]
        min-h-[600px] "
      >
        {/* image-1 */}
        <div
          className="lg:col-span-3 lg:row-span-2 col-span-1
           group relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[0]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[0]?.title}
            </h2>
            <p className="text-neutral">{gallery[0]?.category}</p>
          </div>
        </div>

        {/* image-2 */}
        <div
          className="lg:col-span-6 lg:row-span-1 col-span-1  group
           relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center bg-cover
            bg-no-repeat  cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[1]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[1]?.title}
            </h2>
            <p className="text-neutral">{gallery[1]?.category}</p>
          </div>
        </div>

        {/* image-3 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1 
           group relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center
            bg-cover  bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[2]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[2]?.title}
            </h2>
            <p className="text-neutral">{gallery[2]?.category}</p>
          </div>
        </div>

        {/* image-4 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1 
           group relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[3]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[3]?.title}
            </h2>
            <p className="text-neutral">{gallery[3]?.category}</p>
          </div>
        </div>

        {/* image-5 */}
        <div
          className="lg:col-span-6 lg:row-span-1 col-span-1 
           group relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center
            bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[4]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[4]?.title}
            </h2>
            <p className="text-neutral">{gallery[4]?.category}</p>
          </div>
        </div>

        {/* image-6 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1  group
           relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center bg-cover
            bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[5]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[5]?.title}
            </h2>
            <p className="text-neutral">{gallery[5]?.category}</p>
          </div>
        </div>

        {/* image-7 */}
        <div
          className="lg:col-span-6 lg:row-span-1 col-span-1  
          group relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center 
          bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[6]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[6]?.title}
            </h2>
            <p className="text-neutral">{gallery[6]?.category}</p>
          </div>
        </div>

        {/* image-8 */}
        <div
          className="lg:col-span-3 lg:row-span-1 col-span-1  
          group relative hover:bg-[#000000b3] bg-[#0000004e] bg-blend-overlay bg-center 
          bg-cover bg-no-repeat cursor-pointer transition-all duration-300 ease-out"
          style={{ backgroundImage: `url(${gallery[7]?.image})` }}
        >
          <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-all duration-300">
            <h2 className="md:text-xl text-lg  font-semibold text-neutral">
              {gallery[7]?.title}
            </h2>
            <p className="text-neutral">{gallery[7]?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
