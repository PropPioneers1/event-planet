import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../../hooks/useAxiosSecure";
import Container from "../../../../components/ui/Container";
import bannerImg from "../../../../assets/banner/banner-bg-6.jpg";
import { useState } from "react";
import Comment from "../Comment/Comment";
import CommentForm from "../Comment/CommentForm";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit, FaRegBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { getDate } from "../../../../utils/getDate";
import useAuth from "../../../../hooks/useAuth";

const BlogDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [isSeeAllComments, setIsSeeAllComments] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: blog = {}, isPending: isBlogPending } = useQuery({
    queryKey: ["blog-details"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/blog/${id}`);
      return result?.data;
    },
  });

  // class
  const flexCenter =
    "flex items-center gap-1 text-sm cursor-pointer hover:text-primary";

  // calling data for showing comment
  const { data: blogPost, refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/likesComments/${id}`);
      return result?.data;
    },
  });

  if (isBlogPending) {
    return <div>LOading</div>;
  }

  // delete blog
  const handleDelete = async () => {
    const id = blog?._id;
    console.log(id);
    const { data } = await axiosSecure.delete(`/blog/${id}`);
    console.log(data);
    if (data.deletedCount) {
      toast.success("Successfully deleted blog");
      navigate(-1);
    }
  };

  const date = getDate(blog?.postedTimestamp);

  return (
    <div>
      {/* banner */}
      <div
        className=" h-[50vh] bg-cover bg-no-repeat bg-center
      bg-[#000000b3] bg-blend-overlay flex justify-start
       items-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <Container>
          <div>
            {" "}
            <h2 className="text-7xl font-bold text-white">Blogs Page</h2>
          </div>
        </Container>
      </div>
      <Container>
        <div className=" grid grid-cols-1 lg:grid-cols-12 my-14 gap-14">
          {/* side-1 */}
          <div className="col-span-1 lg:col-span-8">
            {/* image container */}
            <div className="relative -top-24 p-5 bg-neutral">
              <img
                src={blog?.blogImg}
                alt={blog?.category}
                className="w-full h-[280px] md:h-[450px] object-cover "
              />
              <h4 className="absolute text-xl font-semibold bg-[#ffffffe1] top-10 z-10 py-2 px-3">
                {blog?.category}
              </h4>
            </div>

            <div className="-mt-14">
              {/* admit info */}
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={blog?.user?.userImage}
                    className="w-12 h-12 rounded-full object-cover"
                    alt=""
                  />
                  <div>
                    <h2 className="font-semibold text-lg">
                      {blog?.user?.name}
                    </h2>
                    <p className="text-[12px]">{date}</p>
                  </div>
                </div>
                {/* three dots */}
                <div className="relative">
                  <BsThreeDotsVertical
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="text-2xl pt-1 cursor-pointer"
                  />
                  <div
                    className={`bg-white list-none  
          shadow-2xl w-40 p-3 absolute right-2 top-10 rounded-tl-[3px] rounded-bl-[3px] rounded-br-[3px]
           flex-col gap-3 py-4 ${isModalOpen ? "flex" : "hidden"}
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
                    {/* conditioning with user */}
                    {user && user?.email === blog?.user?.email ? (
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

              {/* content */}
              <div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold py-4 ">
                    {blog?.title}
                  </h3>
                  <p className="text-gray-700">{blog?.post}</p>
                </div>
              </div>
            </div>
          </div>

          {/* side-2 */}
          <div className="col-span-1 lg:col-span-4 ">
            <div className="border border-gray-300 mt-8 p-6 max-h-[500px] overflow-y-auto relative">
              <h3 className="text-xl font-semibold uppercase">comments</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
              </div>

              {/* comments */}
              <div>
                {blogPost
                  ?.slice(0, isSeeAllComments ? blogPost?.length : 4)
                  .map((comment, idx) => (
                    <Comment key={idx} comment={comment} refetch={refetch} />
                  ))}

                {/* conditioning for see all comment and see less comment */}
                {blogPost?.length > 4 ? (
                  isSeeAllComments ? (
                    <p
                      onClick={() => setIsSeeAllComments(false)}
                      className="pl-2 cursor-pointer font-semibold text-secondary underline"
                    >
                      See less
                    </p>
                  ) : (
                    <p
                      onClick={() => setIsSeeAllComments(true)}
                      className="pl-2 cursor-pointer font-semibold text-secondary underline"
                    >
                      See all comments
                    </p>
                  )
                ) : (
                  ""
                )}
                {/* form for comment */}
                <div className="mt-5 sticky bottom-0 ">
                  <CommentForm blogId={id} refetch={refetch} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
