import { PropTypes } from "prop-types";
import { getDate } from "../../../../utils/getDate";

const Comment = ({ blog }) => {
  const date = getDate(blog?.commentsTime);

  return (
    <div className=" p-2 mt-2 rounded-md flex gap-2 w-full border border-red-500">
      <img src={blog?.userPhoto} className="w-10 h-10 rounded-full" alt="" />
      <div className="bg-neutral p-2">
        <div>
          <h3 className="text-sm font-semibold">{blog?.userName}</h3>
          <p className="text-[12px]">{date}</p>
        </div>
        <p className="pl-5 text-sm text-slate-700">{blog?.comments}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  blog: PropTypes.object,
};

export default Comment;
