import { useQuery } from "@tanstack/react-query";
import { IoBookmarkSharp } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import Container from "./../../../../components/ui/Container";
import useAxiosSecure from "./../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const OurBlog = () => {
  const axiosSecure = useAxiosSecure();

  const { data: blogs } = useQuery({
    queryKey: ["our-blog"],
    queryFn: async () => {
      const res = await axiosSecure.get("/blog");
      return res?.data;
    },
  });

  return (
    <div>
      <Container>
        {/* title */}
        <div>
          <SectionHeading
            align="text-left"
            title="our Event Blogs"
            normalSubTitleWord="Latest"
            boldSubTitleWord="news"
          />
        </div>
        {/* Blogs */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
          {blogs?.map((blog) => (
            <div
              key={blog?._id}
              className="grid md:grid-cols-2 gap-4  border transition-all duration-300 border-neutral hover:border-[#861f42] rounded-md overflow-hidden"
            >
              {/* image */}
              <div className="relative group">
                <img src={blog?.blogImg} alt="" className="w-full h-full" />
                <div
                  className="absolute w-full h-full z-10 bg-gradient-to-tl cursor-pointer  from-primary  
                  to-[#861f42]   top-0 left-0 grid place-items-center opacity-0 group-hover:opacity-80 transition-all duration-300"
                >
                  {/* <FaPlus className="text-5xl text-white opacity-100" /> */}
                </div>
              </div>

              {/* content */}
              <div className="py-2 pr-2">
                <h3 className="text-lg font-semibold ">
                  {blog?.title?.slice(0, 30)}...
                </h3>
                <h4 className="font-semibold text-primary flex items-center gap-2">
                  <IoBookmarkSharp />
                  {blog?.category} Event
                </h4>
                <p className="py-3">{blog?.post?.slice(0, 100)}...</p>
                <Link to="blogs">
                  <button
                    className="font-semibold text-white bg-gradient-to-tl from-[#861f42]
                      to-primary hover:from-primary  
                      hover:to-[#861f42] py-2 px-5 rounded-md"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* see all btn */}
        <div className="grid place-items-center mt-10">
          <Link to="blogs">
            <button
              className="text-center uppercase font-semibold text-white bg-gradient-to-tl from-[#861f42]
                      to-primary hover:from-primary  
                      hover:to-[#861f42] px-10 py-2 rounded-full"
            >
              See all blog
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OurBlog;
