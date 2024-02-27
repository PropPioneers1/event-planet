import Container from "../../components/ui/Container";
import { FaStar } from "react-icons/fa";
import ShoppingBanner from "./ShoppingBanner/ShoppingBanner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import "./Shop.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Shopping = () => {
  const axiosSecure = useAxiosSecure();
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);

  const { data: shopItem = [] } = useQuery({
    queryKey: ["shopItems", { currentPage, itemsPerPage }],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/shop?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data?.result;
    },
  });

  // get total products
  const { data: totalProductsCount = [] } = useQuery({
    queryKey: ["totalProductsCounts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/shop/totalProducts");
      return res.data.count;
    },
  });

  const numberOfPages = Math.ceil(totalProductsCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];



  return (
    <div>
      <div>
        <ShoppingBanner></ShoppingBanner>
      </div>

      <Container>
        <div>
        <div className="grid mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {shopItem?.map((cart, idx) => (
        <div key={idx} className="hover:shadow-xl transition duration-400 ease-in-out">
          <Link to={`/details-shopCart/${cart._id}`}>
            <div className="border rounded overflow-hidden">
              {/* Assuming 'Card' is a div or a container */}
              <div className=" h-56">
                <img
                  src={cart.image}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-4">
                <h2 className="text-blue-gray font-semibold mb-2">{cart?.title}</h2>
                <div className="flex gap-2">
                  <p className="text-pink-500 text-lg font-bold">${cart?.price}</p>
                  <p>
                    <small
                      style={{
                        textDecoration: "line-through",
                        color: "text-black",
                      }}
                    >
                      $ 200
                    </small>
                  </p>
                </div>
                <p className="flex text-center">
                <FaStar className="mt-1 mr-2 text-yellow-500" /> {cart?.rating} / 5
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
          <div className="flex justify-center gap-2">
            {currentPage !== 0 && (
              <div className="flex flex-row-reverse items-center">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="text-2xl font-semibold text-[#878787] mr-4"
                >
                  Prev
                </button>

                <IoIosArrowBack className="text-2xl font-semibold text-[#878787]" />
              </div>
            )}

            {pages?.map((item, index) => (
              <button
                key={index}
                onClick={() =>setCurrentPage(index)}
                className={`w-10 py-0 font-semibold ${
                  currentPage == index
                    ? "text-2xl font-bold border-b-4 border-primary	"
                    : "text-xl text-[#878787] "
                }`}
              >
                {`${index + 1 <= 9 ? "0" : ""}${index + 1}`}
              </button>
            ))}

            {currentPage !== pages?.length - 1 && (
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="text-2xl font-semibold text-[#878787] ml-4"
                >
                  Next
                </button>
                <IoIosArrowForward className="text-2xl font-semibold text-[#878787]" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shopping;
