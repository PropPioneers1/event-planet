import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import { FaShopify } from "react-icons/fa";

const Home = () => {
  return (
    <div>

      {/* Trending products section */}
      <div>
        <h2 className="text-center font-bold mt-10 mb-5 text-3xl underline">Our trending products</h2>
        <div>
        <p className="text-center mb-10 p-8">
  Hello Human! We're here to make your special moments even more memorable.
  Explore our curated collection of essential products for various events and
  find the perfect items to elevate your experiences. Whether it's a wedding,
  celebration, or a professional gathering, our diverse range of high-quality
  products awaits you. Visit our shop now and discover a world of elegance and
  functionality at your fingertips.
</p>
        </div>
        <Trendingproducts></Trendingproducts>
      </div>

      {/* Button at the end */}
      <div className="text-center mb-10">
        <button className="btn btn-wide mt-4 bg-blue-300">Visit Our Shop <FaShopify /></button>
      </div>
    </div>
  );
};

export default Home;
