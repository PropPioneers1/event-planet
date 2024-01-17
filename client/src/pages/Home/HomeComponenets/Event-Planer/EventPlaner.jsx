import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const EventPlaner = () => {
	const [eventPlaner, setEventPlaner] = useState([]);

	useEffect(() => {
		fetch("EventPlaner.json")
			.then((res) => res.json())
			.then((data) => setEventPlaner(data));
	}, []);

	return (
		<div className="mt-5">
			<div className="text-center mx-auto md:w-6/12 lg:w-4/12 text-center my-8">
				<h1 className="text-3xl font-title font-semibold">
					Our Event Planer
				</h1>
				<p className="text-xl font-title border-y-2 border-[#F53F7B]  py-4 mt-2">
					Learn more about the Planer of Event Planet
				</p>
			</div>

			<div className="w-full lg:w-3/4 gap-5 mb-5  mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mx-auto">
				{eventPlaner?.map((event) => (
					<div className="text-center border relative mt-14 mb-3 p-5 border-[#F53F7B] border-2  rounded-lg space-y-1 p-5">
						<img
							className="h-[150px] object-cover  absolute left-1/2 -top-20 -translate-x-1/2 w-[150px] border border-2 border-[#F53F7B] p-1 rounded-full"
							src={event?.photoUrl}
							alt=""
						/>

						<div className="pt-10">
							<h1 className="text-xl mt-1 font-title mt-5 font-medium">
								{event?.eventPlannerName}
							</h1>
							<h3 className="text-lg text-[#F53F7B] font-title">
								{event?.eventTitle}
							</h3>
							<p className="text-start mb-4  text-balance">
								{event?.description}
							</p>

							<div className="flex justify-center  items-center gap-5 ]">
								<a blank href={event?.facebook}>
									<FaFacebook className="w-7 hover:text-[#F53F7B] mt-5 h-7"></FaFacebook>
								</a>
								<a href="">
									<FaLinkedin className="w-7 hover:text-[#F53F7B] mt-5 h-7"></FaLinkedin>
								</a>
								<a href="">
									<FaInstagram className="w-7 hover:text-[#F53F7B] mt-5 h-7"></FaInstagram>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventPlaner;
