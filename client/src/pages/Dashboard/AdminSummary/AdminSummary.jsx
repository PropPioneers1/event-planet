import { IoIosPeople } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { TbTicket } from "react-icons/tb";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminSummary = () => {

    const [upComingEvents, setUpComingEvents] = useState([]);
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get("/upcomingevent.json")
            .then(res => {
                console.log(res.data);
                setUpComingEvents(res.data)
            })
    }, [axiosSecure])

    return (
        <div className="">
            {/* Admin summary card */}
            {/* TODO: Make it dynamic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-md hover:bg-primary group transition-all duration-300">
                    <div>
                        <p className="text-3xl font-bold mb-4 group-hover:text-white ">1200+</p>
                        <h2 className="text-xl text-[#707070] font-bold group-hover:text-white ">Total Registration</h2>
                    </div>
                    <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:border">
                        <IoIosPeople className="text-3xl text-primary group-hover:text-white " />
                    </div>
                </div>
                <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-md hover:bg-primary  group transition-all duration-300">
                    <div>
                        <p className="text-3xl font-bold mb-4 group-hover:text-white ">35</p>
                        <h2 className="text-xl text-[#707070] font-bold group-hover:text-white ">Total Events</h2>
                    </div>
                    <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:border">
                        <FaCalendarCheck className="text-3xl text-primary group-hover:text-white " />
                    </div>
                </div>
                <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-md hover:bg-primary group transition-all duration-300">
                    <div>
                        <p className="text-3xl font-bold mb-4 group-hover:text-white ">2500+</p>
                        <h2 className="text-xl text-[#707070] font-bold group-hover:text-white ">Total Ticket Sold</h2>
                    </div>
                    <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:border">
                        <TbTicket className="text-3xl text-primary group-hover:text-white " />
                    </div>
                </div>
            </div>

            {/* Upcoming events */}
            <div className="overflow-x-auto my-12 bg-white p-6 rounded-md">
                <h2 className="text-2xl font-bold text-[#707070] my-6">Upcoming Events</h2>
                <table className="table  ">
                    {/* head */}
                    <thead>
                        <tr className="rounded-none bg-neutral text-lg" >
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Speakers</th>
                            <th>Date</th>
                            <th>Venue</th>
                            <th>Organizer</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold text-base text-[#707070]">
                        {
                            upComingEvents?.map((item, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>
                                    <p className="hover:text-primary">{item?.eventName}</p>
                                </td>
                                <td><div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar placeholder">
                                        <div className="w-12 bg-secondary text-neutral-content">
                                            <span>+99</span>
                                        </div>
                                    </div>
                                </div></td>
                                <td>{item?.date}</td>
                                <td>{item?.venue}</td>
                                <td>{item?.organizerContact.name}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSummary;