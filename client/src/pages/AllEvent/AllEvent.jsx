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
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AllEvent = () => {

	const axiosSecure = useAxiosSecure();

	const [events, setEvents] = useState({ eventCount: 0, data: [] });
	const [page, setPage] = useState(0);

	const [category, setCategory] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [venue, setVenue] = useState("");


	useEffect(() => {
		axiosSecure.get(`/event?page=${page}`)
			.then(res => {
				setEvents(res?.data)
			})
	}, [axiosSecure, page]);


	console.log(events);
	const totalPages = Math.ceil(events?.eventCount / 8);
	console.log(totalPages);



	const pages = [...new Array(totalPages).fill(0)];
	console.log(pages);



	return (
		<div className="mt-16">
			{/* Slider */}
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
					{/* Search Inputs */}
					<div className="mb-20 mt-10">
						<form >
							<div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
								{/* Name */}
								<div className="form-control flex-1">
									<input
										type="text"
										name="title"
										placeholder="Enter Name..."
										className="input  md:w-full rounded-md input-bordered focus:outline-none"
										required
									/>
								</div>
								{/* Category */}
								<div className="form-control flex-1 ">
									<select
										className="select  w-full rounded-md   focus:border-none focus:outline-none"
										onChange={(e) => setCategory(e.target.value)}
										defaultValue={category}
										required
									>
										<option disabled value="">All Categories</option>
										<option value="Business">Business</option>
										<option value="Education">Education</option>
										<option value="Sport">Sports</option>
										<option value="Fashion">Fashion</option>
										<option value="Food Festival">Food Festival</option>
										<option value="Innovation Showcase">Innovation Showcase</option>
									</select>
								</div>
								{/* States */}
								<div className="form-control flex-1 ">
									<select
										className="select w-full rounded-md  focus:border-none focus:outline-none"
										onChange={(e) => setState(e.target.value)}
										defaultValue={state}
										required
									>
										<option disabled value="">All States</option>
										<option value="Business">Business</option>
										<option value="Education">Education</option>
										<option value="Sport">Sports</option>
										<option value="Fashion">Fashion</option>
										<option value="Food Festival">Food Festival</option>
										<option value="Innovation Showcase">Innovation Showcase</option>
									</select>
								</div>
							</div>
							{/* Raw 2 */}
							<div className="flex flex-col md:flex-row md:items-center gap-6">
								{/* Cities*/}
								<div className="form-control flex-1 ">
									<select
										className="select w-full rounded-md  focus:border-none focus:outline-none"
										onChange={(e) => setCity(e.target.value)}
										defaultValue={city}
										required
									>
										<option disabled value="">All Cities</option>
										<option value="Business">Business</option>
										<option value="Education">Education</option>
										<option value="Sport">Sports</option>
										<option value="Fashion">Fashion</option>
										<option value="Food Festival">Food Festival</option>
										<option value="Innovation Showcase">Innovation Showcase</option>
									</select>
								</div>
								{/* Venues */}
								<div className="form-control flex-1 ">
									<select
										className="select w-full rounded-md  focus:border-none focus:outline-none"
										onChange={(e) => setVenue(e.target.value)}
										defaultValue={venue}
										required
									>
										<option disabled value="">All Venues</option>
										<option value="Business">Business</option>
										<option value="Education">Education</option>
										<option value="Sport">Sports</option>
										<option value="Fashion">Fashion</option>
										<option value="Food Festival">Food Festival</option>
										<option value="Innovation Showcase">Innovation Showcase</option>
									</select>
								</div>
								{/* Submit Button */}
								<div className="form-control flex-1 ">
									<button className="btn w-[189px] md:w-full rounded-md bg-primary text-white text-lg">
										Find Event
									</button>
								</div>
							</div>

						</form>
					</div>

					{/* Event cards */}
					<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 py-8 ">
						{
							events?.events?.map(item =>
								<EventCard
									key={item._id}
									item={item}

								></EventCard>)
						}

					</div>
					{/* Pagination Buttons */}
					<div className="flex justify-center gap-2">

						{
							page !== 0 &&
							<div className="flex flex-row-reverse items-center">

								<button onClick={() => setPage(page - 1)} className="text-2xl font-semibold text-[#878787] mr-4">Prev</button>

								<IoIosArrowBack className="text-2xl font-semibold text-[#878787]" />
							</div>
						}

						{
							pages?.map((item, index) =>
								<button
									key={index}
									onClick={() => setPage(index)}
									className={`w-10 py-0 font-semibold ${page == index ? "text-2xl font-bold border-b-4 border-primary	" : "text-xl text-[#878787] "}`}>
									{`${index + 1 <= 9 ? "0" : ""}${index + 1}`}
								</button>)
						}

						{
							page !== pages?.length - 1 &&
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
