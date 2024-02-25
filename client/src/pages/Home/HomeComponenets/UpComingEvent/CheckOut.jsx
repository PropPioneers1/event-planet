// import React, { useEffect } from "react";
import Container from "../../../../components/ui/Container";
import axiosSecure from "../../../../api";
import useAuth from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";
// import axios from "axios";
import nagad from "../../../../../src/assets/payment-methods-logo/nagad.png";
import bkash from "../../../../../src/assets/payment-methods-logo/bkash.png";
import rokect from "../../../../../src/assets/payment-methods-logo/rocket.png";
import paypal from "../../../../../src/assets/payment-methods-logo/paypal.png";
import { useEffect, useState } from "react";
// import { FaEnvelope } from "react-icons/fa";

const CheckOut = () => {
  const { user } = useAuth();
  const { ids ,from} = useParams();
  const [paymentdata, setPaymentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  console.log(params);

  console.log(ids,from);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (from === "creation") {
          response = await axiosSecure.get(`event/${ids}`);
        } else if (from === "boking") {
          response = await axiosSecure.get(`ticketpay/${ids}`);
        } else {
          throw new Error("Invalid value for 'from' parameter");
        }
        setPaymentData(response?.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching payment data:", error.message);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup code if needed
    };
  }, [ids, from]);

  console.log(paymentdata,'hello');
  const currentDate = new Date();


  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.mobile.value;
    const paymentMethod = form.paymentMethod.value;
    const useraddress = from === "boking" ? form.useraddress.value : "";
    console.log(useraddress);
  

   if(from==="creation"){
    const data = {
      mobileNUmber: mobile,
      Name: user?.displayName,
      eventid:ids,
      cus_email: user.email,
      currency: paymentMethod,
      totalAmount: paymentdata.eventPrice,
      eventName: paymentdata.eventName,
      paidstatus: false,
      paymentdate: formattedDate,
      // eventid:paymentdata._id,
      from:from,
    };
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
    console.log(data);}

else if(from==='boking'){
const datas={
  
userAddres: useraddress,
mobileNUmber:mobile,
from:'booking',
paymentDate:formattedDate,
currency:paymentMethod,
tran_id:paymentdata.result.tran_id,
eventName:paymentdata.result.eventName,
cus_email:user?.email,
username:user?.displayName,
total_amount:paymentdata.result.total_amount,

}
axiosSecure
.post("/ticketpay/paymentticket", datas)
.then((response) => {
  console.log(response.data);
  window.location.replace(response.data.url);
})
.catch((error) => {
  console.error(error.message);
});
console.log(datas)
}

  };
  const orderNumber = () => {
    return Math.ceil(Math.random() * 100000);
  };

  console.log(formattedDate);
 
  return (
    <div>
      {isLoading ? (
        <div className="mx-auto mt-20 w-[100vw] ">
          <span className="text-5xl loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        paymentdata && (
          <div className="py-[100px]">
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
                        <th className="col-span-3">Order Number:</th>
                        <th>Date</th>
                        <th>Email</th>
                        {/* <th>From</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>{orderNumber()}</th>
                        <td>{formattedDate}</td>
                        <td>{user ? user.email : "loading ..."}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Pay with stripe upon delivery */}
              <div className="my-8">
                <h3>
                  We use the trustworthy services to process your payments.
                </h3>
                {/* table */}
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
                        <div>Event Name: {from =='creation'? paymentdata.eventName:paymentdata?.result.eventName}</div>
                        <div>order Number: {orderNumber()}</div>
                      
                        {
  from === 'creation' ? (
    <div>total ticket: {paymentdata.totalSeat }</div>
  ) : ( <div>ticket Quantity: {paymentdata?.result.ticketquantity}</div>)}

                      </div>

                      <div className="p-4 border-gray-400 border-r border-b">
                        total :{from==="boking"?paymentdata.result.total_amount : paymentdata.eventPrice}
                      </div>
                      <div className="pl-2">
                        <h1>
                           
                          contact us at
                          <p className="flex align-middle item-center">
                            <span>proppioneers1@gmail.com</span>
                          </p>
                        </h1>
                        <div className="grid w-96 grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 mt-12"></div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div
                        className=" border-gray-400 border-l
                      "
                      >
                        <form
                          className=" max-w-[300px] p-4"
                          onSubmit={handlePaymentSubmit}
                        >
                      {from === 'boking' && (
  <input
    placeholder="enter your address"
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
                            <img
                              className=" w-14 h-12 "
                              src={bkash}
                              //  width={100}
                              alt=""
                            />
                            <img
                              className="md:w-14 w-8 h-12 "
                              src={nagad}
                              //  width={100}
                              alt=""
                            />
                            <img
                              className=" md:w-12 w-8 h-8 mt-2 "
                              src={rokect}
                              //  width={100}
                              alt=""
                            />
                            <img
                              className=" w-12 h-12 "
                              src={paypal}
                              //  width={115}
                              alt=""
                            />
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
