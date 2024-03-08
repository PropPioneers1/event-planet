// import React from 'react';
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Loader/Loader";
import { useDispatch } from "react-redux";
import { resetCart } from "./../../../redux/actions/actions";
const Successrout = () => {
  const { tranid } = useParams();

  const axiosSecure = useAxiosSecure();
  const dispatch = useDispatch();

  const { data: paymentData = [], isPending: loading } = useQuery({
    queryKey: ["paymentData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${tranid}`);
      return res?.data;
    },
  });

  const allData = paymentData?.result;

  if (loading) {
    return <Loader />;
  }

  if (allData?.from === "shop") {
    localStorage.removeItem("cartProduct");
    dispatch(resetCart());
  }

  return (
    <div className="min-h-screen max-w-full flex justify-center items-center lg:pt-20 pt-10">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img
            className="w-32"
            src="https://i.ibb.co/L9vB72m/404-tick.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p className="text-base font-title">
            Congratulations your payment is approved ! <br /> Bellow The Summary
            Of Your Payment !
          </p>
          <h1 className="font-bold font-title">Payment Amount History: </h1>

          <div className="text-lg font-title">
            <p>Event Name: {allData?.productName}</p>
            <p>Transaction Id: {tranid}</p>
            <p>
              Total Amount: {allData?.total_amount} {allData?.currency}
            </p>
            <p>Your Email : {allData?.cus_email}</p>
            <p>Mobile Number: {allData?.mobileNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Successrout;
