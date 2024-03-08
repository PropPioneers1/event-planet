import { IoIosPeople } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";
import { TbTicket } from "react-icons/tb";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCalendarAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import userImg from "../../../assets/image/user.png";
import Loader from "../../../components/Loader/Loader";

const AdminSummary = () => {
  const axiosSecure = useAxiosSecure();

  const { data: events, isPending } = useQuery({
    queryKey: ["all-the-events"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/event/allevents`);
      return result?.data;
    },
  });

  const { data: users } = useQuery({
    queryKey: ["total-user"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result?.data?.result;
    },
  });

  const totalTicketSold = events?.result?.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.ticketSold;
    },
    0
  );
  const allUpcomingEvents = events?.result?.filter(
    (event) => event?.status === "upcoming"
  );

  console.log(allUpcomingEvents);

  if (isPending) {
    return <Loader />;
  }

  //   console.log(soldTickets);

  return (
    <div className="">
      {/* Admin summary card */}
      {/* TODO: Make it dynamic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-md hover:bg-primary group transition-all duration-300">
          <div>
            <p className="text-3xl font-bold mb-4 group-hover:text-white ">
              {users?.length}
            </p>
            <h2 className="text-xl text-[#707070] font-bold group-hover:text-white ">
              Total Registration
            </h2>
          </div>
          <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:border">
            <IoIosPeople className="text-3xl text-primary group-hover:text-white " />
          </div>
        </div>
        <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-md hover:bg-primary  group transition-all duration-300">
          <div>
            <p className="text-3xl font-bold mb-4 group-hover:text-white ">
              {events?.result?.length}
            </p>
            <h2 className="text-xl text-[#707070] font-bold group-hover:text-white ">
              Total Events
            </h2>
          </div>
          <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:border">
            <FaCalendarCheck className="text-3xl text-primary group-hover:text-white " />
          </div>
        </div>
        <div className="flex justify-between items-center p-10 bg-white rounded-lg shadow-md hover:bg-primary group transition-all duration-300">
          <div>
            <p className="text-3xl font-bold mb-4 group-hover:text-white ">
              {totalTicketSold || 0}
            </p>
            <h2 className="text-xl text-[#707070] font-bold group-hover:text-white ">
              Total Ticket Sold
            </h2>
          </div>
          <div className="bg-primary bg-opacity-20 p-4 rounded-full group-hover:border">
            <TbTicket className="text-3xl text-primary group-hover:text-white " />
          </div>
        </div>
      </div>

      {/* Upcoming events */}
      <div className="  my-12 bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-[#707070] my-6 pb-4 border-b-2">
          <span className="text-primary">
            <FaCalendarAlt></FaCalendarAlt>
          </span>
          Upcoming Events
        </h2>
        <div className="overflow-x-auto max-h-[60vh]  ">
          <table className="table overflow-y-auto ">
            {/* head */}
            <thead>
              <tr className="rounded-none bg-neutral text-lg">
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
              {allUpcomingEvents?.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <p className="hover:text-primary">{item?.eventName}</p>
                  </td>
                  <td>
                    <p className="hover:text-primary">{item?.category}</p>
                  </td>
                  <td>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                      {item?.speakersImages?.map((img, idx) => (
                        <div key={idx} className="avatar">
                          <div className="w-12">
                            <img src={img ? img : userImg} alt="" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>{item?.startDate}</td>
                  <td>{item?.venue}</td>
                  <td>{item?.organization}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
