import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
import HotDeals from "./HomeComponenets/HotDeals/HotDeals";
import Footer from "../../components/shared/Footer";


const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* trending products pritom*/}
      <Trendingproducts></Trendingproducts>
      {/* hot deals and footer by rifat */}
      {/* why choose by arif */}
      <WhyChoose></WhyChoose>
      <HotDeals></HotDeals>
      <Footer></Footer>
      {/* Why choose event planet arif */}
      
    </div>
  );
};

export default Home;
