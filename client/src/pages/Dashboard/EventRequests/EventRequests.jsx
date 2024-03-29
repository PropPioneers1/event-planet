import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "./../../../components/Loader/Loader";
import { toast } from "react-hot-toast";

const EventRequests = () => {
  // const [events, setEvents] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { data: events, isPending, refetch } = useQuery({
    queryKey: ["all-pendingEvents"],
    queryFn: async () => {
      const result = await axiosSecure.get("/event/allevents");
      const pendingEvent = result?.data?.result?.filter(
        (event) => event.status === "pending"
      );
      return pendingEvent;
    },
  });

  console.log(events);

  // This function will reject the event
  const handleReject = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to reject ${item?.eventName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject It!",
    }).then((result) => {
      // updating status of the event
      if (result.isConfirmed) {
        const updateStatus = {
          status: "rejected",
        };

        axiosSecure.put(`/event/${item?._id}`, updateStatus).then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Rejected",
            text: `${item?.eventName} has been rejected`,
            icon: "success",
          });
          refetch();
        });
      }
    });
  };

  // This function will Accept the event
  const handleAccept = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to accept ${item?.eventName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept It!",
    }).then((result) => {
      if (result.isConfirmed) {
        // updating event status
        const updateStatus = {
          status: "unpaid",
        };

        axiosSecure
          .put(`/event/${item?._id}`, updateStatus)
          .then((res) => {
            console.log(res.data);
            if (res?.data?.message === "updated successfully") {
              Swal.fire({
                title: "Accepted!",
                text: `${item?.eventName} has been Accepted`,
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      {/* Upcoming events */}
      <div className="overflow-x-auto bg-white p-6 rounded-md">
        <h2 className="text-2xl font-bold text-[#707070] my-6">
          Event Requests
        </h2>
        <table className="table  ">
          {/* head */}
          <thead>
            <tr className="rounded-none bg-neutral text-lg">
              <th>#</th>
              <th>Event Name</th>
              <th>Speakers</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Organizer</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-bold  text-[#707070]">
            {events?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <p className="hover:text-primary">{item?.eventName}</p>
                </td>
                <td>
                  <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    {item?.speakersImages?.map((image, idx) => (
                      <div key={idx} className="avatar">
                        <div className="w-12">
                          <img src={image} />
                        </div>
                      </div>
                    ))}
                  </div>
                </td>
                <td>{item?.startDate}</td>
                <td>{item?.venue}</td>
                <td>{item?.organization}</td>
                <td>{item?.status}</td>
                <td>
                  <button
                    onClick={() => handleReject(item)}
                    className="btn mr-4"
                  >
                    <RxCross2 size={24} />
                  </button>
                  <button onClick={() => handleAccept(item)} className="btn">
                    <TiTick size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventRequests;
