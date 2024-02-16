import { PropTypes } from "prop-types";
import { getDate } from "../../../../utils/getDate";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Comment = ({ comment, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const date = getDate(comment?.commentsTime);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [editComment, setEditComment] = useState(comment?.comments);

  // class
  const flexCenter =
    "flex items-center gap-1 text-sm cursor-pointer hover:text-primary";

  const handleCommentDelete = async () => {
    const id = comment?._id;

    const { data } = await axiosSecure.delete(`/likesComments/${id}`);
    console.log(data?.result);
    if (data?.result?.deletedCount) {
      toast.success("Commented deleted");
      refetch();
    }
  };

  const handleEditComment = async () => {
    const id = comment?._id;
    const updatedComment = { editComment };

    const { data } = await axiosSecure.patch(
      `/likesComments/${id}`,
      updatedComment
    );
    if (data?.status === 200) {
      toast.success("Comment updated");
      refetch();
    }
  };

  return (
    <div className=" p-2 mt-2 rounded-md flex gap-2  ">
      <img src={comment?.userPhoto} className="w-10 h-10 rounded-full" alt="" />
      <div className="bg-neutral p-2 w-full">
        <div>
          <div className="flex justify-between">
            {/* user name and comment date */}
            <div>
              <h3 className="text-sm font-semibold">{comment?.userName}</h3>
              <p className="text-[12px]">{date}</p>
            </div>
            {/* dots */}
            <div className="relative">
              <BsThreeDotsVertical
                className="cursor-pointer"
                onClick={() => setIsModalOpen(!isModalOpen)}
              />
              {user && user?.email === comment?.userEmail ? (
                <div
                  className={`bg-white list-none  
              shadow-2xl w-24 p-3 absolute right-2 top-10 rounded-tl-[3px] rounded-bl-[3px] rounded-br-[3px] z-10 
               flex-col gap-3 py-4 ${isModalOpen ? "flex" : "hidden"}
               `}
                  // style={{ boxShadow: "-1px 0px 20px 2px rgba(0,0,0,0.68)" }}
                >
                  <div
                    className="w-[20px] h-[20px] bg-white absolute right-0 -top-4 "
                    style={{
                      clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                      boxShadow: "-1px 0px 20px 2px rgba(0,0,0,0.68)",
                    }}
                  ></div>
                  <li
                    className={flexCenter}
                    onClick={() => {
                      setIsModalOpen(false);
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    <FaEdit />
                    Edit
                  </li>
                  <li className={flexCenter} onClick={handleCommentDelete}>
                    <MdDelete />
                    Delete
                  </li>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="pl-5 text-sm text-slate-700">{comment?.comments}</p>
          <form className=" hidden">
            <input type="text" className="px-4" />
            <button className="bg-secondary text-white font-semibold p-2 w-16 ">
              Edit
            </button>
          </form>
        </div>

        {/* modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <p>Edit Your Comment</p>
            <form method="dialog" className="flex">
              <textarea
                type="text"
                placeholder="Search blogs..."
                name="comment"
                onChange={(e) => setEditComment(e.target.value)}
                defaultValue={editComment}
                className="max-h-14 min-h-14 border bg-neutral font-semibold outline-none py-3 px-4 flex-1 border-r-0"
              />
              <button
                onClick={handleEditComment}
                className=" bg-black font-semibold text-white py-2 px-5 border border-secondary
         focus:bg-secondary"
              >
                Comment
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  refetch: PropTypes.func,
};

export default Comment;
