import bannerImg from "../../assets/banner/banner-bg-6.jpg";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Blog from "./Blog/Blog";
import Container from "./../../components/ui/Container";
import Loader from "../../components/Loader/Loader";

const OurBlogs = () => {
  const axiosSecure = useAxiosSecure();
  const [blogCategory, setBlogCategory] = useState("");
  const [searchBlog, setSearchBlog] = useState("");

  const { data: blogs, isPending } = useQuery({
    queryKey: ["allBlogs", blogCategory, searchBlog],
    queryFn: async () => {
      const result = await axiosSecure.get(`/blog?category=${blogCategory}`);
      if (searchBlog) {
        return result?.data?.filter((blog) => blog?.post?.match(searchBlog));
      }
      return result?.data;
    },
  });

  // all categories
  const categories = [
    "Fashion",
    "Business",
    "Sport",
    "Festival",
    "Innovation Showcase",
    "Education",
  ];

  // search blog
  const handleSearchBlog = (e) => {
    e.preventDefault();
    const blogTitle = e.target.blogTitle.value;
    setSearchBlog(blogTitle);
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <div>
      {/* banner */}
      <div
        className=" h-[40vh] md:h-[50vh] bg-cover bg-no-repeat bg-center
         bg-[#000000b3] bg-blend-overlay flex justify-start
          items-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <Container>
          <div>
            {" "}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
              Blogs Page
            </h2>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-12 my-14 gap-14">
          <div className="col-span-1 md:col-span-8">
            {blogs?.map((blog) => (
              <div key={blog?._id} className="mb-10">
                <Blog blog={blog} isPending={isPending} />
                <hr />
              </div>
            ))}
          </div>
          {/*  */}
          <div className="col-span-1 md:col-span-4">
            {/* search */}
            <form onSubmit={handleSearchBlog} className="flex">
              <input
                type="text"
                placeholder="Search blogs..."
                name="blogTitle"
                className="border bg-neutral font-semibold outline-none py-3 px-4 flex-1 border-r-0"
              />
              <button className=" bg-black font-semibold text-neutral py-2 px-5 border border-secondary focus:bg-secondary">
                Search
              </button>
            </form>
            {/* recent post */}
            <div className="border border-gray-300 mt-8 p-6">
              <h3 className="text-xl font-semibold uppercase">recent posts</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
              </div>
              <div className="mt-5">
                {blogs?.map((blog) => (
                  <div key={blog?._id}>
                    <Link to={`/blog-details/${blog?._id}`}>
                      <h3 className=" font-semibold py-2 cursor-pointer hover:text-accent transition-all duration-200 ">
                        {blog?.title}
                      </h3>
                    </Link>
                    <hr className="py-2" />
                  </div>
                ))}
              </div>
            </div>
            {/* recent category */}
            <div className="border border-gray-300 mt-8 p-6">
              <h3 className="text-xl font-semibold uppercase">Categories</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
                <div className="w-1 h-1 bg-primary"></div>
              </div>
              <div className="mt-5">
                {categories?.map((category, idx) => (
                  <div key={idx}>
                    <h3
                      onClick={() => setBlogCategory(category)}
                      className=" font-semibold py-2 cursor-pointer hover:text-accent transition-all duration-200 "
                    >
                      {category}
                    </h3>
                    <hr className="py-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurBlogs;
