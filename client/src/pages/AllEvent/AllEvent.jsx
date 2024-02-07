import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AllEvent.css";

import { Autoplay, Pagination, } from "swiper/modules";
import Container from "../../components/ui/Container";
import { useEffect, useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EventCard from "./EventCard";


const AllEvent = () => {

	const [cards, setCards] = useState([]);
	const [page, setPage] = useState(1);




	useEffect(() => {
		fetch("./upcomingevent.json")
			.then((res) => res.json())
			.then((data) => {
				setCards(data);
			});
	}, []);


	const totalPages = Math.ceil(cards.length / 1);
	// console.log(totalPages);

	const pages = [...new Array(totalPages).fill(0)];
	console.log(page);



	return (
		<div className="mt-16">

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
				// navigation={true}
				modules={[Autoplay, Pagination]}
				className="mySwiper mySwiper2 swiper-container h-[1200px]"
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
			</Swiper>


			<div className="bg-neutral py-10">
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 py-8 ">
						{
							cards.map(card =>
								<EventCard
									key={card.id}
									eventName={card?.eventName}
									date={card?.date}
									time={card?.time}
									venue={card?.venue}
									price={card?.price}

								></EventCard>)
						}

					</div>
					<div className="flex justify-center gap-2">

						{
							page !== 0 &&
							<div className="flex flex-row-reverse items-center">

								<button onClick={() => setPage(page - 1)} className="text-2xl font-semibold text-[#878787] mr-4">Prev</button>

								<IoIosArrowBack className="text-2xl font-semibold text-[#878787]" />
							</div>
						}

						{
							pages.map((item, index) =>
								<button
									key={index}
									onClick={() => setPage(index)}
									className={`w-10 py-0 font-semibold ${page == index ? "text-2xl font-bold border-b-4 border-primary	" : "text-xl text-[#878787] "}`}>
									{`${index + 1 <= 9 ? "0" : ""}${index + 1}`}
								</button>)
						}

						{
							page !== cards.length - 1 &&
							<div className="flex items-center">
								<button onClick={() => setPage(page + 1)} className="text-2xl font-semibold text-[#878787] ml-4">Next</button>
								<IoIosArrowForward className="text-2xl font-semibold text-[#878787]" />
							</div>
						}

					</div>

				</Container>
			</div>
		</div>

	);
};

export default AllEvent;
