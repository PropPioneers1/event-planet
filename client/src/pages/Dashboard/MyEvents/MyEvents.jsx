import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCalendarAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import MyEventRow from "./MyEventRow/MyEventRow";


const MyEvents = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
 

    const { data: events } = useQuery({
        queryKey: ["userEvents",user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/event?email=${user?.email}`);
            console.log(result)
            const events = result?.data?.events;
            return events;
        },
    });

    console.log(events);


    return (
        <div>
             {/* Upcoming events */}
             <div className=" bg-white p-6 rounded-md">
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
                                <th>Time</th>
                                <th>Venue</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=" text-base font-medium text-[#707070]">
                            {
                                events?.map((item, idx) => <MyEventRow 
                                key={item?._id} 
                                item={item}
                                ids={item?._id} 
                                idx={idx}>
                                   

                                </MyEventRow> )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEvents;