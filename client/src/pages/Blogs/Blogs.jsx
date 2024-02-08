import { useState } from "react";
import Container from "../../components/ui/Container";
import Blog from "./BlogsComponents/Blog";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  // const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  const axiosSecure = useAxiosSecure();
  // const [blogCategory, setBlogCategory] = useState("");

  const { data: blogs, isPending: isBlogLoading, refetch } = useQuery({
    queryKey: ["all-blogs"],
    queryFn: async () => {
      const result = await axiosSecure.get("/blog");
      const blogsData = result?.data;
      console.log(blogsData);
      setAllBlogs(blogsData);

      if (isSearch) {
        const blgs = blogsData?.filter((blog) => blog?.post?.match(isSearch));
        return blgs;
      }
      // if (blogCategory) {
      //   const categoryBlog = blogsData.filter((blog) =>
      //     blog.category.includes(blogCategory)
      //   );
      //   return categoryBlog;
      // }

      return blogsData;
    },
  });

  console.log(allBlogs);

  // get all categories
  // const allCategories = allBlogs?.map((blog) => blog.category);
  // const categories = allCategories?.reduce((prevCategory, currentCategory) => {
  //   if (!prevCategory.includes(currentCategory)) {
  //     prevCategory.push(currentCategory);
  //   }
  //   return prevCategory;
  // }, []);

  // end getting categories

  // const arrayOfTags = [].concat(allBlogs?.map((blog) => blog?.tags));
  // const tags = arrayOfTags.reduce((result, currentArray) => {
  //   return result.concat(currentArray);
  // }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setIsSearch(search);
  };

  return (
    <div className="pb-5 pt-24">
      {isBlogLoading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div className="md:col-span-4 ">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  name="search"
                  className="border border-secondary outline-none py-2 px-4 flex-1 border-r-0"
                />
                <button className=" bg-black font-semibold text-neutral py-2 px-4 border border-secondary focus:bg-secondary">
                  Search
                </button>
              </form>
              {blogs?.map((blog, idx) => (
                <Blog key={idx} blog={blog} refetch={refetch} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Blogs;
