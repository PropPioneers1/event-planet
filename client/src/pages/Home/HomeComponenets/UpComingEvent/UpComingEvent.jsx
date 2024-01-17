import { useEffect } from "react";
import Container from "../../../../components/ui/Container";
import './upcoming.css'
import { useState } from "react";
import SingleCard from "./SingleCard";
const UpComingEvent = () => {
 
  const [cards,setCards] = useState([])
  useEffect(()=>{
    fetch('./upcomingevent.json')
    .then(res=>res.json())
    .then(data=>{
      setCards(data)
    })
  },[])
  return (
    <div>
      <div className="bg-natural">
        <Container>
          {/* count down time */}
          <div className="flex flex-wrap justify-between items-center px-4 md:px-8 lg:px-16">
            <div>
              <p className="bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-white px-1 rounded">
                Next
              </p>
              <h3 className="font-medium text-lg">UPCOMING EVENT</h3>
            </div>
            <div>
              <h3 className="font-medium text-lg">Monday Event</h3>
              <p>January 22-2024</p>
            </div>
            <div className="flex gap-8 text-center justify-end items-center">
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  90
                </div>
                <h3>Days</h3>
              </div>
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  12
                </div>
                <h3>Hrs</h3>
              </div>
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  10
                </div>
                <h3>Mins</h3>
              </div>
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  40
                </div>
                <h3>Secs</h3>
              </div>
            </div>
            <div>
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded text-white font-medium">
                All Upcoming Event
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* up coming event card maping */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        cards && cards.map(card=><SingleCard key={card.id} card={card}></SingleCard>)
      }
      </div>
      
    </div>
  );
};

export default UpComingEvent;
