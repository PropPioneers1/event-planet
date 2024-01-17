import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
import HotDeals from "./HomeComponenets/HotDeals/HotDeals";
import Footer from "../../components/shared/Footer";


const Home = () => {
  return (
    <div>
      <h2>Home</h2>
        {/* Trending products section */}
        <div >
       
        <Trendingproducts></Trendingproducts>
      </div>
 
       {/* hot deals and footer by rifat */}
      <HotDeals></HotDeals>

      <WhyChoose></WhyChoose>
      {/* hot deals and footer by rifat */}
      
      <Footer></Footer>
    </div>
  );
};

export default Home;
