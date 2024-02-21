import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const CommentForm = ({ blogId, refetch }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleComment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const comment = form.comment.value;

    const userComment = {
      blogId,
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      isLiked: false,
      likesTime: "",
      comments: comment,
      commentsTime: new Date(),
    };

    if (!user) {
      return navigate("/sign-up");
    }

    const postingComment = await axiosSecure.post(
      "/likesComments",
      userComment
    );

    // if(postingComment)
    if (postingComment.status === 201) {
      toast.success("commented");
      refetch();
      form.reset();
    }
  };

  return (
    <form
      onSubmit={handleComment}
      className="flex flex-col lg:flex-row gap-4 lg:gap-0"
    >
      <textarea
        type="text"
        placeholder="Search blogs..."
        name="comment"
        className="max-h-14 min-h-14 border bg-neutral font-semibold outline-none py-3 px-4 flex-1 border-r-0"
      />
      <button
        className=" bg-black font-semibold text-white py-2 px-5 border border-secondary
         focus:bg-secondary"
      >
        Comment
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  blogId: PropTypes.string,
  refetch: PropTypes.func,
};

export default CommentForm;
