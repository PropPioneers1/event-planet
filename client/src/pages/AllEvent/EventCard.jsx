import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import SingleCard from "../Home/HomeComponenets/UpComingEvent/SingleCard";

const EventCard = () => {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		fetch("./upcomingevent.json")
			.then((res) => res.json())
			.then((data) => {
				setCards(data);
			});
	}, []);

	return (
		<div>
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center py-4">
					{cards &&
						cards.map((card) => (
							<SingleCard key={card.id} card={card}></SingleCard>
						))}
				</div>
			</Container>
		</div>
	);
};

export default EventCard;
