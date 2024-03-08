import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "../../../../components/ui/Container";
import nagad from "../../../../../src/assets/payment-methods-logo/nagad.png";
import bkash from "../../../../../src/assets/payment-methods-logo/bkash.png";
import rokect from "../../../../../src/assets/payment-methods-logo/rocket.png";
import paypal from "../../../../../src/assets/payment-methods-logo/paypal.png";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const CheckOut = () => {
  const { from, ids } = useParams();
  const location = useLocation();
  console.log(location);
  const [isLoading, setIsLoading] = useState(true);
  const [datasfront, setDatasfront] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    if (location.state) {
      setDatasfront(location.state);
      setIsLoading(false);
    }
  }, [location.state]);
  console.log(location.state);
  const orderNumber = () => {
    return Math.ceil(Math.random() * 100000);
  };

  const formattedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.mobile.value;
    const paymentMethod = form.paymentMethod.value;
    const useraddress =
      from === "boking" || from === "shop" ? form.useraddress.value : "";
    console.log(useraddress);

    const data = {
      userName: location?.state?.userName,
      eventImage: location?.state?.eventImage,
      eventTime: location?.state?.eventTime,
      eventDate: location?.state?.eventDate,
      eventLocation: location?.eventLocation,
      mobileNumber: mobile,
      Name: user?.displayName,
      productid: ids,
      cus_email: user.email,
      currency: paymentMethod,
      totalAmount: location?.state?.total_amount,
      paidstatus: "payment pending",
      paymentDate: new Date(),
      paymentdate: formattedDate,
      from: from,
    };

    if (from === "shop") {
      data.productName = datasfront.productName;
    } else {
      data.productName = datasfront.eventName;
    }

    // Add ticketSold or ticketQuantity based on the 'from' value
    if (from === "creation") {
      data.ticketSold = 0;
    } else if (from === "boking") {
      data.ticketQuantity = datasfront?.ticketquantity;
    } else if (from === "shop") {
      data.productQuantity = datasfront.productQuantity;
    }

    console.log(data);
    axiosSecure
      .post("/payment", data)
      .then((response) => {
        console.log(response.data);
        window.location.replace(response.data.url);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      {isLoading ? (
        <div className="mx-auto mt-20 w-[100vw] ">
          <span className="text-5xl loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        datasfront && (
          <div className="py-[100px]">
            <Container>
              <div>
                <h2 className="text-2xl font-semibold">CHECKOUT</h2>
                <p className="my-4">Pay from here</p>
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="col-span-3">Order Number:</th>
                      <th>Date</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{orderNumber()}</th>
                      <td>{formattedDate}</td>
                      <td>{user ? user?.email : "loading ..."}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-8">
                <h3>
                  We use the trustworthy services to process your payments.
                </h3>
                <h1 className="font-medium text-2xl my-5">Order Details</h1>
                <div className="border border-gray-400 px-[.002rem] max-w-[670px] rounded mx-auto pb-5 grid items-center justify-between">
                  <div className="bg-secondary rounded  text-white grid max-w-[670px] grid-cols-2">
                    <div className="col-span-1 border-r-2 p-4 font-medium text-xl">
                      Product
                    </div>
                    <div className="col-span-1 p-4 font-medium text-xl">
                      proceed
                    </div>
                  </div>
                  <div className="grid grid-cols-2 max-w-[670px]">
                    <div className="col-span-1">
                      <div className="border-gray-400 border-r border-b p-4 min-h-[150px]">
                        <div>Date: {formattedDate}</div>
                        <div>
                          Name :
                          {from == "shop"
                            ? datasfront?.productName
                            : datasfront?.eventName}
                        </div>
                        <div>order Number: {orderNumber()}</div>
                        {from === "creation" ? (
                          "This is a new order."
                        ) : from === "boking" ? (
                          <div>
                            ticket Quantity: {datasfront?.ticketquantity}
                          </div>
                        ) : (
                          "Product Quantity: " + datasfront?.productQuantity
                        )}
                      </div>
                      <div className="p-4 border-gray-400 border-r border-b">
                        Total:{datasfront.total_amount}
                      </div>
                      <div className="pl-2">
                        <h1>
                          Contact us at
                          <p className="flex align-middle item-center">
                            <span>proppioneers1@gmail.com</span>
                          </p>
                        </h1>
                        <div className="grid w-96 grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 mt-12"></div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className=" border-gray-400 border-l">
                        <form
                          className="max-w-[300px] p-4"
                          onSubmit={handleSubmit}
                        >
                          {(from === "boking" || from === "shop") && (
                            <input
                              placeholder="Enter your address"
                              type="text"
                              className="appearance-none mb-3 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="useraddress"
                            />
                          )}

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
                              <option>currency</option>
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
                          <div className="flex gap-2 p-2">
                            <img className=" w-14 h-12 " src={bkash} alt="" />
                            <img
                              className="md:w-14 w-8 h-12 "
                              src={nagad}
                              alt=""
                            />
                            <img
                              className=" md:w-12 w-8 h-8 mt-2 "
                              src={rokect}
                              alt=""
                            />
                            <img className=" w-12 h-12 " src={paypal} alt="" />
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
        )
      )}
    </div>
  );
};

export default CheckOut;
