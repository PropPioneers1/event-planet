/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Progress from "../../../Shopping/DetailsProduct/Progress/Progress";
import Feedback from "../../../Shopping/DetailsProduct/Feedback/Feedback";

const ShowFeedback = ({title,id}) => {
    const axiosSecure = useAxiosSecure();
    const [showFeedBack,setShowFeedback] = useState(false)
    console.log(showFeedBack)
    // get feedback
  const { data: feedbackData,isPending,refetch } = useQuery({
    queryKey: ["feedbackData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback/${id}`);
      return res?.data?.result;
    },
  });
  const toggleShowAllFeedback = () => {
    setShowFeedback(!showFeedBack)
    
  }
//   get progress data
const { data: progressData} = useQuery({
    queryKey: ["progressData"],
    queryFn: async () => {
      if (title) {
        const res = await axiosSecure.get(`/feedback/${title}/${id}`);
        return res?.data?.result;
        
      }
      // Return null or empty array if title is not defined or falsy
      return null;
    },
  });
//   console.log("get data->",progressData)
  // calculate total rating the specific product 

const [totalRatingStars, setTotalRatingStars] = useState(0);
useEffect(() => {
    calculateTotalRatingStars();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [feedbackData]);

const calculateTotalRatingStars = () => {
    if (!feedbackData || !feedbackData.length) {
        // If feedbackData is not available or empty, set totalRatingStars to 0
        setTotalRatingStars(0);
        return;
    }

    const totalStars = feedbackData.reduce((sum, feedback) => sum + feedback.rating, 0);
    setTotalRatingStars(totalStars);
};
const averageStar = (totalRatingStars / feedbackData?.length).toFixed(1);
const totalStr = (totalRatingStars / feedbackData?.length);
console.log(" star",totalStr)
if(isPending) return <div>loading ...</div>
    return (
        <>
            {/* Show All users feedback here */}
            <div>
                <div className="flex justify-between py-6 items-center mb-2">
                  <div className="text-lg font-semibold flex items-center md:gap-4 gap-2">
                    <h2>Ratings & reviews </h2>
                    <div>
                      <FaArrowRightLong></FaArrowRightLong>
                    </div>
                  </div>
                  {/* modal-> restricted text */}
                  <div>
                    <button
                      className="flex items-center gap-2 py-2 px-3 font-medium bg-neutral"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Rating & Reviews Verified{" "}
                      <MdOutlineInfo></MdOutlineInfo>
                    </button>
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          About ratings and reviews
                        </h3>
                        <p className="py-4">
                          Ratings are based on recent reviews from people in
                          your region who use the same type of device that you
                          use. Reviews are provided by people with a verified
                          Google Account based on their experience with apps
                          they have downloaded.
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn mr-3">Learn More</button>
                            <button className="btn">Got It</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
                {/* todo: */}
                <div className="grid grid-cols-8 gap-5">
                  <div className="md:col-span-2 col-span-3 text-center">
                  <div>
                    {feedbackData?.length > 0 ? (
                      <h2 className="text-5xl font-semibold mb-2">{averageStar}</h2>
                    ) : (
                      <h2 className="text-5xl font-semibold mb-2">0.0</h2>
                    )}
                  </div>
                    <div className="flex justify-center">
                      <ReactStars
                        edit={false}
                        count={4}
                        // onChange={ratingChanged}
                        size={25}
                        color="#fe019a"
                      />
                    </div>
                    {totalRatingStars > 1000 ? (
                    <p>{totalRatingStars / 1000}k Rating Star</p>
                    ) : (
                        <p>{totalRatingStars} Rating Star</p>
                    )}
                    
                  </div>
                  <div className="md:block col-span-1 hidden text-center">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                  </div>
                  <div className="col-span-5">
                    {progressData && progressData.map(rating=><Progress key={rating._id} rating={rating}></Progress>)}
                  </div>
                </div>
                {/* show all users feedback */}

                <div>
                <div className=" py-7">
                {feedbackData &&
                    (showFeedBack ? (
                      <>
                        {feedbackData.map((feedback) => (
                          <Feedback
                            key={feedback._id}
                            feedback={feedback}
                            refetch={refetch}
                          ></Feedback>
                        ))}
                        <button className="text-primary hover:underline mt-4 font-semibold" onClick={toggleShowAllFeedback}>
                          Less Feedback
                        </button>
                      </>
                    ) : (
                      <>
                        {feedbackData.slice(0, 3).map((feedback) => (
                          <Feedback
                            key={feedback._id}
                            feedback={feedback}
                            refetch={refetch}
                          ></Feedback>
                        ))}
                        {feedbackData.length > 3 && (
                          <button className="text-primary hover:underline mt-4 font-semibold" onClick={toggleShowAllFeedback}>More Feedback</button>
                        )}
                      </>
                    ))}
                  </div>
                </div>
            </div>
        </>
    );
};

export default ShowFeedback;