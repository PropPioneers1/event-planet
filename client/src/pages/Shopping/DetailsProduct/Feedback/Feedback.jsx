/* eslint-disable react/prop-types */
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


// eslint-disable-next-line react/prop-types
const Feedback = ({feedback}) => {
    const {_id,user_name,rating,date,user_opinion} = feedback;

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
  
    const [yesCount, setYesCount] = useState(0);
    const [noCount, setNoCount] = useState(0);
    const [voted, setVoted] = useState(false);

    const likeDislikeHandler = async (vote) => {
        if (voted) return;
    
        try {
          const sendData = { yes: vote };
    
          const result = await axiosSecure.put(`/feedback/${_id}`, sendData);
          console.log("like",result)
          if (result.data.yesCount !== undefined && result.data.noCount !== undefined) {
            setYesCount(result.data.yesCount);
            setNoCount(result.data.noCount);
            setVoted(true);
          }
        } catch (error) {
          console.error('Error updating vote:', error);
        }
      };
    
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
                <div><p className="text-secondary">{date}</p></div>
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
                    <button onClick={()=>likeDislikeHandler("yes")} className="btn rounded btn-sm">Yes</button>
                    <button onClick={()=>likeDislikeHandler("no")} className="btn rounded btn-sm">No</button>               
                </div>
                
            </div>
            <div className="flex items-center gap-3 my-3">
                <div><img src={user?.photoURL} alt="" /></div>
                <div><img src={user?.photoURL} alt="" /></div>
                <div><img src={user?.photoURL} alt="" /></div>
            </div>
        </div>
    );
};

export default Feedback;