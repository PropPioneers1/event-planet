import UpComingEvent from "./HomeComponenets/UpComingEvent/UpComingEvent";
import HomeBanner from "./HomeComponenets/HomeBanner/HomeBanner";
import Trendingproducts from "./HomeComponenets/trending/Trendingproducts";
import WhyChoose from "./HomeComponenets/WhyChooseEventPlanet/WhyChoose";
import HotDeals from "./HomeComponenets/HotDeals/HotDeals";
import Footer from "../../components/shared/Footer";
import EventPlaner from "./HomeComponenets/Event-Planer/EventPlaner";
import Testmonial from "./HomeComponenets/Testmonial/Testmonial";

const Home = () => {
	return (
		<div>
			{/* made by BRCShakil */}
			<HomeBanner />
			{/* UpComming event anik */}
			<UpComingEvent></UpComingEvent>
			{/* trending products pritom*/}
			<Trendingproducts></Trendingproducts>
			{/* why choose by arif */}
			<WhyChoose></WhyChoose>
			{/* TestMonial Section */}
			<Testmonial></Testmonial>
			{/* hot deals and footer by rifat */}
			<HotDeals></HotDeals>
			{/* Our Event Planer */}
			<EventPlaner></EventPlaner>
			{/* made by Rifat */}
			<Footer></Footer>
		</div>
	);
};

export default Home;
