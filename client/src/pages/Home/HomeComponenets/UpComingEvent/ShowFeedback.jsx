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

    // get feedback
  const { data: feedbackData,refetch } = useQuery({
    queryKey: ["feedbackData"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback/${id}`);
      return res?.data?.result;
      
    },
  });
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
    return (
        <>
            {/* Show All users feedback here */}
            <div>
                <div className="flex justify-between py-6 items-center mb-2">
                  <div className="text-lg font-semibold flex items-center gap-4">
                    <h2>Ratings and reviews </h2>
                    <div>
                      <FaArrowRightLong></FaArrowRightLong>
                    </div>
                  </div>
                  {/* modal-> restricted text */}
                  <div>
                    <button
                      className="flex items-center btn"
                      onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                      }
                    >
                      Rating And Reviews Verified{" "}
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
                  <div className="col-span-2 text-center">
                    <h2 className="text-5xl font-semibold mb-2"> {averageStar} </h2>
                    <div className="flex justify-center">
                      <ReactStars
                        edit={false}
                        count={5}
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
                  <div className="col-span-1 text-center">
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
                      feedbackData.map((feedback) => (
                        <Feedback
                          key={feedback._id}
                          feedback={feedback}
                          refetch={refetch}
                        ></Feedback>
                      ))}
                  </div>
                </div>
            </div>
        </>
    );
};

export default ShowFeedback;