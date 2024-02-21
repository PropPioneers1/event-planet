
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const MyEventRow = ({ item, idx,ids }) => {
const {user}=useAuth()
    const date = new Date(item?.startDate).toDateString();
    const time = new Date(item?.startDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
console.log(user,'kkkkkkkkkkkk');
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
                <Link 
  to={{
    pathname: `/checkout/${user.email}/${ids}`,
    state: { type: "creation" } // Ensure the type is properly set in the state object
  }}
>
  <button 
    className={`btn text-white text-base bg-primary ${item?.status !== "unpaid" ? "btn-disabled" : "block"}`} 
    disabled={item?.status !== "unpaid"} // Disable button based on status
  > 
    Pay to Proceed
  </button>
</Link>
                </td>
            </tr>
        </>
    );
};

MyEventRow.propTypes = {
    item: PropTypes.object,
    idx: PropTypes.number,
    ids: PropTypes.number
};

export default MyEventRow;