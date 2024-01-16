import Footer from "../../components/shared/Footer";
import HotDeals from "./HomeComponenets/HotDeals/HotDeals";
import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* trending products pritom*/}
      <Trendingproducts></Trendingproducts>
      <HotDeals></HotDeals>
      <Footer></Footer>
      {/* ------------------------------- */}
    </div>
  );
};

export default Home;
