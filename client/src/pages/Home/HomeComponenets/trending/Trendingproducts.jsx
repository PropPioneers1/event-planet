import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./trending.css";
import { FaShopify } from "react-icons/fa";
import Container from "../../../../components/ui/Container";
import Buttonall from "../../../../components/ui/ButtonAll/Buttonall";
const Trendingproducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/trendprod.json")
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []);

  return (
    <div className="shadow-bg bg-neutral mt-10">
      <Container>
        <h2 className="text-3xl font-bold text-center pt-10">
          Trending Products
        </h2>
        <div>
          <p className="text-center mb-10 text-gray-700 text-xl p-8">
            Hello Human! We{`'`}re here to make your special moments even more
            memorable. Explore our curated collection of essential products for
            various events and find the perfect items to elevate your
            experiences.
          </p>
        </div>
      </Container>

      <div className="flex ">
        <div>
        </div>
        <div
          className="slider rounded-r-2xl
          rounded-l-3xl"
        >
          <div className="slide-track gap-5 pb-5">
            {data.concat(data).map((item, index) => (
              <div
                key={index}
                className="slide relative 
              rounded-md 
              h-auto bg-transparent shadow-xl"
              >

                <div className=" relative">
                  <img
                    className="h-[100px] w-full mx-auto object-cover rounded-md"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className=" h-44 w-56 my-auto">
                  <h2
                    className=" text-secondary text-lg
                  text-start my-auto border-slate-300   font-bold mt-4 "
                  >
                    {item.itemName?.slice(0, 20)}
                  </h2>
                  <h2 className="font-bold  border-slate-300  text-slate-500 ">
                    Price :{" "}
                    <span className="text-pink-500 font-bold text-xl">
                      ${item.price}
                    </span>
                  </h2>
                  <h3 className="text-slate-600  border-slate-300 ">
                    {" "}
                    Brand : {item.brandName}
                  </h3>
                  <div className="flex gap-2 pb-4 border-slate-300  ">
                    <p className="text-start  text-slate-700"> Rating :</p>
                    <div className="rating rating-sm mt-1 ">
                      {Array.from({ length: 5 }, (_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${item.id}`}
                          className={`mask mask-star-2 bg-pink-600 
                      ${i < item.rating ? "checked" : ""}`}
                          checked={i < item.rating}
                          readOnly
                        />
                      ))}
                    </div>
                  </div>
                  <Link to="shopping">
                    <button
                      className=" w-full font-semibold py-3 rounded-md transition-all duration-300 ease-in
                    bg-gradient-to-tl from-accent
                    to-accent/70 hover:bg-gradient-to-tr
                   text-white "
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link to="/shopping">
        <Buttonall>
          {" "}
          Visit Our Shop <FaShopify></FaShopify>{" "}
        </Buttonall>
      </Link>
    </div>
  );
};

export default Trendingproducts;
