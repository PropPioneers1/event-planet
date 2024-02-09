import UpComingEvent from "./HomeComponenets/UpComingEvent/UpComingEvent";
import HomeBanner from "./HomeComponenets/HomeBanner/HomeBanner";
import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
// import HotDeals from "./HomeComponenets/HotDeals/HotDeals";
import Footer from "../../components/shared/Footer";

import TestMonial from "./HomeComponenets/Testmonial/Testmonial";
import TestPlaner from "./HomeComponenets/Event-Planer/TestPlaner";
import Categories from "./HomeComponenets/Categories/Categories";
import Chat from "./HomeComponenets/ChatBot/ChatBot";
import Notification from "../Notification/Notification";
// import { useEffect } from "react";
// import { getToken } from "firebase/messaging";
// import { messaging } from "../../firebase/firebase.config";
// import MessangerChat from "./HomeComponenets/ChatBot/MessangerChat";

const Home = () => {

  // const requestPermission = async () => {
  //   const permission = await Notification.requestPermission();
  //   if (permission === 'granted') {
  //   const token = await getToken(messaging,{vapidKey: "BN4_7aNJDbWeHLEXhUS9M-tVJCLqq-gDRYvB3wC6Ma03hkLxthaAep1uJtOa--LSBzyeaVmPvDIIJtau9TLWZww"})
  //   console.log("Token Genareted", token)
  //   } else if (permission === 'denied') {
  //     alert("You denied permission for notifications.");
  //   }
  // };

  // useEffect(() => {
  //   requestPermission();
  // }, []);


  return (
    <div>
      {/* made by BRCShakil */}
      <HomeBanner />
      {/* Categories By Arif */}
      <Categories></Categories>
      {/* UpComming event anik */}
      <UpComingEvent></UpComingEvent>
      {/* trending products pritom*/}
      <Trendingproducts></Trendingproducts>
      {/* why choose by arif */}
      <WhyChoose></WhyChoose>
      {/* hot deals and footer by rifat */}
      {/* Testmonial Section */}
      <TestMonial></TestMonial>
      {/* <HotDeals></HotDeals> */}
      {/* Our Event Planer */}
      <TestPlaner></TestPlaner>
      {/* made by Rifat */}
      <Footer></Footer>
      <Chat></Chat>
      {/* <MessangerChat></MessangerChat> */}
      <Notification></Notification>
    </div>
  );
};

export default Home;
