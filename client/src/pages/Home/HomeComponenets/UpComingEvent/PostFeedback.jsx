/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { uploadImage } from "../../../../api/utlis";
import { useQuery } from "@tanstack/react-query";

const PostFeedback = ({title,image,id}) => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [textCount, setTextCount] = useState(0);
    const [rating, setRating] = useState();
    const [userOpinion, setUserOpinion] = useState();

     // handle text count
  const handleTextCount = (e) => {
    const textValue = e.target.value;
    setUserOpinion(textValue);
    const count = textValue.length;
    if (count > 500) {
      return toast.error("Besi Latter Not Allow");
    }
    setTextCount(count);
  };
  // handle users feed back:
  // rating change handler
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const { data: progressData,refetch} = useQuery({
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
  console.log(progressData)

  // gat date
  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const handleUsersFeedBack = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imagebb = form.image.files[0];
    const {data} = await uploadImage(imagebb);
    const usersFeedBack = {
      id:id,
      email: user?.email,
      name: user?.displayName,
      product_name: title,
      product_image: image,
      user_image: data?.display_url,
      user_opinion: userOpinion,
      rating: rating,
      date: formattedDate,
      yes:0,
      no:0
    };
    // post feed back
    const result = await axiosSecure.post("/feedback", usersFeedBack);
    if (result?.status === 200) {
      refetch()
      toast.success("Thanks For Your Feedback");
    }
  };
  
    return (
        <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                {/* modal review */}
                <div>
                  <h2 className="text-2xl mb-2 font font-semibold">
                    Rate This Product
                  </h2>
                  <p>Tell others what you think.</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={36}
                      activeColor="#e0218a"
                    />
                  </div>
                  <button
                    className="btn btn-outline btn-secondary"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Give a Review
                  </button>
                </div>

                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <div className="mb-6">
                      <div className="py-2 px-4 mb-4 relative bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        {/*todo:  */}
                        <div className="flex sticky -top-6 bg-white justify-between py-2 items-center shadow">
                          <div className="flex items-center gap-3">
                            <img
                              className="w-14 h-14 rounded-full"
                              src={image}
                              alt=""
                            />
                            <div>
                              <h2 className="font-semibold uppercase text-xl">
                                {" "}
                                {title}{" "}
                              </h2>
                              <p>Rate This Product</p>
                            </div>
                          </div>
                          <div>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-outline btn-secondary ">
                                  X
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>

                        {/* feedback restictions */}
                        <div className="flex gap-3 mt-3">
                          <div>
                            <img
                              className=" w-52 rounded-full"
                              src={user?.photoURL}
                              alt=""
                            />
                          </div>
                          <div>
                            <h2 className="font-semibold text-lg">
                              {" "}
                              {user?.displayName}{" "}
                            </h2>
                            <p>
                              Reviews are public and include your account and
                              device info. Everyone can see your Google Account
                              name and photo, and the type of device associated
                              with your review. Developers can also see your
                              country and device information (such as language,
                              model, and OS version) and may use this
                              information to respond to you. Past edits are
                              visible to users and the app developer unless you
                              delete your review.{" "}
                              <Link className="text-blue-500 underline">
                                Learn More
                              </Link>{" "}
                            </p>
                          </div>
                        </div>
                        {/* get users ratings */}
                        <div className="text-lg font-semibold border-b-2 my-3 text-center w-20 mx-auto">
                          Rate star{" "}
                        </div>

                        {/* todo: */}
                        <form onSubmit={handleUsersFeedBack}>
                          <div className="flex justify-center my-3">
                            <ReactStars
                              onChange={ratingChanged}
                              size={36}
                              activeColor="#e0218a"
                            />
                          </div>
                          <div>
                            <label className="form-control w-full mb-5">
                              <input
                                type="file"
                                name="image"
                                className="file-input file-input-bordered w-full"
                              />
                            </label>
                            <textarea
                              onChange={handleTextCount}
                              className="w-full rounded p-3 border border-slate-400"
                              placeholder="Descrive your opinion (optional)"
                              cols="30"
                              rows="2"
                            ></textarea>
                            <p className="text-right">
                              <span>{textCount}</span>/500
                            </p>
                          </div>
                          <div className="text-right">
                            <button className="btn btn-outline btn-secondary">
                              Post Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </dialog>

                {/* modal end */}
              </div>
    );
};

export default PostFeedback;