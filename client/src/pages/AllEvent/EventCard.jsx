import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import SingleCard from "../Home/HomeComponenets/UpComingEvent/SingleCard";

const EventCard = () => {
	const [cards, setCards] = useState([]);

	const [itemsPerPage, setItemsPerPage] = useState(6);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		fetch("./upcomingevent.json")
			.then((res) => res.json())
			.then((data) => {
				setCards(data);
			});
	}, []);

	const count = cards?.length;
	console.log(count);

	const numberOfPages = Math.ceil(count / itemsPerPage);
	const pages = [...Array(numberOfPages).keys()];

	const handleItemsPerPage = (e) => {
		const value = parseInt(e.target.value);
		setItemsPerPage(value);
		setCurrentPage(0);
	};

	const handlePrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < pages?.length - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div>
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center py-10">
					{cards &&
						cards.map((card) => (
							<SingleCard key={card.id} card={card}></SingleCard>
						))}
				</div>
				{/* Pagination code Here */}
				<div className="text-center py-5">
					<button
						className="btn btn-sm bg-primary text-white"
						onClick={handlePrevPage}
						style={{ marginRight: "1rem" }}
					>
						Prev
					</button>
					{pages.map((page) => (
						<button
							key={page}
							onClick={() => setCurrentPage(page)}
							style={{
								margin: "0 0.5rem",
								padding: "0.5rem",
								border:
									currentPage === page
										? "1px solid #000"
										: "none",
							}}
							className={
								currentPage == page &&
								"btn bg-primary btn-sm text-white border-none"
							}
						>
							{page + 1}
						</button>
					))}
					<button
						className="btn btn-sm bg-primary text-white"
						onClick={handleNextPage}
						style={{ marginLeft: "1rem" }}
					>
						Next
					</button>
					<select
						className="btn btn-sm bg-primary text-white"
						value={itemsPerPage}
						onChange={handleItemsPerPage}
						style={{ marginLeft: "1rem" }}
					>
						<option value={2}>2</option>
						<option value={6}>6</option>
						<option value={8}>8</option>
					</select>
				</div>
			</Container>
		</div>
	);
};

export default EventCard;
