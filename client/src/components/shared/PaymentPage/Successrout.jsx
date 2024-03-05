// import React from 'react';
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Successrout = () => {

    const { tranid } = useParams();
    
    const axiosSecure = useAxiosSecure();

    const { data: paymentData = [], isPending: loading, refetch } = useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${tranid}`)
            return res?.data;
        }
    })

    const allData = paymentData?.result;
    console.log(tranid, paymentData, allData);
    return (
        <div className="h-[80vh] max-w-full flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img className="w-32" src="https://i.ibb.co/L9vB72m/404-tick.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-base font-title">Congratulations your payment is approved !   <br /> Bellow The Summary Of Your Payment !</p>
                    <h1 className="font-bold font-title">Payment Amount History: </h1>
                    <div className="text-lg font-title">
                        <p>Transaction Id: {allData?.total_amount} {allData?.tranid
                        }</p>
                        <p>Total Amount: {allData?.total_amount} {allData?.currency
                        }</p>
                        <p>Your Email    : {allData?.
                            cus_email}</p>
                        <p>Mobile Number: {allData?.
                            mobileNumber
                        }</p>
                        <p>Event Name: {allData?.
                            eventName
                        }</p>
                        {
                            allData?.from==='boking'? <button className='btn'>
                                download</button>:''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Successrout;