import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const SingleCart = ({ cart, setPriceCount, priceCount }) => {
  const [quantity, setQuantity] = useState(0);
  const axiosSecure = useAxiosSecure();
  const {user}=useAuth();
  const [totalPrice, setTotalPrice] = useState(cart?.price || 5);

  // eslint-disable-next-line no-unused-vars
  const { data: singleCart = [], refetch } = useQuery({
    queryKey: ["singleCarts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shop/my-cart/${user?.email}`);
      return res.data.result;
    },
  });

  const handleRemove = (cart) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/shop/my-cart/${user?.email}/${cart._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Product is delete",
              icon: "success",
            });
          }
        });
      }
    });
  };


  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPriceCount((prevPriceCount) => (prevPriceCount) + (cart?.price));
    updateTotalPrice();
  };
  const updateTotalPrice = () => {
    setTotalPrice((cart?.price || 5) * quantity);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    setPriceCount((prevPriceCount) => (prevPriceCount ) - (cart?.price));
  };
  return (
    <div className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
      <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
        <img src={cart?.image} alt="" className="object-cover w-full h-full" />
      </div>

      <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
        <a
          className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline"
          href="#"
        >
          {cart?.title}
        </a>
      </div>
      <div className="w-full px-4 mt-6 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
        <div className="flex items-center">
          <h2 className="mr-4 font-medium dark:text-gray-400">Qty:</h2>
          <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700 ">
            <button
              onClick={decreaseQuantity}
              className="py-2 pr-2 border-r border-gray-300 dark:border-gray-600 dark:text-gray-400 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
              </svg>
            </button>
            <p className="ml-2 mr-2">{quantity +1}</p>
            <button
              onClick={increaseQuantity}
              className="py-2 pl-2 border-l border-gray-300 dark:border-gray-600 hover:text-gray-700 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-4 mb-6 xl:w-auto xl:mb-0 xl:mt-0">
        <button
          onClick={() => handleRemove(cart)}
          className="btn  rounded-md bg-primary text-white text-lg"
        >
          Remove
        </button>
      </div>
      <div className="w-full px-4 xl:w-auto">
        <span className="text-xl font-medium text-pink-500 dark:text-blue-400">
          <span className="text-sm">$</span>

          <span>{totalPrice}</span>
        </span>
      </div>
    </div>
  );
};


export default SingleCart;
