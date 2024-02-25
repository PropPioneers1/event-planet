import { useEffect } from "react";
import Container from "../../../../components/ui/Container";
import "./upcoming.scss";
import { useState } from "react";
import SingleCard from "./SingleCard";
import CountDown from "./CountDown";

const UpComingEvent = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./upcomingevent.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        const sliceData = data.slice(0, 4);
        setCards(sliceData);
      });
  }, []);
  return (
    <div>
      {/* Count Down component */}
      <div className="bg-neutral py-4 md:py-6 lg:py-8 mb-5">
        <Container>
          {/* count down time */}
          <CountDown></CountDown>
        </Container>
      </div>

      {/* up coming event card maping */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center py-4">
          {cards &&
            cards.map((card) => (
              <SingleCard key={card.id} card={card}></SingleCard>
            ))}
        </div>
        {/* <h1>hello/</h1> */}
      </Container>
    </div>
  );
};

export default UpComingEvent;
