import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';
// import { useEffect} from 'react';
// import useAxiosSecure from '../../../../hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

const MyEventRow = ({ item, idx, ids }) => {
    const date = new Date(item?.startDate).toDateString();
    const time = new Date(item?.startDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    // const axiosSecure = useAxiosSecure();
    // const [newStatus, setNewStatus] = useState('');
console.log(ids,idx);
// useEffect(() => {
//     const checkIfPaid = async () => {
//         try {
//             if (ids) {
//                 const idsArray = ids.split(',');
//                 for (const id of idsArray) {
//                     const response = await axiosSecure.get(`/payment/status/${id}`);
//                     if (response.status === 200) {
//                         const eventData = response.data;
//                         if (eventData && eventData.eventid === id && eventData.paidstatus === 'payment succeed') {
//                             const updateResponse = await axiosSecure.put(`/event/${id}`, { status: 'upcoming' });
//                             console.log(updateResponse);
//                             refetch();
//                         } else {
//                             console.log(`Payment for event with ID ${id} is not successful.`);
//                         }
//                     } else {
//                         console.log(`Error fetching payment status for event with ID ${id}.`);
//                     }
//                 }
//             }
//         } catch (error) {
//             console.error("Error checking registration:", error.message);
//         }
//     };

//     checkIfPaid();
// }, [axiosSecure, ids])

// const { refetch } = useQuery({
//     queryKey: ["userEvents", item?.email],
//     queryFn: async () => {
//         const result = await axiosSecure.get(`/event?email=${item?.email}`);
//         const events = result?.data?.events;
//         return events;
//     },
// });
const navigate = useNavigate();   
const handlenavigate=()=>{
    const datascreate={
        eventid: ids,
      eventName: item.eventName,
      total_amount:item.eventPrice
    }
    navigate(`/checkout/${'creation'}/${ids}`,{state:datascreate})
   }
    return (
        <>
              <tr>
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
                            <img src="https://i.ibb.co/ZMBKBLg/portrait-optimistic-businessman-formalwear.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://i.ibb.co/FYYt0BJ/medium-shot-smiley-woman-with-hijab.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="w-12 bg-secondary text-neutral-content">
                            <span>+2</span>
                        </div>
                    </div>
                </div></td>
                <td>{date}</td>
                <td>{time}</td>
                <td>{item?.venue}</td>
                <td>{item?.status}</td>
                <td>
                    
                        <button onClick={handlenavigate}
                            className={`btn text-white text-base bg-primary ${item?.status !== "unpaid" ? "btn-disabled" : "block"}`}
                            disabled={item?.status !== "unpaid"} // Disable button based on status
                        >
                            Pay to Proceed
                        </button>
                    
                </td>
            </tr>
        </>
    );
};

MyEventRow.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number,
    ids: PropTypes.string
};

export default MyEventRow;
