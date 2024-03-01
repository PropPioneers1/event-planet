import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SingleCart from "./SingleCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyCart = () => {
  const axiosSecure = useAxiosSecure();
  const [priceCount, setPriceCount] = useState(0);
  const navigate = useNavigate();
  const { user } = useAuth();
  // const [productName, setProductName] = useState("");
  const cartProduct = useSelector((state) => state.cartProduct);
  // const [theProductName, setTheProductName] = useState([]);

  const { data: myCartItem = [], refetch } = useQuery({
    queryKey: ["myCartItems", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shop/my-cart/${user?.email}`);
      return res.data.result;
    },
  });

  useEffect(() => {
    if (myCartItem && myCartItem.length > 0) {
      const initialPriceCount = myCartItem.reduce(
        (sum, cartItem) => sum + cartItem.price * (cartItem.quantity || 1),
        0
      );
      setPriceCount(initialPriceCount);
    }
  }, [myCartItem]);

  // console.log(theProductName);

  const updatePriceCount = (amount) => {
    // Implement logic to update the priceCount in the parent component
    setPriceCount(amount);
  };

  const handlepay = () => {
    const productData = {
      email: user?.email,
      total_amount: priceCount + 25,
      productName: "Cart Products",
      productQuantity: cartProduct,
      from: "shop",
    };
    navigate(`/checkout/${"shop"}/${123}`, { state: productData });
  };

  return (
    <div>
      <section className="items-center py-24 bg-gray-50 font-poppins dark:bg-gray-700">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <h2 className="mb-10 text-4xl font-bold text-center dark:text-gray-400">
            Your Cart
          </h2>
          <div className="mb-10">
            {myCartItem?.map((cart) => {
              return (
                <SingleCart
                  refetch={refetch}
                  updatePriceCount={updatePriceCount}
                  priceCount={priceCount}
                  setPriceCount={setPriceCount}
                  key={cart._id}
                  cart={cart}
                  // setTheProductName={setTheProductName}
                ></SingleCart>
              );
            })}
          </div>
          <div className="mb-10">
            <div className="px-10 py-3 bg-gray-100 rounded-md dark:bg-gray-800">
              <div className="flex justify-between dark:text-gray-400">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold ">${priceCount.toFixed(2)}</span>
              </div>
            </div>
            <div className="px-10 py-3 rounded-md">
              <div className="flex justify-between dark:text-gray-400">
                <span className="font-medium">Shipping</span>
                <span className="font-bold ">${priceCount ? 25 : 0}</span>
              </div>
            </div>

            <div className="px-10 py-3 rounded-full dark:text-gray-400">
              <div className="flex justify-between">
                <span className="text-base font-bold md:text-xl ">
                  Order Total
                </span>
                <span className="font-bold ">
                  ${priceCount ? (priceCount + 25).toFixed(2) : 0}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Link to="/shopping">
              <button className="btn  rounded-md bg-primary text-white text-lg">
                Continue Shopping
              </button>
            </Link>
            <button
              onClick={handlepay}
              className="btn  rounded-md bg-primary text-white text-lg"
            >
              Go To checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyCart;
