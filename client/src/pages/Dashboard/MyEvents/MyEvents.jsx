import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCalendarAlt } from "react-icons/fa";


const MyEvents = () => {

    const axiosSecure = useAxiosSecure();


    const { data: events } = useQuery({
        queryKey: ["unpaidEvents"],
        queryFn: async () => {
            const result = await axiosSecure.get("/event");
            const events = result?.data?.events;
            const unpaidEvents = events?.filter(item => item?.status === "unpaid");
            return unpaidEvents;
        },
    });

    console.log(events);


    return (
        <div>
             {/* Upcoming events */}
             <div className="  my-12 bg-white p-6 rounded-md">
                <h2
                    className="text-2xl font-bold flex items-center gap-2 text-[#707070] my-6 pb-4 border-b-2">
                    <span className="text-primary">
                        <FaCalendarAlt></FaCalendarAlt>
                    </span>
                   My Events
                </h2>
                <div className="overflow-x-auto max-h-[60vh]  ">
                    <table className="table overflow-y-auto ">
                        {/* head */}
                        <thead>
                            <tr className="rounded-none bg-neutral text-lg" >
                                <th>#</th>
                                <th>Event Name</th>
                                <th>Category</th>
                                <th>Speakers</th>
                                <th>Date</th>
                                <th>Venue</th>
                                <th>Organizer</th>
                            </tr>
                        </thead>
                        <tbody className="font-bold text-base text-[#707070]">
                            {
                                events?.map((item, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <p className="hover:text-primary">{item?.eventName}</p>
                                    </td>
                                    <td>
                                        <p className="hover:text-primary">{item?.category}</p>
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
                                    <td>{item?.startDate}</td>
                                    <td>{item?.venue}</td>
                                    <td>{item?.organization}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEvents;