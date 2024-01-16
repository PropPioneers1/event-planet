import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* trending products pritom*/}
      <Trendingproducts></Trendingproducts>
      {/* ------------------------------- */}
      {/* Why choose event planet arif */}
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
