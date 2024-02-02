import { PropTypes } from "prop-types";
import { FaCommentAlt, FaHeart } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BlogComment = ({
  blog,
  setIsMoreTrue,
  isMoreTrue,
  setIsLike,
  isLike,
  refetch,
}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const userComment = form.comment.value;

    const usersComment = {
      name: user?.displayName,
      email: user?.email,
      userImage: user?.photoURL,
      comment: userComment,
      timestamp: new Date(),
    };

    axiosSecure
      .put(`/blog/${blog?._id}/comments`, usersComment)
      .then((res) => {
        if (res?.data?.status === 200) {
          console.log(res.data);
          refetch();
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <dialog id={`my_modal_${blog?._id}`} className="modal bg-[#eeeeee5b]">
        <div className="modal-box px-0 py-0  rounded-md  relative">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="px-3 py-5">
            <div>
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
                    className="h-[280px] md:h-[380px] w-full object-cover"
                    alt=""
                  />
                </div>
              )}
              {/* icons */}
              <div
                className={`${blog?.blogImage === "" &&
                  "pt-3"} flex items-center gap-5 `}
              >
                <div className="flex items-center gap-1">
                  <FaHeart
                    onClick={() => setIsLike(!isLike)}
                    className={`${
                      isLike ? "text-primary" : "text-secondary"
                    } cursor-pointer`}
                  />
                  <p className="pb-[3px]">
                    {isLike ? blog?.likes + 1 : blog?.likes}
                  </p>
                </div>

                <div
                  className="flex items-center gap-1 cursor-pointer hover:underline"
                  onClick={() =>
                    document.getElementById(`my_modal_${blog?._id}`).showModal()
                  }
                >
                  <FaCommentAlt className="text-secondary" />
                  <p className="pb-1">{blog?.comments?.length}</p>
                </div>

                <div className="flex items-center gap-1">
                  <IoIosBookmark className="text-secondary cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              {blog?.comments?.map((comment, idx) => (
                <div
                  key={idx}
                  className="bg-neutral p-2 mt-2 rounded-md flex gap-2"
                >
                  <img
                    src={comment?.userImage}
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <div>
                      <h3 className="text-sm font-semibold">{comment?.name}</h3>
                      <p className="text-[12px]">{comment?.timestamp}</p>
                    </div>
                    <p className="pl-5 text-sm text-slate-700">
                      {comment?.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-neutral shadow-md sticky -left-5 -bottom-5 w-full h-16 px-2">
            <form onSubmit={handleComment} className="flex border-2 pt-2">
              <textarea
                type="text"
                placeholder="Add your comment"
                className="border flex-1 outline-none py-2 px-2 md:py-2 md:px-4 h-10"
                name="comment"
              />
              <button className=" bg-black text-sm md:text-base font-semibold text-neutral py-1 px-2 md:py-2 md:px-4 border border-secondary focus:bg-secondary">
                Comment
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

BlogComment.propTypes = {
  blog: PropTypes.object,
  setIsMoreTrue: PropTypes.func,
  isMoreTrue: PropTypes.bool,
  setIsLike: PropTypes.func,
  isLike: PropTypes.bool,
  refetch: PropTypes.func,
};

export default BlogComment;
