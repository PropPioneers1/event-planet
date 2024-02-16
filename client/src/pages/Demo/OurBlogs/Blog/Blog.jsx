import { FaEdit, FaRegBookmark, FaRegComment } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { PropTypes } from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { getDate } from "../../../../utils/getDate";

const Blog = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  // class
  const flexCenter =
    "flex items-center gap-1 text-sm cursor-pointer hover:text-primary";

  const handleOpenDots = () => {
    setIsOpen(!isOpen);
  };

  // delete
  const handleDelete = async () => {
    const id = blog?._id;
    console.log(id);
    const { data } = await axiosSecure.delete(`/blog/${id}`);
    console.log(data);
    if (data.deletedCount) {
      toast.success("Successfully deleted blog");
      // refetch();
    }
  };

  const date = getDate(blog?.postedTimestamp);

  return (
    <div>
      {/* admit info */}
      <div className="flex justify-between mb-5">
        <div className="flex items-center gap-2">
          <img
            src={blog?.user?.userImage}
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <div>
            <h2 className="font-semibold text-lg">{blog?.user?.name}</h2>
            {/* <p className="text-[12px]">
              {day} {month}, {years}
            </p> */}
          </div>
        </div>
        {/* three dots */}
        <div className="relative">
          <BsThreeDotsVertical
            onClick={() => handleOpenDots()}
            className="text-2xl pt-1 cursor-pointer"
          />
          <div
            className={`bg-white list-none  
              shadow-2xl w-40 p-3 absolute right-2 top-10 rounded-tl-[3px] rounded-bl-[3px] rounded-br-[3px] z-10
               flex-col gap-3 py-4 ${isOpen ? "flex" : "hidden"}
               `}
            style={{ boxShadow: "-1px 0px 20px 2px rgba(0,0,0,0.68)" }}
          >
            <div
              className="w-[20px] h-[20px] bg-white absolute right-0 -top-4 "
              style={{
                clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                boxShadow: "-1px 0px 20px 2px rgba(0,0,0,0.68)",
              }}
            ></div>
            <li className={flexCenter}>
              <FaRegBookmark />
              Save
            </li>

            <Link to={`/dashboard/edit-blog/${blog?._id}`}>
              <li className={flexCenter}>
                <FaEdit />
                Edit
              </li>
            </Link>
            <li className={flexCenter} onClick={handleDelete}>
              <MdDelete />
              Delete
            </li>
          </div>
        </div>
      </div>
      {/* image container */}
      <div className="relative">
        <img
          src={blog?.blogImg}
          alt={blog?.category}
          className="w-full h-auto md:h-[450px] object-cover "
        />
        <h4 className="absolute text-xl font-semibold bg-[#ffffffe1] top-10 z-10 py-2 px-3">
          {blog?.category}
        </h4>
      </div>
      {/* content */}
      <div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold py-4 ">
            {blog?.title}
          </h3>
          <p className="text-gray-500">{blog?.post?.slice(0, 200)}..</p>
        </div>

        {/* calender, comment, button */}
        <div className="flex  justify-between items-center  pt-6 pb-10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
            <p className="flex text-lg items-center gap-4 text-black">
              <FaRegCalendar className=" text-primary" /> <span>{date}</span>
            </p>
            <Link to={`/blog-details/${blog?._id}`}>
              <p className="flex text-lg items-center gap-2 cursor-pointer text-black hover:underline underline-offset-4">
                <FaRegComment className=" text-primary" /> <span>Comments</span>
              </p>
            </Link>
          </div>
          <Link to={`/blog-details/${blog?._id}`}>
            <button
              className="px-6 py-2 border border-gray-400 hover:bg-primary hover:text-white hover:border-primary
            transition-all duration-300
           text-lg font-semibold "
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
