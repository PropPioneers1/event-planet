/* eslint-disable react/prop-types */
// import useAuth from "../../../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import nullImage from '../../../../assets/image/user.png'

// eslint-disable-next-line react/prop-types
const Feedback = ({feedback,refetch,isPanding}) => {
    const {_id,name,rating,date,user_opinion,yes,user_image,image} = feedback;
    console.log(user_image)
    // const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [like,setDisLike] = useState();

    const likeDislikeHandler = async (vote) => {
        setDisLike(vote)
        try {
            const sendData = { vote }; // Make sure "vote" is added to the request body
            const result = await axiosSecure.put(`/feedback/${_id}`, sendData);
            refetch();
            console.log("like", result);
            // Handle success response if needed
        } catch (error) {
            console.error('Error updating vote:', error);
            // Handle error if needed
        }
    };
    return (
        <div className="border-b pb-5 border-slate-300">
            <div className=" flex items-center gap-3 mb-5 mt-14">
                <div className="flex  items-center gap-4">
                    {
                        image ? <><img src={image} className="rounded-full w-12" alt="" /></> : <><img src={nullImage} className="rounded-full w-12" alt="" /></>
                    }
                    <h3 className=" font-semibold">{name}</h3>
                </div>
               
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
                <div><p className="text-secondary ml-2">{date}</p></div>
            </div>
            <div>
                <p className="text-secondary">{user_opinion}</p>
            </div>
                {
                user_image ? (
                    <>
                    {isPanding ? "loading..":<div className="mt-2 py-2">
                        <img src={user_image} alt="" className="w-28 rounded" />
                    </div>}
                    </>
                ) : (
                    <div className="">
                        Product Image Not Available ☹ 
                    </div>
                )
                }

            <div className="py-3">
                <p className="text-secondary font-medium"> {yes} People found this review helpful.</p>
            </div>
               {
                like ? <> 
            <div className="">
                 <h2 className="font-semibold text-green-800">Thanks for your rection</h2>
            </div></> : <> <div className="flex items-center gap-3">
                <p className="mr-2">Did you find this helpful ?</p>
                <div className="flex items-center gap-3">
                    <button onClick={()=>likeDislikeHandler("yes")} className="bg-transparent py-[2px] px-[18px] border border-[#00000041] hover:bg-[#24242418] rounded-full">Yes</button>
                    <button onClick={()=>likeDislikeHandler("no")} className="bg-transparent py-[2px] px-[20px] border border-[#00000041] hover:bg-[#24242418] rounded-full">No</button>               
                </div> 
            </div></>
               }
        </div>
    );
};

export default Feedback;