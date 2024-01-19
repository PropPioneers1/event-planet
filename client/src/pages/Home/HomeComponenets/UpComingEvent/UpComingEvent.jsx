import { useEffect } from "react";
import Container from "../../../../components/ui/Container";
import './upcoming.scss'
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
      <div className="bg-neutral py-4 md:py-6 lg:py-8 mb-5">
        <Container>
          {/* count down time */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-3">
            <div>
              <p className="bg-gradient-to-r from-[#3F72AF] to-[#F53F7B] inline-block text-white px-1 rounded">
                Next
              </p>
              <h3 className="font-medium text-lg">UPCOMING EVENT</h3>
            </div>
            <div>
              <h3 className="font-medium text-lg">Monday Event</h3>
              <p className="text-neutral-700">January 22-2024</p>
            </div>
            <div className="flex gap-3 md:gap-6 text-center justify-end items-center">
              <div>
                <div className="bg-accent rounded-sm text-neutral-300 font-medium px-4 py-3">
                  90
                </div>
                <h3>Days</h3>
              </div>
              <div>
                <div className="bg-accent rounded-sm text-neutral-300 font-medium px-4 py-3">
                  12
                </div>
                <h3>Hrs</h3>
              </div>
              <div>
                <div className="bg-accent rounded-sm text-neutral-300 font-medium px-4 py-3">
                  10
                </div>
                <h3>Mins</h3>
              </div>
              <div>
                <div className="bg-accent rounded-sm text-neutral-300 font-medium px-4 py-3">
                  40
                </div>
                <h3>Secs</h3>
              </div>
            </div>
            <div className="">
              {/* <button className="bg-gradient-to-r from-[#F53F7B] to-[#3F72AF]  p-2 rounded text-white font-medium">
                All Upcoming Event
              </button> */}
            <button className="button">Up Coming Event</button>
            </div>
          </div>
        </Container>
      </div>

      {/* up coming event card maping */}
      <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center py-4">
      {
        cards && cards.map(card=><SingleCard key={card.id} card={card}></SingleCard>)
      }
      </div>
      </Container>
      
    </div>
  );
};

export default UpComingEvent;
