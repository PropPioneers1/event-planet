import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import { FaShopify } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* Trending products section */}
      <div>
        <h2 className="text-center font-bold mt-10 mb-5 text-3xl underline">Our trending products</h2>
        <div>
          <p className="text-center mb-10 p-8"> Hello Human! We are providing your essential products 
            for your events on our website. Feel free to visit our shop and buy 
            the best products at reasonable prices.</p>
        </div>
        <Trendingproducts></Trendingproducts>
      </div>

      {/* Button at the end */}
      <div className="text-center">
        <button className="btn btn-wide mt-4">Visit Our Shop <FaShopify /></button>
      </div>
    </div>
  );
};

export default Home;
