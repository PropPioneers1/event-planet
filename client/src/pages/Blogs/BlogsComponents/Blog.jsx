import { PropTypes } from "prop-types";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import BlogComment from "../BlogComment/BlogComment";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAuth from "./../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Blog = ({ blog, refetch }) => {
  // console.log(blog.user);
  const [isMoreTrue, setIsMoreTrue] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // months
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const flexCenter =
    "flex items-center gap-1 text-sm cursor-pointer hover:text-primary";

  const handleOpenDots = () => {
    setIsOpen(!isOpen);
  };

  const likeBlog = isLike ? blog?.likes + 1 : blog?.likes;

  // like update
  const handleLike = (id) => {
    const updatedLikes = isLike ? blog.likes - 1 : blog.likes + 1;
    setIsLike(!isLike);

    const userActivity = {
      likes: updatedLikes,
    };

    console.log(userActivity);

    axiosSecure
      .put(`/blog/${id}/likes`, userActivity)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // delete blog
  const handleDelete = async () => {
    const id = blog?._id;
    console.log(id);
    const { data } = await axiosSecure.delete(`/blog/${id}`);
    console.log(data);
    if (data.deletedCount) {
      toast.success("Successfully deleted blog");
      refetch();
    }
  };

  // get date, month, year
  const day = new Date(blog?.postedTimestamp).getDate();
  const month = months[new Date(blog?.postedTimestamp).getMonth()];
  const years = new Date(blog?.postedTimestamp).getFullYear();

  console.log(user?.email);

  return (
    <div className="py-6 border-b">
      <div>
        {/* admit info */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src={blog?.user?.userImage}
              className="w-12 h-12 rounded-full object-cover"
              alt=""
            />
            <div>
              <h2 className="font-semibold">{blog?.user?.name}</h2>
              <p className="text-[12px]">
                {day} {month}, {years}
              </p>
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
              shadow-2xl w-40 p-3 absolute right-2 top-10 rounded-tl-[3px] rounded-bl-[3px] rounded-br-[3px]
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
              {user?.email && user?.email === blog?.user?.email ? (
                <>
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
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* post */}
        <div>
          <p className="pt-3 text-[15px]">
            {isMoreTrue ? blog?.post : blog?.post.slice(0, 150) + "..."}{" "}
            {blog?.post.length > 150 &&
              (!isMoreTrue ? (
                <a
                  onClick={() => setIsMoreTrue(true)}
                  className="font-semibold hover:underline cursor-pointer"
                >
                  Read more
                </a>
              ) : (
                <p
                  className="font-semibold hover:underline cursor-pointer"
                  onClick={() => setIsMoreTrue(false)}
                >
                  See less
                </p>
              ))}
          </p>
        </div>
        {/* image */}
        {blog?.blogImg && (
          <div className="py-3">
            <img
              src={blog?.blogImg}
              className="h-[280px] md:h-[380px] w-full object-cover"
              alt=""
            />
          </div>
        )}
        {/* icons */}
        <div
          className={`${blog?.blogImage === "" &&
            "pt-3"} flex justify-between items-center gap-5 `}
        >
          {/* heart & comment */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaHeart
                onClick={() => {
                  handleLike(blog?._id);
                }}
                className={`${
                  isLike ? "text-red-500" : "text-secondary"
                } cursor-pointer text-xl`}
              />
              <p className="pb-[3px] text-xl">{likeBlog}</p>
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer hover:underline"
              onClick={() =>
                document.getElementById(`my_modal_${blog?._id}`).showModal()
              }
            >
              <FaCommentAlt className="text-secondary text-xl" />
              <p className="pb-1 text-xl">{blog?.comments?.length}</p>
            </div>
          </div>

          {/* save */}
          <div className="">
            <IoIosBookmark className="text-secondary cursor-pointer text-xl" />
          </div>
        </div>
      </div>
      <BlogComment
        blog={blog}
        setIsMoreTrue={setIsMoreTrue}
        isMoreTrue={isMoreTrue}
        setIsLike={setIsLike}
        isLike={isLike}
        refetch={refetch}
      />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  refetch: PropTypes.func,
};

export default Blog;
