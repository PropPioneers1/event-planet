import bannerImg from "../../../assets/banner/banner-bg-6.jpg";
import Container from "../../../components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Blog from "./Blog/Blog";

const OurBlogs = () => {
  const axiosSecure = useAxiosSecure();

  const { data: blogs } = useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const result = await axiosSecure.get("/blog");
      return result?.data;
    },
  });

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
        <div className="grid grid-cols-12 my-14 gap-14">
          <div className="col-span-8">
            {blogs?.map((blog) => (
              <div key={blog?._id} className="mb-10">
                <Blog blog={blog} />
                <hr />
              </div>
            ))}
          </div>
          {/*  */}
          <div className="col-span-4">
            {/* search */}
            <form className="flex">
              <input
                type="text"
                placeholder="Search blogs..."
                name="search"
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
                    <h3 className=" font-semibold py-2 cursor-pointer hover:text-accent transition-all duration-200 ">
                      {blog?.title}
                    </h3>
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
                {blogs?.map((blog) => (
                  <div key={blog?._id}>
                    <h3 className=" font-semibold py-2 cursor-pointer hover:text-accent transition-all duration-200 ">
                      {blog?.category}
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
