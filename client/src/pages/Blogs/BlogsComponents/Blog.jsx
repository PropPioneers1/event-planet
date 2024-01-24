import { PropTypes } from "prop-types";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import BlogComment from "../BlogComment/BlogComment";

const Blog = ({ blog }) => {
  // console.log(blog.user);
  const [isMoreTrue, setIsMoreTrue] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <div className="py-6 border-b">
      <div>
        {/* admit info */}
        <div className="flex items-center gap-2">
          <img
            src={blog?.user?.userImage}
            className="w-10 h-10 rounded-full object-cover"
            alt=""
          />
          <div>
            <h2 className="font-semibold">{blog?.user?.name}</h2>
            <p className="text-[12px]">{blog?.postedTimestamp}</p>
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
              className="h-[380px] w-full object-cover"
              alt=""
            />
          </div>
        )}
        {/* icons */}
        <div
          className={`${
            blog?.blogImage === "" && "pt-3"
          } flex items-center gap-5 `}
        >
          <div className="flex items-center gap-1">
            <FaHeart
              onClick={() => setIsLike(!isLike)}
              className={`${
                isLike ? "text-primary" : "text-secondary"
              } cursor-pointer`}
            />
            <p className="pb-[3px]">{isLike ? blog?.likes + 1 : blog?.likes}</p>
          </div>

          <div
            className="flex items-center gap-1"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaCommentAlt className="text-secondary cursor-pointer" />
            <p className="pb-1">{blog?.comments?.length}</p>
          </div>

          <div className="flex items-center gap-1">
            <IoIosBookmark className="text-secondary cursor-pointer" />
          </div>
        </div>
      </div>
      <BlogComment />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
