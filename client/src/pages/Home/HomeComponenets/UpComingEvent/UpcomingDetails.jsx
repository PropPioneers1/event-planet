import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const UpcomingDetails = () => {
    const {id} = useParams()
    const [loading,setLoading] = useState(false)
    const [cards,setCards] = useState({})
    console.log(cards)
  useEffect(()=>{
    setLoading(true)
    fetch('../../../../../public/upcomingevent.json')
    .then(res=>res.json())
    .then(data=>{
      const result = data.find(item=> item.id == id)
      setCards(result)
      setLoading(false)
    })
  },[id])
  if(loading) return <div className="pt-80">loading...</div>
    return (
        <div className="pt-[80px]">
            upcoming details id : {cards?.id}
            {/* upcoming details: */}

            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 lg:gap-20 gap-12 place-items-center">
                <div className="md:col-span-4 col-span-1">left side</div>
                <div className="md:col-span-2 col-span-1">right side</div>
              </div>
            </div>
        </div>
    );
};

export default UpcomingDetails;