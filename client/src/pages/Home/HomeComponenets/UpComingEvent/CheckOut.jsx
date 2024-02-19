// import React, { useEffect } from "react";
import Container from "../../../../components/ui/Container";
import axiosSecure from "../../../../api";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { useLocation, useParams } from "react-router-dom";
// import axios from "axios";
import nagad from "../../../../../src/assets/payment-methods-logo/nagad.png";
import bkash from "../../../../../src/assets/payment-methods-logo/bkash.png";
import rokect from "../../../../../src/assets/payment-methods-logo/rocket.png";
import paypal from "../../../../../src/assets/payment-methods-logo/paypal.png";

const CheckOut = () => {
  const { user } = useAuth();
  const { ids } = useParams();
  const location = useLocation();
  const { type } = location.state || {};
  
  // Now 'type' should contain the value passed from the previous route

  console.log(ids, user, type);

  const { data: paymentdata, isLoading } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(
          `event/${user?.email}/${ids}`
        );
        return response?.data;
      } catch (error) {
        throw new Error("Error fetching payment data");
      }
    },
  });

  console.log(paymentdata);

  const handlePaymentSubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    const mobile = form.mobile.value;
    const paymentMethod = form.paymentMethod.value;
    const data = {
      mobileNUmber: mobile,
      Name: user?.displayName,
      // productId: 9999999,
      type:type,
      cus_email: user.email,
      currency: paymentMethod,
      totalAmount: paymentdata?.map(name=>name.eventPrice),
      eventName: paymentdata?.map(name=>name.eventName),
      paidstatus: false,
    };
    console.log(data);
    
      axiosSecure.post("/payment", data)
      .then((response) => {
        console.log(response.data);
        window.location.replace(response.data.url);
      })
      .catch((error) => {
        console.error(error.message);
      });
    // http://localhost:5173/payment/success/$%7Btean_id%7D
    console.log(data);
  };
  const orderNumber = () => {
    return Math.ceil(Math.random() * 100000);
  };

  const currentDate = new Date(paymentdata?.eventDate);
  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div>
      {(isLoading ||paymentdata.length===0) ?   (
        <p>Loading...</p>
      ) : (
        paymentdata &&
        paymentdata.map((item, id) => (
          <div key={id} className="py-[100px]">
            <Container>
              <div>
                <h2 className="text-2xl font-semibold">CHECKOUT</h2>
                <p className="my-4">Pay from here</p>
              </div>
              {/* table */}
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className="col-span-4">Order Number:</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>{orderNumber()}</th>
                        <td>{formattedDate}</td>
                        <td>{item.eventPrice}</td>
                        <td>${item.status}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Pay with stripe upon delivery */}
              <div className="my-8">
                <h3>Pay with stripe upon delivery</h3>
                {/* table */}
                <h1 className="font-medium text-2xl my-5">Order Details</h1>
                <div className="border border-gray-400 rounded">
                  <div className="bg-secondary rounded text-white grid grid-cols-4">
                    <div className="col-span-3 border-r-2 p-4 font-medium text-xl">
                      Product
                    </div>
                    <div className="col-span-1 p-4 font-medium text-xl">
                      Total
                    </div>
                  </div>
                  <div className="grid grid-cols-4">
                    <div className="col-span-3">
                      <div className="border-gray-400 border-r border-b p-4 min-h-[150px]">
                        <div>Date: {formattedDate}</div>
                        <div>Location: {item?.totalSeat}</div>
                      </div>
                      <div className="p-4 border-gray-400 border-r border-b">
                        Sub Total
                      </div>
                      <div className="p-4 border-gray-400 border-r border-b">
                        Payment Method 👇
                      </div>
                      <div className="flex items-center justify-center gap-5 mt-12">
                        <img
                          className="border border-gray-400"
                          src={bkash}
                          width={100}
                          alt=""
                        />
                        <img
                          className="border border-gray-400"
                          src={nagad}
                          width={100}
                          alt=""
                        />
                        <img
                          className="border border-gray-400"
                          src={rokect}
                          width={100}
                          alt=""
                        />
                        <img
                          className="border border-gray-400"
                          src={paypal}
                          width={115}
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="min-h-[150px] border-b border-gray-400 p-4 flex items-center">
                        <div>${item?.totalPrice}</div>
                      </div>
                      <div className="p-4 border-b border-gray-400">
                        ${item?.totalPrice}
                      </div>
                      <div className="p-3 border-gray-400 border-l">
                        <form onSubmit={handlePaymentSubmit}>
                          <input
                            placeholder="Enter Your Mobile.."
                            type="text"
                            className="appearance-none mb-3 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="mobile"
                          />
                          <div className="relative">
                            <select
                              name="paymentMethod"
                              className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                              <option>select</option>
                              <option>BDT</option>
                              <option>USD</option>
                              <option>NUR</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                          <button className="mt-3 w-full button">Pay</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckOut;
