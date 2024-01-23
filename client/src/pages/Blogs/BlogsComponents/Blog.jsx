import { PropTypes } from "prop-types";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";

const Blog = ({ blog }) => {
  console.log(blog.user);
  return (
    <div>
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
          <p>{blog?.post.slice(0, 150)}</p>
          {blog?.post.length > 150 && <button>Read more</button>}
        </div>
        {/* icons */}
        <div className="">
          <div className="flex items-center gap-1">
            <FaHeart className="text-red-500" />
            <p>{blog?.likes}</p>
          </div>
          <div className="flex items-center gap-1">
            <FaCommentAlt className="text-secondary" />
            <p>{blog?.comments?.length}</p>
          </div>
          <div className="flex items-center gap-1">
            <IoIosBookmark className="text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
