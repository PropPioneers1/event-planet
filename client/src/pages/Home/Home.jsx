import UpComingEvent from "./HomeComponenets/UpComingEvent/UpComingEvent";
import HomeBanner from "./HomeComponenets/HomeBanner/HomeBanner";
import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
// import HotDeals from "./HomeComponenets/HotDeals/HotDeals";
import Footer from "../../components/shared/Footer";

import TestMonial from "./HomeComponenets/Testmonial/Testmonial";
import TestPlaner from "./HomeComponenets/Event-Planer/TestPlaner";
import Categories from "./HomeComponenets/Categories/Categories";

const Home = () => {
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
		</div>
	);
};

export default Home;
