import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const MyEventRow = ({ item, idx, ids }) => {
  const date = new Date(item?.startDate).toDateString();
  const time = new Date(item?.startDate).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const navigate = useNavigate();
  const handlenavigate = () => {
    const datascreate = {
      eventid: ids,
      eventName: item.eventName,
      total_amount: item.eventPrice,
    };
    navigate(`/checkout/${"creation"}/${ids}`, { state: datascreate });
  };

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
        <td>
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            {item?.speakers
              ? item?.speakersImages?.map((speaker, idx) => (
                  <div key={idx} className="avatar">
                    <div className="w-12">
                      <img src={speaker} alt="Speaker" />
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{item?.venue}</td>
        <td>{item?.status}</td>
        <td>
          <button
            onClick={handlenavigate}
            className={`btn text-white text-base bg-primary ${
              item?.status !== "unpaid" ? "btn-disabled" : "block"
            }`}
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
  ids: PropTypes.string,
};

export default MyEventRow;
