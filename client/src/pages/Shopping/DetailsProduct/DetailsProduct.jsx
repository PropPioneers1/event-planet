import { useQuery } from "@tanstack/react-query";
import ReactStars from "react-rating-stars-component";
import { MdOutlineInfo } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import Feedback from "./Feedback/Feedback";
import toast, { Toaster } from "react-hot-toast";
import Progress from "./Progress/Progress";
const DetailsProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [rating, setRating] = useState();
  const [userOpinion, setUserOpinion] = useState();
  const [userImage, setUSerImage] = useState();

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const { data: productDetails, isLoading, isError } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shop/details-shopCart/${id}`);
      return res.data;
    },
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  const { title, image, description, price } = productDetails ? productDetails.result || {} : {};


  const handleAddToCart = (productDetails) => {
    if (user) {
      const { _id, image, title, price } =  productDetails.result;

      const cartItem = {
        email: user.email,
        image,
        title,
        price,
      };
      axiosSecure.post(`/shop/shopCart/${_id}`, cartItem).then((res) => {
        if (res.data) {
          Swal.fire({
            title: `${title} added to your cart`,
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "You are not logged in",
        icon: "error",
      });
    }
  };

 

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
  // get image
  const handleImageChnage = (e) => {
    const image = e.target.files[0];
    setUSerImage(image);
  };
  // gat date
  const currentDate = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const handleUsersFeedBack = async (e) => {
    e.preventDefault();
    const usersFeedBack = {
      id:id,
      email: user?.email,
      name: user?.displayName,
      product_name: title,
      product_image: image,
      user_image: userImage,
      user_opinion: userOpinion,
      rating: rating,
      date: formattedDate,
    };
    // post feed back
    const result = await axiosSecure.post("/feedback", usersFeedBack);
    if (result?.status === 200) {
      refetch()
      toast.success("Thanks For Your Feedback");
    }
    console.log(result)
  };

  

const { data: feedbackData,refetch } = useQuery({
  queryKey: ["feedbackData"],
  queryFn: async () => {
    const res = await axiosSecure.get(`/feedback/${id}`);
    return res?.data?.result;
    
  },
});

 if(isLoading) return <span className="loading loading-infinity loading-lg"></span>
 if(isError) return <div>loading..</div>
  return (
    
    <section className="py-10 mt-14 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-96">
                <a
                  className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                </a>
                <img
                  className="object-contain w-full lg:h-full"
                  src={image}
                  alt=""
                />
                <a
                  className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-wrap hidden -mx-2 md:flex">
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-pink-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src={image}
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-pink-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src={image}
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-pink-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src={image}
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-1/2 p-2 sm:w-1/4">
                  <a
                    className="block border border-gray-200 hover:border-pink-400 dark:border-gray-700 dark:hover:border-blue-300"
                    href="#"
                  >
                    <img
                      className="object-contain w-full lg:h-28"
                      src={image}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* left side end  */}
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
                  <div className="col-span-2 border text-center">
                    <h2 className="text-5xl font-semibold mb-2">4.2</h2>
                    <div className="flex justify-center">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={25}
                        activeColor="#e0218a"
                      />
                    </div>
                    <p> 12k rating star</p>
                  </div>
                  <div className="col-span-1 border text-center">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                  </div>
                  <div className="col-span-5 border">
                    {feedbackData && feedbackData.map(rating=><Progress key={rating._id} rating={rating}></Progress>)}
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
                        ></Feedback>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <span className="px-2.5 py-0.5 text-xs  text-pink-600  dark:bg-gray-700 rounded-xl dark:text-gray-200">
                  New Arrival
                </span>
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                  {title}
                </h2>
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <Link
                    className="mb-4 text-xs underline hover:text-pink-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                    to="/shopping"
                  >
                    View the store
                  </Link>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  <span>$ {price}</span>
                  <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                    $ 200.00
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                  Details Of Product :
                </h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <div className="p-3 lg:p-5 ">
                    <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                        {description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    ,
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
                        <div className="flex sticky -top-5 bg-white justify-between py-2 items-center">
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
                        <div className="text-lg font-semibold border-b-2 my-3 text-center">
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
                            ,
                          </div>
                          <div>
                            <label className="form-control w-full mb-5">
                              <input
                                onChange={handleImageChnage}
                                type="file"
                                className="file-input file-input-bordered w-full"
                              />
                            </label>
                            <textarea
                              onChange={handleTextCount}
                              className="w-full rounded p-3 border border-secondary"
                              placeholder="Descrive Your Opinion.."
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
                <br />
                <span className="text-base text-gray-600 dark:text-gray-400">
                  In Stock
                </span>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                  Ships from china.
                  <span className="text-gray-600 dark:text-gray-400">
                    Most customers receive within 3-31 days.
                  </span>
                </p>
              </div>
              <div className="mb-6 "></div>
              <div className="flex flex-wrap items-center mb-6">
                <div className="mb-4 mr-4 lg:mb-0">
                  <div className="w-28">
                    <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                        <button
                          className="m-auto text-2xl font-thin"
                          onClick={handleDecreaseQuantity}
                        >
                          -
                        </button>
                      </button>
                      <p className="text-center py-2 items-center w-full font-semibold bg-gray-100 dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black">
                        {quantity}
                      </p>
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                        <button
                          className="m-auto text-2xl font-thin"
                          onClick={handleIncreaseQuantity}
                        >
                          +
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 lg:mb-0">
                  <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-pink-600 hover:border-blue-600 dark:bg-pink-600 dark:hover:bg-pink-600 dark:hover:border-pink-500 dark:hover:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className=" bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(productDetails)}
                  className="w-full btn btn-outline btn-secondary lg:w-1/2 rounded-xl"
                >
                  Add to cart
                </button>
              </div>
              <div className="flex gap-4 mb-6">
                <a href="#" className="btn w-full btn-outline btn-secondary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default DetailsProduct;
