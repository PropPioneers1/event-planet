import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AllEvent.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import EventCard from "./EventCard";
import Container from "../../components/ui/Container";
const AllEvent = () => {
	return (
		<div className="mt-16">
			<Container>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper mySwiper2 swiper-container"
				>
					<SwiperSlide>
						<img
							className="bg-cover"
							src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2016/10/Event-00BG.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg_4_new.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://ovatheme.com/em4u/wp-content/uploads/2017/09/bg_3_new.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2016/10/Bg_0001.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2018/04/news-bg.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src="https://demos.codexcoder.com/eventterm/wp-content/uploads/2018/04/event-bg.jpg"
							alt=""
						/>
					</SwiperSlide>
				</Swiper>
			</Container>

			<div>
				<EventCard></EventCard>
			</div>
		</div>
	);
};

export default AllEvent;
