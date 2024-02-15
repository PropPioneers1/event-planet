import useAuth from "../../../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";


// eslint-disable-next-line react/prop-types
const Feedback = ({feedback}) => {
    // eslint-disable-next-line react/prop-types
    const {user_name,rating,feedback_date,user_opinion} = feedback;
    const {user} = useAuth();

    // rating change handler
    return (
        <div className="mb-12">
            <div className=" flex items-center gap-3 mb-4">
                <div>
                    <img src={user?.photoURL} className="rounded-full w-14" alt="" />
                </div>
                <div><h2 className="font-semibold text-lg">{user_name}</h2></div>
            </div>
            <div className=" flex items-center gap-3 mb-2">
                <div>
                <ReactStars
                isHalf={true}
                count={rating}
                size={25}
                edit={false}
                color="#fe019a"
                />
                </div>
                <div><p className="text-secondary">{feedback_date}</p></div>
            </div>
            <div>
                <p className="text-secondary">{user_opinion}</p>
            </div>
            <div className="my-3">
                <p className="text-secondary">103 people found this review helpful</p>
            </div>
            <div className="flex items-center gap-3">
                <p>Did you find this helpful?</p>
                <div className="flex items-center gap-3">
                    <button className="btn rounded btn-sm">Yes</button>
                    <button className="btn rounded btn-sm">No</button>               
                </div>
            </div>

        </div>
    );
};

export default Feedback;