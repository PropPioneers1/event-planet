// import UpComingEvent from "./HomeComponenets/UpComingEvent/UpComingEvent";
import HomeBanner from "./HomeComponenets/HomeBanner/HomeBanner";
import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
// import HotDeals from "./HomeComponenets/HotDeals/HotDeals";

// import TestMonial from "./HomeComponenets/Testmonial/Testmonial";
// import TestPlaner from "./HomeComponenets/Event-Planer/TestPlaner";
import Categories from "./HomeComponenets/Categories/Categories";
// import Chat from "./HomeComponenets/ChatBot/ChatBot";

import Notification from "../Notification/Notification";

// import MessangerChat from "./HomeComponenets/ChatBot/MessangerChat";
import OurNextEvents from "./HomeComponenets/OurNextEvents/OurNextEvents";
import OurEventPlaners from "./HomeComponenets/OurEventPlaner/OurEventPlaner";
import OurGallery from "./HomeComponenets/OurGallery/OurGallery";
import OurBlog from "./HomeComponenets/OurBlog/OurBlog";
import MessangerChat from "./HomeComponenets/ChatBot/MessangerChat";
import TestMonial from "./HomeComponenets/Testmonial/Testmonial";

const Home = () => {
  return (
    <div>
      {/* made by BRCShakil */}
      <div>
        <HomeBanner />
      </div>
      {/* Categories By Arif */}
      <div className="md:py-28 py-20">
        <Categories></Categories>
      </div>
      {/* UpComming event anik */}
      <div>
        {/* <UpComingEvent></UpComingEvent> */}
        <OurNextEvents />
      </div>
      <div className="md:pt-28 pt-20">
        <OurGallery />
      </div>
      {/* trending products pritom*/}
      <div className="md:py-28 py-20">
        <Trendingproducts></Trendingproducts>
      </div>
      {/* why choose by arif */}
      <div>
        <WhyChoose></WhyChoose>
      </div>
      <div className="md:pt-28 pt-20">
        <OurBlog />
      </div>
      {/* hot deals and footer by rifat */}
      {/* Testmonial Section */}
      <div className="md:py-28 py-20">
        <TestMonial></TestMonial>
      </div>
      {/* Our Event Planer */}
      <div className="md:pb-28 pb-20">
        <OurEventPlaners />
      </div>
      {/* made by Rifat */}
      <MessangerChat></MessangerChat>
      <Notification></Notification>
    </div>
  );
};

export default Home;
