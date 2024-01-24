import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import Container from "../../../../components/ui/Container";
import { FacebookIcon, FacebookShareButton } from "react-share";


const UpcomingDetails = () => {
  const shareUrl = 'https://www.facebook.com/'
  const img = 'https://i.ibb.co/fq6DWhd/Wedding.jpg'
    const {id} = useParams()
    const [loading,setLoading] = useState(false)
    const [cards,setCards] = useState({})
    const [count,setCount] = useState(0)
    const decrement = () => {
      setCount(count - 1)
    }
    const increment = () => {
      setCount(count + 1)
    }

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
        <Container>
          <div className="pt-[100px]">
            {/* upcoming details: */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-6 lg:gap-16 gap-12 ">
                {/* left side */}
                <div className="md:col-span-4 col-span-1">
                <div className="left-side">
                  <div><h2 className=" text-5xl mb-5">{cards?.eventName}</h2></div>
                  <div><img src={img} className="w-full rounded" alt="" /></div>
                  <div className="flex items-center justify-between gap-4 py-5">
                  <div className="py-3 px-10 bg-neutral shadow-lg flex items-center gap-3">
                  <FaLocationDot></FaLocationDot>
                  <div>
                  <h2 className="text-lg font-semibold">Event Date</h2>
                  <p>{cards?.date}</p>
                  </div>
                  </div>
                  <div className="py-3 px-10 bg-neutral shadow-lg flex items-center gap-3">
                  <FaLocationDot></FaLocationDot>
                  <div>
                  <h2 className="text-lg font-semibold">Event Date</h2>
                  <p>{cards?.date}</p>
                  </div>
                  </div>
                  <div className="py-3 px-10 bg-neutral shadow-lg flex items-center gap-3">
                  <FaLocationDot></FaLocationDot>
                  <div>
                  <h2 className="text-lg font-semibold">Event Date</h2>
                  <p>{cards?.date}</p>
                  </div>
                  </div>
                  </div>
                  {/* descriptions */}
                  <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tenetur est adipisci blanditiis repellendus placeat! Ad corrupti tenetur, libero eius, pariatur doloribus atque quidem incidunt excepturi repellat non quas quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae tempore libero accusantium aliquid, quas architecto dolore minus? Ex eveniet dignissimos, aliquam recusandae at nemo repellat voluptatem dolor reiciendis ipsam eum! </p></div>
                  {/* event timeLine */}
                  <div className="py-5">
                    <h2 className="mb-3 font-medium text-lg">Event Timelines</h2>
                    <div className="flex items-center gap-10">
                      <span className="bg-neutral w-14 p-5 font-semibold rounded-full text-center"> 1</span>
                      <div>
                        <h2 className="font-medium text-lg">Day 1</h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis vel tempora error neque, doloremque totam ex voluptatum deleniti, consectetur molestias nulla provident voluptatem autem amet vitae quo ducimus asperiores.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-10 my-5">
                      <span className="bg-neutral w-14 p-5 font-semibold rounded-full text-center"> 1</span>
                      <div>
                        <h2 className="font-medium text-lg">Day 1</h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis vel tempora error neque, doloremque totam ex voluptatum deleniti, consectetur molestias nulla provident voluptatem autem amet vitae quo ducimus asperiores.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-10">
                      <span className="bg-neutral w-14 p-5 font-semibold rounded-full text-center"> 1</span>
                      <div>
                        <h2 className="font-medium text-lg">Day 1</h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis vel tempora error neque, doloremque totam ex voluptatum deleniti, consectetur molestias nulla provident voluptatem autem amet vitae quo ducimus asperiores.</p>
                      </div>
                    </div>
                  </div>
                  {/* Register now */}
                  <div className="md:p-5 bg-slate-100">
                  <div className="">
                    <h2 className="text-lg font-semibold">Book Your Event👍</h2>
                    <div className="grid grid-cols-3 place-content-center border">
                    <div className="bg-primary">
                      <h2 className="py-4 text-center text-white font-medium">Event Ticket</h2>
                      <div className="bg-white h-[250px] overflow-hidden text-black p-3">
                        <div className="mb-4">
                        <h2>Adult</h2>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                        <h2>Child</h2>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        </div>
                    </div>
                    <div className="bg-primary border-l border-r"><h2 className="py-4 text-center text-white font-medium">Event Ticket</h2>
                    <div className="bg-white h-[250px] text-black p-3">
                    <div className="mb-8 text-center">
                      <h2 className="mb-4">Adult</h2>
                    <span onClick={decrement} className="bg-slate-300 p-3"> - </span>
                    <span className="bg-slate-300 p-3">{count}</span>
                    <span onClick={increment} className="bg-slate-300 p-3">+</span>
                    </div>
                    
                    <div className=" text-center">
                      <h2 className="mb-4">Child</h2>
                    <span onClick={decrement } className="bg-slate-300 p-3"> - </span>
                    <span className="bg-slate-300 p-3">{count}</span>
                    <span onClick={increment } className="bg-slate-300 p-3">+</span>
                    </div>
                      </div>
                    </div>
                    <div className="bg-primary"><h2 className="py-4 text-center text-white font-medium">Event Ticket</h2>
                    <div className="bg-white h-[250px] flex-col items-center text-center text-black p-3">
                    <div className="my-10 font-medium">Price: $5000</div>
                    <hr />
                    <div className="pt-10 font-medium">Price: $3000</div>
                    </div>
                    </div>
                    </div>
                    <div className="bg-primary flex items-center justify-around p-5">
                      <div className="text-white font-medium"><p>Quantity: 0</p></div>
                      <div className="text-white font-medium"><p>Total: 0</p></div>
                      <div><button className="btn"><FaCartPlus></FaCartPlus>Book Now</button></div>
                    </div>
                  </div>
                  {/* evetn FAQ */}
                  <div className="bg-primary p-5 mt-4 font-medium text-white">Event FAQ</div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" /> 
                    <div className="collapse-title text-xl font-medium">
                      How can i book event?
                    </div>
                    <div className="collapse-content"> 
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                      How can i contact you
                    </div>
                    <div className="collapse-content"> 
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                      Click to open this one and close others
                    </div>
                    <div className="collapse-content"> 
                      <p>hello</p>
                    </div>
                  </div>
                  </div>
                  
                </div>
                </div>
                {/* right side */}
                <div className="md:col-span-2 col-span-1 mt-16">
                <div className="bg-neutral p-3">
                  <div>
                    <h2 className="border-b border-b-gray-300 pb-2"><span className="font-semibold">Total Seats:</span> 500 <span className="font-semibold">(500 left)</span></h2>
                    <div className="flex items-center gap-4">
                      <div>
                        <FaLocationDot></FaLocationDot>
                      </div>
                      <div>
                        <span>By: </span> <span className="text-primary">Global Startup EcoSystem </span>
                      </div>
                    </div>
                    <div className="p-4 border-b-gray-600">
                    <div className="flex items-center gap-3 mb-2">
                    <div>
                        <FaCircleArrowRight className=" text-primary"></FaCircleArrowRight>
                    </div>
                     <div>India</div>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                    <div>
                        <FaCircleArrowRight className=" text-primary"></FaCircleArrowRight>
                    </div>
                     <div>India</div>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                    <div>
                        <FaCircleArrowRight className=" text-primary"></FaCircleArrowRight>
                    </div>
                     <div>India</div>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                    <div>
                        <FaCircleArrowRight className=" text-primary"></FaCircleArrowRight>
                    </div>
                     <div>India</div>
                    </div>
                    <div className="flex items-center gap-3 pb-2 ">
                    <div>
                        <FaCircleArrowRight className=" text-primary"></FaCircleArrowRight>
                    </div>
                     <div>India</div>
                    </div>
                    </div>
                    {/* event shedule */}
                    <div className=" border border-b-slate-700 pb-3">
                      <h2 className=" font-semibold border border-t-slate-700 pt-3">Event Shedule Details</h2>
                      <div className="p-3">
                      <div className="flex items-center gap-3">
                        <FaCartPlus></FaCartPlus>
                        <p>March 12 2023 - March 14 2024</p>
                      </div>
                      </div>
                    </div>
                    {/* Share this event */}
                    <div className=" border border-b-slate-700 pb-3">
                      <h2 className=" font-semibold border pt-3">Social Share Event</h2>
                      <div className="p-3">
                      <div className="flex items-center gap-3">
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={40}></FacebookIcon>
                        </FacebookShareButton>
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={40}></FacebookIcon>
                        </FacebookShareButton>
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={40}></FacebookIcon>
                        </FacebookShareButton>
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={40}></FacebookIcon>
                        </FacebookShareButton>
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={40}></FacebookIcon>
                        </FacebookShareButton>
                      </div>
                      </div>
                    </div>
                    {/* add calander  */}
                    <div className="bg-primary p-4 text-center mt-4 font-medium text-white">Add Calender</div>
                  </div>

                </div>
                </div>
              </div>
            </div>
        </div>
        </Container>
    );
};

export default UpcomingDetails;