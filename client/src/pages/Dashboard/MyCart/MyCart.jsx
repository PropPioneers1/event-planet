import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {  useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";


const MyCart = () => {

  const axiosSecure = useAxiosSecure();
  const [quantity, setQuantity] = useState(0);
    const {user}=useAuth()



  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };


  const { data: myCartItem = [] } = useQuery({
    queryKey: ["myCartItems",user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shop/my-cart/${user?.email}`);
      return res.data.result;
    },
  });
 

 

  return (
    <div>
      <section className="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-700">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">
            Your Cart
          </h2>
          <div className="mb-10">
            {myCartItem?.map((cart)=><div key={cart._id} className="relative flex flex-wrap items-center pb-8 mb-8 -mx-4 border-b border-gray-200 dark:border-gray-500 xl:justify-between border-opacity-40">
            
              <div className="w-full mb-4 md:mb-0 h-96 md:h-44 md:w-56">
                <img
                  src={cart.image}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="w-full px-4 mb-6 md:w-96 xl:mb-0">
                <a
                  className="block mb-5 text-xl font-medium dark:text-gray-400 hover:underline"
                  href="#"
                >
                  {cart.title}
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
                    <p className="ml-2 mr-2">{quantity}</p>
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
                <button className="btn  rounded-md bg-primary text-white text-lg">
                  Remove
                </button>
              </div>
              <div className="w-full px-4 xl:w-auto">
                <span className="text-xl font-medium text-pink-500 dark:text-blue-400">
                  <span className="text-sm">$</span>
                  <span>{cart.price * quantity}</span>
                </span>
              </div>
            </div>)}
          </div>
          <div className="mb-10">
            <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
              <div className="flex justify-between dark:text-gray-400">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold ">$145.79</span>
              </div>
            </div>
            <div className="px-10 py-3 rounded-md">
              <div className="flex justify-between dark:text-gray-400">
                <span className="font-medium">Shipping</span>
                <span className="font-bold ">$100.00</span>
              </div>
            </div>
            <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
              <div className="flex justify-between dark:text-gray-400">
                <span className="font-medium">Tax</span>
                <span className="font-bold ">$900.00</span>
              </div>
            </div>
            <div className="px-10 py-3 rounded-full dark:text-gray-400">
              <div className="flex justify-between">
                <span className="text-base font-bold md:text-xl ">
                  Order Total
                </span>
                <span className="font-bold ">$680.99</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Link to='/shopping'><button className="btn  rounded-md bg-primary text-white text-lg">
              Continue Shopping
            </button></Link>
            <button className="btn  rounded-md bg-primary text-white text-lg">
              Go To checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCart;
