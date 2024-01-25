import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import axios from "axios";
import Blog from "./BlogsComponents/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [isSearch, setIsSearch] = useState("");
  useEffect(() => {
    axios
      .get("./blogs.json")
      .then((res) => {
        setAllBlogs(res?.data);
        if (isSearch) {
          const result = res?.data?.filter((blog) => blog.post.match(isSearch));
          return setBlogs(result);
        }
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, [isSearch]);

  const categories = allBlogs?.map((blog) => blog.category);

  const arrayOfTags = [].concat(allBlogs?.map((blog) => blog?.tags));
  const tags = arrayOfTags.reduce((result, currentArray) => {
    return result.concat(currentArray);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setIsSearch(search);
  };

  return (
    <div className="pb-5 pt-24">
      <Container>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block lg:col-span-1  ">
            {/* blogs */}
            <div className="fixed">
              <h2 className="font-lora text-3xl font-bold pb-5">Blogs</h2>
              {/* Categories */}
              <div className="grid gap-1">
                {categories?.map((category, idx) => (
                  <button
                    key={idx}
                    className="border-2 border-secondary rounded-[3px] px-5 py-2 "
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:px-5">
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
              <Blog key={idx} blog={blog} />
            ))}
          </div>
          <div className="md:col-span-1 hidden md:block">
            <div className="fixed px-4">
              <h2 className="font-lora text-3xl font-bold pb-5">Tags</h2>
              <div className="flex flex-wrap gap-1">
                {tags?.map((tag, idx) => (
                  <button
                    key={idx}
                    className="border-2 border-secondary px-2 rounded-[3px] text-sm font-semibold"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
